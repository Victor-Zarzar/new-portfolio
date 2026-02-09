import * as Sentry from "@sentry/nextjs";
import { toast } from "sonner";
import type { ContactFormData } from "@/app/shared/types/main";

export const contactService = {
  async sendContactForm(
    data: ContactFormData,
    messages: {
      loading: string;
      success: string;
      error: string;
    },
  ): Promise<boolean> {
    const toastId = toast.loading(messages.loading);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        toast.error(messages.error, { id: toastId });
        return false;
      }

      toast.success(messages.success, { id: toastId });
      return true;
    } catch (error) {
      toast.error(messages.error, { id: toastId });
      Sentry.captureException(error);
      return false;
    }
  },
};
