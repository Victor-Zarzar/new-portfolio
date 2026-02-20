import { FaFigma } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import {
  SiAndroidstudio,
  SiDart,
  SiDocker,
  SiFirebase,
  SiFlutter,
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
import type { SkillOutlineProps } from "@/app/shared/types/main";

export const skills = [
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiNextdotjs,
    text: "NextJS",
  },
  {
    icon: SiVite,
    text: "Vite",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiMui,
    text: "MUI",
  },
  {
    icon: SiShadcnui,
    text: "Shadcn UI",
  },
  {
    icon: SiGraphql,
    text: "GraphQL",
  },
  {
    icon: FaFigma,
    text: "Figma",
  },
  {
    icon: SiDart,
    text: "Dart",
  },
  {
    icon: SiFlutter,
    text: "Flutter",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon: SiGrafana,
    text: "Grafana",
  },
  {
    icon: SiSentry,
    text: "Sentry",
  },
  {
    icon: SiPortainer,
    text: "Portainer.io",
  },
  {
    icon: SiPrisma,
    text: "Prisma",
  },
  {
    icon: SiFirebase,
    text: "Firebase",
  },
  {
    icon: SiXcode,
    text: "Xcode",
  },
  {
    icon: SiAndroidstudio,
    text: "Android Studio",
  },
  {
    icon: SiSqlite,
    text: "SQLite",
  },
  {
    icon: IoTerminal,
    text: "OpenSSH",
  },
  {
    icon: SiNginx,
    text: "Nginx",
  },
  {
    icon: SiGithubactions,
    text: "GitHub Actions",
  },
  {
    icon: SiMysql,
    text: "MySQL",
  },
];

export default function SkillOutline({ Icon, text }: SkillOutlineProps) {
  return (
    <div
      className="inline-flex items-center justify-center rounded-md text-[10px] sm:text-[10.5px] font-medium border
            border-black dark:border-gray-400 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg
            dark:hover:shadow-stone-600 hover:text-accent-foreground h-9 w-28 sm:w-36
            px-1 sm:px-4 py-2 mr-2 hover:-translate-y-1"
    >
      <Icon className="h-3 w-3 mr-1 md:h-4 md:w-4" />
      {text}
    </div>
  );
}
