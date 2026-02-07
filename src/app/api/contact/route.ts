import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { RateLimiterMemory } from "rate-limiter-flexible";
import sanitizeHtml from "sanitize-html";
import { z } from "zod";
import env from "@/env.mjs";

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.email(),
  subject: z.string().min(1).max(100),
  message: z.string().min(1).max(1000),
  company: z.string().optional(),
});

const rateLimiter = new RateLimiterMemory({
  points: 3,
  duration: 60,
});

async function sendSlackMessage(payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (!env.SLACK_WEBHOOK_URL) {
    return;
  }

  const text =
    `*New portfolio contact*\n` +
    `*Name:* ${payload.name}\n` +
    `*Email:* ${payload.email}\n` +
    `*Subject:* ${payload.subject}\n` +
    `*Message:*\n${payload.message}`;

  const res = await fetch(env.SLACK_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    throw new Error(`Slack webhook failed: ${res.status} ${res.statusText}`);
  }
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "unknown";

  try {
    await rateLimiter.consume(ip);
    const body = await request.json();

    if (body.company) {
      return NextResponse.json({ message: "Bot detected" }, { status: 400 });
    }

    const { name, email, subject, message } = contactSchema.parse(body);

    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedSubject = sanitizeHtml(subject);
    const sanitizedMessage = sanitizeHtml(message);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: env.SMTP_EMAIL,
        pass: env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: env.SMTP_EMAIL,
      replyTo: sanitizedEmail,
      to: env.SMTP_EMAIL,
      subject: `Contact: ${sanitizedSubject}`,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nMessage: ${sanitizedMessage}`,
    };

    await transporter.sendMail(mailOptions);

    try {
      await sendSlackMessage({
        name: sanitizedName,
        email: sanitizedEmail,
        subject: sanitizedSubject,
        message: sanitizedMessage,
      });
    } catch (error) {
      console.error("Error sending Slack message:", error);
      Sentry.captureException(error);
    }

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error: unknown) {
    if (error && typeof error === "object" && "msBeforeNext" in error) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    console.error("Error sending email:", error);
    Sentry.captureException(error);

    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
