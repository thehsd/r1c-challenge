import clsx from "clsx";
import type { FC } from "react";
import type { modalActionProps } from "./type";

const ModalAction: FC<modalActionProps> = ({ children, className = "" }) => {
  return (
    <footer
      className={clsx(
        "px-6",
        "py-4",
        "border-t",
        "border-t-secondary-light",
        className
      )}
    >
      {children}
    </footer>
  );
};

export default ModalAction;
