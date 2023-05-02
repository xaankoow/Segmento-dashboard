import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function index({
  performance,
  accessibility,
  best_practices,
  seo,
}) {
  const creatingChartData = (indexItem) => {
    let title = "";
    var chartData = {
      datasets: [
        {
          label: "# of Votes",
          data: [30, 100],
          cutout: 55,
          backgroundColor: ["#10CCAE", "#D9D9D9"],
          borderWidth: 0,
          borderRadius: 5,
        },
      ],
    };
    switch (indexItem) {
      case 0:
        chartData.datasets[0].data = [performance * 100, 100];
        title = "عملکرد اجرایی";
        break;
      case 1:
        chartData.datasets[0].data = [accessibility * 100, 100];
        title = "دسترسی پذیری";
        break;
      case 2:
        chartData.datasets[0].data = [best_practices * 100, 100];
        title = "معیار های مهم";
        break;
      case 3:
        chartData.datasets[0].data = [seo * 100, 100];
        title = "سئو";
        break;

      default:
        break;
    }

    return (
      <div>
        <div className="w-40 relative">
          <div className="flex justify-center items-center h-full w-full absolute text-4xl left-0 leading-5 text-center">
            {chartData.datasets[0].data[0]}
          </div>
          <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />
        </div>
        <p className="m-auto mt-7 text-title text-lg">{title}</p>
      </div>
    );
  };
  return (
    <div className="flex justify-around flex-row-reverse items-center px-[20%] relative">
      {[0, 1, 2, 3].map((item) => {
        return creatingChartData(item);
      })}
    </div>
  );
}
