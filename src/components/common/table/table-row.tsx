import { type FC } from "react";
import ActionMenu from "./action-menu";
import clsx from "clsx";
import Button from "../../ui/button";
import type { ArticleRowData, TableRowProps } from "./type";

const TableRow: FC<TableRowProps> = ({
  rowData,
  columns,
  openRowId,
  toggleRowMenu,
  actions,
}) => {
  const isMenuOpen = openRowId === rowData.id;

  return (
    <tr className="bg-white  hover:bg-secondary-light-2/10">
      {columns.map((column) => (
        <td
          key={column.key}
          className={clsx(
            " whitespace-break-spaces text-sm text-secondary-default ",
            {
              "px-3 py-1": column.key !== "id",
            },
            { "w-8 h-8 ": column.key === "id" }
          )}
        >
          <div
            className={clsx(
              {
                "bg-secondary-light-2 rounded-sm w-8 h-8 flex justify-center items-center":
                  column.key === "id",
              },
              { "font-semibold !text-base": column.key === "title" }
            )}
          >
            {rowData[column.key as keyof ArticleRowData]}
          </div>
        </td>
      ))}
      <td className="px-2 py-1.5 whitespace-nowrap text-right text-sm font-medium relative">
        <Button
          size="small"
          onClick={() => toggleRowMenu(rowData.id)}
          color="secondary"
          aria-expanded={isMenuOpen}
          aria-haspopup="true"
        >
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-[3px] h-[3px] bg-secondary-default/90 rounded-4xl mx-0.5"
              ></div>
            ))}
        </Button>
        {isMenuOpen && (
          <ActionMenu
            actions={actions}
            rowData={rowData}
            onActionClick={() => toggleRowMenu(rowData.id)}
          />
        )}
      </td>
    </tr>
  );
};

export default TableRow;
