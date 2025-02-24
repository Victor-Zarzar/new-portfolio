'use client';
import { type NavItem } from '@/app/types/main';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowRight, FaLaptopCode } from 'react-icons/fa';
import { IoMdClose, IoMdMenu, IoMdSettings } from 'react-icons/io';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import LangToggler from '../LocaleSwitcher/LangToggler';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [open, setOpen] = useState(false);
    const { setTheme, theme } = useTheme();
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
        <nav className="dark:bg-stone-900 bg-[#ffffff] w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow dark:border-b dark:border-stone-600 border-gray-300">
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
                            <Dialog open={open} onOpenChange={setOpen}>
                                <DialogTrigger asChild>
                                    <button className="p-1 rounded-xl" onClick={() => setOpen(true)}>
                                        <IoMdSettings size={27} />
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-[320px] sm:max-w-[425px] dark:bg-stone-900 bg-[#ffffff]">
                                    <DialogHeader>
                                        <DialogTitle>
                                            <div className="flex items-center">
                                                <IoMdSettings size={20} />
                                                {t('settings')}
                                            </div>
                                        </DialogTitle>
                                        <DialogDescription>{t('dialog-description')}</DialogDescription>
                                    </DialogHeader>
                                    <span className="border-b" />
                                    <div className="grid gap-4 py-4">
                                        <div className="flex items-center justify-between">
                                            <span>{t('toggle-theme')}</span>
                                            <Select value={theme} onValueChange={setTheme}>
                                                <SelectTrigger className="w-[120px]">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent className="bg-[#ffffff]">
                                                    <SelectItem value="light">
                                                        <div className="flex items-center space-x-2">
                                                            <MdOutlineLightMode />
                                                            <span>{t('light')}</span>
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="dark">
                                                        <div className="flex items-center space-x-2">
                                                            <MdDarkMode />
                                                            <span>{t('dark')}</span>
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="system">
                                                        <div className="flex items-center space-x-2">
                                                            <FaLaptopCode />
                                                            <span>{t('system')}</span>
                                                        </div>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>{t('language')}</span>
                                            <LangToggler />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="button" className="cursor-pointer" onClick={() => setOpen(false)}>
                                            {t('close')}
                                            <FaArrowRight className="ml-1 animate-pulse" />
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
