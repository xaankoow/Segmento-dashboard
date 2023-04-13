import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TabMenu from "../../component/Dashboard/DashboaedComponents/tabMenu/TabMenu";
import { getBusinessPagesAction } from "../../component/Redux/Action/businessPages";
import BusinessPagesTab from "./businessPagesTab/BusinessPagesTab";
import StatisticsAndReportsTab from "./StatisticsAndReportsTab/StatisticsAndReportsTab";

export default function BusinessPages() {

  const axiosController = new AbortController();
  
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getBusinessPagesAction(axiosController))
    return () => {
      axiosController.abort()
    }
  }, [])
  
  const tabContent = [
    {
      title: "آمار و گزارش",
      content: <StatisticsAndReportsTab />,
    },
    {
      title: "صفحات تجاری",
      content: <BusinessPagesTab />,
    },
  ];
  
  return (

        <TabMenu
          tabsContent={tabContent}
          title={"صفحات تجاری"}
          // amountOfData={"isKeyword"}
        />

  );
}
