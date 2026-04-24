import { beforeEach, describe, expect, it, mock } from "bun:test";

const toastLoadingMock = mock(() => "toast-id");
const toastSuccessMock = mock(() => undefined);
const toastErrorMock = mock(() => undefined);
const sentryCaptureExceptionMock = mock(() => undefined);

mock.module("sonner", () => ({
  toast: {
    loading: toastLoadingMock,
    success: toastSuccessMock,
    error: toastErrorMock,
  },
}));

mock.module("@sentry/nextjs", () => ({
  captureException: sentryCaptureExceptionMock,
}));

const { contactService } = await import("@/lib/contact");

const formData = {
  name: "Victor",
  email: "victor@email.com",
  subject: "Contato",
  message: "Mensagem de teste",
  company: "",
};

const messages = {
  loading: "Sending...",
  success: "Sent",
  error: "Error",
};

describe("contactService.sendContactForm", () => {
  beforeEach(() => {
    mock.restore();

    toastLoadingMock.mockClear();
    toastSuccessMock.mockClear();
    toastErrorMock.mockClear();
    sentryCaptureExceptionMock.mockClear();
  });

  it("should send contact form successfully", async () => {
    globalThis.fetch = mock(async () => {
      return new Response(null, { status: 200 });
    }) as unknown as typeof fetch;

    const result = await contactService.sendContactForm(
      formData,
      messages,
      "captcha-token",
    );

    expect(result).toBe(true);

    expect(fetch).toHaveBeenCalledWith("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-captcha-response": "captcha-token",
      },
      body: JSON.stringify(formData),
    });

    expect(toastLoadingMock).toHaveBeenCalledWith("Sending...");
    expect(toastSuccessMock).toHaveBeenCalledWith("Sent", { id: "toast-id" });
    expect(toastErrorMock).not.toHaveBeenCalled();
    expect(sentryCaptureExceptionMock).not.toHaveBeenCalled();
  });

  it("should return false when api responds with error", async () => {
    globalThis.fetch = mock(async () => {
      return new Response(null, { status: 500 });
    }) as unknown as typeof fetch;

    const result = await contactService.sendContactForm(
      formData,
      messages,
      "captcha-token",
    );

    expect(result).toBe(false);

    expect(toastLoadingMock).toHaveBeenCalledWith("Sending...");
    expect(toastErrorMock).toHaveBeenCalledWith("Error", { id: "toast-id" });
    expect(toastSuccessMock).not.toHaveBeenCalled();
    expect(sentryCaptureExceptionMock).not.toHaveBeenCalled();
  });

  it("should capture exception when fetch throws", async () => {
    const error = new Error("Network error");

    globalThis.fetch = mock(async () => {
      throw error;
    }) as unknown as typeof fetch;

    const result = await contactService.sendContactForm(
      formData,
      messages,
      "captcha-token",
    );

    expect(result).toBe(false);

    expect(toastLoadingMock).toHaveBeenCalledWith("Sending...");
    expect(toastErrorMock).toHaveBeenCalledWith("Error", { id: "toast-id" });
    expect(toastSuccessMock).not.toHaveBeenCalled();
    expect(sentryCaptureExceptionMock).toHaveBeenCalledWith(error);
  });
});
