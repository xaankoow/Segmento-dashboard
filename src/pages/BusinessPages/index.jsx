import React from "react";
import TabMenu from "../../component/Dashboard/DashboaedComponents/tabMenu/TabMenu";
import BusinessPagesTab from "./businessPagesTab/BusinessPagesTab";
import StatisticsAndReportsTab from "./StatisticsAndReportsTab/StatisticsAndReportsTab";

export default function BusinessPages() {
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
