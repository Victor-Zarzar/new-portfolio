import { getTranslations } from "next-intl/server";
import { LoginForm } from "@/app/features/login-form/login-form";

export default async function LoginPage() {
  const t = await getTranslations("Login");

  return (
    <section className="mx-auto max-w-4xl px-6 py-8">
      <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
      <p className="text-muted-foreground mt-2">{t("subtitle")}</p>
      <div className="mt-20">
        <LoginForm />
      </div>
    </section>
  );
}
