export type CommandLink = {
  id: string;
  labelKey: string;
  href: string;
  keywords?: string;
  icon?: React.ReactNode;
};

export type CommandPaletteProps = {
  links: CommandLink[];
};
