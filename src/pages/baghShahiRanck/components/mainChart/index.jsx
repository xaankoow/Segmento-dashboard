import React, { useCallback, useEffect, useState } from "react";
import ReactSelect from "react-select";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import SelectingChartBtn from "../../../../component/Dashboard/RankTracking/card/SelectingChartBtn";
import ComboBox from "../../../../component/shared/comboBox/ComboBox";
import { RANK_TRACKING_FILTERS_DATE } from "../../../../variables/rankTrackingFilters";
import mainChartSelectOptions from "../../configs/mainChartSelectOptions";
import mainChartTypes from "../../configs/mainChartTypes";
// import { sampleChartData } from "../../configs/sampleChartData";
import ChartBar from "../optionsSlider/SHARED/icons/chartBar copy";
import ChartLine from "../optionsSlider/SHARED/icons/chartLine";

const MainChart = ({
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
  const [chartType, setChartType] = useState("Bar");

  const lineChartData = useCallback(() => {
    console.log({ mainChart });
    if (mainChart === mainChartTypes.allWordsCount) return averageAllWordsMemo;
    if (mainChart === mainChartTypes.increaseFromPrevWordsCount)
      return increaseFromPrevWordsCountMemo.arr;
    if (mainChart === mainChartTypes.increaseFromPrevWordsAvg)
      return increaseFromPrevWordsAvgMemo.arr;
    if (mainChart === mainChartTypes.decreaseFromPrevWordsCount)
      return decreaseFromPrevWordsCountMemo.arr;
    if (mainChart === mainChartTypes.decreaseFromPrevWordsAvg)
      return decreaseFromPrevWordsAvgMemo.arr;
    if (mainChart === mainChartTypes.distributionCurrentAndPrevWords)
      return distributionCurrentAndPrevWordsMemo.mainChart;
    if (mainChart === mainChartTypes.incAndDecWords) {
      const xx = increaseFromPrevWordsCountMemo.arr.map((item, indx) => {
        return {
          ...item,
          pv: decreaseFromPrevWordsCountMemo.arr[indx].uv,
        };
      });
      console.log({ xx });
      return xx;
    }
    // return [increaseFromPrevWordsCountMemo, decreaseFromPrevWordsCountMemo];
  }, [mainChart]);

  useEffect(() => {
    if (mainChart === mainChartTypes.distributionCurrentAndPrevWords) {
      setChartType(1);
    }
  }, [mainChart]);

  return (
    <div className="border border-border rounded mt-8 pb-6 mb-6">
      <div className="flex items-center justify-between bg-[#FCFCFB] p-2">
        <ReactSelect
          classNamePrefix="custom-select"
          placeholder=""
          noOptionsMessage={() => "گزینه ای موجود نیست"}
          className="w-[197px]"
          options={mainChartSelectOptions}
          value={mainChartSelectOptions.find(
            (item) => item.value === mainChart
          )}
          onChange={(e) => setMainChart(e.value)}
        />
        {/* <ComboBox
          placeholder={"فیلتر زمانی"}
          radioTextItems={RANK_TRACKING_FILTERS_DATE}
          radioClickedHandler={(e) => setMainChart(e.target.value)}
        /> */}
        <div className="flex items-center">
          {/* <button
            onClick={() => setChartType(1)}
            className={`ml-3 w-10 h-10 flex items-center justify-center rounded-md ${
              chartType === 1 ? "bg-[#0B4B94]" : "bg-[#F2F5F7]"
            }`}
          > */}
          {/* <ChartBar color={`${chartType === 1 ? "white" : ""}`} /> */}
          <SelectingChartBtn
            chartIco="Bar"
            chartSelected={chartType}
            getChartSelected={setChartType}
          />
          {/* </button> */}
          {/* <button
            disabled={
              mainChart === mainChartTypes.distributionCurrentAndPrevWords
            }
            onClick={() => setChartType(0)}
            className={`w-10 h-10 flex items-center justify-center rounded-md ${
              chartType === 0 ? "bg-[#0B4B94]" : "bg-[#F2F5F7]"
            }`}
          > */}
          {/* <ChartLine color={`${chartType === 0 ? "white" : ""}`} /> */}
          <SelectingChartBtn
            chartIco="Line"
            chartSelected={chartType}
            getChartSelected={setChartType}
          />
          {/* </button> */}
        </div>
      </div>

      <div className="mt-32">
        {chartType === "Line" ? (
          <ResponsiveContainer width="100%" height={242}>
            <LineChart
              width={730}
              height={250}
              data={lineChartData()}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis dataKey="name" />
              <YAxis tickMargin={40} />
              <Tooltip
                content={({ active, payload, label }) => {
                  return (
                    <div className="p-2 border border-black">
                      <div className="label">{`${payload[0]?.value ?? ""} ${
                        payload[1]?.value ? "," + payload[1]?.value : ""
                      } : ${label}`}</div>
                    </div>
                  );
                }}
                // label="HI"
                // labelFormatter={}
              />
              {/* 
                <Legend /> */}
              {mainChart === mainChartTypes.incAndDecWords ? (
                <>
                  <Line
                    isAnimationActive={false}
                    type="monotone"
                    dataKey="uv"
                    stroke="#0E70D4"
                  />
                  <Line
                    isAnimationActive={false}
                    type="monotone"
                    dataKey="pv"
                    stroke="red"
                  />
                </>
              ) : (
                <Line
                  isAnimationActive={false}
                  type="monotone"
                  dataKey={`${
                    mainChart === mainChartTypes.allWordsCount
                      ? "positionAverage"
                      : "uv"
                  }`}
                  stroke="#0E70D4"
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height={242}>
            <BarChart
              data={lineChartData()}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis dataKey="name" />
              <YAxis tickMargin={40} />
              <Tooltip
                content={({ active, payload, label }) => {
                  console.log(payload, "yyy");
                  return (
                    <div className="p-2 border border-black">
                      <div className="label">{`${payload[0]?.value ?? ""} ${
                        payload[1]?.value ? "," + payload[1]?.value : ""
                      } : ${label}`}</div>
                    </div>
                  );
                }}
                // label="HI"
                // labelFormatter={}
              />{" "}
              {/* 
            <Legend /> */}
              {mainChart === mainChartTypes.incAndDecWords ? (
                <>
                  <Bar isAnimationActive={false} dataKey="uv" fill="#8884d8" />
                  <Bar isAnimationActive={false} dataKey="pv" fill="red" />
                </>
              ) : (
                <Bar
                  isAnimationActive={false}
                  dataKey={`${
                    mainChart === mainChartTypes.allWordsCount
                      ? "positionAverage"
                      : "uv"
                  }`}
                  fill="#8884d8"
                />
              )}
            </BarChart>
          </ResponsiveContainer>
        )}

        {/* <div className="text-center text-[#F35242] mt-3">
          نکته: نمایش نمودار فقط براساس 7 دوره صورت میگیرد و نمایش داده میشود .
          تمامی نمودار ها و چارت ها بازه های زمانی انها تا 7 دوره قبل میباشد
        </div> */}
      </div>
    </div>
  );
};

export default MainChart;
