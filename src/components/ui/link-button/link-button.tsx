import { Link } from "@tanstack/react-router";
import type { LinkButtonProps } from "./type";
import type { FC } from "react";
import clsx from "clsx";

const LinkButton: FC<LinkButtonProps> = ({ to, children }) => {
  return (
    <Link className={clsx("text-info-default text-sm font-normal")} to={to}>
      {children}
    </Link>
  );
};

export default LinkButton;
