export interface TextareaProps {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  className?: string;
  name?: string;
  id?: string;
  defaultValue?: string;
  rows?: number;
}
