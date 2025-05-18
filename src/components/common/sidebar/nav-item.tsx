import { type FC } from "react";
import type { NavItemProps } from "./type";
import { Link } from "@tanstack/react-router";
import { useActiveLink } from "../../../hooks/use-active-link";
import clsx from "clsx";

const NavItem: FC<NavItemProps> = ({ href, label, deep = false }) => {
  const isActive = useActiveLink(href, deep);
  return (
    <li className={clsx("list-none")}>
      <Link
        to={href}
        className={clsx(
          "w-full",
          "block",
          "p-2",
          "transition",
          "font-semibold",
          {
            "bg-primary-light/35  text-primary-focus shadow-[0px_4px_4px_#00000040]":
              isActive,
          },
          {
            "text-secondary-default hover:bg-secondary-light/50": !isActive,
          }
        )}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
