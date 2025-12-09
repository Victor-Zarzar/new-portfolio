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
  androidLink: string;
  iosLink: string;
  webLink: string;
  title: string;
  description: string;
  photo: string;
  sourceCodeLink: string;
  sourceLinkPrivacy: string;
  techStack: TechKey[];
};

type Articles = {
  id: number;
  title: string;
  description: string;
  p: string;
  webLink: string;
  photo: string;
  year: number;
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

type GetArticlesParams = {
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
  | "pandas";

export type {
  Articles,
  ContactFormData,
  CookieConsentProps,
  CoursesType,
  Experience,
  GetArticlesParams,
  GetCourseDataParams,
  GetProjectsParams,
  GetServicesDataParams,
  GetTimelineDataParams,
  Locale,
  NavItem,
  Project,
  Services,
  SkillOutlineProps,
  SvgIconProps,
  TechKey,
};
