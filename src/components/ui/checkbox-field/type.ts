import type { ChangeEventHandler } from "react";

export interface CheckboxFieldProps {
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name: string;
  readOnly?: boolean;
  checked?: boolean;
}
