import type { ChangeEvent, HTMLInputTypeAttribute, KeyboardEvent } from "react";

export interface InputProps {
  defaultValue?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
  readOnly?: boolean;
  id?: string;
  name?: string;
}
