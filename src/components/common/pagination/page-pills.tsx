import clsx from "clsx";
import type { FC } from "react";
import type { PagePillsProps } from "./type";

const PagePills: FC<PagePillsProps> = ({
  label,
  currentPage,
  setCurrentPage,
}) => {
  const isActive = label === currentPage;

  return (
    <button
      aria-current={isActive ? "page" : undefined}
      aria-label={`Go to page ${label}`}
      className={clsx(
        "w-8 h-8 rounded-lg cursor-pointer hover:bg-secondary-light text-sm",
        {
          "!bg-primary-default text-white font-semibold pointer-events-none select-none":
            isActive,
        }
      )}
      onClick={() => setCurrentPage(label)}
    >
      {label}
    </button>
  );
};

export default PagePills;
