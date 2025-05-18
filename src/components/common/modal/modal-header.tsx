import clsx from "clsx";
import { type FC } from "react";
import type { ModalHeaderProps } from "./type";

const ModalHeader: FC<ModalHeaderProps> = ({ title, description = "" }) => {
  return (
    <header
      className={clsx("px-6", "py-4", "border-b", "border-b-secondary-light")}
    >
      <div id={`modal-title-${title}`} className="font-semibold text-base mb-1">
        {title}
      </div>
      {description && (
        <div className={clsx("text-secondary-active font-normal text-xs")}>
          {description}
        </div>
      )}
    </header>
  );
};

export default ModalHeader;
