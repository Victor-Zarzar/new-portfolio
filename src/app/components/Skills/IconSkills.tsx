import { type IconType } from 'react-icons';
import { FaFigma } from 'react-icons/fa';
import { IoTerminal } from 'react-icons/io5';
import {
    SiAndroidstudio,
    SiArchlinux,
    SiCodemagic,
    SiCss3,
    SiDart,
    SiDjango,
    SiDocker,
    SiFastapi,
    SiFirebase,
    SiFlutter,
    SiGit,
    SiGithub,
    SiGitlab,
    SiHtml5,
    SiJavascript,
    SiMacos,
    SiMantine,
    SiMui,
    SiNextdotjs,
    SiNpm,
    SiPostman,
    SiPrisma,
    SiPython,
    SiReact,
    SiShadcnui,
    SiSqlite,
    SiSwagger,
    SiTailwindcss,
    SiTrello,
    SiTypescript,
    SiVercel,
    SiVite,
    SiXcode,
} from 'react-icons/si';

interface SkillOutlineProps {
    Icon: IconType;
    text: string;
}

export const skills = [
    {
        icon: SiTypescript,
        text: 'TypeScript',
    },
    {
        icon: SiJavascript,
        text: 'JavaScript',
    },
    {
        icon: SiReact,
        text: 'React',
    },

    {
        icon: SiNextdotjs,
        text: 'Next',
    },
    {
        icon: SiVite,
        text: 'Vite',
    },
    {
        icon: SiTailwindcss,
        text: 'Tailwind',
    },
    {
        icon: SiHtml5,
        text: 'HTML5',
    },
    {
        icon: SiCss3,
        text: 'CSS3',
    },
    {
        icon: SiDocker,
        text: 'Docker',
    },
    {
        icon: SiPrisma,
        text: 'Prisma',
    },
    {
        icon: SiMui,
        text: 'MUI',
    },
    {
        icon: SiShadcnui,
        text: 'Shadcn UI',
    },
    {
        icon: SiDart,
        text: 'Dart',
    },
    {
        icon: SiFlutter,
        text: 'Flutter',
    },
    {
        icon: SiFirebase,
        text: 'Firebase',
    },
    {
        icon: SiGit,
        text: 'Git',
    },
    {
        icon: SiGithub,
        text: 'GitHub',
    },
    {
        icon: SiGitlab,
        text: 'Gitlab',
    },
    {
        icon: SiPostman,
        text: 'Postman',
    },
    {
        icon: SiSwagger,
        text: 'Swagger',
    },
    {
        icon: SiCodemagic,
        text: 'Code Magic',
    },
    {
        icon: SiMacos,
        text: 'macOS',
    },
    {
        icon: SiArchlinux,
        text: 'Arch Linux',
    },
    {
        icon: SiXcode,
        text: 'Xcode',
    },
    {
        icon: SiAndroidstudio,
        text: 'Android Studio',
    },
    {
        icon: SiNpm,
        text: 'NPM',
    },
    {
        icon: SiTrello,
        text: 'Trello',
    },
    {
        icon: SiVercel,
        text: 'Vercel',
    },
    {
        icon: SiMantine,
        text: 'Mantine UI',
    },
    {
        icon: SiPython,
        text: 'Python',
    },
    {
        icon: SiDjango,
        text: 'Django',
    },
    {
        icon: SiFastapi,
        text: 'FastAPI',
    },
    {
        icon: SiSqlite,
        text: 'SQLite',
    },
    {
        icon: IoTerminal,
        text: 'OpenSSH',
    },
    {
        icon: FaFigma,
        text: 'Figma',
    },
];

export default function SkillOutline({ Icon, text }: SkillOutlineProps) {
    return (
        <div
            className="inline-flex items-center justify-center rounded-md text-[10px] sm:text-[10.5px] font-medium transition-colors 
            focus-visible:outline-none focus-visible:ring-1
     focus-visible:ring-ring border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-28 sm:w-36 
     px-1 sm:px-4 py-2 mr-2 hover:-translate-y-1"
        >
            <Icon className="h-3 w-3 mr-1 md:h-4 md:w-4" />
            {text}
        </div>
    );
}
