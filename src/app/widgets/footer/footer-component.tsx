import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { BiLogoDevTo } from 'react-icons/bi';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="container-footer mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl mt-20 md:mt-40">
            <hr className="w-full h-0.5 mx-auto mt-0 bg-neutral-200 dark:border-b dark:border-stone-600 border-0" />
            <div className="p-4 flex flex-col text-center md:flex-row md:justify-between">
                <div className="flex flex-row items-center justify-center space-x-1">
                    <span>© {currentYear} Victor Zarzar</span>
                </div>
                <div className="flex flex-row items-center justify-center space-x-2 mb-1 mt-2 md:mt-0">
                    <a
                        href="https://github.com/Victor-Zarzar"
                        rel="noreferrer"
                        target="_blank"
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                    >
                        <AiOutlineGithub size={30} />
                    </a>
                    <a
                        href="https://dev.to/victorzarzar"
                        rel="noreferrer"
                        target="_blank"
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                    >
                        <BiLogoDevTo size={32} />
                    </a>
                    <a
                        href="https://twitter.com/victorzarzar1"
                        rel="noreferrer"
                        target="_blank"
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                    >
                        <FaSquareXTwitter size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/victorzarzar"
                        rel="noreferrer"
                        target="_blank"
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                    >
                        <AiOutlineLinkedin size={30} />
                    </a>
                    <a
                        href="https://www.instagram.com/victorzarzar7/"
                        rel="noreferrer"
                        target="_blank"
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                    >
                        <AiOutlineInstagram size={30} />
                    </a>
                    <a
                        href="https://www.facebook.com/victorzarzar58"
                        rel="noreferrer"
                        target="_blank"
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                    >
                        <AiOutlineFacebook size={30} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
