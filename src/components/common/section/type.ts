import type { ReactNode } from "@tanstack/react-router";

export interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  size?: "small" | "normal";
}
