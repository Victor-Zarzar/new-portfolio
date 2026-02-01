import type { ImageProps } from "next/image";
import type React from "react";
import type { IconType } from "react-icons";

type Experience = {
  id: number;
  title: string;
  description?: string;
  local: string;
  time: string;
};

type Project = {
  id: number;
  androidLink?: string;
  iosLink?: string;
  webLink?: string;
  title: string;
  description: string;
  photo: string;
  priority: boolean;
  sizes: string;
  sourceCodeLink: string;
  sourceLinkPrivacy: string;
  techStack: TechKey[];
  date: string;
};

type PostMetadata = {
  title: string;
  description: string;
  year: string;
  date: string;
  photo: string;
  slug: string;
  sizes: string;
  content: string;
  priority: boolean;
  tags?: string[];
};

type NavItem = {
  label: string;
  link: string;
};

type Services = {
  id: number;
  title: string;
  description: string;
  p: string;
};

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
};

type CoursesType = {
  id: number;
  title: string;
  url: string;
};

type SkillOutlineProps = {
  Icon: IconType;
  text: string;
};

type SvgIconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

type GetProjectsParams = {
  t: (key: string) => string;
};

type GetTimelineDataParams = {
  t: (key: string) => string;
};

type GetServicesDataParams = {
  t: (key: string) => string;
};

type GetCourseDataParams = {
  t: (key: string) => string;
};

type Locale = "en" | "es" | "pt";

type CookieConsentProps = {
  demo?: boolean;
  onAcceptCallback?: () => void;
  onDeclineCallback?: () => void;
};

type TechKey =
  | "flutter"
  | "dart"
  | "android"
  | "ios"
  | "xcode"
  | "androidstudio"
  | "html"
  | "react"
  | "typescript"
  | "tailwind"
  | "nextjs"
  | "sentry"
  | "kibana"
  | "loki"
  | "grafana"
  | "docker"
  | "docker-compose"
  | "fastapi"
  | "python"
  | "reportlab"
  | "kotlin"
  | "swift"
  | "pandas"
  | "postgres"
  | "mysql"
  | "nginx"
  | "prisma";

type ProfileLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin";
};

type ProfileData = {
  name: string;
  image: {
    src: string;
    alt: string;
    quality: number;
    priority: boolean;
    sizes: string;
  };
  links: ProfileLink[];
};

type MdxHeadingProps = React.ComponentPropsWithoutRef<"h1">;
type MdxParagraphProps = React.ComponentPropsWithoutRef<"p">;
type MdxUlProps = React.ComponentPropsWithoutRef<"ul">;
type MdxOlProps = React.ComponentPropsWithoutRef<"ol">;
type MdxLiProps = React.ComponentPropsWithoutRef<"li">;
type MdxAnchorProps = React.ComponentPropsWithoutRef<"a">;
type MdxCodeProps = React.ComponentPropsWithoutRef<"code">;
type MdxPreProps = React.ComponentPropsWithoutRef<"pre">;
type MdxImgProps = React.ComponentPropsWithoutRef<"img">;

type PageParams = {
  locale: string;
  slug: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

type BlogListProps = {
  posts: PostMetadata[];
  locale: string;
};

type HeroImageClientProps = {
  src: ImageProps["src"];
  alt: string;
  priority?: boolean;
  sizes?: string;
};

type CommandLink = {
  id: string;
  labelKey: string;
  href: string;
  keywords?: string;
  icon?: React.ReactNode;
};

type NavbarNavLink = {
  link: string;
  label: string;
  active?: boolean;
  icon?: React.ReactNode;
};

type LogoProps = {
  className?: string;
};

type NavMobileProps = {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks: NavbarNavLink[];
};

export type {
  HeroImageClientProps,
  BlogListProps,
  MdxHeadingProps,
  MdxParagraphProps,
  MdxUlProps,
  MdxOlProps,
  MdxLiProps,
  MdxAnchorProps,
  MdxCodeProps,
  MdxPreProps,
  MdxImgProps,
  PostMetadata,
  ContactFormData,
  CookieConsentProps,
  NavMobileProps,
  CoursesType,
  LogoProps,
  Experience,
  PageParams,
  PageProps,
  GetCourseDataParams,
  GetProjectsParams,
  GetServicesDataParams,
  GetTimelineDataParams,
  Locale,
  NavItem,
  Project,
  ProfileLink,
  CommandLink,
  NavbarNavLink,
  ProfileData,
  Services,
  SkillOutlineProps,
  SvgIconProps,
  TechKey,
};
