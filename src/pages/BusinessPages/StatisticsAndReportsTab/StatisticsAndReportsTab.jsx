import React, { useState } from "react";
import TitleButton from "./layout/TitleButton";
import AllInformation from "./layout/AllInformation";
import TechnicalAnalysis from "./layout/TechnicalAnalysis";
import ChartKeyWordRank from "./layout/ChartKeywordRank";
import FilterTabel from "./layout/FIlterTabel";
import Table from "./layout/Table";

export default function StatisticsAndReportsTab() {
  const [filteredTableData, setFilteredTableData] = useState([]);
  return (
    <div>
      {/* <div className=" mt-5 px-9" >
        <TitleButton />
      </div>
      <div className=" mt-4 px-9">
        <AllInformation />
      </div>

      <div className="px-7 mt-7">
        <TechnicalAnalysis />
      </div> */}
      <div className=" py-5">
        <Table arrayOfTickets={filteredTableData} />
      </div>
      <div className=" mt-7 py-7 px-3 border border-border rounded-lg shadow-[0px_4px_8px_0px_rgb(0,0,0,0.14)]">
        <FilterTabel setFilteredTableData={setFilteredTableData} />
      </div>
      <div className=" mt-7">
        <ChartKeyWordRank />
      </div>
    </div>
  );
}
