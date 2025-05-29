'use client';

import { getProjectsData } from '@/app/shared/data/projectsData';
import { Card, CardContent } from '@/app/shared/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/app/shared/ui/carousel';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/shared/ui/popover';
import Autoplay from 'embla-carousel-autoplay';
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

            <section className="carrousel-container">
                <Carousel
                    plugins={[Autoplay({ delay: 2000 })]}
                    className="w-full max-w-[16rem] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto mb-52 md:mb-72"
                >
                    <CarouselContent className="-ml-1">
                        {projects.map((project, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <article className="p-2">
                                    <Card>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <div className="cursor-pointer">
                                                    <CardContent className="flex aspect-square items-center justify-center p-6 dark:bg-stone-950">
                                                        <Image
                                                            src={project.photo}
                                                            alt={project.title}
                                                            width={600}
                                                            height={600}
                                                            priority
                                                            className="w-[16rem] h-full md:w-[20rem] lg:w-[18rem] xl:w-[23rem] absolute"
                                                        />
                                                    </CardContent>
                                                </div>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-60 md:w-80 dark:bg-stone-950 border-2">
                                                <div className="space-y-2">
                                                    <h4 className="font-medium leading-none text-sm md:text-md title-font">{project.title}</h4>
                                                    <div className="text-xs md:text-sm font-semibold">{project.description}</div>
                                                    <div className="flex mx-auto items-center justify-center space-x-3">
                                                        <ProjectLinks project={project} />
                                                    </div>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </Card>
                                </article>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="dark:bg-stone-900 dark:hover:bg-stone-900" />
                    <CarouselNext className="dark:bg-stone-900 dark:hover:bg-stone-900" />
                </Carousel>
            </section>
        </main>
    );
}

function ProjectLinks({ project }: { project: any }) {
    return (
        <>
            <a href={project.sourceCodeLink} target="_blank" rel="noreferrer">
                <AiOutlineGithub size={30} className="hover:-translate-y-1 transition-transform text-neutral-500 dark:text-neutral-100" />
            </a>
            <a href={project.sourceLinkPrivacy} target="_blank" rel="noreferrer">
                <MdPrivacyTip size={30} className="hover:-translate-y-1 transition-transform text-neutral-500 dark:text-neutral-100" />
            </a>
            {project.androidLink && (
                <a href={project.androidLink} target="_blank" rel="noreferrer">
                    <FaGooglePlay size={30} className="hover:-translate-y-1 transition-transform text-neutral-500 dark:text-neutral-100" />
                </a>
            )}
            {project.iosLink && (
                <a href={project.iosLink} target="_blank" rel="noreferrer">
                    <FaAppStoreIos size={30} className="hover:-translate-y-1 transition-transform text-neutral-500 dark:text-neutral-100" />
                </a>
            )}
            {project.webLink && (
                <a href={project.webLink} target="_blank" rel="noreferrer">
                    <AiOutlineGlobal size={30} className="hover:-translate-y-1 transition-transform text-neutral-500 dark:text-neutral-100" />
                </a>
            )}
        </>
    );
}
