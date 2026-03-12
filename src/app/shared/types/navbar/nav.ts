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
