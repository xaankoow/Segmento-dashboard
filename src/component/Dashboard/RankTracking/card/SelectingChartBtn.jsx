import React, { useEffect, useState } from "react";
import { ImageContainer } from "../../../../assets/img/IMG";

export default function SelectingChartBtn({ chartIco = "Line", chartSelected }) {
  const [state, setState] = useState({
    imgSrc: ImageContainer.lineChartIco,
    chartType: "Line",
  });

  useEffect(() => {
    selectChartIco();
  }, [chartIco])
  

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
  return (
    <div
      onClick={() => chartSelected(state.chartType)}
      className=" flex justify-center items-center w-10 h-10 m-2 cursor-pointer bg-secondary hover:bg-activeButton removingImageColorInThisTag transition-all rounded-lg ">
      <img src={state.imgSrc} alt="chart ico" />
    </div>
  );
}
