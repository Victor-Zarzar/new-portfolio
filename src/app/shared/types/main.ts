import { type JSX } from 'react';
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
    description: string | JSX.Element;
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
};

type SkillOutlineProps = {
    Icon: IconType;
    text: string;
};

type Locale = 'en' | 'es' | 'pt';

export type { CardItemType, ContactFormData, experience, Locale, NavItem, Project, SkillOutlineProps, TimelineItemType };
