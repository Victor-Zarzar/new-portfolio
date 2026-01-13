import type { ProfileData } from "@/app/shared/types/main";

export function getProfileData(): ProfileData {
  return {
    name: "Victor Zarzar",
    image: {
      src: "/profile.jpg",
      alt: "victorzarzar",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      quality: 90,
      priority: true,
    },
    links: [
      {
        label: "Github",
        href: "https://github.com/Victor-Zarzar",
        icon: "github",
      },
      {
        label: "Linkedin",
        href: "https://www.linkedin.com/in/victorzarzar",
        icon: "linkedin",
      },
    ],
  };
}
