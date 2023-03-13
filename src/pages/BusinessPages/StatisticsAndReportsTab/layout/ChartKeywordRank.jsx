import React from "react";
import { useState } from "react";
import BigChartController from "../../../../component/Dashboard/RankTracking/card/bigChart/BigChartController";
import SelectingChartBtn from "../../../../component/Dashboard/RankTracking/card/SelectingChartBtn";

export default function Index() {
    const [chartSelected,setChartSelected]=useState("Line")
  return (
    <div>
      <div className="border border-border overflow-hidden rounded-lg">
        <div className=" flex justify-between flex-row-reverse items-center py-2 bg-white">
          <div className="flex justify-between items-center ml-2">
            <SelectingChartBtn chartIco="Line" chartSelected={chartSelected} getChartSelected={setChartSelected}/>
            <SelectingChartBtn chartIco="Bar" chartSelected={chartSelected} getChartSelected={setChartSelected}/>
          </div>
          <span className="text-title text-sm pr-4">نمودار رتبه کلمه کلیدی</span>
        </div>
        <div className=" px-4">
          <div className="">
            <BigChartController />
          </div>
        </div>
        <p className=" pb-7 text-red text-sm">نمایش نمودار فقط براساس 7 دوره صورت میگیرد و نمایش داده میشود . تمامی نمودار ها و چارت ها بازه های زمانی انها تا 7 دوره قبل میباشد</p>
      </div>
    </div>
  );
}
