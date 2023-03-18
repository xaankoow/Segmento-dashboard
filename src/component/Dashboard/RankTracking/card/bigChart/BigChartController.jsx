import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { generateColor } from "../../../../Utils/color";
import BigChartView from "./BigChartView";

export default function BigChartController({ data, chartType="Line" }) {

  const { bigChartData ,rankTrakingForceUpdate,} = useSelector((state) => state.rankTrakingState);


  const labels = ["","","","","","",""];
  const [chartData, setChartData] = useState({
    data:[
      {
        labels,
        datasets: [
          {
            fill: "end",
            label: "Dataset 2",
            data: [0,8,6,7,1,2,10],
            borderColor: "rgb(53, 162, 235)",
            // borderColor: ChartColor.chart,
            backgroundColor: "rgba(255, 255, 255, 0)",
            pointRadius: 0,
            pointHitRadius: 1,
            // backgroundColor: [ChartColor.background],
            // ChartColor:[backgroundChartColor]
          },
        ],
      },
    ],
    type:"Line"
  });




  useEffect(() => {
    if (bigChartData.length != 0) {
      setChartData(bigChartData);
    }
  }, [rankTrakingForceUpdate]);

  //[{labels:[],label:"",data:[]}]

  // state.bigChartDataInkeyWordsSection={
  // label:label,
  // labels:labels,
  // data:chartData.map(item=>(item))
  // }

  // useEffect(() => {
  //   let labels=data?.lebels;
  //   // 
  //   if(data.data!=undefined){
  //     setChartData({
  //       labels,
  //       datasets: [
  //         data.data.map(item=>
  //           chartType=="Line"?({
  //             fill: "end",
  //             label: item.label,
  //             data: item.data,
  //             backgroundColor: "rgba(255, 255, 255, 0)",
  //             borderColor: `rgb(${
  //               generateColor() + "," + generateColor() + "," + generateColor()
  //             })`,
  //             pointRadius: 3,
  //             pointHitRadius: 3,
  //           }):({
  //             fill: "end",
  //             label: item.label,
  //             data: item.data,
  //             backgroundColor: `rgb(${
  //               generateColor() + "," + generateColor() + "," + generateColor()
  //             })`,
  //           })
  //           ,
  //         )
  //       ],
  //     },)
  //   }
  // }, [data])
  
  const options = {
    line: {
      scales: {
        yAxis: {
          min: 0,
          max: 10,
          reverse: true,
          ticks: {
            // reverse: true,

            display: true,
          },

        },
        xAxis: {
          ticks: {
            // reverse: true,

            display: true,
          },
          // reverse: true,
        },
      },
      responsive: true,
      plugins: {
        labels: {
          display: true,
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
    },
    bar: {
      plugins: {
        title: {
          display: false,
          text: "Chart.js Bar Chart - Stacked",
        },
        legend: {
          display: false,
          position: "top",
        },
      },
      responsive: true,
      scales: {
        yAxis: {
          stacked: true,
          ticks: {
            display: true,
          },
        },
        xAxis: {
          stacked: true,
          ticks: {
            display: true,
          },
        },
      },
    },
  };

  // const options = {
  //   scales: {
  //     yAxis: {
  //       min: 0,
  //       max: 10,
  //       ticks: {
  //         display: true,
  //       },
  //     },
  //     xAxis: {
  //       ticks: {
  //         display: false,
  //       },
  //     },
  //   },
  //   responsive: true,
  //   plugins: {
  //     labels: {
  //       display: false,
  //     },
  //     legend: {
  //       display: false,
  //       position: "top",
  //     },
  //     title: {
  //       display: false,
  //       text: "",
  //     },
  //   },
  // };

  // {
  //   label: 'Dataset 1',
  //   data: Utils.numbers(NUMBER_CFG),
  //   borderColor: Utils.CHART_COLORS.red,
  //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
  // }

  // ;
  // const data =
  //   bigChartData.length != 0
  //     ? bigChartData.map((item) => {
  //         return item;
  //       })
  //     : {
  //         labels,
  //         datasets: [
  //           {
  //             fill: "end",
  //             label: "Dataset 2",
  //             data: [],
  //             borderColor: "rgb(53, 162, 235)",
  //             // borderColor: ChartColor.chart,
  //             backgroundColor: "rgba(53, 162, 235, 0.5)",
  //             pointRadius: 0,
  //             pointHitRadius: 1,
  //             // backgroundColor: [ChartColor.background],
  //             // ChartColor:[backgroundChartColor]
  //           },
  //         ],

  //         // labels:["",""],
  //         // datasets:
  //         //   {
  //         //     fill: "end",
  //         //     label: "Dataset 2",
  //         //     data: [1,10],
  //         //     borderColor: 'rgb(53, 162, 235)',
  //         //     backgroundColor: "rgba(53, 162, 235, 0)",
  //         //     pointRadius: 3,
  //         //     pointHitRadius: 1,
  //         //     // backgroundColor: [ChartColor.background],
  //         //     // ChartColor:[backgroundChartColor]
  //         //   },
  //       };

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

  // console.log("chartData :>> ", chartData);
  // console.log("bigChartData :>> ", bigChartData);

// 


  return (
    <>
    <BigChartView
    // data={ data}
    data={chartData.data[0]}
    options={options}
    chartType={chartData.type}
    />
    </>
  );
}
