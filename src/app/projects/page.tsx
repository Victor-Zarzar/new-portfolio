'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image';
import TypescriptIcon from "@/app/components/icons/projects/typescript";
import HtmlIcon from "@/app/components/icons/projects/html";
import NextjsIcon from "@/app/components/icons/projects/nextjs";
import DartIcon from "@/app/components/icons/projects/dart";
import FlutterIcon from "@/app/components/icons/projects/flutter";
import TailwindIcon from "@/app/components/icons/projects/tailwindcss";
import ReactIcon from "@/app/components/icons/projects/react";
import DockerIcon from "@/app/components/icons/projects/docker";
import AndroidIcon from "@/app/components/icons/projects/android";
import IosIcon from "@/app/components/icons/projects/ios";
import XcodeIcon from "@/app/components/icons/projects/xcode";
import AndroidStudioIcon from "@/app/components/icons/projects/androidstudio";
import { AiOutlineGithub } from "react-icons/ai";
import Autoplay from "embla-carousel-autoplay";
import { Project } from "../types/main";

export default function Projects() {

    const gasoline = '/gasoline.png';
    const agepet = '/agepet.png';
    const shoppingapp = '/shoppingflutter.png';
    const portfolio = '/portfolio.png';
    const lawfirm = '/lawfirm.png';

    const projects: Project[] = [
        {
            title: "Alcohol or Gasoline App",
            description: (
                <div>
                    <p className="mb-3">App Alcohol or Gasoline Flutter.</p>
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
            sourceCodeLink: "https://github.com/Victor-Zarzar/alcool_ou_gasolina.git",
        },
        {
            title: "Law Firm",
            description: (
                <div>
                    <p className="mb-3">Web site application Law Firm.</p>
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
            sourceCodeLink: "https://github.com/Victor-Zarzar/law-firm",
        },
        {
            title: "Age Pet",
            description: (
                <div>
                    <p className="mb-3">Age Pet App Flutter.</p>
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
            sourceCodeLink: "https://github.com/Victor-Zarzar/age-pet",
        },
        {
            title: "My Portfolio",
            description: (
                <div>
                    <p className='mb-3'>My professional portfolio website.</p>
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
            sourceCodeLink: "https://github.com/Victor-Zarzar/new-portfolio",
        },
        {
            title: "Shopping App",
            description: (
                <div>
                    <p className="mb-3">App Shopping Flutter.</p>
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
            photo: shoppingapp,
            sourceCodeLink: "https://github.com/Victor-Zarzar/shopping-flutter",
        },
    ];

    return (
        <>
            <div className="container-projects">
                <div className="col-span-4 mx-auto">
                    <div className="h1 p-6">
                        <Fade>
                            <h1 className="title-projects mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">Projects</h1>
                        </Fade>
                    </div>
                </div>
                <div className="my-4 mt-8 md:mt-6" id="projects">
                    <h1 className="title-skills font-extrabold leading-10 tracking-tight text-sm md:text-2xl lg:text-2xl mt-8 md:mt-4 mb-8 text-center">
                        Featured projects
                    </h1>
                </div>
                <div className="carrousel-container">
                    <Carousel plugins={[Autoplay({ delay: 2000 }),
                    ]} className="w-full max-w-[16rem] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto mb-52 md:mb-72">
                        <CarouselContent className="-ml-1">
                            {projects.map((project, index) => (
                                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-2">
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
                                                                className="w-[16rem] h-full md:w-[20rem] lg:w-[18rem] xl:w-[23rem] absolute" />
                                                        </CardContent>
                                                    </div>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-60 md:w-80 dark:bg-stone-900 border-3">
                                                    <div className="space-y-2">
                                                        <h4 className="font-medium leading-none text-sm md:text-md title-font">{project.title}</h4>
                                                        <div className="text-xs md:text-sm font-semibold">
                                                            {project.description}
                                                        </div>
                                                        <a href={project.sourceCodeLink} target="_blank" className="text-gray-500 hover:text-gray-400 dark:hover:text-white 
                                                    dark:text-gray-400" rel="noreferrer">
                                                            <AiOutlineGithub
                                                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100 mx-auto mt-2 md:mt-3"
                                                                size={30}
                                                            />
                                                        </a>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="dark:bg-stone-900 dark:hover:bg-stone-900" />
                        <CarouselNext className="dark:bg-stone-900 dark:hover:bg-stone-900" />
                    </Carousel>
                </div>
            </div>
        </>
    )
}
