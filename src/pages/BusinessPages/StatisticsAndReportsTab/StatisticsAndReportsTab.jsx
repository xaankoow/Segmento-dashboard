import React, { useEffect, useState } from "react";
import TitleButton from "./layout/TitleButton";
import AllInformation from "./layout/AllInformation";
import TechnicalAnalysis from "./layout/TechnicalAnalysis";
import ChartKeyWordRank from "./layout/ChartKeywordRank";
import FilterTabel from "./layout/FilterSection/FIlterTabel";
import Table from "./layout/Table";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function StatisticsAndReportsTab() {

  const { pagesData } = useSelector(state => state.businessPagesState)

  const navigate=useNavigate();

  const [pageInfoData, setPageInfoData] = useState({});
  const [filteredTableData, setFilteredTableData] = useState([]);

  function findPageInfo() {
    const pageUuid = window.location.hash.substring(window.location.hash.lastIndexOf('/') + 1);
    pagesData.map(page=>{
      if (page.page.uuid==pageUuid) {
        setPageInfoData(page);
      }
    })
  }
  
  useEffect(() => {
    findPageInfo()
  }, [pagesData.length])
  
  return (
    <div>
      <div className=" mt-5 px-9" >
        <TitleButton />
      </div>
      <div className=" mt-4 px-9">
        <AllInformation pageData={pageInfoData.page} insight={pageInfoData.insight?.length!=0?pageInfoData.insight:undefined}/>
      </div>
      {/* <div className="px-7 mt-7">
        <TechnicalAnalysis />
      </div> */}
      <div className="">
        <FilterTabel setFilteredTableData={setFilteredTableData} />
      </div>
      {/* <div className=" py-5 px-9">
        <Table arrayOfTickets={filteredTableData} />
      </div> */}
      {/* <div className=" mt-7">
        <ChartKeyWordRank />
      </div> */}
    </div>
  );
}
