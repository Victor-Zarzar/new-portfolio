import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BiLogoDevTo } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import type { SocialLink } from "@/app/shared/types/main";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      icon: AiOutlineGithub,
      href: "https://github.com/Victor-Zarzar",
      label: "GitHub",
    },
    {
      icon: BiLogoDevTo,
      href: "https://dev.to/victorzarzar",
      label: "Dev.to",
    },
    {
      icon: FaSquareXTwitter,
      href: "https://twitter.com/victorzarzar1",
      label: "Twitter",
    },
    {
      icon: AiOutlineLinkedin,
      href: "https://linkedin.com/in/victor-zarzar",
      label: "LinkedIn",
    },
    {
      icon: AiOutlineInstagram,
      href: "https://instagram.com/victorzarzar",
      label: "Instagram",
    },
    {
      icon: AiOutlineFacebook,
      href: "https://facebook.com/victorzarzar",
      label: "Facebook",
    },
  ];

  return (
    <footer className="container-footer mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl mt-20 md:mt-40">
      <hr className="w-full h-0.5 mx-auto mt-0 bg-neutral-400 dark:border-b dark:border-stone-200 border-0" />

      <div className="p-4 flex flex-col text-center md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1">
          <span>© {currentYear} Victor Zarzar</span>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1 mt-2 md:mt-0">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              aria-label={social.label}
            >
              <social.icon className="h-6 w-6 md:h-7 md:w-7" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
