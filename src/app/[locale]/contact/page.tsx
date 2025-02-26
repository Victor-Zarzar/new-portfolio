'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Fade } from 'react-awesome-reveal';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as z from 'zod';

export default function Contact() {
    const t = useTranslations('Contact');

    const formSchema = z.object({
        name: z.string().min(1, t('namerequired')),
        email: z.string().email(t('invalidemail')),
        subject: z.string().min(1, t('subjectrequired')),
        message: z.string().min(1, t('messagerequired')),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    });

    async function handleSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                toast.success(t('emailsucess'));
                form.reset();
            } else {
                toast.error(t('emailerror'));
            }
        } catch (error) {
            console.error('Erro:', error);
            toast.error(t('emailerror'));
        }
    }

    return (
        <section className="col-span-4 mx-auto p-6">
            <Fade>
                <header className="text-center mt-20 md:mt-36">
                    <h1 className="title-projects mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl">{t('h1')}</h1>
                </header>
            </Fade>

            <div className="form-container mx-auto flex justify-center items-center mt-20 md:mt-28 mb-40 md:mb-36">
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
                                            className="dark:bg-stone-900 dark:border-b dark:border-stone-600"
                                            autoComplete="name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                                            className="dark:bg-stone-900 dark:border-b dark:border-stone-600"
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
                                            className="dark:bg-stone-900 dark:border-b dark:border-stone-600"
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
                                            className="dark:bg-stone-900 dark:border-b dark:border-stone-600"
                                            autoComplete="message"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full dark:bg-transparent bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground 
                            hover:-translate-y-1 border-black dark:border-gray-200 cursor-pointer"
                            variant="outline"
                        >
                            {t('submit')}
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
}
