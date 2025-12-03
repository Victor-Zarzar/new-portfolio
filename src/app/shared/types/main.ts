import type { IconType } from 'react-icons';

type experience = {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    desc: string[];
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

type TimelineItemType = {
    id: number;
    title: string;
    description?: string;
    local: string;
    time: string;
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

type Locale = 'en' | 'es' | 'pt';

type CookieConsentProps = {
    demo?: boolean;
    onAcceptCallback?: () => void;
    onDeclineCallback?: () => void;
};

type TechKey =
    | 'flutter'
    | 'dart'
    | 'android'
    | 'ios'
    | 'xcode'
    | 'androidstudio'
    | 'html'
    | 'react'
    | 'typescript'
    | 'tailwind'
    | 'nextjs'
    | 'docker'
    | 'docker-compose'
    | 'fastapi'
    | 'python'
    | 'reportlab'
    | 'pandas';

export type {
    Articles,
    ContactFormData,
    CookieConsentProps,
    CoursesType,
    experience,
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
    TechKey,
    TimelineItemType,
};
