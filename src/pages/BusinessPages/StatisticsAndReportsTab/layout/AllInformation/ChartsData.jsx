import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function index() {
  const miniChartSetting2 = {
    datasets: [
      {
        label: "# of Votes",
        data: [30, 20],
        cutout: 55,
        backgroundColor: ["#10CCAE","#D9D9D9"],
        borderWidth: 0,
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="flex justify-around flex-row-reverse items-center px-[20%]">
      <div>
        <div className="w-40">
          <Doughnut
            data={miniChartSetting2}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <p className="m-auto mt-7 text-title text-lg">سئو</p>
      </div>
      <div>
        <div className="w-40">
          <Doughnut
            data={miniChartSetting2}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <p className="m-auto mt-7 text-title text-lg">معیار های مهم</p>
      </div>
      <div>
        <div className="w-40">
          <Doughnut
            data={miniChartSetting2}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <p className="m-auto mt-7 text-title text-lg">دسترسی پذیری</p>
      </div>
      <div>
        <div className="w-40">
          <Doughnut
            data={miniChartSetting2}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <p className="m-auto mt-7 text-title text-lg">عملکرد اجرایی</p>
      </div>
      {/* <Doughnut
          data={miniChartSetting2}
          options={{ maintainAspectRatio: false }}
        />        <Doughnut
        data={miniChartSetting2}
        options={{ maintainAspectRatio: false }}
      />        <Doughnut
      data={miniChartSetting2}
      options={{ maintainAspectRatio: false }}
    /> */}
    </div>
  );
}
