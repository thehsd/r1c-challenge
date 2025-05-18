import clsx from "clsx";
import type { FC } from "react";

interface Column {
  label: string;
  key: string;
}

interface TableHeaderProps {
  columns: Column[];
}

const TableHeader: FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead>
      <tr className={clsx("bg-secondary-light-2 tracking-wider")}>
        {columns.map((column) => (
          <th
            key={column.key}
            scope="col"
            className={clsx(
              "px-3 py-3 text-left text-lg font-semibold text-secondary-default"
            )}
          >
            {column.label}
          </th>
        ))}
        <th scope="col" className="relative px-6 py-3">
          <span className="sr-only">Actions</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
