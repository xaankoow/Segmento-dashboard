import React from "react";
import Table from "../../../../component/shared/table/Table";
import { BUSINESS_PAGE_TABEL_HEADER_ITEM_REPORTS_TAB } from "../../../../variables/businessPages";

export default function Index({ arrayOfTickets }) {
  const rowKey = [
    "row.id ",
    "row.updated_at",
    "row.title",
    "row.position",
    "row.performance",
    "row.accessibility",
    "row.best_practices",
    "row.seo",
    "row.pageStatus",
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
