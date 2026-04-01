import type { ProfileData } from "@/app/shared/types/profile/profile";

export function getProfileData(): ProfileData {
  return {
    name: "Victor Zarzar",
    image: {
      src: "/static/profile.jpg",
      alt: "victorzarzar",
      sizes: "30vw",
      quality: 75,
      blurDataURL: `${"/static/profile.jpg"}?w=16&blur=20`,
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
