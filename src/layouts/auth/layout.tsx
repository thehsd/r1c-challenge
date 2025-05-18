import type { ReactNode } from "@tanstack/react-router";
import clsx from "clsx";
import React from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className={clsx(
        "w-full",
        "bg-secondary-light-2",
        "h-screen",
        "flex",
        "justify-center",
        "items-center"
      )}
    >
      {children}
    </main>
  );
};

export default AuthLayout;
