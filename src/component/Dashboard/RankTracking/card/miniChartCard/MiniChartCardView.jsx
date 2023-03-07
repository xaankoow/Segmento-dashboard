import React, { useState } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { ImageContainer } from "../../../../../assets/img/IMG";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import ToolTip from "../../../../Utils/ToolTip";
import AuthButton from "../../../../Auth/authButton/AuthButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function MiniChartCardView({
  options,
  data,
  chartType,
  toolTipText = "toolTipText",
  title = "title",
  footerRightBoxTitle = "right title",
  footerLeftBoxTitle = "left title",
  footerRightBoxContentText = "RContent",
  footerLeftBoxContentText = "LContent",
  addingDataFromBigChart,
  footerDoughnutText
}) {
  const [showToolTip, setShowToolTip] = useState(true);
  // const [decreaseIncreaseArrow, setDecreaseIncreaseArrow] = useState({
  //   src:"",
  //   class:""
  // });

  const ChartSelecting = () => {
    switch (chartType) {
      case "Line":
        return <Line data={data} options={options.line} height="200px" />;
      case "Bar":
        return <Bar data={data} options={options.bar} height={"200px"} />;
      case "Doughnut":
        return (
          <Doughnut
            data={data}
            height={143}
            width={143}
            options={{ maintainAspectRatio: false }}
          />
        );

      default:
        break;
    }
  };

  // console.log("chartType :>> ", chartType);
  const decreaseIncreaseArrow = (firstValue, secondValue) => {
    if (firstValue > secondValue) {
      return {
        src: ImageContainer.directionOfTheGreenValue,
        class: "rotate-180",
      };
    } else {
      return {
        src: ImageContainer.directionOfTheRedValue,
        class: "rotate-180",
      };
    }
  };

  return (
    <div className="well well--active border h-full  border-border rounded-lg relative hover:shadow-[0px_4px_8px_0px_rgb(0,0,0,0.14)] hover:border-orgWhite transition-all">
      <div className=" absolute left-1 top-1">
        <img
          src={ImageContainer.infoUtils}
          alt="section info"
          className=" w-3 h-3"
          data-tip={toolTipText}
          data-type="light"
          data-place="top"
          data-class="sizeClass"
          onMouseEnter={() => setShowToolTip(true)}
          onMouseLeave={() => {
            setShowToolTip(false);
            setTimeout(() => setShowToolTip(true), 0);
          }}
        />
      </div>

      {/* {chartType!="NumericRange"? ChartSelecting():(

       )}  */}

      <div className="well__content h-full">
        <div className="well__header h-[10%]">
          <div className="m-auto text-sm text-title ">{title}</div>
          {/* <div className="well__date">روزانه</div> */}
        </div>
        <div className="well__chart mt-1 h-[80%]">
          {chartType != "NumericRange" ? (
            <>
            {ChartSelecting()}
                    {/* <img src={ImageContainer.directionOfTheRedValue} alt="red value" /> */}
                    {footerRightBoxTitle != null ? (
              <div className="well__more mb-3">
                <div className="">
                  <span className=" text-s text-gray">
                    {footerRightBoxTitle}
                  </span>
                  <div className=" w-20 h-8 flex flex-row justify-around rounded-lg items-center bg-lightBlue">
                    <span className="text-xs text-gray">
                      {footerRightBoxContentText}
                    </span>
                    <img
                      src={ImageContainer.directionOfTheGreenValue}
                      alt="green value"
                      className=" "
                    />
                  </div>
                </div>
                <div className="">
                  <span className=" text-s text-gray">
                    {footerLeftBoxTitle}
                  </span>
                  <div className=" w-20 h-8 flex flex-row justify-around rounded-lg items-center bg-lightBlue">
                    <span className="text-xs text-gray">
                      {footerLeftBoxContentText}
                    </span>
                    <img
                      src={ImageContainer.directionOfTheGreenValue}
                      alt="green value"
                    />
                  </div>
                </div>
              </div>
            ) : null}
            </>
          ) : (
            <div className="flex justify-center flex-col w-full relative px-1 h-full">
              <div className="flex text-s h-[20%] items-center">
                <div className=" w-[25%] text-gray">دوره قبل</div>
                <div className=" w-[10%]"></div>
                <div className="w-[25%] text-gray">دوره فعلی</div>
                <div className="w-[40%]"></div>
              </div>
              <hr className=" border-sectionDisable mt-1 mb-2" />
              <div className="flex text-s h-[20%] items-center">
                <div className="w-[25%] text-title">{data.lastPeriod[0]}</div>
                <div className=" w-[10%] ">
                  <img
                    src={
                      decreaseIncreaseArrow(
                        data.lastPeriod[0],
                        data.beforePeriod[0]
                      ).src
                    }
                    alt="green tick"
                    className={`mx-auto ${
                      decreaseIncreaseArrow(
                        data.lastPeriod[0],
                        data.beforePeriod[0]
                      ).class
                    }`}
                  />
                </div>
                <div className=" w-[25%] text-title">
                  {data.beforePeriod[0]}
                </div>
                <div className="w-[40%] text-gray">{"3 - 1 #"}</div>
              </div>
              <hr className=" border-sectionDisable mt-1 mb-2" />
              <div className="flex text-s h-[20%] items-center">
                <div className="w-[25%] text-title">{data.lastPeriod[1]}</div>
                <div className=" w-[10%] ">
                  <img
                    src={
                      decreaseIncreaseArrow(
                        data.lastPeriod[1],
                        data.beforePeriod[1]
                      ).src
                    }
                    alt="green tick"
                    className={`mx-auto ${
                      decreaseIncreaseArrow(
                        data.lastPeriod[1],
                        data.beforePeriod[1]
                      ).class
                    }`}
                  />
                </div>

                {/* <div className=" w-[10%] "><img src={ImageContainer.directionOfTheRedValue} alt="green tick" className=" mx-auto" /></div> */}
                <div className=" w-[25%] text-title">
                  {data.beforePeriod[1]}
                </div>
                <div className="w-[40%] text-gray">{"7 - 4 #"}</div>
              </div>
              <hr className=" border-sectionDisable mt-1 mb-2" />
              <div className="flex text-s h-[20%] items-center">
                <div className="w-[25%] text-title">{data.lastPeriod[2]}</div>
                <div className=" w-[10%] ">
                  <img
                    src={
                      decreaseIncreaseArrow(
                        data.lastPeriod[2],
                        data.beforePeriod[2]
                      ).src
                    }
                    alt="green tick"
                    className={`mx-auto ${
                      decreaseIncreaseArrow(
                        data.lastPeriod[2],
                        data.beforePeriod[2]
                      ).class
                    }`}
                  />
                </div>

                {/* <div className=" w-[10%] "><img src={ImageContainer.directionOfTheRedValue} alt="green tick" className=" mx-auto" /></div> */}
                <div className=" w-[25%] text-title">
                  {data.beforePeriod[2]}
                </div>
                <div className="w-[40%] text-gray">{"10 - 8 #"}</div>
              </div>
            </div>
          )}
          {/* {ChartSelecting()} */}
          {/* <Line options={options} data={data} height="200px" /> */}
          {/* <Bar /> */}
        </div>
        {/* {chartType != "Doughnut" ? (
          <>
            {footerRightBoxTitle != null ? (
              <div className="well__more mb-3">
                <div className="">
                  <span className=" text-s text-gray">
                    {footerRightBoxTitle}
                  </span>
                  <div className=" w-20 h-8 flex flex-row justify-around rounded-lg items-center bg-lightBlue">
                    <span className="text-xs text-gray">
                      {footerRightBoxContentText}
                    </span>
                    <img
                      src={ImageContainer.directionOfTheGreenValue}
                      alt="green value"
                      className=" "
                    />
                  </div>
                </div>
                <div className="">
                  <span className=" text-s text-gray">
                    {footerLeftBoxTitle}
                  </span>
                  <div className=" w-20 h-8 flex flex-row justify-around rounded-lg items-center bg-lightBlue">
                    <span className="text-xs text-gray">
                      {footerLeftBoxContentText}
                    </span>
                    <img
                      src={ImageContainer.directionOfTheGreenValue}
                      alt="green value"
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </>
        ) : null} */}
      </div>
      {chartType != "Doughnut" ? (
        <div
          className="w-full py-1 bg-sectionDisable absolute bottom-0 cursor-pointer"
          onClick={() => addingDataFromBigChart()}>
          <img
            src={ImageContainer.moveDownArrow}
            alt="arrow bottom"
            className="m-auto "
          />
        </div>
      ) : (
        <div className=" mt-7 mb-10">
          <div className="flex justify-around w-52">
            <div className="flex justify-around items-center">
              <div className={`w-6 h-6 rounded ${footerDoughnutText[0].rightColor}`}></div>
              <div className=" text-s text-title mr-1">{footerDoughnutText[0].rightText}</div>
            </div>
            <div className="flex justify-around items-center">
              <div className={`w-6 h-6 rounded ${footerDoughnutText[0].leftColor}`}></div>
              <div className="text-s text-title mr-1">{footerDoughnutText[0].leftText}</div>
            </div>
          </div>
          <div className="flex justify-around w-52 mt-5">
            {/* {} */}
            <div className="flex justify-around items-center">
              <div className={`w-6 h-6 rounded ${footerDoughnutText[1]?.rightColor}`}></div>
              <div className=" text-s text-title mr-1">{footerDoughnutText[1]?.rightText}</div>
            </div>
            <div className="flex justify-around items-center w-20">

            </div>
          </div>

        </div>
      )}

      {/* {showToolTip && <ToolTip />} */}
    </div>
  );
}
// #F35242 red
// #0071ff blue
// #FFDC5D yellow
