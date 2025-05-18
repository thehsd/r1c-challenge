import { useRef, type FC } from "react";
import type { CheckboxProps } from "./type";
import CheckmarkIcon from "../../common/icons/check-mark-icon";
import clsx from "clsx";
import MinusIcon from "../../common/icons/minus-icon";

const Checkbox: FC<CheckboxProps> = ({
  name = "",
  onChange,
  value,
  indeterminate = false,
  checked = false,
  disabled = false,
  className = "",
  children = "",
}) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div
      className={clsx(
        "inline-flex",
        "items-center",
        "justify-center",
        className
      )}
      onClick={() => ref?.current?.click()}
    >
      <div
        className={clsx(
          {
            "bg-primary-default hover:bg-primary-focus":
              checked || indeterminate,
          },
          {
            "bg-primary-light hover:bg-primary-light":
              (checked || indeterminate) && disabled,
          },
          "relative flex items-center justify-center",
          "w-4",
          "h-4",
          "rounded-sm"
        )}
      >
        <input
          disabled={disabled}
          value={value}
          onChange={onChange}
          checked={checked}
          type="checkbox"
          name={name}
          className={clsx(
            {
              "border-2 border-secondary-focus hover:border-secondary-active":
                !checked && !indeterminate,
            },
            {
              "border-2 border-secondary-light hover:border-secondary-light":
                !checked && !indeterminate && disabled,
            },
            { "!cursor-not-allowed": disabled },
            "w-full",
            "h-full",
            "rounded-sm",
            "cursor-pointer",
            "appearance-none"
          )}
          ref={ref}
          onClick={(e) => e.stopPropagation()}
        />
        {checked && !indeterminate && (
          <CheckmarkIcon
            className={clsx(
              { "!cursor-not-allowed": disabled },
              "absolute",
              "text-white",
              "cursor-pointer"
            )}
          />
        )}
        {indeterminate && (
          <MinusIcon
            className={clsx(
              { "!cursor-not-allowed": disabled },
              "absolute",
              "text-white",
              "cursor-pointer"
            )}
          />
        )}
      </div>
      {children}
    </div>
  );
};
export default Checkbox;
