import type { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  isVisible?: boolean;
  onClose: (_e?: unknown) => void;
  size?: "small" | "normal" | "full";
  className?: string;
}
export interface ModalHeaderProps {
  title: string;
  description?: string;
}
export interface ModalContentProps {
  children: ReactNode;
  className?: string;
}
export interface modalActionProps {
  children: ReactNode;
  className?: string;
}
