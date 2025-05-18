import type { InputProps } from "../input/type";

export interface TextFieldProps extends InputProps {
  label: string;
  helperText?: string;
  error?: boolean;
  defaultValue?: string | number;
  readOnly?: boolean;
}
