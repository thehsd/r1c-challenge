import type { FC } from "react";
import Typography from "../typography";
import type { CheckboxFieldProps } from "./type";
import Checkbox from "../checkbox/";
import clsx from "clsx";

const CheckboxField: FC<CheckboxFieldProps> = ({
  label,
  onChange,
  name,
  readOnly = false,
  checked = false,
}) => {
  return (
    <div className="flex gap-x-2">
      <Checkbox
        onChange={onChange}
        name={name}
        disabled={readOnly}
        checked={checked}
      />
      <Typography
        variant="label"
        weight="normal"
        className={clsx("text-secondary-default", "text-sm")}
      >
        {label}
      </Typography>
    </div>
  );
};

export default CheckboxField;
