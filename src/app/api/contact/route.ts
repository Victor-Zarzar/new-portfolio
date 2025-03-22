import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(1, 'Name is required').max(100),
    email: z.string().email('Invalid email'),
    subject: z.string().min(1, 'Subject is required').max(100),
    message: z.string().min(1, 'Message is required').max(1000),
});

const rateLimiter = new RateLimiterMemory({
    points: 3,
    duration: 60,
});

export async function POST(request: Request) {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const body = await request.json();
    const { name, email, subject, message } = contactSchema.parse(body);

    try {
        await rateLimiter.consume(ip);

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.SMTP_EMAIL,
            subject: `Contact: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error: unknown) {
        if (error && typeof error === 'object' && 'name' in error && error.name === 'RateLimiterError') {
            return NextResponse.json({ message: 'Too many requests. Please try again later.' }, { status: 429 });
        }

        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
        }

        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
