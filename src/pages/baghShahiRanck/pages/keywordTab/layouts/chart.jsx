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
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
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
  "#99E6E6",
  "#6666FF",
];

const KeywordChart = ({
  selected,
  handleDeleteSelected,
  filteredTableData,
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
          position: "top",
          textDirection: "rtl",
          title: {
            text: "salam",
          },
          // onClick: (_, legendItem) => handleDeleteSelected(legendItem.text),
        },
        title: {
          display: false,
        },
      },
      tension: 0.3,
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
  });

  useEffect(() => {
    console.log("IM FIRE : ", selected);
    if (!selected.length) return;
    handlePrepareAndAttachToChart(selected);
  }, [selected]);

  function handlePrepareAndAttachToChart(selected) {
    let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    let data = {};
    data.label = selected[selected.length - 1].key;
    data.data = labels.map(() => faker.datatype.number({ min: 5, max: 100 }));
    data.borderColor = randomColor;
    data.backgroundColor = randomColor;

    setData((prev) => ({ ...prev, datasets: [...prev.datasets, data] }));
  }

  // DATA SET
  // {
  //   label: "Dataset 2",
  //   data: [100, 80, 20, 93, 20, 50],
  //   borderColor: "rgb(53, 162, 235)",
  //   backgroundColor: "rgba(53, 162, 235, 0.5)",
  // },

  console.log("filteredTableData : ", filteredTableData);

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
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            onChange={(val) => {
              console.log("VAL : ", val);
            }}
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
