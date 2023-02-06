import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageContainer } from "../../../../../assets/img/IMG";
import {
  rankTrackingChartColor,
  rankTrackingChartId,
} from "../../../../../variables/rankTracking";
import {
  setDataForRankTrackingBigChar,
  setRankTrackingChartsDataAction,
} from "../../../../Redux/Action/rankTraking";
import MiniChartCardView from "./MiniChartCardView";
import { chartInformationTooltip } from "./miniChartFun";
// import MiniChartCardView from './MiniChartCardView';

export default function MinichartController({
  chartId = "AvgTheWordsAreLost", //AvgRankTotalWords میانگین رتبه کل کلمات
  chartType,
  setPeriodDate,
}) {
  // var handleChartType="Line";
  const [handleChartType, setHandleChartType] = useState("Line");

  const rankTrakingState = useSelector((state) => state.rankTrakingState);

  const dispatch = useDispatch();
  // footer chart box
  const [footerInformationChart, setFooterInformationChart] = useState({
    rightTitle: "",
    rightBoxText: "",
    leftTitle: "",
    leftBoxText: "",
  });

  const [footerDoughnutText, setFooterDoughnutText] = useState();

  const [showToolTip, setShowToolTip] = useState(true);
  const [labels, setLabels] = useState([]);
  const [positionKeyWork, setPositionKeyWork] = useState([]); //data
  const [ChartColor, setChartColor] = useState({
    chart: "#10CCAE",
    background: "rgba(16, 204, 174, .4)",
  });
  const [chartData, setChartData] = useState({
    labels,
    datasets: [
      {
        fill: "end",
        label: "Dataset 2",
        data: [],
        // borderColor: 'rgb(53, 162, 235)',
        borderColor: ChartColor.chart,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        pointRadius: 0,
        pointHitRadius: 1,
        backgroundColor: [ChartColor.background],
        // ChartColor:[backgroundChartColor]
      },
    ],
  });
  // const [backgroundChartColor, setBackgroundChartColor] = useState("rgba(16, 204, 174, .4)");



  // adding chart data in redux
  const setChartDataInRedux=({innerChartId,innerChartData,type})=>{
    // dispatch(setRankTrackingChartsDataAction({id:innerChartId,data:innerChartData,type}))
  }




  const DrowChart = ({ data, labels, chartColor, type }) => {
    // console.log("handleChartType :>> ", handleChartType);
    // console.log("Type :>> ", type);

    if (type == "Line") {
      setChartData({
        labels,
        datasets: [
          {
            fill: "end",
            //TODO: change label text
            label: "Dataset 2",
            data,
            borderColor: chartColor
              ? rankTrackingChartColor[chartColor]?.chart
              : ChartColor.chart,
            pointRadius: 0,
            pointHitRadius: 1,
            backgroundColor: [
              chartColor
                ? rankTrackingChartColor[chartColor]?.background
                : ChartColor.background,
            ],
          },
        ],
      });
    } else if (type == "Bar") {
      setChartData({
        labels,
        datasets: [
          {
            label: "افت",
            // data: data[1],
            data: data[1].map((item) => {
              return -Math.abs(item);
            }),

            backgroundColor: "#F35242",
          },
          {
            label: "رشد",
            data: data[0],
            backgroundColor: "#10CCAE",
          },
        ],
      });
    } else if (type == "NumericRange") {
      setChartData({
        lastPeriod: data[0],
        beforePeriod: data[1],
      });
    } else if (type == "Doughnut") {
      setChartData({
        datasets: [
          {
            label: "# of Votes",
            // data: data[0],
            data: data[0],
            cutout: 50,
            // backgroundColor: ["#0071ff", "#F35242", "#FFDC5D"],
            backgroundColor: chartColor,

            borderWidth: 0,
            borderRadius: 7,
          },
        ],
      });
    }
    dispatch(setRankTrackingChartsDataAction({id:chartId,data:{
      labels,
      datasets: [
        {
          fill: "end",
          //TODO: change label text
          label: "Dataset 2",
          data,
          borderColor: chartColor
            ? rankTrackingChartColor[chartColor]?.chart
            : ChartColor.chart,
          pointRadius: 0,
          pointHitRadius: 1,
          backgroundColor: [
            chartColor
              ? rankTrackingChartColor[chartColor]?.background
              : ChartColor.background,
          ],
        },
      ],
    },type:type}))

    // return null;
  };

  // changing chart color
  const changeChartColor = (color) => {
    switch (color) {
      case "red":
        setChartColor({
          chart: "#F35242",
          background: "rgba(243, 82, 66, .4)",
        });
        break;

      default:
        break;
    }
  };

  if (
    (rankTrakingState.workSpacePeriodData.length != 0) &
    (labels.length == 0)
  ) {
    const workSpaceData = rankTrakingState.workSpacePeriodData;

    // geting chart date
    let getObjKeys = Object.keys(workSpaceData).map((item) => {
      return item;
    });
    setPeriodDate && setPeriodDate(getObjKeys);

    const chartLabel = [];
    var chartCL;
    var type = "Line"; //chart type
    let getAvgPositionKeyWords = [];
    let NumericRangePositionKeyWords = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    switch (chartId) {
      case rankTrackingChartId.AvgRankTotalWords:
        for (let i = 0; i < getObjKeys.length; i++) {
          let avg = 0;

          // selected date and foreach in arr
          workSpaceData[getObjKeys[i]].forEach((element) => {
            avg += element.position;
          });

          // geting avg period
          getAvgPositionKeyWords.push(
            avg / workSpaceData[getObjKeys[i]].length
          );
        }
        setChartDataInRedux({innerChartId:chartId,innerChartData:getAvgPositionKeyWords,type:type});
        break;

      case rankTrackingChartId.KeywordRankDistribution:
        var lastPeriod = [0, 0, 0]; // 1,3  4,7  8,10
        var beforePeriod = [0, 0, 0]; // 1,3  4,7  8,10
        // var Between1And3=0;
        // var Between4And7=0;
        // var Between8And10=0;

        workSpaceData[getObjKeys[getObjKeys.length - 1]].forEach((element) => {
          var position = element.position;
          if ((position >= 1) & (position <= 3)) {
            lastPeriod[0]++;
          } else if ((position >= 4) & (position <= 7)) {
            lastPeriod[1]++;
          } else if (position >= 8) {
            lastPeriod[2]++;
          }
        });

        workSpaceData[getObjKeys[getObjKeys.length - 2]].forEach((element) => {
          var position = element.position;
          if ((position >= 1) & (position <= 3)) {
            beforePeriod[0]++;
          } else if ((position >= 4) & (position <= 7)) {
            beforePeriod[1]++;
          } else if (position >= 8) {
            beforePeriod[2]++;
          }
        });

        getAvgPositionKeyWords.push(beforePeriod);
        getAvgPositionKeyWords.push(lastPeriod);

        type = chartType ? chartType : "NumericRange";

        if (type == "Doughnut") {
          chartCL = ["#0071ff", "#F35242", "#FFDC5D"];
          setFooterDoughnutText([
            {
              rightColor: "bg-blue",
              rightText: "بازه ۱ تا ۳",
              leftColor: "bg-red",
              leftText: "بازه ۴ تا ۷",
            },
            {
              rightColor: "bg-lightYellow",
              rightText: "بازه 8 تا 10",
            },
          ]);
        }
        // #F35242 red
        // #0071ff blue
        // #FFDC5D yellow
        // type == "Doughnut" &&
        //   setFooterDoughnutText([
        //     {
        //       rightColor: "bg-blue",
        //       rightText: "بازه ۱ تا ۳",
        //       leftColor: "bg-red",
        //       leftText: "بازه ۴ تا ۷",
        //     },
        //     {
        //       rightColor: "bg-lightYellow",
        //       rightText: "بازه 8 تا 10",
        //     },
        //   ]);
        setHandleChartType(type);

        setFooterInformationChart({
          rightTitle: null,
          rightBoxText: null,
          leftTitle: null,
          leftBoxText: null,
        });

        break;

      case rankTrackingChartId.ProgressAndDeclineGraphOfWords:
        // var countWordsItem=[]
        var growthList = [];
        var dropList = [];

        for (let i = 1; i < getObjKeys.length - 1; i++) {
          // let countWords=0;
          let growth = 0;
          let drop = 0;

          let checkProcess = false;
          // selected date and foreach in arr
          workSpaceData[getObjKeys[i]].forEach((element) => {
            workSpaceData[getObjKeys[i - 1]].forEach((lastPeriod) => {
              if (lastPeriod.keyword_uuid == element.keyword_uuid) {
                if (lastPeriod.position > element.position) {
                  drop++;
                  checkProcess = true;
                  // chartLabel.push(getObjKeys);
                } else if (lastPeriod.position < element.position) {
                  checkProcess = true;

                  growth++;
                }
                // countWords++;
              }
            });
          });
          checkProcess == true && chartLabel.push(getObjKeys[i]);

          chartCL = "red";
          // countWordsItem.push(countWords)
          // geting avg period
          growthList.push(growth);
          dropList.push(drop);
        }
        getAvgPositionKeyWords.push(growthList);
        getAvgPositionKeyWords.push(dropList);

        console.log("lastGrowWordPosition :>> ", getAvgPositionKeyWords);
        type = chartType ? chartType : "Bar";

        if (type == "Doughnut") {
          let lastGrowWordPosition = getAvgPositionKeyWords;
          getAvgPositionKeyWords = [[]];
          chartCL = ["#F35242", "#10CCAE"];
          // getAvgPositionKeyWords[0].push(1);
          // getAvgPositionKeyWords[0].push(0);
          getAvgPositionKeyWords[0].push(
            lastGrowWordPosition[0][lastGrowWordPosition[0].length - 1]
          );
          getAvgPositionKeyWords[0].push(
            lastGrowWordPosition[1][lastGrowWordPosition[1].length - 1]
          );
          setFooterDoughnutText([
            {
              rightColor: "bg-success",
              rightText: "تعداد رشد",
              leftColor: "bg-red",
              leftText: "تعداد افت",
            },
          ]);
        }

        // handleChartType="Bar";
        setHandleChartType(type);

        setFooterInformationChart({
          rightTitle: null,
          rightBoxText: null,
          leftTitle: null,
          leftBoxText: null,
        });

        break;

      case rankTrackingChartId.GrownWords: //GrownWords chart id
        var countPositionList = [];
        for (let i = 1; i < getObjKeys.length - 1; i++) {
          var countPosition = 0;
          let avg = 0;

          // selected date and foreach in arr
          workSpaceData[getObjKeys[i]].forEach((element) => {
            workSpaceData[getObjKeys[i - 1]].forEach((lastPeriod) => {
              // debugger
              if (lastPeriod.keyword_uuid == element.keyword_uuid) {
                if (lastPeriod.position < element.position) {
                  avg++;
                }
                countPosition++;
              }
            });
            // avg+=element.position
          });

          chartLabel.push("");
          // geting avg period
          countPositionList.push(countPosition);
          getAvgPositionKeyWords.push(avg);
        }
        type = chartType ? chartType : "Line";

        if (type == "Doughnut") {
          let lastGrowWordPosition =
            getAvgPositionKeyWords[getAvgPositionKeyWords.length - 1];
          getAvgPositionKeyWords = [[]];
          chartCL = ["#D3D5E2", "#10CCAE"];
          getAvgPositionKeyWords[0].push(
            countPositionList[countPositionList.length - 1]
          );
          getAvgPositionKeyWords[0].push(lastGrowWordPosition);
          setFooterDoughnutText([
            {
              rightColor: "bg-success",
              rightText: "تعداد رشد",
              leftColor: "bg-lightGray",
              leftText: "تعداد کل",
            },
          ]);
          setFooterInformationChart({
            rightTitle: null,
            rightBoxText: null,
            leftTitle: null,
            leftBoxText: null,
          });
        } else {
          setFooterInformationChart({
            rightTitle: "کل کلمات",
            rightBoxText:
              workSpaceData[getObjKeys[getObjKeys.length - 1]].length,
            leftTitle: "تعداد رشد کلمات",
            leftBoxText:
              getAvgPositionKeyWords[getAvgPositionKeyWords.length - 1],
          });
        }
        // type == "Doughnut"&&
        // getAvgPositionKeyWords.push(avg);
        // getAvgPositionKeyWords.push(countPosition);

        setHandleChartType(type);

        break;

      case rankTrackingChartId.TheWordsAreLost: //GrownWords chart id
        var countPositionList = [];
        for (let i = 1; i < getObjKeys.length - 1; i++) {
          var countPosition = 0;
          let avg = 0;

          // selected date and foreach in arr
          workSpaceData[getObjKeys[i]].forEach((element) => {
            workSpaceData[getObjKeys[i - 1]].forEach((lastPeriod) => {
              if (lastPeriod.keyword_uuid == element.keyword_uuid) {
                if (lastPeriod.position > element.position) {
                  avg++;
                }
                countPosition++;
              }
            });
          });

          chartCL = "red";
          chartLabel.push("");

          countPositionList.push(countPosition);

          // geting avg period
          getAvgPositionKeyWords.push(avg);
        }

        type = chartType ? chartType : "Line";

        if (type == "Doughnut") {
          let lastGrowWordPosition =
            getAvgPositionKeyWords[getAvgPositionKeyWords.length - 1];
          getAvgPositionKeyWords = [[]];
          chartCL = ["#D3D5E2", "#F35242"];
          getAvgPositionKeyWords[0].push(
            countPositionList[countPositionList.length - 1]
          );
          getAvgPositionKeyWords[0].push(lastGrowWordPosition);
          console.log("getAvgPositionKeyWords", getAvgPositionKeyWords);
          setFooterDoughnutText([
            {
              rightColor: "bg-red",
              rightText: "تعداد افت",
              leftColor: "bg-lightGray",
              leftText: "تعداد کل",
            },
          ]);
          setFooterInformationChart({
            rightTitle: null,
            rightBoxText: null,
            leftTitle: null,
            leftBoxText: null,
          });
        } else {
          setFooterInformationChart({
            rightTitle: "کل کلمات",
            rightBoxText:
              workSpaceData[getObjKeys[getObjKeys.length - 1]].length,
            leftTitle: "تعداد افت کلمات",
            leftBoxText:
              getAvgPositionKeyWords[getAvgPositionKeyWords.length - 1],
          });
        }

        setHandleChartType(type);

        break;

      case rankTrackingChartId.AvgGrownWords:
        var keyWorkLength = 0;
        for (let i = 1; i < getObjKeys.length - 1; i++) {
          let avg = 0;

          // selected date and foreach in arr
          workSpaceData[getObjKeys[i]].forEach((element) => {
            workSpaceData[getObjKeys[i - 1]].forEach((lastPeriod) => {
              if (lastPeriod.keyword_uuid == element.keyword_uuid) {
                if (lastPeriod.position < element.position) {
                  avg += element.position - lastPeriod.position;
                  keyWorkLength++;
                }
              }
            });
          });

          // chartCL = "red";
          chartLabel.push("");
          // geting avg period
          getAvgPositionKeyWords.push(avg);
        }
        setFooterInformationChart({
          rightTitle: "میانگین رشد رتبه",
          rightBoxText:
            getAvgPositionKeyWords[getAvgPositionKeyWords.length - 1] != 0
              ? getAvgPositionKeyWords[getAvgPositionKeyWords.length - 1] /
                keyWorkLength
              : 0,
          leftTitle: "تعداد رشد کلمات",
          leftBoxText: keyWorkLength,
        });
        break;

      case rankTrackingChartId.AvgTheWordsAreLost:
        var keyWorkLength = 0;
        for (let i = 1; i < getObjKeys.length - 1; i++) {
          let avg = 0;

          // selected date and foreach in arr
          workSpaceData[getObjKeys[i]].forEach((element) => {
            workSpaceData[getObjKeys[i - 1]].forEach((lastPeriod) => {
              if (lastPeriod.keyword_uuid == element.keyword_uuid) {
                if (lastPeriod.position > element.position) {
                  avg += lastPeriod.position - element.position;
                  keyWorkLength++;
                }
              }
            });
          });

          chartCL = "red";
          chartLabel.push("");
          // geting avg period
          getAvgPositionKeyWords.push(avg);
        }
        setFooterInformationChart({
          rightTitle: "میانگین افت رتبه",
          rightBoxText:
            getAvgPositionKeyWords[getAvgPositionKeyWords.length - 1] != 0
              ? getAvgPositionKeyWords[getAvgPositionKeyWords.length - 1] /
                keyWorkLength
              : 0,
          leftTitle: "تعداد افت کلمات",
          leftBoxText: keyWorkLength,
        });
        break;

      case rankTrackingChartId.AvgGrownAndLostWords:
        for (let i = 1; i < getObjKeys.length - 1; i++) {
          var grownWordsLength = 0;
          var lostWordsLength = 0;
          let grownAvg = 0;
          let lostAvg = 0;

          // selected date and foreach in arr
          workSpaceData[getObjKeys[i]].forEach((element) => {
            workSpaceData[getObjKeys[i - 1]].forEach((lastPeriod) => {
              if (lastPeriod.keyword_uuid == element.keyword_uuid) {
                if (lastPeriod.position < element.position) {
                  grownAvg += element.position - lastPeriod.position;
                  grownWordsLength++;
                } else if (lastPeriod.position > element.position) {
                  lostAvg += lastPeriod.position - element.position;
                  lostWordsLength++;
                }
              }
            });
          });

          // chartCL = "red";
          chartLabel.push("");
          // geting avg period
          getAvgPositionKeyWords.push([
            grownWordsLength != 0 ? grownAvg / grownWordsLength : 0,
            lostWordsLength != 0 ? lostAvg / lostWordsLength : 0,
          ]);
        }

        type = chartType ? chartType : "NumericRange";

        if (type == "Doughnut") {
          let lastGrowWordPosition = getAvgPositionKeyWords.slice(-1);
          getAvgPositionKeyWords = [[]];
          chartCL = ["#F35242", "#10CCAE"];

          getAvgPositionKeyWords[0].push(lastGrowWordPosition[0][0]);
          getAvgPositionKeyWords[0].push(lastGrowWordPosition[0][1]);

          setFooterDoughnutText([
            {
              rightColor: "bg-success",
              rightText: "میانگین رشد",
              leftColor: "bg-red",
              leftText: "میانگین افت",
            },
          ]);
          setFooterInformationChart({
            rightTitle: null,
            rightBoxText: null,
            leftTitle: null,
            leftBoxText: null,
          });
        }

        setHandleChartType(type);
        break;

      default:
        break;
    }

    // debugger
    setLabels(getObjKeys);
    DrowChart({
      data: getAvgPositionKeyWords,
      labels: chartLabel.length != 0 ? chartLabel : getObjKeys,
      chartColor: chartCL,
      type: type,
    });
    setPositionKeyWork(getAvgPositionKeyWords);
    // dispatch(setRankTrackingChartsDataAction({type:chartId,data:getAvgPositionKeyWords}))
  }

  const options = {
    line: {
      scales: {
        yAxis: {
          min: 0,
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
            display: false,
          },
        },
        xAxis: {
          stacked: true,
          ticks: {
            display: false,
          },
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        fill: "end",
        label: "Dataset 2",
        data: positionKeyWork,
        borderColor: ChartColor.chart,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        pointRadius: 0,
        pointHitRadius: 1,
        backgroundColor: [ChartColor.background],
      },
    ],
  };

  // handle chart color
  const chartTitle = () => {
    var titleText = "";
    switch (chartId) {
      case "AvgRankTotalWords":
        titleText = "میانگین رتبه کل کلمات";
        break;
      case rankTrackingChartId.GrownWords:
        if (chartType == "Doughnut") {
          titleText = "نسبت رشد به کل";
        } else {
          titleText = "کلمات رشد کرده";
        }
        break;
      case rankTrackingChartId.TheWordsAreLost:
        if (chartType == "Doughnut") {
          titleText = "نسبت افت به کل";
        } else {
          titleText = "کلمات افت کرده";
        }
        break;
      case rankTrackingChartId.AvgGrownWords:
        titleText = "میانگین رشد کلمات";
        break;
      case rankTrackingChartId.AvgTheWordsAreLost:
        titleText = "میانگین افت کلمات";
      case rankTrackingChartId.ProgressAndDeclineGraphOfWords:
        if (chartType == "Doughnut") {
          titleText = "نسبت رشد به افت";
        } else {
          titleText = "نمودار پیشرفت و افت کلمات";
        }
      case rankTrackingChartId.KeywordRankDistribution:
        if (chartType == "Doughnut") {
          titleText = "نسبت کل کلمات";
        } else {
          titleText = "توزیع رتبه کلمات کلیدی";
        }
        break;
      case rankTrackingChartId.AvgGrownAndLostWords:
        titleText = "میانگین افت و پیشرفت کلمات";
      default:
        break;
    }
    return titleText;
  };

  const funAddingDataFromBigChart = () => {
    dispatch(
      setDataForRankTrackingBigChar({
        chartData: chartData,
        chartType: handleChartType,
      })
    );
  };
  // console.log("chartData :>> ", chartData);
  // console.log("data :>> ", data);

  useEffect(() => {
    // dispatch(setRankTrackingChartsDataAction({id:chartId,data:chartData,handleChartType}))

  }, [])
  
  return (
    <MiniChartCardView
      options={options}
      data={chartData}
      chartType={handleChartType}
      toolTipText={chartInformationTooltip({ chartId, chartType })}
      title={chartTitle()}
      footerRightBoxTitle={footerInformationChart.rightTitle}
      footerRightBoxContentText={footerInformationChart.rightBoxText}
      footerLeftBoxTitle={footerInformationChart.leftTitle}
      footerLeftBoxContentText={footerInformationChart.leftBoxText}
      addingDataFromBigChart={funAddingDataFromBigChart}
      footerDoughnutText={footerDoughnutText}
    />
  );
}
