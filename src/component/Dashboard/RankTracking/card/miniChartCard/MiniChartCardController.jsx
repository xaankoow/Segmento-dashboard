import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageContainer } from "../../../../../assets/img/IMG";
import {
  rankTrackingChartColor,
  rankTrackingChartId,
} from "../../../../../variables/rankTracking";
import { setDataForRankTrackingBigChar } from "../../../../Redux/Action/rankTraking";
import MiniChartCardView from "./MiniChartCardView";
import { chartInformationTooltip } from "./miniChartFun";
// import MiniChartCardView from './MiniChartCardView';

export default function MinichartController({
  chartId = "AvgTheWordsAreLost", //AvgRankTotalWords میانگین رتبه کل کلمات
}) {
  const rankTrakingState = useSelector((state) => state.rankTrakingState);

  const dispatch = useDispatch();
  // footer chart box
  const [footerInformationChart, setFooterInformationChart] = useState({
    rightTitle: "",
    rightBoxText: "",
    leftTitle: "",
    leftBoxText: "",
  });

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

  const DrowChart = ({ data, labels, chartColor }) => {
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

    const chartLabel = [];
    var chartCL;

    let getAvgPositionKeyWords = [];
    switch (chartId) {
      case "AvgRankTotalWords":
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
        break;

      case rankTrackingChartId.GrownWords: //GrownWords chart id
        for (let i = 1; i < getObjKeys.length - 1; i++) {
          let avg = 0;

          // selected date and foreach in arr
          workSpaceData[getObjKeys[i]].forEach((element) => {
            workSpaceData[getObjKeys[i - 1]].forEach((lastPeriod) => {
              // debugger
              if (lastPeriod.keyword_uuid == element.keyword_uuid) {
                if (lastPeriod.position < element.position) {
                  avg++;
                }
              }
            });
            // avg+=element.position
          });

          chartLabel.push("");
          // geting avg period
          getAvgPositionKeyWords.push(avg);
        }
        setFooterInformationChart({
          rightTitle: "کل کلمات",
          rightBoxText: workSpaceData[getObjKeys[getObjKeys.length - 1]].length,
          leftTitle: "تعداد رشد کلمات",
          leftBoxText:
            getAvgPositionKeyWords[getAvgPositionKeyWords.length - 1],
        });
        break;

      case rankTrackingChartId.TheWordsAreLost: //GrownWords chart id
        for (let i = 1; i < getObjKeys.length - 1; i++) {
          let avg = 0;

          // selected date and foreach in arr
          workSpaceData[getObjKeys[i]].forEach((element) => {
            workSpaceData[getObjKeys[i - 1]].forEach((lastPeriod) => {
              if (lastPeriod.keyword_uuid == element.keyword_uuid) {
                if (lastPeriod.position > element.position) {
                  avg++;
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
          rightTitle: "کل کلمات",
          rightBoxText: workSpaceData[getObjKeys[getObjKeys.length - 1]].length,
          leftTitle: "تعداد افت کلمات",
          leftBoxText:
            getAvgPositionKeyWords[getAvgPositionKeyWords.length - 1],
        });
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

      default:
        break;
    }

    // debugger
    setLabels(getObjKeys);
    DrowChart({
      data: getAvgPositionKeyWords,
      labels: chartLabel.length != 0 ? chartLabel : getObjKeys,
      chartColor: chartCL,
    });
    setPositionKeyWork(getAvgPositionKeyWords);
  }

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

  const data = {
    labels,
    datasets: [
      {
        fill: "end",
        label: "Dataset 2",
        data: positionKeyWork,
        // borderColor: 'rgb(53, 162, 235)',
        borderColor: ChartColor.chart,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        pointRadius: 0,
        pointHitRadius: 1,
        backgroundColor: [ChartColor.background],
        // ChartColor:[backgroundChartColor]
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
        titleText = "کلمات رشد کرده";
        break;
      case rankTrackingChartId.TheWordsAreLost:
        titleText = "کلمات افت کرده";
        break;
      case rankTrackingChartId.AvgGrownWords:
        titleText = "میانگین رشد کلمات";
        break;
      case rankTrackingChartId.AvgTheWordsAreLost:
        titleText = "میانگین افت کلمات";
        break;
      default:
        break;
    }
    return titleText;
  };

  const funAddingDataFromBigChart = () => {
    dispatch(
      setDataForRankTrackingBigChar({
        chartData: chartData,
      })
    );
  };
  console.log("chartData :>> ", chartData);
  console.log("data :>> ", data);

  return (
    <MiniChartCardView
      options={options}
      data={chartData}
      toolTipText={chartInformationTooltip({ chartId })}
      title={chartTitle()}
      footerRightBoxTitle={footerInformationChart.rightTitle}
      footerRightBoxContentText={footerInformationChart.rightBoxText}
      footerLeftBoxTitle={footerInformationChart.leftTitle}
      footerLeftBoxContentText={footerInformationChart.leftBoxText}
      addingDataFromBigChart={funAddingDataFromBigChart}
    />
  );
}
