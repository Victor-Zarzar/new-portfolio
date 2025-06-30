import { ReactNode } from 'react';
import { IconType } from 'react-icons';

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

type Locale = 'en' | 'es' | 'pt';

export type {
    CardItemType,
    ContactFormData,
    experience,
    GetProjectsParams,
    GetServicesDataParams,
    GetTimelineDataParams,
    Locale,
    NavItem,
    Project,
    SkillOutlineProps,
    TimelineItemType,
};
