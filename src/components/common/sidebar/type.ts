import type { ReactNode } from "@tanstack/react-router";

export interface NavItemProps {
  href: string;
  label: string;
  deep?: boolean;
}

export interface SidebarProps {
  children: ReactNode;
  className?: string;
}
