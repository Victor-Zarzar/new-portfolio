import type { Articles, GetArticlesParams } from "@/app/shared/types/main";

export const getArticlesData = ({ t }: GetArticlesParams): Articles[] =>
  [
    {
      id: 1,
      title: t("articletitle1"),
      description: t("articledescription1"),
      p: t("articlep1"),
      photo: "/article-1.png",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      priority: true,
      webLink:
        "https://dev.to/victorzarzar/protecao-em-dispositivos-moveis-31ei",
      year: 2024,
    },
    {
      id: 2,
      title: t("articletitle2"),
      description: t("articledescription2"),
      p: t("articlep2"),
      photo: "/article-2.png",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      priority: true,
      webLink:
        "https://dev.to/victorzarzar/autenticacao-cookies-http-http-only-jwt-localstorage-e-sessionstorage-4b73",
      year: 2024,
    },
    {
      id: 3,
      title: t("articletitle3"),
      description: t("articledescription3"),
      p: t("articlep3"),
      photo: "/article-4.png",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      priority: true,
      webLink:
        "https://dev.to/victorzarzar/a-importancia-de-gerenciar-corretamente-variaveis-de-ambiente-env-4b5i",
      year: 2025,
    },
    {
      id: 4,
      title: t("articletitle4"),
      description: t("articledescription4"),
      p: t("articlep4"),
      photo: "/article-3.png",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      priority: true,
      webLink:
        "https://dev.to/victorzarzar/-otimizando-imagens-docker-boas-praticas-para-builds-eficientes-5cj7",
      year: 2025,
    },
    {
      id: 5,
      title: t("articletitle5"),
      description: t("articledescription5"),
      p: t("articlep5"),
      photo: "/article-5.png",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      priority: true,
      webLink:
        "https://dev.to/victorzarzar/-regra-de-seguranca-no-android-nativo-com-sharedpreferences-15m7",
      year: 2025,
    },
    {
      id: 6,
      title: t("articletitle6"),
      description: t("articledescription6"),
      p: t("articlep6"),
      photo: "/article-6.png",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      priority: true,
      webLink:
        "https://dev.to/victorzarzar/certificados-tls-com-san-subject-alternative-name-e-suas-utilidades-em-aplicacoes-multidominio-i2j",
      year: 2026,
    },
  ].sort((a, b) => b.year - a.year);
