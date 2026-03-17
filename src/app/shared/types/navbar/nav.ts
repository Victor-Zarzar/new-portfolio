import type { User } from "better-auth";

export type NavItem = {
  label: string;
  link: string;
};

export type NavbarNavLink = {
  link: string;
  label: string;
  active?: boolean;
  icon?: React.ReactNode;
};

export type NavMobileProps = {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks: NavbarNavLink[];
};

export type NavbarProps = React.HTMLAttributes<HTMLElement> & {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: NavbarNavLink[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
};

export type AdminNavbarProps = React.HTMLAttributes<HTMLElement> & {
  user: User;
  logo?: React.ReactNode;
  logoHref?: string;
};
