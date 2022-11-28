import React, { useState } from "react";
import { useEffect } from "react";
import { Tab } from "@headlessui/react";
import SetTitleTabBrowser from "../../../Utils/SetTitleTabBrowser";
import BadgeLimitKeyWords from "../../../Utils/BadgeLimitKeyWords";
import { useSelector } from "react-redux";
import PageTitle from "../pageTitle/pageTitle";

export default function TabMenu({
  tabsContent,
  title,
  numberRight,
  numberLeft,
  amountOfData
}) {
  // to select tab and show underline of that
  const [activeTab, setActiveTab] = useState(0);
  const userState = useSelector((state) => state.userState);

  return (
    <>
      <PageTitle title={title} badgeApi={amountOfData} hasLimit />
      <div className="text-sm font-medium text-center text-gray-400 border-gray-700 pt-3 bg-[#fff]">
        <Tab.Group>
          <div className="flex  flex-col  items-right mt-3 ">
            <Tab.List className="mx-3 flex  items-center mb-1">
              {tabsContent.map((items, index) => {
                return (
                  <>
                    <div className="flex flex-col justify-center items-center border-none">
                      <Tab
                        key={index}
                        className={
                          activeTab === index
                            ? `tab_${index} border-none outline-0 inline-block px-4 mt-4 mb-[10px] text-primary  rounded-t-lg  focus:text-primary text-blue-500  hover:text-primary `
                            : "border-none outline-0 inline-block px-4 mt-4 mb-[10px] rounded-t-lg  focus:text-primary text-blue-500  hover:text-primary "
                        }
                        onClick={() => setActiveTab(index)}
                      >
                        {items.title}
                      </Tab>
                      {activeTab === index ? <div className="w-[28px] h-[2px] bg-primary rounded  tabline  " /> : <div className="w-[28px] h-[2px] bg-primary rounded  tabline hidden " />}

                    </div>
                    {index < tabsContent.length - 1 && (
                      <hr className="w-[28px] bg-gray text-[#D9D9D9] rotate-90 mt-4" />
                    )}
                  </>
                );
              })}
            </Tab.List>
            <Tab.Panels>
              {tabsContent.map((items, index) => {
                return <Tab.Panel key={index}>{items.content}</Tab.Panel>;
              })}
            </Tab.Panels>
          </div>
        </Tab.Group>
        <SetTitleTabBrowser nameSection={title} />
      </div>
    </>
  );
}
