import type { Mock } from "bun:test";
import { beforeEach, describe, expect, it, mock } from "bun:test";
import * as Sentry from "@sentry/nextjs";
import { toast } from "sonner";
import { contactService } from "@/app/shared/api/contact";

type ToastLoadingMock = Mock<(message: string) => string | number>;
type ToastMsgMock = Mock<
  (message: string, opts?: { id?: string | number }) => void
>;

mock.module("sonner", () => ({
  toast: {
    success: mock(() => undefined),
    error: mock(() => undefined),
    loading: mock(() => "toast-id"),
  },
}));

mock.module("@sentry/nextjs", () => ({
  captureException: mock(() => undefined),
}));

describe("contactService", () => {
  beforeEach(() => {
    (toast.loading as unknown as ToastLoadingMock).mockClear();
    (toast.success as unknown as ToastMsgMock).mockClear();
    (toast.error as unknown as ToastMsgMock).mockClear();
    (
      Sentry.captureException as unknown as Mock<(error: unknown) => void>
    ).mockClear();

    global.fetch = mock(() => undefined) as unknown as typeof fetch;
  });

  it("should submit form successfully", async () => {
    global.fetch = mock(() =>
      Promise.resolve({
        ok: true,
        json: async () => ({ message: "Email sent successfully!" }),
      } as Response),
    ) as unknown as typeof fetch;

    const data = {
      name: "John Doe",
      email: "john@example.com",
      subject: "Test Subject",
      message: "Test message",
    };

    const messages = {
      loading: "Sending...",
      success: "Success!",
      error: "Error!",
    };

    const result = await contactService.sendContactForm(data, messages);

    expect(result).toBe(true);

    expect(toast.loading).toHaveBeenCalledWith("Sending...");
    expect(toast.success).toHaveBeenCalledWith("Success!", { id: "toast-id" });
    expect(toast.error).not.toHaveBeenCalled();

    expect(global.fetch).toHaveBeenCalledWith("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  });

  it("should show error when response is not ok", async () => {
    global.fetch = mock(() =>
      Promise.resolve({
        ok: false,
        status: 400,
      } as Response),
    ) as unknown as typeof fetch;

    const data = {
      name: "John Doe",
      email: "john@example.com",
      subject: "Test Subject",
      message: "Test message",
    };

    const messages = {
      loading: "Sending...",
      success: "Success!",
      error: "Failed to send!",
    };

    const result = await contactService.sendContactForm(data, messages);

    expect(result).toBe(false);

    expect(toast.loading).toHaveBeenCalledWith("Sending...");
    expect(toast.error).toHaveBeenCalledWith("Failed to send!", {
      id: "toast-id",
    });
    expect(toast.success).not.toHaveBeenCalled();
  });

  it("should capture exception and show error when fetch fails", async () => {
    const error = new Error("Network error");
    global.fetch = mock(() => Promise.reject(error)) as unknown as typeof fetch;

    const data = {
      name: "John Doe",
      email: "john@example.com",
      subject: "Test Subject",
      message: "Test message",
    };

    const messages = {
      loading: "Sending...",
      success: "Success!",
      error: "Network error!",
    };

    const result = await contactService.sendContactForm(data, messages);

    expect(result).toBe(false);

    expect(toast.loading).toHaveBeenCalledWith("Sending...");
    expect(toast.error).toHaveBeenCalledWith("Network error!", {
      id: "toast-id",
    });
    expect(Sentry.captureException).toHaveBeenCalledWith(error);
    expect(toast.success).not.toHaveBeenCalled();
  });
});
