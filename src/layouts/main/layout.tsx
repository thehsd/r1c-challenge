import clsx from "clsx";
import Sidebar from "../../components/common/sidebar";
import NavItem from "../../components/common/sidebar/nav-item";
import HeaderBase from "./header-base";
import type { ReactNode } from "react";

// TODO: Implement auth guard
// TODO: Address sidebar responsiveness for screens smaller than "md"
const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={clsx("bg-secondary-light-2")}>
      <HeaderBase />
      <div className={clsx("w-full flex")}>
        <Sidebar className="w-60 hidden md:block">
          <NavItem href={"/articles"} label={"All Articles"} />
          <NavItem href={"/articles/create"} label={"New Article"} />
        </Sidebar>
        <main className={clsx("w-full")}>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
