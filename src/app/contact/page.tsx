"use client"
import React from 'react';
import { Fade } from "react-awesome-reveal";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {

    const formSchema = z.object({
        name: z.string().min(1, ('namerequired')),
        email: z.string().email(('invalidemail')),
        subject: z.string().min(1, ('subjectrequired')),
        message: z.string().min(1, ('messagerequired')),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log({ values });
    };

    return (
        <div className="col-span-4 mx-auto">
            <div className="h1 p-6">
                <Fade>
                    <h1 className="title-projects mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">Contact Me</h1>
                </Fade>
                <div className='form-container mx-auto justify-center items-center flex mt-20 md:mt-28 mb-40 md:mb-36'>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="max-w-md w-60 md:w-full flex flex-col gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Name" {...field} className='dark:bg-stone-900 dark:border-b dark:border-stone-600'
                                                autoComplete='name' />
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
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" type="email" {...field} className='dark:bg-stone-900 dark:border-b dark:border-stone-600'
                                                autoComplete='email' />
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
                                        <FormLabel>Subject</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Subject" {...field} className='dark:bg-stone-900 dark:border-b dark:border-stone-600'
                                                autoComplete='subject' />
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
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Message" {...field} className='dark:bg-stone-900 dark:border-b dark:border-stone-600'
                                                autoComplete='message' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">
                                Submit
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}
