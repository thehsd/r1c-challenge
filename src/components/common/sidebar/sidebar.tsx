import type { FC } from "react";
import type { SidebarProps } from "./type";
import clsx from "clsx";

const Sidebar: FC<SidebarProps> = ({ children, className = "" }) => {
  return (
    <aside className={clsx("w-[240px]", "bg-white", "p-4", className)}>
      <ul className="flex flex-col gap-y-1">{children}</ul>
    </aside>
  );
};

export default Sidebar;
