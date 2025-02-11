'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Bounce } from 'react-awesome-reveal';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

export default function Header() {
    const t = useTranslations('Header');

    return (
        <>
            <header className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
                <section className="md:mt-2 md:w-1/2">
                    <Avatar className="w-40 h-40 md:w-72 md:h-72 bg-gray-300 rounded-full mb-4 mx-auto mt-2">
                        <AvatarImage src="profile.jpg" alt="victorzarzar" />
                        <AvatarFallback className="dark:bg-stone-900">VZ</AvatarFallback>
                    </Avatar>
                </section>
                <section className="md:mt-2 md:w-3/5">
                    <Bounce>
                        <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-5xl">{t('h1')}</h1>
                        <p className="text-lg mt-4 mb-6 md:text-2xl">
                            <span className="font-semibold text-gray-600">{t('span')}</span>
                        </p>
                    </Bounce>
                    <nav className="container-button mx-auto space-x-1 flex">
                        <Link href="https://github.com/Victor-Zarzar" target="_blank" rel="noreferrer">
                            <Button className="px-2 md:px-4">
                                <FaGithub className="mr-1" /> Github
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/victorzarzar" target="_blank" rel="noreferrer">
                            <Button className="px-2 md:px-4">
                                <FaLinkedin className="mr-1" /> Linkedin
                            </Button>
                        </Link>
                    </nav>
                </section>
            </header>
            <div className="flex flex-row items-center text-center justify-center mt-0">
                <HiArrowDown size={35} className="animate-bounce" />
            </div>
        </>
    );
}
