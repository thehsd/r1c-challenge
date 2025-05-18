import type { FC } from "react";
import type { ButtonColor, ButtonProps } from "./type";

import SpinnerLoadingIcon from "../../common/icons/spinner-loading";

const Button: FC<ButtonProps> = ({
  ariaLabel = "button",
  isLoading = false,
  color = "primary",
  size = "normal",
  disabled = false,
  type = "button",
  children,
  className = "",
  onClick,
}) => {
  const renderButtonClasses = () => {
    const baseClasses =
      "font-medium cursor-pointer px-4 py-2.5 rounded-xl h-10 text-sm flex font-semibold justify-center items-center transition";

    const variantStyles: Record<ButtonColor, string> = {
      primary: "bg-primary-default text-white hover:bg-primary-active  ",
      secondary:
        "bg-white border border-secondary-light text-secondary-default",
      error: "bg-error-default hover:!bg-error-active text-white",
    };
    const variantClasses = variantStyles[color];
    const stateClasses = disabled ? "!cursor-not-allowed opacity-60" : "";
    const sizeClasses =
      size === "block" ? "w-full" : size === "small" ? "!px-2.5" : "";
    return `${baseClasses} ${variantClasses} ${stateClasses} ${sizeClasses} ${className}`;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={renderButtonClasses()}
    >
      {!isLoading && children}
      {isLoading && <SpinnerLoadingIcon />}
    </button>
  );
};

export default Button;
