import { JSX } from 'react';

type experience = {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    desc: string[];
};

type education = {
    institute: string;
    degree: string;
    startDate: string;
    endDate: string;
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

type Locale = 'en' | 'es' | 'pt';

export type { education, experience, Locale, NavItem, Project };
