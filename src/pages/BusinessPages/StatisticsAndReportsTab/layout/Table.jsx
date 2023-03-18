import React from "react";
import Table from "../../../../component/shared/table/Table";
import { BUSINESS_PAGE_TABEL_HEADER_ITEM_REPORTS_TAB } from "../../../../variables/businessPages";

export default function Index({ arrayOfTickets }) {
  const rowKey = [
    "row.id ",
    "row.ticket_id",
    "row.title",
    "row.categories",
    "row.updated_at",
    "row.status",
    "row.statusPage",
    "row.moreInfo",
    "row.operation",
  ];

  return (
    <div>
      <Table
        columnItem={BUSINESS_PAGE_TABEL_HEADER_ITEM_REPORTS_TAB}
        rowsItem={arrayOfTickets}
        rowKey={rowKey}
      />
    </div>
  );
}
