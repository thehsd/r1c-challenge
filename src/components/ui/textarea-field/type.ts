import type { TextareaProps } from "../textarea/type";

export interface TextareaFieldProps extends TextareaProps {
  label: string;
  helperText?: string;
  error?: boolean;
  readOnly?: boolean;
}
