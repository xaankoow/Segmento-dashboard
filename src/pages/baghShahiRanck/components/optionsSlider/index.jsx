import { Swiper, SwiperSlide } from "swiper/react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
// import { Tooltip } from "react-tooltip";
import { Navigation } from "swiper";
import MultiProgress from "react-multi-progress";

import HelpImg from "../../assets/images/help.svg";

// import "swiper/css/navigation"; // baghChange
import {
  sampleBarChartData,
  sampleChartColors,
  sampleChartData,
} from "../../configs/sampleChartData";
// import "swiper/css";
import mainChartTypes from "../../configs/mainChartTypes";
import { ImageContainer } from "../../../../assets/img/IMG";
import { useState } from "react";

const OptionsSlider = ({
  averageAllWordsMemo,
  distributionCurrentAndPrevWordsMemo,
  increaseFromPrevWordsCountMemo,
  decreaseFromPrevWordsCountMemo,
  increaseFromPrevWordsAvgMemo,
  decreaseFromPrevWordsAvgMemo,
  allWordsCountMemo,

  setMainChart,
  mainChart,
}) => {
  const [showToolTip, setShowToolTip] = useState(true);

  return (
    <div className="mt-8 relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        dir="rtl"
        navigation
        modules={[Navigation]}>
        <SwiperSlide>
          <div
            onClick={() => setMainChart(mainChartTypes.allWordsCount)}
            className={`customCard transition-shadow ${
              mainChart === mainChartTypes.allWordsCount ? "active" : ""
            }`}>
            {/* <Tooltip anchorId="my-element" variant="dark" /> */}
            {/* <button
              id="my-element"
              data-tooltip-content="به ازای هر بروزرسانی ورک اسپیس، 
            میانگین رتبه کل کلمات کلیدی موجود 
            آن در صفحه اول گوگل محاسبه می‌شود."
              className="absolute top-1 left-1 rounded-full flex items-center justify-center text-[.56rem]">
              <img src={HelpImg} className="w-4 h-4" width="100%" alt="" />
            </button> */}
            <div className=" absolute left-1 top-1">
              <img
                src={ImageContainer.infoUtils}
                alt="section info"
                className=" w-3 h-3"
                data-tip="به ازای هر بروزرسانی ورک اسپیس، 
          میانگین رتبه کل کلمات کلیدی موجود 
          آن در صفحه اول گوگل محاسبه می‌شود."
                data-type="light"
                data-place="top"
                data-class="sizeClass"
                // onMouseEnter={() => setShowToolTip(true)}
                // onMouseLeave={() => {
                //   setShowToolTip(false);
                //   setTimeout(() => setShowToolTip(true), 0);
                // }}
              />
            </div>
            <div className="text-center mb-2 text-sm">
              میانگین رتبه کل کلمات
            </div>
            <ResponsiveContainer width="100%" height={51.54}>
              <AreaChart
                data={averageAllWordsMemo}
                margin={{
                  right: 0,
                  left: 0,
                  top: 2,
                  bottom: 2,
                }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={
                        averageAllWordsMemo[0].positionAverage >
                        averageAllWordsMemo[averageAllWordsMemo.length - 1]
                          .positionAverage
                          ? sampleChartColors.failure
                          : sampleChartColors.success
                      }
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={
                        averageAllWordsMemo[0].positionAverage >
                        averageAllWordsMemo[averageAllWordsMemo.length - 1]
                          .positionAverage
                          ? sampleChartColors.failure
                          : sampleChartColors.success
                      }
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <Area
                  isAnimationActive={false}
                  strokeWidth="3"
                  type="monotone"
                  dataKey="positionAverage"
                  stroke={
                    averageAllWordsMemo[0].positionAverage >
                    averageAllWordsMemo[averageAllWordsMemo.length - 1]
                      .positionAverage
                      ? sampleChartColors.failure
                      : sampleChartColors.success
                  }
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-2 text-neutral-500 flex justify-between text-center text-sm px-2">
              <div className="flex items-center flex-col">
                <div className="text-xs mb-1">میانگین رتبه قبل</div>
                <div className="customCard__tag">
                  <span>
                    {
                      averageAllWordsMemo[averageAllWordsMemo.length - 2]
                        .positionAverage
                    }{" "}
                    رتبه
                  </span>
                  <div className="flex flex-col justify-evenly h-full">
                    {averageAllWordsMemo[averageAllWordsMemo.length - 2]
                      .positionAverage >
                    averageAllWordsMemo[averageAllWordsMemo.length - 3]
                      .positionAverage ? (
                      <i className="triangle-up borderBT--red"></i>
                    ) : (
                      <i className="triangle-down"></i>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-col">
                <div className="text-s mb-1">میانگین رتبه فعلی</div>
                <div className="customCard__tag">
                  <span>
                    {
                      averageAllWordsMemo[averageAllWordsMemo.length - 1]
                        .positionAverage
                    }{" "}
                    رتبه
                  </span>
                  <div className="flex flex-col justify-evenly h-full">
                    {averageAllWordsMemo[averageAllWordsMemo.length - 1]
                      .positionAverage >
                    averageAllWordsMemo[averageAllWordsMemo.length - 2]
                      .positionAverage ? (
                      <i className="triangle-up borderBT--red"></i>
                    ) : (
                      <i className="triangle-down"></i>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className={`cursor-pointer absolute flex justify-center items-center bottom-0 right-0 left-0 ${
                mainChart === mainChartTypes.allWordsCount
                  ? "bg--blue"
                  : "bg-neutral-300"
              } hover:bg-blue-400 h-[17px]`}>
              <i
                className={`arrow down ${
                  mainChart === mainChartTypes.allWordsCount
                    ? "border--white"
                    : ""
                }`}></i>
            </div> */}
            <div
              className={`w-full py-1 absolute bottom-0 cursor-pointer ${
                mainChart === mainChartTypes.allWordsCount
                  ? "bg-primary removingImageColorInThisTag"
                  : "bg-sectionDisable"
              }`}>
              <img
                src={ImageContainer.moveDownArrow}
                alt="arrow bottom"
                className="m-auto "
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            onClick={() =>
              setMainChart(mainChartTypes.distributionCurrentAndPrevWords)
            }
            className={`customCard transition-shadow ${
              mainChart === mainChartTypes.distributionCurrentAndPrevWords
                ? "active"
                : ""
            }`}>
            {/* <Tooltip anchorId="my-element2" variant="dark" /> */}
            {/* <button
              id="my-element2"
              data-tooltip-content="به ازای هر بروزرسانی ورک اسپیس، 
            میانگین رتبه کل کلمات کلیدی موجود 
            آن در صفحه اول گوگل محاسبه می‌شود."
              className="absolute top-1 left-1 rounded-full  border  flex items-center justify-center text-[.56rem]">
              <img src={HelpImg} className="w-4 h-4" width="100%" alt="" />
            </button> */}
            <div className=" absolute left-1 top-1">
              <img
                src={ImageContainer.infoUtils}
                alt="section info"
                className=" w-3 h-3"
                data-tip="به ازای هر بروزرسانی ورک اسپیس، 
                میانگین رتبه کل کلمات کلیدی موجود 
                آن در صفحه اول گوگل محاسبه می‌شود."
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
            <div className="text-center mb-2 text-sm">توزیع رتبه کلمات</div>
            <div className="px-1">
              <div className="text-neutral-500 text-[8px] flex items-center border-border border-b pb-1 px-3">
                <div className="w-[50px]">دوره قبل</div>
                <div className="w-[50px]">دوره فعلی</div>
              </div>
              <div className="text-sm text-center flex items-center justify-between border-border border-b pb-1 py-2">
                <div className="flex items-center">
                  <div className="w-[50px] ">
                    <span className="ml-2">
                      {
                        distributionCurrentAndPrevWordsMemo.arr[
                          distributionCurrentAndPrevWordsMemo.arr.length - 2
                        ]["1-3"]
                      }
                    </span>
                  </div>
                  <div className="w-[50px] flex items-center justify-center">
                    {
                      distributionCurrentAndPrevWordsMemo.arr[
                        distributionCurrentAndPrevWordsMemo.arr.length - 1
                      ]["1-3"]
                    }{" "}
                    {distributionCurrentAndPrevWordsMemo.arr[
                      distributionCurrentAndPrevWordsMemo.arr.length - 1
                    ]["1-3"] >
                    distributionCurrentAndPrevWordsMemo.arr[
                      distributionCurrentAndPrevWordsMemo.arr.length - 2
                    ]["1-3"] ? (
                      <i className="triangle-up mr-2"></i>
                    ) : distributionCurrentAndPrevWordsMemo.arr[
                        distributionCurrentAndPrevWordsMemo.arr.length - 1
                      ]["1-3"] <
                      distributionCurrentAndPrevWordsMemo.arr[
                        distributionCurrentAndPrevWordsMemo.arr.length - 2
                      ]["1-3"] ? (
                      <i className="triangle-down borderBT--red mr-2"></i>
                    ) : (
                      <i className=" inline-block dot mr-2"></i>
                    )}
                  </div>
                </div>
                <div className="text-neutral-400 flex items-center">
                  <div>3</div>
                  <div className="mx-1">-</div>
                  <div>1</div>
                  <div className="mr-1">#</div>
                </div>
              </div>
              <div className="text-sm text-center flex items-center justify-between border-border border-b pb-1 py-2">
                <div className="flex items-center">
                  <div className="w-[50px]">
                    <span className="ml-2">
                      {
                        distributionCurrentAndPrevWordsMemo.arr[
                          distributionCurrentAndPrevWordsMemo.arr.length - 2
                        ]["4-7"]
                      }{" "}
                    </span>
                  </div>
                  <div className="w-[50px] flex items-center justify-center">
                    {
                      distributionCurrentAndPrevWordsMemo.arr[
                        distributionCurrentAndPrevWordsMemo.arr.length - 1
                      ]["4-7"]
                    }{" "}
                    {distributionCurrentAndPrevWordsMemo.arr[
                      distributionCurrentAndPrevWordsMemo.arr.length - 1
                    ]["4-7"] >
                    distributionCurrentAndPrevWordsMemo.arr[
                      distributionCurrentAndPrevWordsMemo.arr.length - 2
                    ]["4-7"] ? (
                      <i className="triangle-up mr-2"></i>
                    ) : distributionCurrentAndPrevWordsMemo.arr[
                        distributionCurrentAndPrevWordsMemo.arr.length - 1
                      ]["4-7"] <
                      distributionCurrentAndPrevWordsMemo.arr[
                        distributionCurrentAndPrevWordsMemo.arr.length - 2
                      ]["4-7"] ? (
                      <i className="triangle-down borderBT--red mr-2"></i>
                    ) : (
                      <i className=" inline-block dot mr-2"></i>
                    )}
                  </div>
                </div>
                <div className="text-neutral-400 flex items-center">
                  <div>7</div>
                  <div className="mx-1">-</div>
                  <div>4</div>
                  <div className="mr-1">#</div>
                </div>
              </div>
              <div className="text-sm text-center flex items-center justify-between pb-1 py-2">
                <div className="flex items-center">
                  <div className="w-[50px] ">
                    <span className="ml-2">
                      {
                        distributionCurrentAndPrevWordsMemo.arr[
                          distributionCurrentAndPrevWordsMemo.arr.length - 2
                        ]["8-10"]
                      }{" "}
                    </span>
                  </div>
                  <div className="w-[50px] flex items-center justify-center">
                    {
                      distributionCurrentAndPrevWordsMemo.arr[
                        distributionCurrentAndPrevWordsMemo.arr.length - 1
                      ]["8-10"]
                    }{" "}
                    {distributionCurrentAndPrevWordsMemo.arr[
                      distributionCurrentAndPrevWordsMemo.arr.length - 1
                    ]["8-10"] >
                    distributionCurrentAndPrevWordsMemo.arr[
                      distributionCurrentAndPrevWordsMemo.arr.length - 2
                    ]["8-10"] ? (
                      <i className="triangle-up mr-2"></i>
                    ) : distributionCurrentAndPrevWordsMemo.arr[
                        distributionCurrentAndPrevWordsMemo.arr.length - 1
                      ]["8-10"] <
                      distributionCurrentAndPrevWordsMemo.arr[
                        distributionCurrentAndPrevWordsMemo.arr.length - 2
                      ]["8-10"] ? (
                      <i className="triangle-down borderBT--red mr-2"></i>
                    ) : (
                      <i className=" inline-block dot mr-2"></i>
                    )}
                  </div>
                </div>
                <div className="text-neutral-400 flex items-center">
                  <div>10</div>
                  <div className="mx-1">-</div>
                  <div>8</div>
                  <div className="mr-1">#</div>
                </div>
              </div>
            </div>
            {/* <div
              className={`cursor-pointer absolute flex justify-center items-center bottom-0 right-0 left-0 ${
                mainChart === mainChartTypes.distributionCurrentAndPrevWords
                  ? "bg--blue"
                  : "bg-neutral-300"
              } hover:bg-blue-400 h-[17px]`}>
              <i
                className={`arrow down ${
                  mainChart === mainChartTypes.distributionCurrentAndPrevWords
                    ? "border--white"
                    : ""
                }`}></i>{" "}
            </div> */}
            <div
              className={`w-full py-1 absolute bottom-0 cursor-pointer ${
                mainChart === mainChartTypes.distributionCurrentAndPrevWords
                  ? "bg-primary removingImageColorInThisTag"
                  : "bg-sectionDisable"
              }`}>
              <img
                src={ImageContainer.moveDownArrow}
                alt="arrow bottom"
                className="m-auto "
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            onClick={() => setMainChart(mainChartTypes.incAndDecWords)}
            className={`customCard transition-shadow ${
              mainChart === mainChartTypes.incAndDecWords ? "active" : ""
            }`}>
            {/* <Tooltip anchorId="my-element4" variant="dark" /> */}
            {/* <button
              id="my-element4"
              data-tooltip-content="این نمودار به ازای هر دوره جایگاه کلمات کلیدی 
            آن را با دوره قبل مقایسه کرده و تعداد پیشرفت را نمایش می‌‌دهد"
              className="absolute top-1 left-1 rounded-full flex items-center justify-center text-[.56rem]">
              <img src={HelpImg} className="w-4 h-4" width="100%" alt="" />
            </button> */}
            <div className=" absolute left-1 top-1">
              <img
                src={ImageContainer.infoUtils}
                alt="section info"
                className=" w-3 h-3"
                data-tip="این نمودار به ازای هر دوره جایگاه کلمات کلیدی 
                آن را با دوره قبل مقایسه کرده و تعداد پیشرفت را نمایش می‌‌دهد"
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
            <div className="text-center mb-2 text-sm">
              نمودار پیشرفت و افت کلمات
            </div>
            <div className="w-11/12 mx-auto mb-2 pb-2 border-b">
              <MultiProgress
                className="h--25"
                style={{ height: "25px" }}
                round={false}
                transitionTime={1.5}
                roundLastElement={false}
                elements={[
                  {
                    color: "#D9D9D9",
                    actual:
                      increaseFromPrevWordsCountMemo.everyThing -
                      increaseFromPrevWordsCountMemo.total -
                      decreaseFromPrevWordsCountMemo.total,
                    value:
                      ((increaseFromPrevWordsCountMemo.everyThing -
                        increaseFromPrevWordsCountMemo.total -
                        decreaseFromPrevWordsCountMemo.total) /
                        increaseFromPrevWordsCountMemo.everyThing) *
                      100,
                    // className:''
                  },
                  {
                    actual: increaseFromPrevWordsCountMemo.total,
                    value:
                      (increaseFromPrevWordsCountMemo.total * 100) /
                      increaseFromPrevWordsCountMemo.everyThing,
                    color: sampleChartColors.success,
                  },
                  {
                    actual: decreaseFromPrevWordsCountMemo.total,
                    value:
                      (decreaseFromPrevWordsCountMemo.total * 100) /
                      increaseFromPrevWordsCountMemo.everyThing,
                    color: sampleChartColors.failure,
                  },
                ]}
                component={({ children, element, ...rest }) => {
                  console.log(children, element, "iiiiiii");

                  // console.log({ xx });
                  return (
                    <div
                      {...rest} // adds all styles for rendering the progress bar
                      style={{
                        fontWeight: element.isBold ? 900 : 300,
                      }}
                      className="progressBar__single">
                      {children}
                      <div className="text-xs">
                        <span className="ml-3">{element?.actual}</span>
                        <i
                          className={` inline-block ${
                            element.color === sampleChartColors.failure
                              ? "borderBT--red triangle-down"
                              : element.color === sampleChartColors.success
                              ? "triangle-up"
                              : "dot"
                          }`}></i>
                      </div>
                    </div>
                  );
                }}
              />
            </div>
            <div>
              <ResponsiveContainer width="100%" height={30}>
                <BarChart
                  data={increaseFromPrevWordsCountMemo.arr}
                  margin={{
                    right: 0,
                    left: 0,
                    top: 0,
                    bottom: 0,
                  }}>
                  <ReferenceLine y={0} stroke="#D9D9D9" />
                  <Bar
                    isAnimationActive={false}
                    dataKey="uv"
                    fill={sampleChartColors.success}
                    barSize={13}
                  />
                </BarChart>
              </ResponsiveContainer>
              <ResponsiveContainer
                width="100%"
                height={30}
                className="reversed">
                <BarChart
                  data={decreaseFromPrevWordsCountMemo.arr}
                  margin={{
                    right: 0,
                    left: 0,
                  }}>
                  <Bar
                    isAnimationActive={false}
                    dataKey="uv"
                    fill={sampleChartColors.failure}
                    barSize={13}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 text-neutral-500 flex justify-between text-center text-sm px-2"></div>
            {/* <div
              className={`cursor-pointer absolute flex justify-center items-center bottom-0 right-0 left-0 ${
                mainChart === mainChartTypes.incAndDecWords
                  ? "bg--blue"
                  : "bg-neutral-300"
              } hover:bg-blue-400 h-[17px]`}>
              <i
                className={`arrow down ${
                  mainChart === mainChartTypes.incAndDecWords
                    ? "border--white"
                    : ""
                }`}></i>{" "}
            </div> */}
            <div
              className={`w-full py-1 absolute bottom-0 cursor-pointer ${
                mainChart === mainChartTypes.incAndDecWords
                  ? "bg-primary removingImageColorInThisTag"
                  : "bg-sectionDisable"
              }`}>
              <img
                src={ImageContainer.moveDownArrow}
                alt="arrow bottom"
                className="m-auto "
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            onClick={() =>
              setMainChart(mainChartTypes.increaseFromPrevWordsCount)
            }
            className={`customCard transition-shadow ${
              mainChart === mainChartTypes.increaseFromPrevWordsCount
                ? "active"
                : ""
            }`}>
            {/* <Tooltip anchorId="my-element412" variant="dark" /> */}
            {/* <button
              id="my-element412"
              data-tooltip-content="این نمودار به ازای هر دوره جایگاه کلمات کلیدی 
            آن را با دوره قبل مقایسه کرده و تعداد پیشرفت را نمایش می‌‌دهد"
              className="absolute top-1 left-1 rounded-full  flex items-center justify-center text-[.56rem]">
              <img src={HelpImg} className="w-4 h-4" width="100%" alt="" />
            </button> */}
            <div className=" absolute left-1 top-1">
              <img
                src={ImageContainer.infoUtils}
                alt="section info"
                className=" w-3 h-3"
                data-tip="این نمودار به ازای هر دوره جایگاه کلمات کلیدی 
                آن را با دوره قبل مقایسه کرده و تعداد پیشرفت را نمایش می‌‌دهد"
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
            <div className="text-center mb-2 text-sm">کلمات رشد کرده</div>
            <ResponsiveContainer width="100%" height={51.54}>
              <AreaChart
                data={increaseFromPrevWordsCountMemo.arr}
                margin={{
                  right: 0,
                  left: 0,
                  top: 2,
                  bottom: 2,
                }}>
                <defs>
                  <linearGradient id="colorUv28" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={sampleChartColors.success}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={sampleChartColors.success}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Area
                  isAnimationActive={false}
                  strokeWidth="3"
                  dataKey="uv"
                  stroke={sampleChartColors.success}
                  fillOpacity={1}
                  fill="url(#colorUv28)"
                  type="monotone"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-2 text-neutral-500 flex justify-between text-center text-sm px-2">
              <div>
                <div className="text-xs mb-1">کل کلمات</div>
                <div className="customCard__tag">
                  <span>{allWordsCountMemo}</span>
                </div>
              </div>
              <div>
                <div className="text-xs mb-1">تعداد رشد کلمات</div>
                <div className="customCard__tag">
                  <span>{increaseFromPrevWordsCountMemo.total}</span>
                </div>
              </div>
            </div>
            {/* <div
              className={`cursor-pointer absolute flex justify-center items-center bottom-0 right-0 left-0 ${
                mainChart === mainChartTypes.increaseFromPrevWordsCount
                  ? "bg--blue"
                  : "bg-neutral-300"
              } hover:bg-blue-400 h-[17px]`}>
              <i
                className={`arrow down ${
                  mainChart === mainChartTypes.increaseFromPrevWordsCount
                    ? "border--white"
                    : ""
                }`}></i>
            </div> */}
            <div
              className={`w-full py-1 absolute bottom-0 cursor-pointer ${
                mainChart === mainChartTypes.increaseFromPrevWordsCount
                  ? "bg-primary removingImageColorInThisTag"
                  : "bg-sectionDisable"
              }`}>
              <img
                src={ImageContainer.moveDownArrow}
                alt="arrow bottom"
                className="m-auto "
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            onClick={() =>
              setMainChart(mainChartTypes.decreaseFromPrevWordsCount)
            }
            className={`customCard transition-shadow ${
              mainChart === mainChartTypes.decreaseFromPrevWordsCount
                ? "active"
                : ""
            }`}>
            {/* <Tooltip anchorId="my-element5" variant="dark" /> */}
            {/* <button
              id="my-element5"
              data-tooltip-content="این نمودار به ازای هر دوره جایگاه کلمات کلیدی 
            آن را با دوره قبل مقایسه کرده و تعداد افت را نمایش می‌‌دهد"
              className="absolute top-1 left-1 rounded-full flex items-center justify-center text-[.56rem]">
              <img src={HelpImg} className="w-4 h-4" width="100%" alt="" />
            </button> */}
            <div className=" absolute left-1 top-1">
              <img
                src={ImageContainer.infoUtils}
                alt="section info"
                className=" w-3 h-3"
                data-tip="این نمودار به ازای هر دوره جایگاه کلمات کلیدی 
                آن را با دوره قبل مقایسه کرده و تعداد افت را نمایش می‌‌دهد"
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
            <div className="text-center mb-2 text-sm">کلمات افت کرده</div>
            <ResponsiveContainer width="100%" height={51.54}>
              <AreaChart
                data={decreaseFromPrevWordsCountMemo.arr}
                margin={{
                  right: 0,
                  left: 0,
                  top: 2,
                  bottom: 2,
                }}>
                <defs>
                  <linearGradient id="colorUv178" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={sampleChartColors.failure}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={sampleChartColors.failure}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <Area
                  isAnimationActive={false}
                  strokeWidth="3"
                  type="monotone"
                  dataKey="uv"
                  stroke={sampleChartColors.failure}
                  fillOpacity={1}
                  fill="url(#colorUv178)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-2 text-neutral-500 flex justify-between text-center text-sm px-2">
              <div>
                <div className="text-xs mb-1">کل کلمات</div>
                <div
                  className="customCard__tag"
                  style={{ justifyContent: "center" }}>
                  <span>{allWordsCountMemo}</span>
                  <div className="flex flex-col justify-evenly h-full"></div>
                </div>
              </div>
              <div>
                <div className="text-xs mb-1">تعداد افت کلمات</div>
                <div
                  className="customCard__tag"
                  style={{ justifyContent: "center" }}>
                  <span>{decreaseFromPrevWordsCountMemo.total}</span>
                  <div className="flex flex-col justify-evenly h-full"></div>
                </div>
              </div>
            </div>
            {/* <div
              className={`cursor-pointer absolute flex justify-center items-center bottom-0 right-0 left-0 ${
                mainChart === mainChartTypes.decreaseFromPrevWordsCount
                  ? "bg--blue"
                  : "bg-neutral-300"
              } hover:bg-blue-400 h-[17px]`}>
              <i
                className={`arrow down ${
                  mainChart === mainChartTypes.decreaseFromPrevWordsCount
                    ? "border--white"
                    : ""
                }`}></i>
            </div> */}
            <div
              className={`w-full py-1 absolute bottom-0 cursor-pointer ${
                mainChart === mainChartTypes.decreaseFromPrevWordsCount
                  ? "bg-primary removingImageColorInThisTag"
                  : "bg-sectionDisable"
              }`}>
              <img
                src={ImageContainer.moveDownArrow}
                alt="arrow bottom"
                className="m-auto "
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            onClick={() =>
              setMainChart(mainChartTypes.increaseFromPrevWordsAvg)
            }
            className={`customCard transition-shadow ${
              mainChart === mainChartTypes.increaseFromPrevWordsAvg
                ? "active"
                : ""
            }`}>
            {/* <Tooltip anchorId="my-element6" variant="dark" /> */}
            {/* <button
              id="my-element6"
              data-tooltip-content="به ازای هر بروزرسانی ورک اسپیس، 
            میانگین میزان پیشرفت کلمات کلیدی موجود 
            آن در صفحه اول گوگل محاسبه می‌شود."
              className="absolute top-1 left-1 rounded-full flex items-center justify-center text-[.56rem]">
              <img src={HelpImg} className="w-4 h-4" width="100%" alt="" />
            </button> */}
            <div className=" absolute left-1 top-1">
              <img
                src={ImageContainer.infoUtils}
                alt="section info"
                className=" w-3 h-3"
                data-tip="به ازای هر بروزرسانی ورک اسپیس، 
                میانگین میزان پیشرفت کلمات کلیدی موجود 
                آن در صفحه اول گوگل محاسبه می‌شود."
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
            <div className="text-center mb-2 text-sm">میانگین رشد کلمات</div>
            <ResponsiveContainer width="100%" height={51.54}>
              <AreaChart
                data={increaseFromPrevWordsAvgMemo.arr}
                margin={{
                  right: 0,
                  left: 0,
                  bottom: 2,
                  top: 2,
                }}>
                <defs>
                  <linearGradient id="colorUv21" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={sampleChartColors.success}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={sampleChartColors.success}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <Area
                  isAnimationActive={false}
                  strokeWidth="3"
                  type="monotone"
                  dataKey="uv"
                  stroke={sampleChartColors.success}
                  fillOpacity={1}
                  fill="url(#colorUv21)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-2 text-neutral-500 flex justify-between text-center text-sm px-2">
              <div>
                <div className="text-xs mb-1">میانگین رشد رتبه</div>
                <div className="customCard__tag">
                  <span>{increaseFromPrevWordsAvgMemo.totalAvg} رتبه</span>
                  <div className="flex flex-col justify-evenly h-full">
                    {/* <i className="triangle-up borderBT--red"></i> */}
                    <i className="triangle-up"></i>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-xs mb-1">تعداد رشد کلمات</div>
                <div className="customCard__tag">
                  <span>{increaseFromPrevWordsAvgMemo.arr.length}</span>
                </div>
              </div>
            </div>
            {/* <div
              className={`cursor-pointer absolute flex justify-center items-center bottom-0 right-0 left-0 ${
                mainChart === mainChartTypes.increaseFromPrevWordsAvg
                  ? "bg--blue"
                  : "bg-neutral-300"
              } hover:bg-blue-400 h-[17px]`}>
              <i
                className={`arrow down ${
                  mainChart === mainChartTypes.increaseFromPrevWordsAvg
                    ? "border--white"
                    : ""
                }`}></i>
            </div> */}
            <div
              className={`w-full py-1 absolute bottom-0 cursor-pointer ${
                mainChart === mainChartTypes.increaseFromPrevWordsAvg
                  ? "bg-primary removingImageColorInThisTag"
                  : "bg-sectionDisable"
              }`}>
              <img
                src={ImageContainer.moveDownArrow}
                alt="arrow bottom"
                className="m-auto "
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            onClick={() =>
              setMainChart(mainChartTypes.decreaseFromPrevWordsAvg)
            }
            className={`customCard transition-shadow ${
              mainChart === mainChartTypes.decreaseFromPrevWordsAvg
                ? "active"
                : ""
            }`}>
            {/* <Tooltip anchorId="my-element7" variant="dark" /> */}
            {/* <button
              id="my-element7"
              data-tooltip-content="به ازای هر بروزرسانی ورک اسپیس، 
            میانگین میزان افت کلمات کلیدی موجود 
            آن در صفحه اول گوگل محاسبه می‌شود."
              className="absolute top-1 left-1 rounded-full flex items-center justify-center text-[.56rem]">
              <img src={HelpImg} className="w-4 h-4" width="100%" alt="" />
            </button> */}
            <div className=" absolute left-1 top-1">
              <img
                src={ImageContainer.infoUtils}
                alt="section info"
                className=" w-3 h-3"
                data-tip="به ازای هر بروزرسانی ورک اسپیس، 
                میانگین میزان افت کلمات کلیدی موجود 
                آن در صفحه اول گوگل محاسبه می‌شود."
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
            <div className="text-center mb-2 text-sm">میانگین افت کلمات</div>
            <ResponsiveContainer width="100%" height={51.54}>
              <AreaChart
                data={decreaseFromPrevWordsAvgMemo.arr}
                margin={{
                  right: 0,
                  left: 0,
                  top: 2,
                  bottom: 2,
                }}>
                <defs>
                  <linearGradient id="colorUv54" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={sampleChartColors.failure}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={sampleChartColors.failure}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <Area
                  isAnimationActive={false}
                  strokeWidth="3"
                  type="monotone"
                  dataKey="uv"
                  stroke={sampleChartColors.failure}
                  fillOpacity={1}
                  fill="url(#colorUv54)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-2 text-neutral-500 flex justify-between text-center text-sm px-2">
              <div>
                <div className="text-xs mb-1">میانگین افت رتبه</div>
                <div className="customCard__tag">
                  <span>{decreaseFromPrevWordsAvgMemo.totalAvg} رتبه</span>
                  <div className="flex flex-col justify-evenly h-full">
                    <i className="triangle-down borderBT--red"></i>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-xs mb-1">تعداد افت کلمات</div>
                <div className="customCard__tag">
                  <span>{decreaseFromPrevWordsAvgMemo.arr.length}</span>
                </div>
              </div>
            </div>
            {/* <div
              className={`cursor-pointer absolute flex justify-center items-center bottom-0 right-0 left-0 ${
                mainChart === mainChartTypes.decreaseFromPrevWordsAvg
                  ? "bg--blue"
                  : "bg-neutral-300"
              } hover:bg-blue-400 h-[17px]`}>
              <i
                className={`arrow down ${
                  mainChart === mainChartTypes.decreaseFromPrevWordsAvg
                    ? "border--white"
                    : ""
                }`}></i>
            </div> */}
            <div
              className={`w-full py-1 absolute bottom-0 cursor-pointer ${
                mainChart === mainChartTypes.decreaseFromPrevWordsAvg
                  ? "bg-primary removingImageColorInThisTag"
                  : "bg-sectionDisable"
              }`}>
              <img
                src={ImageContainer.moveDownArrow}
                alt="arrow bottom"
                className="m-auto "
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OptionsSlider;
