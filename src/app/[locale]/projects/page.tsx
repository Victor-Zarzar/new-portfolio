'use client';

import { getProjectsData } from '@/app/shared/data/getProjectsData';
import type { Project, TechKey } from '@/app/shared/types/main';
import { Card, CardContent } from '@/app/shared/ui/card';
import AndroidIcon from '@/app/shared/ui/icons/projects/android';
import AndroidStudioIcon from '@/app/shared/ui/icons/projects/androidstudio';
import DartIcon from '@/app/shared/ui/icons/projects/dart';
import DockerIcon from '@/app/shared/ui/icons/projects/docker';
import DockerComposeIcon from '@/app/shared/ui/icons/projects/docker-compose';
import FastAPIIcon from '@/app/shared/ui/icons/projects/fastapi';
import FlutterIcon from '@/app/shared/ui/icons/projects/flutter';
import GrafanaIcon from '@/app/shared/ui/icons/projects/grafana';
import HtmlIcon from '@/app/shared/ui/icons/projects/html';
import IosIcon from '@/app/shared/ui/icons/projects/ios';
import KibanaIcon from '@/app/shared/ui/icons/projects/kibana';
import KotlinIcon from '@/app/shared/ui/icons/projects/kotlin';
import LokiIcon from '@/app/shared/ui/icons/projects/loki';
import NextjsIcon from '@/app/shared/ui/icons/projects/nextjs';
import PandasIcon from '@/app/shared/ui/icons/projects/pandas';
import PythonIcon from '@/app/shared/ui/icons/projects/python';
import ReactIcon from '@/app/shared/ui/icons/projects/react';
import ReportLabIcon from '@/app/shared/ui/icons/projects/reportlab';
import SentryIcon from '@/app/shared/ui/icons/projects/sentry';
import SwiftIcon from '@/app/shared/ui/icons/projects/swift';
import TailwindIcon from '@/app/shared/ui/icons/projects/tailwindcss';
import TypescriptIcon from '@/app/shared/ui/icons/projects/typescript';
import XcodeIcon from '@/app/shared/ui/icons/projects/xcode';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import type { JSX } from 'react';
import { Fade } from 'react-awesome-reveal';
import { AiOutlineGithub, AiOutlineGlobal } from 'react-icons/ai';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import { MdPrivacyTip } from 'react-icons/md';

const techIconMap: Record<TechKey, JSX.Element> = {
    flutter: <FlutterIcon />,
    dart: <DartIcon />,
    android: <AndroidIcon />,
    ios: <IosIcon />,
    xcode: <XcodeIcon />,
    androidstudio: <AndroidStudioIcon />,
    html: <HtmlIcon />,
    react: <ReactIcon />,
    typescript: <TypescriptIcon />,
    tailwind: <TailwindIcon />,
    nextjs: <NextjsIcon />,
    docker: <DockerIcon />,
    'docker-compose': <DockerComposeIcon />,
    fastapi: <FastAPIIcon />,
    python: <PythonIcon />,
    reportlab: <ReportLabIcon />,
    pandas: <PandasIcon />,
    sentry: <SentryIcon />,
    kibana: <KibanaIcon />,
    loki: <LokiIcon />,
    grafana: <GrafanaIcon />,
    kotlin: <KotlinIcon />,
    swift: <SwiftIcon />,
};

function ProjectDescription({ description, techStack }: { description: string; techStack: TechKey[] }) {
    return (
        <div className="mt-3 text-sm">
            <p className="mb-3 leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-2 mt-1">
                {techStack.map((key) => (
                    <span key={key} className="inline-flex items-center justify-center">
                        {techIconMap[key]}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Projects() {
    const t = useTranslations('Projects');
    const projects: Project[] = getProjectsData({ t });

    return (
        <main className="container-projects">
            <section className="col-span-4 mx-auto">
                <header className="h1 p-6">
                    <Fade>
                        <h1 className="title-projects mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">
                            {t('h1')}
                        </h1>
                    </Fade>
                </header>
            </section>

            <section className="my-4 mt-8 md:mt-6" id="projects">
                <h2 className="title-skills font-extrabold leading-10 tracking-tight text-sm md:text-2xl lg:text-2xl mt-8 md:mt-4 mb-8 text-center">
                    {t('h2')}
                </h2>
            </section>

            <section className="px-4 md:px-40 mb-52 md:mb-72">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </section>
        </main>
    );
}

function ProjectCard({ project }: { project: Project; index: number }) {
    return (
        <Card
            className="max-w-2xl w-full mx-auto transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg
                        border-black dark:border-gray-400 dark:hover:shadow-stone-600 cursor-pointer"
        >
            <CardContent className="p-6 flex flex-col flex-1">
                <div className="relative aspect-video w-full overflow-hidden shrink-0">
                    <Image
                        src={project.photo}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        loading="lazy"
                    />
                </div>

                <h4 className="mt-4 text-lg font-semibold group-hover:text-primary transition-colors">{project.title}</h4>

                <ProjectDescription description={project.description} techStack={project.techStack} />

                <div className="flex mt-4 justify-start items-center gap-4">
                    <ProjectLinks project={project} />
                </div>
            </CardContent>
        </Card>
    );
}

function ProjectLinks({ project }: { project: Project }) {
    return (
        <>
            {project.sourceCodeLink && (
                <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-100 hover:text-primary transition-colors"
                >
                    <AiOutlineGithub size={18} />
                </a>
            )}
            {project.sourceLinkPrivacy && (
                <a
                    href={project.sourceLinkPrivacy}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-100 hover:text-primary transition-colors"
                >
                    <MdPrivacyTip size={18} />
                </a>
            )}
            {project.androidLink && (
                <a
                    href={project.androidLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-100 hover:text-primary transition-colors"
                >
                    <FaGooglePlay size={18} />
                </a>
            )}
            {project.iosLink && (
                <a
                    href={project.iosLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-100 hover:text-primary transition-colors"
                >
                    <FaAppStoreIos size={18} />
                </a>
            )}
            {project.webLink && (
                <a
                    href={project.webLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-100 hover:text-primary transition-colors"
                >
                    <AiOutlineGlobal size={18} />
                </a>
            )}
        </>
    );
}
