import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiGit,
  SiDocker,
  SiMui,
  SiPrisma,
  SiDart,
  SiFlutter,
  SiTailwindcss,
  SiShadcnui,
  SiPostman,
  SiSwagger,
  SiCodemagic,
  SiMacos,
  SiLinux,
  SiArchlinux,
  SiVercel,
  SiGithub,
  SiGitlab,
  SiXcode,
  SiAndroidstudio,
  SiTrello,
  SiCypress,
  SiVite,
  SiNpm,
  SiMobx,
  SiMantine,
  SiPython,
  SiDjango,
} from "react-icons/si";
import { IconType } from "react-icons";

interface SkillOutlineProps {
  Icon: IconType;
  text: string;
}

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
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiCypress,
    text: "Cypress",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiVite,
    text: "Vite",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
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
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiMobx,
    text: "Mobx",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },
  {
    icon: SiFirebase,
    text: "Firebase",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiGithub,
    text: "GitHub",
  },
  {
    icon: SiGitlab,
    text: "Gitlab",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon: SiPrisma,
    text: "Prisma",
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
    icon: SiPostman,
    text: "Postman",
  },
  {
    icon: SiSwagger,
    text: "Swagger",
  },
  {
    icon: SiCodemagic,
    text: "Code Magic",
  },
  {
    icon: SiMacos,
    text: "macOS",
  },
  {
    icon: SiLinux,
    text: "Linux",
  },
  {
    icon: SiArchlinux,
    text: "Arch Linux",
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
    icon: SiNpm,
    text: "NPM",
  },
  {
    icon: SiTrello,
    text: "Trello",
  },
  {
    icon: SiVercel,
    text: "Vercel",
  },
  {
    icon: SiMantine,
    text: "Mantine UI",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: SiDjango,
    text: "Django",
  }
];

export default function SkillOutline({ Icon, text }: SkillOutlineProps) {
  return (
    <div className="inline-flex items-center justify-center rounded-md text-[10px] sm:text-[10.5px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1
     focus-visible:ring-ring border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-28 sm:w-36 px-1 sm:px-4 py-2 mr-2 hover:-translate-y-1">
      <Icon className="h-3 w-3 mr-1 md:h-4 md:w-4" />
      {text}
    </div>
  );
}