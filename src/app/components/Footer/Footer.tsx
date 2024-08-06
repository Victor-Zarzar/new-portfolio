import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { BiLogoDevTo } from 'react-icons/bi';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="container-footer">
            <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
                <hr className="w-full h-0.5 mx-auto mt-0 bg-neutral-200 dark:border-b dark:border-stone-600 border-0"></hr>
                <div className="mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between">
                    <div className="flex flex-row items-center justify-center space-x-1 ">
                        © {currentYear} Victor Zarzar<a href="/" className="hover:underline"></a>
                    </div>
                    <div className="flex flex-row items-center justify-center space-x-2 mb-1 mt-2 md:mt-0">
                        <a href="https://github.com/Victor-Zarzar" rel="noreferrer" target="_blank">
                            <AiOutlineGithub className="hover:-translate-y-1 transition-transform cursor-pointer" size={30} />
                        </a>
                        <a href="https://dev.to/victorzarzar" rel="noreferrer" target="_blank">
                            <BiLogoDevTo className="hover:-translate-y-1 transition-transform cursor-pointer" size={30} />
                        </a>
                        <a href="https://twitter.com/victorzarzar1" rel="noreferrer" target="_blank">
                            <FaSquareXTwitter className="hover:-translate-y-1 transition-transform cursor-pointer" size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/victorzarzar" rel="noreferrer" target="_blank">
                            <AiOutlineLinkedin className="hover:-translate-y-1 transition-transform cursor-pointer" size={30} />
                        </a>
                        <a href="https://www.instagram.com/victorzarzar7/" rel="noreferrer" target="_blank">
                            <AiOutlineInstagram className="hover:-translate-y-1 transition-transform cursor-pointer" size={30} />
                        </a>
                        <a href="https://www.facebook.com/victorzarzar58" rel="noreferrer" target="_blank">
                            <AiOutlineFacebook className="hover:-translate-y-1 transition-transform cursor-pointer" size={30} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}