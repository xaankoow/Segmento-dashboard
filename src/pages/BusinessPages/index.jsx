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
    <div>
      <div className=" px-7">
        <TabMenu
          tabsContent={tabContent}
          title={"صفحات تجاری"}
          // amountOfData={"isKeyword"}
        />
      </div>
    </div>
  );
}
