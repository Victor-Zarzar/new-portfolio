import { Code2, Database, Layers, Smartphone } from "lucide-react";
import { FaFigma } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import {
  SiAndroidstudio,
  SiDocker,
  SiDrizzle,
  SiExpo,
  SiFirebase,
  SiGithubactions,
  SiGrafana,
  SiGraphql,
  SiJavascript,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiPortainer,
  SiPrisma,
  SiReact,
  SiSentry,
  SiShadcnui,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiXcode,
} from "react-icons/si";
import type { SkillCategory } from "@/app/shared/types/main";

export function getSkillsData(): SkillCategory[] {
  return [
    {
      icon: Code2,
      title: "Frontend",
      skills: [
        { icon: SiTypescript, text: "TypeScript" },
        { icon: SiJavascript, text: "JavaScript" },
        { icon: SiNextdotjs, text: "NextJS" },
        { icon: SiVite, text: "Vite" },
        { icon: SiReact, text: "React" },
        { icon: SiTailwindcss, text: "Tailwind" },
        { icon: SiMui, text: "MUI" },
        { icon: SiShadcnui, text: "Shadcn UI" },
        { icon: FaFigma, text: "Figma" },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      skills: [
        { icon: SiExpo, text: "Expo" },
        { icon: SiReact, text: "React Native" },
        { icon: SiAndroidstudio, text: "Android Studio" },
        { icon: SiXcode, text: "Xcode" },
        { icon: SiFirebase, text: "Firebase" },
      ],
    },
    {
      icon: Database,
      title: "Backend & DB",
      skills: [
        { icon: SiGraphql, text: "GraphQL" },
        { icon: SiPrisma, text: "Prisma" },
        { icon: SiSqlite, text: "SQLite" },
        { icon: SiMysql, text: "MySQL" },
        { icon: SiDrizzle, text: "Drizzle" },
      ],
    },
    {
      icon: Layers,
      title: "DevOps & Infra",
      skills: [
        { icon: SiDocker, text: "Docker" },
        { icon: SiPortainer, text: "Portainer.io" },
        { icon: SiNginx, text: "Nginx" },
        { icon: IoTerminal, text: "OpenSSH" },
        { icon: SiGithubactions, text: "GitHub Actions" },
        { icon: SiGrafana, text: "Grafana" },
        { icon: SiSentry, text: "Sentry" },
      ],
    },
  ];
}
