import clsx from "clsx";
import type { FC } from "react";
import type { BoxProps } from "./type";

const Box: FC<BoxProps> = ({ children, className = "" }) => {
  return (
    <div className={clsx("p-6", "bg-white", "rounded-lg", className)}>
      {children}
    </div>
  );
};

export default Box;
