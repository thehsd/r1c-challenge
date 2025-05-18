export interface RHFTextFieldProps {
  name: string;
  type?: string;
  label: string;
  helperText?: string;
  placeholder: string;
  disabled?: boolean;
  error?: boolean;
}

export interface RHFTextareaFieldProps extends RHFTextFieldProps {
  rows?: number;
}
