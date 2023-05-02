import React from "react";
import { Doughnut } from "react-chartjs-2";
import RotateLine from "../../../../../component/shared/rotateLine";

export default function index({ companyName, link, description }) {
  const miniChartSetting2 = {
    datasets: [
      {
        label: "# of Votes",
        data: [0, 1],
        cutout: 55,
        backgroundColor: ["#D9D9D9", "#10CCAE"],
        borderWidth: 0,
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="flex justify-between relative h-40 px-7">
      {/* //w-40 */}
      <div className=" w-1/6">
        <Doughnut
          data={miniChartSetting2}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div className="h-full flex flex-col justify-between items-start w-3/6 mr-9">
        <p className=" text-lg text-title">{companyName}</p>
        <p className="text-gray text-sm text-right">{description}</p>
        <a href={link} className="text-primary text-lg">
          {link}
        </a>
      </div>
      {/* <RotateLine/> */}
      <div className=" border border-border h-full mx-7"></div>
      <div className=" flex-grow h-full border border-border w-2/6 min-w-[265px]"></div>
    </div>
  );
}
