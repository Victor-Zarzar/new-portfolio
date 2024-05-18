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
    photo: string;
    sourceCodeLink: string;
};

type NavItem = {
    label: string
    link: string
}

export type { NavItem, Project, experience, education };