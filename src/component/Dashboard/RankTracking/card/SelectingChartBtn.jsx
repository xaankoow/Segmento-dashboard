import React, { useEffect, useState } from "react";
import { ImageContainer } from "../../../../assets/img/IMG";

export default function SelectingChartBtn({
  chartIco = "Line",
  chartSelected,
  getChartSelected,
}) {
  const [state, setState] = useState({
    imgSrc: ImageContainer.lineChartIco,
    chartType: "Line",
  });

  useEffect(() => {
    selectChartIco();
  }, [chartIco]);

  const selectChartIco = () => {
    switch (chartIco) {
      case "Line":
        setState({
          imgSrc: ImageContainer.lineChartIco,
          chartType: "Line",
        });
        break;
      case "Bar":
        setState({
          imgSrc: ImageContainer.barChartIco,
          chartType: "Line",
        });
        break;

      default:
        setState({
          imgSrc: ImageContainer.lineChartIco,
          chartType: "Line",
        });
        break;
    }
  };
  // debugger
  return (
    <div
      onClick={() => getChartSelected(chartIco)}
      className={`flex justify-center items-center w-10 h-10 m-2 cursor-pointer hover:bg-activeButton transition-all rounded-lg ${
        chartIco == chartSelected
          ? "bg-activeButton removingImageColorInThisTag"
          : "bg-secondary"
      } removingImageColorInThisTagWithHover`}
    >
      <img src={state.imgSrc} alt="chart ico" />
    </div>
  );
}
