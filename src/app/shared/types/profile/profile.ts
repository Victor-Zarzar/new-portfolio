export type ProfileLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin";
};

export type ProfileData = {
  name: string;
  image: {
    src: string;
    alt: string;
    blurDataURL?: string;
    placeholder?: string;
    quality: number;
    priority?: boolean;
    sizes: string;
  };
  links: ProfileLink[];
};
