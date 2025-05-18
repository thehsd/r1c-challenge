import ArrowLeftIcon from "../icons/arrow-left-icon";
import type { PaginationProps } from "./type";
import Dots from "./dots";
import PagePills from "./page-pills";
import type { FC } from "react";
import { usePaginationRange } from "../../../hooks/use-pagination";
import clsx from "clsx";

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
  disabled = false,
}) => {
  const paginationRange = usePaginationRange(totalPages, currentPage);

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <div
      className={clsx(
        { "child:!cursor-not-allowed opacity-60": disabled },
        "flex",
        "justify-center",
        "gap-x-2",
        "border",
        "border-secondary-light",
        "w-fit",
        "rounded-lg",
        "py-1"
      )}
    >
      <button
        disabled={!canGoPrev}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="w-8 h-8 flex justify-center items-center border-none hover:!bg-secondary-light rounded-lg cursor-pointer disabled:opacity-50"
      >
        <ArrowLeftIcon />
      </button>

      <div
        className={clsx(
          {
            " child:!cursor-not-allowed  child-hover:!bg-transparent": disabled,
          },
          "flex gap-x-2"
        )}
      >
        {paginationRange.map((item, index) =>
          item === -1 ? (
            <Dots key={index} />
          ) : (
            <PagePills
              key={index}
              label={item}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )
        )}
      </div>

      <button
        disabled={!canGoNext}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="w-8 h-8 flex justify-center items-center border-none hover:!bg-secondary-light rounded-lg cursor-pointer disabled:opacity-50"
      >
        <ArrowLeftIcon className="rotate-180" />
      </button>
    </div>
  );
};

export default Pagination;
