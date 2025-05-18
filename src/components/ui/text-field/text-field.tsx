import { useId, type FC } from "react";
import Typography from "../typography";
import Input from "../input";
import type { TextFieldProps } from "./type";
import clsx from "clsx";

const TextField: FC<TextFieldProps> = ({
  label,
  type,
  placeholder,
  onChange,
  onKeyDown,
  name,
  readOnly = false,
  error = false,
  defaultValue = "",
  helperText,
}) => {
  const inputID = useId();
  return (
    <div className="flex flex-col gap-y-2">
      <Typography
        variant="label"
        htmlFor={inputID}
        className="text-sm font-normal"
      >
        {label}
      </Typography>
      <Input
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
        id={inputID}
        name={name}
        defaultValue={defaultValue}
        className={clsx({ "!border-error-default": error })}
      />
      {error && (
        <Typography
          variant="span"
          className="text-error-default text-xs"
          weight="semibold"
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
};

export default TextField;
