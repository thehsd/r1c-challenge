import { type FC } from "react";
import clsx from "clsx";
import type { TextareaProps } from "./type";

const Textarea: FC<TextareaProps> = ({
  onChange,
  placeholder = "",
  readOnly = false,
  className = "",
  name,
  id,
  defaultValue,
  rows = 4,
}) => {
  return (
    <textarea
      defaultValue={defaultValue}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      rows={rows}
      className={clsx(
        "hover:border-secondary-focus",
        "focus:border-primary-default",
        "border-secondary-light",
        "text-secondary-default",
        "rounded-lg",
        "outline-0",
        "border",
        "p-2",
        "resize-y",
        className
      )}
      disabled={readOnly}
    />
  );
};

export default Textarea;
