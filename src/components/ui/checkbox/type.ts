import type { ReactNode } from "@tanstack/react-router";
import type { ChangeEventHandler } from "react";

export interface CheckboxProps {
  disabled?: boolean;
  children?: ReactNode;
  checked?: boolean;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  className?: string;
  indeterminate?: boolean;
}
