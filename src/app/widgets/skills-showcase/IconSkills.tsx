import { type SkillOutlineProps } from "@/app/shared/types/main";
import { FaAws, FaFigma } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import {
	SiAndroidstudio,
	SiCss3,
	SiDart,
	SiDjango,
	SiDocker,
	SiElasticsearch,
	SiFastapi,
	SiFirebase,
	SiFlutter,
	SiGit,
	SiGithub,
	SiGitlab,
	SiGrafana,
	SiHtml5,
	SiJavascript,
	SiLetsencrypt,
	SiLinux,
	SiMacos,
	SiMui,
	SiMysql,
	SiNextdotjs,
	SiNginx,
	SiOwasp,
	SiPortainer,
	SiPostman,
	SiPrisma,
	SiPython,
	SiSentry,
	SiShadcnui,
	SiSqlite,
	SiSwagger,
	SiTailwindcss,
	SiTrello,
	SiTypescript,
	SiVercel,
	SiVite,
	SiXcode,
} from "react-icons/si";

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
		icon: SiPython,
		text: "Python",
	},
	{
		icon: SiFastapi,
		text: "FastAPI",
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
		icon: SiElasticsearch,
		text: "Elastic ELK",
	},
	{
		icon: SiSentry,
		text: "Sentry",
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
		icon: SiHtml5,
		text: "HTML5",
	},
	{
		icon: SiCss3,
		text: "CSS3",
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
		icon: SiMui,
		text: "MUI",
	},
	{
		icon: SiShadcnui,
		text: "Shadcn UI",
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
		icon: SiPostman,
		text: "Postman",
	},
	{
		icon: SiSwagger,
		text: "Swagger",
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
		icon: SiXcode,
		text: "Xcode",
	},
	{
		icon: SiAndroidstudio,
		text: "Android Studio",
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
		icon: FaAws,
		text: "AWS",
	},

	{
		icon: SiDjango,
		text: "Django",
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
		icon: FaFigma,
		text: "Figma",
	},
	{
		icon: SiNginx,
		text: "Nginx",
	},
	{
		icon: SiOwasp,
		text: "OWASP",
	},
	{
		icon: SiMysql,
		text: "MySQL",
	},
	{
		icon: SiLetsencrypt,
		text: "Let's Encrypt",
	},
];

export default function SkillOutline({ Icon, text }: SkillOutlineProps) {
	return (
		<div
			className="inline-flex items-center justify-center rounded-md text-[10px] sm:text-[10.5px] font-medium border 
            border-black dark:border-gray-400 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg
            dark:hover:shadow-stone-600 cursor-pointer hover:text-accent-foreground h-9 w-28 sm:w-36 
            px-1 sm:px-4 py-2 mr-2 hover:-translate-y-1"
		>
			<Icon className="h-3 w-3 mr-1 md:h-4 md:w-4" />
			{text}
		</div>
	);
}
