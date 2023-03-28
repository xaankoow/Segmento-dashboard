import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import SelectingChartBtn from "../../../../../component/Dashboard/RankTracking/card/SelectingChartBtn";
import { faker } from "@faker-js/faker";
import ReactSelect from "react-select";

//==== IMAGEs
import RefreshIcon from "../../../../../assets/img/ico/restart.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const colorArray = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590",
  "#277da1",
];

const labels = ["", "", "", "", "", "", ""];

const KeywordChart = ({
  selected,
  handleDeleteSelected,
  filteredTableData,
  handleSelectKeyword,
  handleRefreshChart,
}) => {
  const [type, setType] = useState("Line");
  const [data, setData] = useState({
    labels,
    datasets: [],
  });
  const [options] = useState({
    line: {
      responsive: true,
      tension: 0.3,
      plugins: {
        legend: { display: false },
        title: { display: false },
      },
      scales: {
        yAxis: {
          reverse: true,
          suggestedMin: 1,
          suggestedMax: 10,
          title: {
            display: true,
            text: "رتبه",
            padding: 10,
          },
        },
        xAxis: {
          title: {
            display: true,
            text: "دوره",
          },
        },
      },
    },
    bar: {
      responsive: true,
      base: 10,

      plugins: {
        legend: { display: false },
        title: { display: false },
      },
      scales: {
        yAxis: {
          reverse: true,
          stacked: false,
          suggestedMin: 1,
          suggestedMax: 10,
          ticks: {
            display: true,
          },
          title: {
            display: true,
            text: "رتبه",
            padding: 10,
          },
        },
        xAxis: {
          stacked: false,
          ticks: {
            display: true,
          },
          title: {
            display: true,
            text: "دوره",
          },
        },
      },
    },
  });

  useEffect(() => {
    console.log("IM FIRE : ", selected);
    if (!selected.length) {
      setData((prev) => ({ ...prev, datasets: [] }));
      return;
    }
    handlePrepareAndAttachOrDelete(selected);
  }, [selected]);

  function handlePrepareAndAttachOrDelete(selected) {
    let datasets = [];
    selected.forEach((item) => {
      let randomColor =
        colorArray[Math.floor(Math.random() * colorArray.length)];
      let data = {};
      data.label = item.key;
      data.data = labels.map(() => faker.datatype.number({ min: 1, max: 10 }));
      data.borderColor = randomColor;
      data.backgroundColor = randomColor;
      datasets.push(data);
    });

    setData((prev) => ({ ...prev, datasets }));
  }

  return (
    <div
      className="keyword-chart-container"
      style={{ border: "1px solid #D9D9D9" }}
    >
      <div className="top-header flex justify-between bg-[#FCFCFB] items-center pr-2">
        <span
          class="d-inline-block"
          data-toggle="popover"
          data-trigger="focus"
          data-content="Please selecet account(s)"
        >
          <ReactSelect
            options={
              filteredTableData.length
                ? filteredTableData.map((item) => ({
                    value: item.uuid,
                    label: item.key,
                  }))
                : []
            }
            isMulti
            closeMenuOnSelect={true}
            hideSelectedOptions={false}
            onChange={handleSelectKeyword}
            allowSelectAll={false}
            value={selected.map((item) => ({
              value: item.uuid,
              label: item.key,
            }))}
            isRtl={true}
            placeholder={"انتخاب کنید"}
          />
        </span>

        {/*  */}

        <div className="flex justify-between items-center ml-2">
          <SelectingChartBtn
            chartIco="Line"
            chartSelected={type}
            getChartSelected={setType}
          />
          <SelectingChartBtn
            chartIco="Bar"
            chartSelected={type}
            getChartSelected={setType}
          />
        </div>
      </div>

      <div className="main-body">
        <div className="w-full flex justify-end pl-2">
          <button onClick={handleRefreshChart}>
            <div className="flex justify-center items-center bg-secondary w-10 h-10 m-2 cursor-pointer hover:bg-activeButton transition-all rounded-lg removingImageColorInThisTagWithHover">
              <img src={RefreshIcon} alt="" />
            </div>
          </button>
        </div>
        <div className="flex justify-between p-3"></div>

        {type === "Line" ? (
          <Line data={data} options={{ ...options.line }} />
        ) : (
          <div className="barChart-container">
            <Bar data={data} options={options.bar} />
          </div>
        )}
      </div>
    </div>
  );
};

export default KeywordChart;
