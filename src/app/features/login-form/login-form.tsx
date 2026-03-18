"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/app/shared/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/shared/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/app/shared/ui/field";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/shared/ui/form";
import { Input } from "@/app/shared/ui/input";
import { useRouter } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const t = useTranslations("Login");
  const router = useRouter();

  const formSchema = z.object({
    email: z
      .string()
      .trim()
      .toLowerCase()
      .min(1, t("emailrequired"))
      .email(t("invalidemail")),
    password: z.string().min(6, t("passwordmin")).max(100, t("passwordmax")),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    const { error } = await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      {
        async onSuccess(context) {
          if (context.data.twoFactorRedirect) {
            router.push("/auth/two-factor");
            return;
          }
          router.push("/admin");
        },
      },
    );

    if (error) {
      form.setError("root", { message: error.message });
    }
  }

  return (
    <Card
      className="w-full max-w-md mx-auto transition-transform duration-300
      hover:scale-[1.02] hover:shadow-lg
      dark:hover:shadow-stone-600 border-black dark:border-gray-400"
    >
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{t("title-card")}</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            className={cn("flex flex-col gap-6", className)}
            onSubmit={form.handleSubmit(handleSubmit)}
            {...props}
          >
            <FieldGroup>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Field>
                      <FieldLabel htmlFor="email">{t("emailLabel")}</FieldLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="text"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                    </Field>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <Field>
                      <FieldLabel htmlFor="password">
                        {t("passwordLabel")}
                      </FieldLabel>
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          autoComplete="current-password"
                          {...field}
                        />
                      </FormControl>
                    </Field>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.formState.errors.root && (
                <p className="text-sm text-red-500 text-center">
                  {form.formState.errors.root.message}
                </p>
              )}
            </FieldGroup>

            <CardFooter className="px-0 pt-2">
              <Button type="submit" className="w-full">
                {t("submit")}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
