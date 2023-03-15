import React from "react";
import { Doughnut } from "react-chartjs-2";
import RotateLine from "../../../../../component/shared/rotateLine";

export default function index() {
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
    <div className="flex justify-between relative h-40">
      <div className=" w-40">
        <Doughnut
          data={miniChartSetting2}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div className="h-full flex flex-col justify-between items-start mr-9">

      <p className=" text-lg text-title">شرکت زانکو نویان Xaankoo Noyan</p>
      <p className="text-gray text-sm text-right">
        شرکت زانکو نویان Xaankoo Noyan - ارائه محصولات نوآور برای افزایش
        بهره‌وری شرکت‌ها، کارکنان و تیم‌ها
      </p>
      <a href="https://xaankoo.com/" className="text-primary text-lg">
        https://xaankoo.com/
      </a>
      </div>
      {/* <RotateLine/> */}
      <div className=" border border-border h-full mx-7"></div>
      <div className=" flex-grow h-full border border-border min-w-[265px]">

      </div>
    </div>
  );
}
