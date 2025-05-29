'use client';
import { Avatar, AvatarImage } from '@/app/shared/ui/avatar';
import { Button } from '@/app/shared/ui/button';
import { Skeleton } from '@/app/shared/ui/skeleton';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Bounce } from 'react-awesome-reveal';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

export default function Header() {
    const t = useTranslations('Header');
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <header className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
                <section className="md:mt-2 md:w-1/2">
                    <div className="w-40 h-40 md:w-72 md:h-72 rounded-full mb-4 mx-auto mt-2 relative overflow-hidden">
                        {!isLoaded && <Skeleton className="w-full h-full rounded-full absolute top-0 left-0 z-0" />}
                        <Avatar className="w-full h-full z-10">
                            <AvatarImage
                                src="profile.jpg"
                                alt="victorzarzar"
                                onLoad={() => setIsLoaded(true)}
                                className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                            />
                        </Avatar>
                    </div>
                </section>
                <section className="md:mt-2 md:w-3/5 md:ml-8">
                    {!isLoaded ? (
                        <div className="space-y-4">
                            <Skeleton className="h-12 w-3/4 mx-auto md:mx-0 mt-6 md:mt-0" />
                            <Skeleton className="h-6 w-full mt-4" />
                            <Skeleton className="h-6 w-4/5 mx-auto md:mx-0 mb-6" />
                            <div className="flex space-x-1 justify-center md:justify-start">
                                <Skeleton className="h-10 w-24" />
                                <Skeleton className="h-10 w-28" />
                            </div>
                        </div>
                    ) : (
                        <>
                            <Bounce>
                                <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-5xl">{t('h1')}</h1>
                                <p className="text-lg mt-4 mb-6 md:text-2xl">
                                    <span className="font-semibold text-gray-500 whitespace-pre-line">{t('span')}</span>
                                </p>
                            </Bounce>
                            <nav className="container-button mx-auto space-x-1 flex">
                                <Link href="https://github.com/Victor-Zarzar" target="_blank" rel="noreferrer">
                                    <Button
                                        className="px-2 md:px-4 dark:bg-transparent bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground
                                        hover:-translate-y-1 border-black dark:border-gray-200 cursor-pointer"
                                        variant="outline"
                                    >
                                        <FaGithub className="mr-1" /> Github
                                    </Button>
                                </Link>
                                <Link href="https://www.linkedin.com/in/victorzarzar" target="_blank" rel="noreferrer">
                                    <Button
                                        className="px-2 md:px-4 dark:bg-transparent bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground 
                                        hover:-translate-y-1 border-black dark:border-gray-200 cursor-pointer"
                                        variant="outline"
                                    >
                                        <FaLinkedin className="mr-1" /> Linkedin
                                    </Button>
                                </Link>
                            </nav>
                        </>
                    )}
                </section>
            </header>

            <div className="flex flex-row items-center text-center justify-center mt-0">
                <HiArrowDown size={35} className="animate-bounce" />
            </div>
        </>
    );
}
