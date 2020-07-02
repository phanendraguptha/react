import React from "react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export default function Table({ data, columns, sortColumn, onSort }) {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
}
