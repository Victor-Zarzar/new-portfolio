'use client';

import { contactService } from '@/app/shared/api/contact';
import type { ContactFormData } from '@/app/shared/types/main';
import { Button } from '@/app/shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/app/shared/ui/form';
import { Input } from '@/app/shared/ui/input';
import { Textarea } from '@/app/shared/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

export default function ContactForm() {
    const t = useTranslations('Contact');

    const formSchema = z.object({
        name: z.string().min(1, t('namerequired')),
        email: z.string().email(t('invalidemail')),
        subject: z.string().min(1, t('subjectrequired')),
        message: z.string().min(1, t('messagerequired')),
        company: z.string().optional(),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
            company: '',
        },
    });

    async function handleSubmit(values: z.infer<typeof formSchema>) {
        const success = await contactService.sendContactForm(values as ContactFormData, t('emailsucess'), t('emailerror'));

        if (success) {
            form.reset();
        }
    }

    return (
        <div className="form-container mx-auto flex justify-center items-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="max-w-md w-60 md:w-full flex flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('name')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('name')}
                                        {...field}
                                        className="dark:bg-stone-950 dark:border-b dark:border-stone-600"
                                        autoComplete="name"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <input type="text" name="company" style={{ display: 'none' }} autoComplete="off" />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('email')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('email')}
                                        type="email"
                                        {...field}
                                        className="dark:bg-stone-950 dark:border-b dark:border-stone-600"
                                        autoComplete="email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('subject')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('subject')}
                                        {...field}
                                        className="dark:bg-stone-950 dark:border-b dark:border-stone-600"
                                        autoComplete="subject"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('message')}</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder={t('message')}
                                        {...field}
                                        className="dark:bg-stone-950 dark:border-b dark:border-stone-600"
                                        autoComplete="message"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="w-full font-medium border 
            border-black dark:border-gray-400 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg
            dark:hover:shadow-stone-600 cursor-pointer hover:text-accent-foreground"
                        variant="outline"
                    >
                        {t('submit')}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
