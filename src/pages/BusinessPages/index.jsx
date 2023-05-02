import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TabMenu from "../../component/Dashboard/DashboaedComponents/tabMenu/TabMenu";
import { getBusinessPagesAction } from "../../component/Redux/Action/businessPages";
import BusinessPagesTab from "./businessPagesTab/BusinessPagesTab";
import StatisticsAndReportsTab from "./StatisticsAndReportsTab/StatisticsAndReportsTab";

export default function BusinessPages({ selectingTab = "businessPages" }) {

  const [tabSelected, setTabSelected] = useState(0)
  const axiosController = new AbortController();

  const { pagesData } = useSelector(state => state.businessPagesState)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusinessPagesAction(axiosController));
    return () => {
      axiosController.abort();
    };
  }, []);

  useEffect(() => {
    setTabSelected(getTabIndex());
  }, [selectingTab])
  

  function getTabIndex() {
    switch (selectingTab) {
      case "businessPages":
        return 0;
      case "reports":
        return 1;
      default:
        return 0;
    }
  }

  const tabContent = [
    {
      title: <Link to={"/dashboard/businessPages"}>صفحات تجاری</Link>,
      content: <BusinessPagesTab />,
    },
    {
      title: <Link to={pagesData.length!=0?pagesData[0].page.uuid:"/dashboard/businessPages"}>آمار و گزارش</Link>,
      content: <StatisticsAndReportsTab />,
    },
  ];

  return (
    <TabMenu
      tabsContent={tabContent}
      title={"صفحات تجاری"}
      selectingIndexTab={tabSelected}
    />
  );
}
