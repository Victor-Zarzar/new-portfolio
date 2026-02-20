import type { ProfileData } from "@/app/shared/types/main";

export function getProfileData(): ProfileData {
  return {
    name: "Victor Zarzar",
    image: {
      src: "/profile.jpg",
      alt: "victorzarzar",
      sizes: "(max-width: 640px) 160px, (max-width: 1024px) 220px, 280px",
      quality: 75,
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
