'use client';

import SettingsSwitcher from '@/app/features/settings-switcher/settings-switcher';
import { type NavItem } from '@/app/shared/types/main';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const t = useTranslations('Navbar');

    const NAV_ITEMS: Array<NavItem> = [
        {
            label: t('home'),
            link: '/',
        },
        {
            label: t('about'),
            link: 'about',
        },
        {
            label: t('services'),
            link: 'services',
        },
        {
            label: t('projects'),
            link: 'projects',
        },
        {
            label: t('contact'),
            link: 'contact',
        },
    ];

    return (
        <nav className="dark:bg-stone-950 bg-[#ffffff] w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow dark:border-b dark:border-stone-600 border-gray-300">
            <div className="justify-between md:items-center md:flex">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        <div className="container flex items-center space-x-2">
                            <h1
                                className="text-2xl lg:text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800
                             dark:from-gray-300 dark:to-gray-500 drop-shadow-md transition-all duration-300 hover:scale-105 hover:text-gray-500
                              dark:hover:text-gray-300 font-mono animate-pulse"
                            >
                                {t('titlenavbar')}
                            </h1>
                        </div>
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                        </button>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 z-50 bg-opacity-90 ${navbar ? 'block' : 'hidden'}`}
                    >
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-3 lg:space-x-6 md:space-y-0 text-center">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={item.link}
                                        className={'block lg:inline-block hover:text-neutral-500cursor-pointer'}
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                            <SettingsSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
