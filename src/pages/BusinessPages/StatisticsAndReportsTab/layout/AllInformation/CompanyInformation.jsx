import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function index({
  companyName,
  link,
  description,
  picture,
  chartData,
}) {
  const miniChartSetting2 = {
    datasets: [
      {
        label: "# of Votes",
        data: [100, chartData],
        cutout: 55,
        backgroundColor: ["#D9D9D9", "#10CCAE"],
        borderWidth: 0,
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="flex justify-between relative h-40 px-7">
      <div className="relative w-1/6">
        <div className="flex justify-center items-center h-full w-full absolute text-4xl left-0 leading-5 text-center">
          {chartData}
        </div>
        <Doughnut
          data={miniChartSetting2}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div className="h-full flex flex-col justify-between items-start w-4/6 mr-9">
        <p className=" text-lg text-title">{companyName}</p>
        <p className="text-gray text-sm text-right">{description}</p>
        <a href={link} className="text-primary text-lg">
          {link}
        </a>
      </div>
      <div className=" border border-border h-full mx-7"></div>
      <div className=" relative flex-grow h-full border border-border w-2/6 min-w-[265px]">
        <img src={picture} alt="company picture" className="w-full h-full" />
      </div>
    </div>
  );
}
