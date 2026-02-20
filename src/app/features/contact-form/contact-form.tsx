"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import * as z from "zod";
import { contactService } from "@/app/shared/api/contact";
import type { ContactFormData } from "@/app/shared/types/main";
import { Button } from "@/app/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/app/shared/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/shared/ui/form";
import { Input } from "@/app/shared/ui/input";
import { Textarea } from "@/app/shared/ui/textarea";

export default function ContactForm() {
  const t = useTranslations("Contact");

  const formSchema = z.object({
    name: z.string().min(1, t("namerequired")),
    email: z.email(t("invalidemail")),
    subject: z.string().min(1, t("subjectrequired")),
    message: z.string().min(1, t("messagerequired")),
    company: z.string().optional(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      company: "",
    },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    const success = await contactService.sendContactForm(
      values as ContactFormData,
      {
        loading: t("loading"),
        success: t("emailsucess"),
        error: t("emailerror"),
      },
    );

    if (success) {
      form.reset();
    }
  }

  return (
    <Card
      className="w-full mx-auto transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg
            dark:hover:shadow-stone-600 border-black dark:border-gray-400"
    >
      <CardHeader className="pb-4">
        <CardDescription className="text-sm md:text-base">
          {t("cardSubtitle")}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="text-xs md:text-sm text-muted-foreground">
            {t("socialText")}
          </span>
          <div className="flex gap-3">
            <Link
              href="https://github.com/Victor-Zarzar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md border border-black dark:border-gray-200 hover:bg-accent/10 transition-colors"
            >
              <AiOutlineGithub className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/victorzarzar"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md border border-black dark:border-gray-200 hover:bg-accent/10 transition-colors"
            >
              <AiOutlineLinkedin className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.instagram.com/victorzarzar7/"
              aria-label="Instagram"
              target="_blank"
              className="p-2 rounded-md border border-black dark:border-gray-200 hover:bg-accent/10 transition-colors"
            >
              <AiOutlineInstagram className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("name")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("name")}
                      {...field}
                      className="dark:bg-stone-950 dark:border-b dark:border-stone-600"
                      autoComplete="name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <input
              type="text"
              name="company"
              style={{ display: "none" }}
              autoComplete="off"
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("email")}
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
                  <FormLabel>{t("subject")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("subject")}
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
                  <FormLabel>{t("message")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("message")}
                      {...field}
                      className="min-h-32 dark:bg-stone-950 dark:border-b dark:border-stone-600"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CardFooter className="px-0 pt-2">
              <Button
                type="submit"
                className="w-full font-medium border border-black dark:border-gray-400
                                transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg
                                dark:hover:shadow-stone-600 hover:text-accent-foreground"
                variant="outline"
              >
                {t("submit")}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
