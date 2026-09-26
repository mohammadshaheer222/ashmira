export interface NavLink {
  label: string;
  href: string;
  highlight?: boolean; // for "SALE" style emphasis
}

export interface HeaderProps {
  navLinks?: NavLink[];
}

