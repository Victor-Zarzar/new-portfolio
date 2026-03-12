import type { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = routing.defaultLocale;

  const t = await getTranslations({
    namespace: "Manifest",
    locale,
  });

  return {
    name: t("name"),
    short_name: t("shortName"),
    description: t("description"),
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#101E33",
    icons: [
      {
        src: "/static/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/static/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
