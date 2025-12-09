import type { ContactFormData } from "@/app/shared/types/main";
import * as Sentry from "@sentry/nextjs";
import { toast } from "sonner";

export const contactService = {
  async sendContactForm(
    data: ContactFormData,
    successMessage: string,
    errorMessage: string,
  ): Promise<boolean> {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(successMessage);
        return true;
      } else {
        toast.error(errorMessage);
        return false;
      }
    } catch (error) {
      toast.error(errorMessage);
      Sentry.captureException(error);
      return false;
    }
  },
};
