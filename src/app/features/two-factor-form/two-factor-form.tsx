"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as Sentry from "@sentry/nextjs";
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

export function TwoFactorForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const t = useTranslations("twoFactor");
  const router = useRouter();

  const formSchema = z.object({
    code: z.string().min(6, t("codeLength")).max(6, t("codeLength")),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { code: "" },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    const { error } = await authClient.twoFactor.verifyTotp({
      code: values.code,
      trustDevice: true,
    });

    if (error) {
      form.setError("root", { message: error.message });
      Sentry.captureException(error);
      return;
    }

    router.push("/admin");
  }

  return (
    <Card
      className="w-full max-w-md mx-auto transition-transform duration-300
      hover:scale-[1.02] hover:shadow-lg
      dark:hover:shadow-stone-600 border-black dark:border-gray-400"
    >
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{t("title")}</CardTitle>
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
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <Field>
                      <FieldLabel htmlFor="code">{t("codeLabel")}</FieldLabel>
                      <FormControl>
                        <Input
                          id="code"
                          type="text"
                          maxLength={6}
                          autoComplete="one-time-code"
                          className="text-center text-2xl tracking-widest"
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
                {t("verify")}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
