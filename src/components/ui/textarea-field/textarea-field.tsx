import { useId, type FC } from "react";

import Typography from "../typography";
import clsx from "clsx";
import Textarea from "../textarea";

import type { TextareaFieldProps } from "./type";

const TextareaField: FC<TextareaFieldProps> = ({
  label,
  placeholder,
  onChange,
  name,
  defaultValue = "",
  readOnly = false,
  error = false,
  helperText,
  rows = 4,
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
      <Textarea
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        readOnly={readOnly}
        id={inputID}
        name={name}
        rows={rows}
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

export default TextareaField;
