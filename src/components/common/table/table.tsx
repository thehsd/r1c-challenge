import type { FC } from "react";
import TableHeader from "./table-header";
import TableRow from "./table-row";
import type { TableProps } from "./type";

const Table: FC<TableProps> = ({
  columns,
  data,
  openRowId,
  toggleRowMenu,
  actions,
}) => {
  return (
    <div className="overflow-x-scroll sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader columns={columns} />
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((rowData) => (
            <TableRow
              key={rowData.id}
              rowData={rowData}
              columns={columns}
              openRowId={openRowId}
              toggleRowMenu={toggleRowMenu}
              actions={actions}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
