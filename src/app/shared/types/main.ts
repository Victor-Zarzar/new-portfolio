import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';

type experience = {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    desc: string[];
};

type Project = {
    androidLink: string;
    iosLink: string;
    webLink: string;
    title: string;
    description: ReactNode;
    photo: string;
    sourceCodeLink: string;
    sourceLinkPrivacy: string;
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

type CardItemType = {
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

type Locale = 'en' | 'es' | 'pt';

type CookieConsentProps = {
    demo?: boolean;
    onAcceptCallback?: () => void;
    onDeclineCallback?: () => void;
};

export type {
    CardItemType,
    ContactFormData,
    CookieConsentProps,
    CoursesType,
    experience,
    GetCourseDataParams,
    GetProjectsParams,
    GetServicesDataParams,
    GetTimelineDataParams,
    Locale,
    NavItem,
    Project,
    SkillOutlineProps,
    TimelineItemType,
};
