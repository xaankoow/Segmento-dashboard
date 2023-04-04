import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useRef, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import ReactSelect from "react-select";
import SelectingChartBtn from "../../../../../component/Dashboard/RankTracking/card/SelectingChartBtn";

//==== IMAGEs
import RefreshIcon from "../../../../../assets/img/ico/restart.svg";
import ChartSelectedBox from "./chartSelectedBox";

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

const KeywordChart = ({
  labels,
  selected,
  setSelected,
  tableData,
  handleSelectKeyword,
  handleRefreshChart,
  selectForComparison,
  allChartData,
  handleRemoveComparisonFromRoot,
}) => {
  const comparisonRef = useRef(null);
  const lineChartRefrence = useRef(null);
  const barChartRefrenc = useRef(null);
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

  function updataCharts() {
    let line = lineChartRefrence.current;
    let bar = barChartRefrenc.current;
    setTimeout(() => {
      console.log(
        "%c_____ CHARTS UPDATES ______",
        "font-size: 1.2rem; color: #26f326"
      );

      line?.update?.();
      bar?.update?.();
    }, 100);
  }

  useEffect(() => {
    if (!selected.length) {
      setData((prev) => ({ ...prev, datasets: [] }));
      updataCharts();
      return;
    }
    handlePrepareAndAttach(selected);
    updataCharts();
  }, [selected]);

  useEffect(() => {
    if (!selectForComparison) {
      // CLEAR CAHRT FROM COMPARISON
      handleRemoveComparison(comparisonRef.current);
    }
    comparisonRef.current = selectForComparison;
    handlePrepareAndCombine(selectForComparison);
    updataCharts();
  }, [selectForComparison]);

  useEffect(() => {
    setData((prev) => ({ ...prev, labels }));
    updataCharts();
  }, [labels]);

  async function handlePrepareAndAttach(selected) {
    //TODO: NEED JUST ADD OR REMOVE SELECTED
    let datasets = [];

    selected.forEach(async (item) => {
      let randomColor =
        colorArray[Math.floor(Math.random() * colorArray.length)];

      let data = {
        id: item.uuid,
        label: item.key,
        data: findDataFromId(item.uuid),
        borderColor: randomColor,
        backgroundColor: randomColor,
      };

      datasets.push(data);
    });

    setData((prev) => ({ ...prev, datasets }));
  }

  function handlePrepareAndCombine(selected) {
    if (!selected) return;
    //GET RANDOM COLOR FROM PALET
    let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    //
    let data = {
      label: selected.label,
      data: findDataFromId(selected.value),
      borderColor: randomColor,
      backgroundColor: randomColor,
    };

    setData((prev) => ({ ...prev, datasets: [...prev.datasets, data] }));
  }

  function handleRemoveComparison(comparison) {
    if (
      !!selected.length &&
      selected.some((item) => item.key === comparison.label)
    )
      return;
    setData((prev) => ({
      ...prev,
      datasets: [
        ...prev.datasets.filter((item) => item.label !== comparison.label),
      ],
    }));
    comparisonRef.current = null;
  }

  function findDataFromId(id) {
    if (!allChartData.length) return;
    // let lastData = [];
    // WHEN TRUE DATA COMMIGN FIND DATA CODE
    // allChartData.forEach((item) => {
    //   item.forEach((elm) => {
    //     if (elm.keyword_uuid === id) {
    //       lastData.push(elm.position);
    //     }
    //   });
    // });
    // return lastData;

    // FAKE PICK DATA
    let findFakeIndex = tableData.findIndex((x) => x.uuid === id);
    let lastData = [];
    allChartData.forEach((item) => {
      lastData.push(item[findFakeIndex].position);
    });
    return lastData;
  }

  function handleRemoveFromDatasets(item) {
    if (selected.some((s) => s.uuid === item.id)) {
      setSelected((prev) => prev.filter((s) => s.uuid !== item.id));
    }
    if (!!selectForComparison) handleRemoveComparisonFromRoot();
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
              tableData.length
                ? tableData.map((item) => ({
                    value: item.uuid,
                    label: item.key,
                  }))
                : []
            }
            isMulti={false}
            closeMenuOnSelect={true}
            hideSelectedOptions={false}
            onChange={handleSelectKeyword}
            allowSelectAll={false}
            value={selected.map((item) => ({
              value: item.uuid,
              label: item.key,
            }))}
            isRtl={true}
            isClearable={false}
            placeholder={"انتخاب کنید"}
            noOptionsMessage={() => (
              <span className="opacity-40">بدون گزینه</span>
            )}
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
        <div className="w-full flex justify-between px-2 items-center">
          <div className="flex items-center gap-2 ">
            {data.datasets.map((item) => (
              <ChartSelectedBox
                selected={item}
                key={item.id}
                onRemove={() => handleRemoveFromDatasets(item)}
              />
            ))}
          </div>

          <button onClick={handleRefreshChart} className="justify-self-end">
            <div className="flex justify-center items-center bg-secondary w-10 h-10 m-2 cursor-pointer hover:bg-activeButton transition-all rounded-lg removingImageColorInThisTagWithHover">
              <img src={RefreshIcon} alt="" />
            </div>
          </button>
        </div>

        <div className="flex justify-between p-3"></div>

        {type === "Line" ? (
          <Line
            ref={lineChartRefrence}
            data={data}
            options={{ ...options.line }}
          />
        ) : (
          <div className="barChart-container">
            <Bar ref={barChartRefrenc} data={data} options={options.bar} />
          </div>
        )}
      </div>
    </div>
  );
};

export default KeywordChart;
