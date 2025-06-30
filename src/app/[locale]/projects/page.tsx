'use client';

import { getProjectsData } from '@/app/shared/data/projectsData';
import { Card, CardContent } from '@/app/shared/ui/card';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { AiOutlineGithub, AiOutlineGlobal } from 'react-icons/ai';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import { MdPrivacyTip } from 'react-icons/md';

export default function Projects() {
    const t = useTranslations('Projects');
    const projects = getProjectsData({ t });

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

            <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-4 md:px-40 mb-52 md:mb-72">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className="max-w-2xl w-full mx-auto transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg
                        border-black dark:border-gray-400 dark:hover:shadow-stone-600 cursor-pointer"
                    >
                        <CardContent className="p-4">
                            <div className="relative w-11/12 mx-auto h-48 md:h-56 lg:h-64 rounded overflow-hidden">
                                <Image
                                    src={project.photo}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-lg"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                            <h4 className="mt-4 text-lg font-semibold">{project.title}</h4>
                            <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{project.description}</div>
                            <div className="flex mt-4 justify-start items-center gap-3">
                                <ProjectLinks project={project} />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </section>
        </main>
    );
}

function ProjectLinks({ project }: { project: any }) {
    return (
        <>
            {project.sourceCodeLink && (
                <a href={project.sourceCodeLink} target="_blank" rel="noreferrer">
                    <AiOutlineGithub size={24} className="hover:-translate-y-1 transition-transform text-neutral-500 dark:text-neutral-100" />
                </a>
            )}
            {project.sourceLinkPrivacy && (
                <a href={project.sourceLinkPrivacy} target="_blank" rel="noreferrer">
                    <MdPrivacyTip size={24} className="hover:-translate-y-1 transition-transform text-neutral-500 dark:text-neutral-100" />
                </a>
            )}
            {project.androidLink && (
                <a href={project.androidLink} target="_blank" rel="noreferrer">
                    <FaGooglePlay size={24} className="hover:-translate-y-1 transition-transform text-neutral-500 dark:text-neutral-100" />
                </a>
            )}
            {project.iosLink && (
                <a href={project.iosLink} target="_blank" rel="noreferrer">
                    <FaAppStoreIos size={24} className="hover:-translate-y-1 transition-transform text-neutral-500 dark:text-neutral-100" />
                </a>
            )}
            {project.webLink && (
                <a href={project.webLink} target="_blank" rel="noreferrer">
                    <AiOutlineGlobal size={24} className="hover:-translate-y-1 transition-transform text-neutral-500 dark:text-neutral-100" />
                </a>
            )}
        </>
    );
}
