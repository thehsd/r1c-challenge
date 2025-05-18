import clsx from "clsx";
import type { ModalContentProps } from "./type";
import type { FC } from "react";

const ModalContent: FC<ModalContentProps> = ({ children, className }) => {
  return (
    <main
      className={clsx(
        "overflow-y-auto",
        "pretty-scroll",
        "max-md:h-min",
        "max-h-max",
        "p-6",
        className
      )}
    >
      {children}
    </main>
  );
};

export default ModalContent;
