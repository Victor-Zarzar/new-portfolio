'use client';

import { type Project } from '@/app/shared/types/main';
import { Card, CardContent } from '@/app/shared/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/app/shared/ui/carousel';
import AndroidIcon from '@/app/shared/ui/icons/projects/android';
import AndroidStudioIcon from '@/app/shared/ui/icons/projects/androidstudio';
import DartIcon from '@/app/shared/ui/icons/projects/dart';
import DockerIcon from '@/app/shared/ui/icons/projects/docker';
import FlutterIcon from '@/app/shared/ui/icons/projects/flutter';
import HtmlIcon from '@/app/shared/ui/icons/projects/html';
import IosIcon from '@/app/shared/ui/icons/projects/ios';
import NextjsIcon from '@/app/shared/ui/icons/projects/nextjs';
import ReactIcon from '@/app/shared/ui/icons/projects/react';
import TailwindIcon from '@/app/shared/ui/icons/projects/tailwindcss';
import TypescriptIcon from '@/app/shared/ui/icons/projects/typescript';
import XcodeIcon from '@/app/shared/ui/icons/projects/xcode';
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

    const gasoline = '/gasoline.png';
    const grocery = '/groceryapp.png';
    const agepet = '/agepet.png';
    const scanner = '/scanner.png';
    const portfolio = '/portfolio.png';
    const lawfirm = '/lawfirm.png';
    const pdfreader = '/pdf-reader.png';

    const projects: Project[] = [
        {
            title: t('projecttitle7'),
            description: (
                <div>
                    <p className="mb-3">{t('projectdescription7')}</p>
                    <div className="flex space-x-2 md:space-x-2 transition-transform cursor-pointer">
                        <FlutterIcon />
                        <DartIcon />
                        <AndroidIcon />
                        <IosIcon />
                        <XcodeIcon />
                        <AndroidStudioIcon />
                    </div>
                </div>
            ),
            photo: pdfreader,
            sourceCodeLink: 'https://github.com/Victor-Zarzar/pdf-reader',
            sourceLinkPrivacy: 'privacypolicy-apps',
            androidLink: 'https://play.google.com/store/apps/details?id=YOUR_APP_ID',
            iosLink: 'https://apps.apple.com/us/app/YOUR_APP_ID',
            webLink: '',
        },
        {
            title: t('projecttitle1'),
            description: (
                <div>
                    <p className="mb-3">{t('projectdescription1')}</p>
                    <div className="flex space-x-2 md:space-x-2 transition-transform cursor-pointer">
                        <FlutterIcon />
                        <DartIcon />
                        <AndroidIcon />
                        <IosIcon />
                        <XcodeIcon />
                        <AndroidStudioIcon />
                    </div>
                </div>
            ),
            photo: gasoline,
            sourceCodeLink: 'https://github.com/Victor-Zarzar/alcool_ou_gasolina.git',
            sourceLinkPrivacy: 'privacypolicy-apps',
            androidLink: 'https://play.google.com/store/apps/details?id=YOUR_APP_ID',
            iosLink: 'https://apps.apple.com/us/app/YOUR_APP_ID',
            webLink: '',
        },
        {
            title: t('projecttitle2'),
            description: (
                <div>
                    <p className="mb-3">{t('projectdescription2')}</p>
                    <div className="flex space-x-2 md:space-x-2 transition-transform cursor-pointer">
                        <HtmlIcon />
                        <ReactIcon />
                        <TypescriptIcon />
                        <TailwindIcon />
                        <NextjsIcon />
                        <DockerIcon />
                    </div>
                </div>
            ),
            photo: lawfirm,
            sourceCodeLink: 'https://github.com/Victor-Zarzar/law-firm',
            sourceLinkPrivacy: 'privacypolicy',
            androidLink: '',
            iosLink: '',
            webLink: 'https://advocaciabaptista.vercel.app',
        },
        {
            title: t('projecttitle3'),
            description: (
                <div>
                    <p className="mb-3">{t('projectdescription3')}</p>
                    <div className="flex space-x-2 md:space-x-2 transition-transform cursor-pointer">
                        <FlutterIcon />
                        <DartIcon />
                        <AndroidIcon />
                        <IosIcon />
                        <XcodeIcon />
                        <AndroidStudioIcon />
                    </div>
                </div>
            ),
            photo: grocery,
            sourceCodeLink: 'https://github.com/Victor-Zarzar/grocery-list',
            sourceLinkPrivacy: 'privacypolicy-apps',
            androidLink: 'https://play.google.com/store/apps/details?id=YOUR_APP_ID',
            iosLink: 'https://apps.apple.com/us/app/YOUR_APP_ID',
            webLink: '',
        },
        {
            title: t('projecttitle4'),
            description: (
                <div>
                    <p className="mb-3">{t('projectdescription4')}</p>
                    <div className="flex space-x-2 md:space-x-2 transition-transform cursor-pointer">
                        <FlutterIcon />
                        <DartIcon />
                        <AndroidIcon />
                        <IosIcon />
                        <XcodeIcon />
                        <AndroidStudioIcon />
                    </div>
                </div>
            ),
            photo: agepet,
            sourceCodeLink: 'https://github.com/Victor-Zarzar/age-pet',
            sourceLinkPrivacy: 'privacypolicy-apps',
            androidLink: 'https://play.google.com/store/apps/details?id=YOUR_APP_ID',
            iosLink: 'https://apps.apple.com/us/app/YOUR_APP_ID',
            webLink: '',
        },
        {
            title: t('projecttitle5'),
            description: (
                <div>
                    <p className="mb-3">{t('projectdescription5')}</p>
                    <div className="flex space-x-1 md:space-x-2 transition-transform cursor-pointer">
                        <HtmlIcon />
                        <ReactIcon />
                        <TypescriptIcon />
                        <TailwindIcon />
                        <NextjsIcon />
                        <DockerIcon />
                    </div>
                </div>
            ),
            photo: portfolio,
            sourceCodeLink: 'https://github.com/Victor-Zarzar/new-portfolio',
            sourceLinkPrivacy: 'privacypolicy',
            webLink: 'http://victorzarzar.com.br',
            androidLink: '',
            iosLink: '',
        },
        {
            title: t('projecttitle6'),
            description: (
                <div>
                    <p className="mb-3">{t('projectdescription6')}</p>
                    <div className="flex space-x-2 md:space-x-2 transition-transform cursor-pointer">
                        <FlutterIcon />
                        <DartIcon />
                        <AndroidIcon />
                        <IosIcon />
                        <XcodeIcon />
                        <AndroidStudioIcon />
                    </div>
                </div>
            ),
            photo: scanner,
            sourceCodeLink: 'https://github.com/Victor-Zarzar/scanner-pdf',
            sourceLinkPrivacy: 'privacypolicy-apps',
            androidLink: 'https://play.google.com/store/apps/details?id=YOUR_APP_ID',
            iosLink: 'https://apps.apple.com/us/app/YOUR_APP_ID',
            webLink: '',
        },
    ];

    return (
        <>
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
                                                        <CardContent className="flex aspect-square items-center justify-center p-6 dark:bg-stone-900">
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
                                                <PopoverContent className="w-60 md:w-80 dark:bg-stone-900 border-2">
                                                    <div className="space-y-2">
                                                        <h4 className="font-medium leading-none text-sm md:text-md title-font">{project.title}</h4>
                                                        <div className="text-xs md:text-sm font-semibold">{project.description}</div>
                                                        <div className="flex mx-auto items-center justify-center space-x-3">
                                                            <a
                                                                href={project.sourceCodeLink}
                                                                target="_blank"
                                                                className="text-gray-500 hover:text-gray-400 dark:hover:text-white dark:text-gray-400"
                                                                rel="noreferrer"
                                                            >
                                                                <AiOutlineGithub
                                                                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100
                                                                     mx-auto mt-2 md:mt-3"
                                                                    size={30}
                                                                />
                                                            </a>
                                                            <a
                                                                href={project.sourceLinkPrivacy}
                                                                target="_blank"
                                                                className="text-gray-500 hover:text-gray-400 dark:hover:text-white dark:text-gray-400"
                                                                rel="noreferrer"
                                                            >
                                                                <MdPrivacyTip
                                                                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100
                                                                     mx-auto mt-2 md:mt-3"
                                                                    size={30}
                                                                />
                                                            </a>
                                                            {project.androidLink && (
                                                                <a
                                                                    href={project.androidLink}
                                                                    target="_blank"
                                                                    className="text-gray-500 hover:text-gray-400 dark:hover:text-white dark:text-gray-400"
                                                                    rel="noreferrer"
                                                                >
                                                                    <FaGooglePlay
                                                                        className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100 
                                                                        mx-auto mt-2 md:mt-3"
                                                                        size={30}
                                                                    />
                                                                </a>
                                                            )}
                                                            {project.iosLink && (
                                                                <a
                                                                    href={project.iosLink}
                                                                    target="_blank"
                                                                    className="text-gray-500 hover:text-gray-400 dark:hover:text-white dark:text-gray-400"
                                                                    rel="noreferrer"
                                                                >
                                                                    <FaAppStoreIos
                                                                        className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100 
                                                                        mx-auto mt-2 md:mt-3"
                                                                        size={30}
                                                                    />
                                                                </a>
                                                            )}
                                                            {project.webLink && (
                                                                <a
                                                                    href={project.webLink}
                                                                    target="_blank"
                                                                    className="text-gray-500 hover:text-gray-400 dark:hover:text-white dark:text-gray-400"
                                                                    rel="noreferrer"
                                                                >
                                                                    <AiOutlineGlobal
                                                                        className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100 
                                                                        mx-auto mt-2 md:mt-3"
                                                                        size={30}
                                                                    />
                                                                </a>
                                                            )}
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
        </>
    );
}
