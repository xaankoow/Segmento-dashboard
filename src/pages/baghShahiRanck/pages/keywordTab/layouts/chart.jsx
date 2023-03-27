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
var colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#6666FF",
];

const KeywordChart = ({
  selected,
  handleDeleteSelected,
  filteredTableData,
  handleSelectKeyword,
  handleRefreshChart,
}) => {
  const [type, setType] = useState("Line");
  const [labels] = useState(["", "", "", "", "", "", ""]);
  const [checkboxItem, setCheckboxItem] = useState([]);
  const [data, setData] = useState({
    labels,
    datasets: [],
  });
  const [options, setOptions] = useState({
    line: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      tension: 0.3,
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
      plugins: {
        title: {
          display: false,
          text: "Chart.js Bar Chart - Stacked",
        },
        legend: {
          display: false,
        },
      },
      responsive: true,
      scales: {
        yAxis: {
          stacked: true,
          ticks: {
            display: true,
          },
          reverse: true,
          suggestedMin: 1,
          suggestedMax: 10,
        },
        xAxis: {
          stacked: true,
          ticks: {
            display: true,
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
    handlePrepareAndAttachToChart(selected);
  }, [selected]);

  function handlePrepareAndAttachToChart(selected) {
    let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    let data = {};
    data.label = selected[selected.length - 1].key;
    data.data = labels.map(() => faker.datatype.number({ min: 1, max: 10 }));
    data.borderColor = randomColor;
    data.backgroundColor = randomColor;

    setData((prev) => ({ ...prev, datasets: [...prev.datasets, data] }));
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
          <Bar data={data} options={options.bar} />
        )}
      </div>
    </div>
  );
};

export default KeywordChart;
