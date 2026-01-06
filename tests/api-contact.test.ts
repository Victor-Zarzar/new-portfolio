import { beforeEach, describe, expect, it, mock } from "bun:test";
import { POST } from "@/app/api/contact/route";

const mockSendMail = mock(() => Promise.resolve({ messageId: "123" }));

mock.module("nodemailer", () => ({
  default: {
    createTransport: mock(() => ({
      sendMail: mockSendMail,
    })),
  },
}));

mock.module("@/env.mjs", () => ({
  default: {
    SMTP_EMAIL: "test@example.com",
    SMTP_PASSWORD: "password123",
  },
}));

describe("POST /api/contact", () => {
  beforeEach(() => {
    mockSendMail.mockClear();
  });

  it("should send email successfully", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "192.168.1.1",
      },
      body: JSON.stringify({
        name: "John Doe",
        email: "john@example.com",
        subject: "Test Subject",
        message: "Test message",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe("Email sent successfully!");
    expect(mockSendMail).toHaveBeenCalled();
  });

  it("should block bot when company field is present", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "192.168.1.2",
      },
      body: JSON.stringify({
        name: "Bot",
        email: "bot@example.com",
        subject: "Spam",
        message: "Spam message",
        company: "Spam Corp",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.message).toBe("Bot detected");
    expect(mockSendMail).not.toHaveBeenCalled();
  });

  it("should return error for invalid data", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "192.168.1.3",
      },
      body: JSON.stringify({
        name: "",
        email: "invalid-email",
        subject: "",
        message: "",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.message).toBe("Invalid data");
    expect(mockSendMail).not.toHaveBeenCalled();
  });

  it("should return 429 error when rate limit is exceeded", async () => {
    const testIP = "192.168.1.100";

    const createRequest = () =>
      new Request("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-forwarded-for": testIP,
        },
        body: JSON.stringify({
          name: "John Doe",
          email: "john@example.com",
          subject: "Test",
          message: "Test message",
        }),
      });

    await POST(createRequest());
    await POST(createRequest());
    await POST(createRequest());

    const response = await POST(createRequest());
    const data = await response.json();

    expect(response.status).toBe(429);
    expect(data.message).toBe("Too many requests. Please try again later.");

    expect(mockSendMail).toHaveBeenCalledTimes(3);
  });
});
