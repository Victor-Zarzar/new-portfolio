import type { ContactFormData } from '@/app/shared/types/main';
import { toast } from 'sonner';

export const contactService = {
    async sendContactForm(data: ContactFormData, successMessage: string, errorMessage: string): Promise<boolean> {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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
            console.error('Error:', error);
            toast.error(errorMessage);
            return false;
        }
    },
};
