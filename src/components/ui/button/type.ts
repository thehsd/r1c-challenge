import type { ReactNode } from "@tanstack/react-router";

export type ButtonColor = "primary" | "secondary" | "error";

export interface ButtonProps {
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
  color?: ButtonColor;
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  onClick?: (_e: unknown) => void;
  size?: "small" | "normal" | "block";
}
