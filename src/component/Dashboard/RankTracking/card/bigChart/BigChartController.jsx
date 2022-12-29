import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BigChartView from "./BigChartView";

export default function BigChartController() {
  const { bigChartData } = useSelector((state) => state.rankTrakingState);

  const labels = [];
  const [chartData, setChartData] = useState([
    {
      labels,
      datasets: [
        {
          fill: "end",
          label: "Dataset 2",
          data: [],
          borderColor: "rgb(53, 162, 235)",
          // borderColor: ChartColor.chart,
          backgroundColor: "rgba(53, 162, 235, 0.5)",
          pointRadius: 0,
          pointHitRadius: 1,
          // backgroundColor: [ChartColor.background],
          // ChartColor:[backgroundChartColor]
        },
      ],
    },
  ]);

  useEffect(() => {
    if (bigChartData.length!=0&&chartData!=bigChartData) {
      setChartData(bigChartData)
    }
  }, [bigChartData.length])
  

  const options = {
    scales: {
      yAxis: {
        min: 1,
        max: 10,
        ticks: {
          display: false,
        },
      },
      xAxis: {
        ticks: {
          display: false,
        },
      },
    },
    responsive: true,
    plugins: {
      labels: {
        display: false,
      },
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "",
      },
    },
  };

  // {
  //   label: 'Dataset 1',
  //   data: Utils.numbers(NUMBER_CFG),
  //   borderColor: Utils.CHART_COLORS.red,
  //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
  // }


  // debugger;
  const data =
    bigChartData.length != 0
      ? bigChartData.map((item) => {
          return item;
        })
      : {
          labels,
          datasets: [
            {
              fill: "end",
              label: "Dataset 2",
              data: [],
              borderColor: "rgb(53, 162, 235)",
              // borderColor: ChartColor.chart,
              backgroundColor: "rgba(53, 162, 235, 0.5)",
              pointRadius: 0,
              pointHitRadius: 1,
              // backgroundColor: [ChartColor.background],
              // ChartColor:[backgroundChartColor]
            },
          ],

          // labels:["",""],
          // datasets:
          //   {
          //     fill: "end",
          //     label: "Dataset 2",
          //     data: [1,10],
          //     borderColor: 'rgb(53, 162, 235)',
          //     backgroundColor: "rgba(53, 162, 235, 0)",
          //     pointRadius: 3,
          //     pointHitRadius: 1,
          //     // backgroundColor: [ChartColor.background],
          //     // ChartColor:[backgroundChartColor]
          //   },
        };

  const data1 = {
    // labels,
    // datasets:bigChartData.length!=0?bigChartData.map(item=>{return item}):[
    //         {
    //           fill: "end",
    //           label: "Dataset 2",
    //           data: [],
    //           borderColor: 'rgb(53, 162, 235)',
    //           backgroundColor: "rgba(53, 162, 235, 0)",
    //           pointRadius: 3,
    //           pointHitRadius: 1,
    //           // backgroundColor: [ChartColor.background],
    //           // ChartColor:[backgroundChartColor]
    //         },
    //       ]
    // datasets:bigChartData.length!=0?bigChartData.map(item=>
    // ({
    // fill: "end",
    // label: 'Dataset 1',
    // data: item.data,
    // borderColor: item.ChartColor,
    // backgroundColor: "rgba(53, 162, 235, 0)",
    // pointRadius: 3,
    // pointHitRadius: 1,
    // })):[
    // {
    // fill: "end",
    // label: "Dataset 2",
    // data: [],
    // borderColor: 'rgb(53, 162, 235)',
    // backgroundColor: "rgba(53, 162, 235, 0)",
    // pointRadius: 3,
    // pointHitRadius: 1,
    // backgroundColor: [ChartColor.background],
    // ChartColor:[backgroundChartColor]
    // },
    // ]
    // datasets: [
    //   {
    //     fill: "end",
    //     label: "Dataset 2",
    //     data: bigChartData.length!=0?bigChartData.map(item=>
    //       ({
    //       label: 'Dataset 1',
    //       data: item.data,
    //       borderColor: item.ChartColor,
    //       backgroundColor: "rgba(53, 162, 235, 0)",
    //     })):[],
    //     // borderColor: 'rgb(53, 162, 235)',
    //     borderColor: ChartColor.chart,
    //     backgroundColor: "rgba(53, 162, 235, 0)",
    //     pointRadius: 0,
    //     pointHitRadius: 1,
    //     // backgroundColor: [ChartColor.background],
    //     // ChartColor:[backgroundChartColor]
    //   },
    // ],
  };

  console.log('chartData :>> ', chartData);
  console.log('bigChartData :>> ', bigChartData);

  return <BigChartView data={bigChartData.length!=0?bigChartData[0]:chartData[0]} options={options} />;
}
