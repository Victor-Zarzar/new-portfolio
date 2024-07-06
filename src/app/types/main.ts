type experience = {
    company: string,
    position: string,
    startDate: string,
    endDate: string,
    desc: string[]
}

type education = {
    institute: string,
    degree: string,
    startDate: string,
    endDate: string,
}

type Project = {
    title: string;
    description: string | JSX.Element;
    photo: string;
    sourceCodeLink: string;
    sourceLinkPrivacy: string;
};

type NavItem = {
    label: string
    link: string
}

export type { NavItem, Project, experience, education };