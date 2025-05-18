import type { FC } from "react";
import type { InputProps } from "./type";
import clsx from "clsx";

const Input: FC<InputProps> = ({
  onChange,
  onKeyDown,
  type = "text",
  placeholder = "",
  readOnly = false,
  className = "",
  name,
  id,
  defaultValue,
}) => {
  return (
    <input
      defaultValue={defaultValue}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={clsx(
        "hover:border-secondary-focus",
        "focus:border-primary-default",
        "border-secondary-light",
        "text-secondary-default",
        "rounded-lg",
        "outline-0",
        "border",
        "p-2",
        className
      )}
      disabled={readOnly}
    />
  );
};

export default Input;
