import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./rankTracking.css";
import pishkhan_svg from "../../../assets/img/dashboard/nav_right/pishkhan.svg";
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
  registerables,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { RANK_TRACKING_FILTERS_DATE } from "../../../variables/rankTrackingFilters";
import ComboBox from "../../shared/comboBox/ComboBox";
import { initWorkSpacePeriodData } from "../../Redux/Action/rankTraking";
import { useDispatch, useSelector } from "react-redux";
import { ImageContainer } from "../../../assets/img/IMG";
import ToolTip from "../../Utils/ToolTip";
// import MinichartController from "./card/miniChartCard/MinichartController";
// import MiniChartCard from "./card/miniChartCard/MiniCartCardController";
import MinichartController from "./card/miniChartCard/MiniChartCardController";
import TitleLastUpdateInfo from "./TitleLastUpdateInfo";
import BigChartController from "./card/bigChart/BigChartController";
import AuthButton from "../../Auth/authButton/AuthButton";
import SelectingChartBtn from "./card/SelectingChartBtn";
// import Swiper from "swiper";
import { Swiper, SwiperSlide, Navigation } from "swiper/react";

// Chart.register(...registerables)

ChartJS.register(
  CategoryScale,
  LinearScale,

  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ...registerables
);

export default function RankTracking({ onClickHandler }) {
  const rankTrakingState = useSelector((state) => state.rankTrakingState);

  const dispatch = useDispatch();

  const axiosController = new AbortController();

  //tooltip handler
  const [showToolTip, setShowToolTip] = useState(true);

  const options = {
    scales: {
      yAxis: {
        min: 1,
        max: 10,
      },
    },
    // scales: {

    //       xAxes: [{
    //           ticks: {
    //               beginAtZero:false,
    //               min: 0,
    //               max: 100
    //           }
    //         }]
    //      },
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

  //
  // options: {
  // responsive: true,
  // legend: {
  // position: 'bottom',
  // },
  // hover: {
  // mode: 'label'
  // },
  // scales: {
  // xAxes: [{
  // display: true,
  // scaleLabel: {
  // display: true,
  // labelString: 'Month'
  // }
  // }],
  // yAxes: [{
  // display: true,
  // ticks: {
  // beginAtZero: true,
  // steps: 10,
  // stepValue: 5,
  // max: 100
  // }
  // }]
  // },
  // title: {
  // display: true,
  // text: 'Chart.js Line Chart - Legend'
  // }
  // }
  //

  const [labels, setLabels] = useState([]);
  const [positionKeyWork, setPositionKeyWork] = useState([]);
  // const [labels,setLabels]=useState([])
  // const [labels,setLabels]=useState([])

  const data = {
    labels,
    datasets: [
      {
        fill: "end",

        label: "Dataset 2",
        // data: [96, 54, 45, 34, 45, 4, 67, 76, 65],
        data: positionKeyWork,
        // data: [1,4,5,7,3,1,4],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        pointRadius: 3,
        pointHitRadius: 1,
      },
    ],
  };

  // #F35242 red
  // #0071ff blue
  // #FFDC5D yellow

  const data1 = {
    datasets: [
      {
        label: "# of Votes",
        data: [30, 50, 20],
        cutout: 50,
        backgroundColor: ["#0071ff", "#F35242", "#FFDC5D"],
        borderWidth: 0,
        borderRadius: 7,
      },
    ],
  };

  useEffect(() => {
    dispatch(initWorkSpacePeriodData({ axiosController }));
  }, []);

  useEffect(() => {
    return () => {
      axiosController.abort();
    };
  }, []);

  const setDateFilterOption = (e) => {
    // console.log(e);
  };

  const chartKeys = [
    "AvgRankTotalWords",
    "KeywordRankDistribution",
    "GrownWords",
    "ProgressAndDeclineGraphOfWords",
    "TheWordsAreLost",
    "AvgGrownWords",
    "AvgTheWordsAreLost"
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <TitleLastUpdateInfo />
      <div className="tracker">
        <div className="tracker__wells">
          <Swiper
            spaceBetween={10}
            slidesPerView={6}
            ref={sliderRef}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {chartKeys.map((item) => (
              <>
                <SwiperSlide>
                  <MinichartController chartId={item} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
          <div
            className="prev-arrow absolute right-0 top-[45%] cursor-pointer z-20"
            onClick={handlePrev}>
            {"<"}
          </div>
          <div
            className="next-arrow absolute left-0 top-[45%] cursor-pointer z-20"
            onClick={handleNext}>
            {" "}
            {">"}{" "}
          </div>
        </div>

        {/* <div className="tracker__actions">

          <div className="filter">
            <div className="filter__title">
              <img src={pishkhan_svg} />
              <span>فیلتر بر اساس</span>
            </div>

            <div>
              <ComboBox
                placeholder={"فیلتر زمانی"}
                radioTextItems={RANK_TRACKING_FILTERS_DATE}
                radioClickedHandler={(e) => setDateFilterOption(e.target.value)}
              />
            </div>


            <div>
              <ComboBox
                placeholder={"فیلتر زمانی"}
                radioTextItems={RANK_TRACKING_FILTERS_DATE}
                radioClickedHandler={(e) => setDateFilterOption(e.target.value)}
              />
            </div>


            <div>
              <ComboBox
                placeholder={"فیلتر زمانی"}
                radioTextItems={RANK_TRACKING_FILTERS_DATE}
                radioClickedHandler={(e) => setDateFilterOption(e.target.value)}
              />
            </div>


            <div>
              <ComboBox
                placeholder={"فیلتر زمانی"}
                radioTextItems={RANK_TRACKING_FILTERS_DATE}
                radioClickedHandler={(e) => setDateFilterOption(e.target.value)}
              />
            </div>


          </div>

          <div className="filter">
            <div className="filter__title">
              <img src={pishkhan_svg} />
              <span>مقایسه بر اساس</span>
            </div>

            <div>
              <ComboBox
                placeholder={"فیلتر زمانی"}
                radioTextItems={RANK_TRACKING_FILTERS_DATE}
                radioClickedHandler={(e) => setDateFilterOption(e.target.value)}
              />
            </div>


            <div>
              <ComboBox
                placeholder={"فیلتر زمانی"}
                radioTextItems={RANK_TRACKING_FILTERS_DATE}
                radioClickedHandler={(e) => setDateFilterOption(e.target.value)}
              />
            </div>


            <div>
              <ComboBox
                placeholder={"فیلتر زمانی"}
                radioTextItems={RANK_TRACKING_FILTERS_DATE}
                radioClickedHandler={(e) => setDateFilterOption(e.target.value)}
              />
            </div>


            <div>
              <ComboBox
                placeholder={"فیلتر زمانی"}
                radioTextItems={RANK_TRACKING_FILTERS_DATE}
                radioClickedHandler={(e) => setDateFilterOption(e.target.value)}
              />
            </div>


          </div>

        </div> */}

        <div className="tracker__chart-section">
          <div className="chart__header">
            <div>
              <ComboBox
                placeholder={"فیلتر زمانی"}
                radioTextItems={RANK_TRACKING_FILTERS_DATE}
                radioClickedHandler={(e) => setDateFilterOption(e.target.value)}
              />
            </div>
            <div className="chart__actions">
              {/* <AuthButton textButton={<img src={ImageContainer.lineChartIco} className=""/>}/> */}
              <SelectingChartBtn chartIco="Line" />
              <SelectingChartBtn chartIco="Bar" />
              {/* <img src={ImageContainer.barChartIco} className="chart__action" /> */}
              {/* <img
                src={pishkhan_svg}
                className="chart__action chart__action--save"
              /> */}
            </div>
          </div>
          <div className="chart__content">
            <div className="chart__filters">
              <div className="filter">
                <div className="filter__content">
                  <div className="filter__color filter__color--green"></div>
                  <div className="filter__title">1 ماه قبل</div>
                </div>
                <div className="filter__action">#</div>
              </div>

              <div className="filter">
                <div className="filter__content">
                  <div className="filter__color filter__color--blue"></div>
                  <div className="filter__title">1 ماه قبل</div>
                </div>
                <div className="filter__action">#</div>
              </div>

              <div className="filter">
                <div className="filter__content">
                  <div className="filter__color filter__color--red"></div>
                  <div className="filter__title">1 ماه قبل</div>
                </div>
                <div className="filter__action">#</div>
              </div>
            </div>

            <div className="chart__chart">
              {/* <Line options={options} data={data} /> */}
              <BigChartController data={rankTrakingState.bigChartData} />
            </div>
          </div>
        </div>

        <div className="tracker__report-section">
          <div className="report__title">آمار و گزارش های نسبی</div>
          <div className="report__filter">
            <div className="filter__content">
              <div className="filter__title">
                <img src={pishkhan_svg} />
                <span>فیلتر براساس</span>
              </div>

              <div className="filter__items">
                <div className="filter__item filter__item--active ">1 هفته</div>
                <div className="filter__item">2 هفته</div>
                <div className="filter__item">4 هفته</div>
                <div className="filter__item">8 هفته</div>
                <div className="filter__item">12 هفته</div>
              </div>
            </div>

            <img src={pishkhan_svg} className="filter__action" />
          </div>

          <div className="report__charts">
            <div className="chart">
              <div className="chart__title">نسبت کل کلمات</div>
              <div className="chart__chart">
              <MinichartController chartId={"AvgRankTotalWords"} />
                {/* <Doughnut
                  data={data1}
                  height={143}
                  width={143}
                  options={{ maintainAspectRatio: false }}
                /> */}
              </div>
              <div className="chart__points">
                <div className="point">
                  <div className="point__color point__color--red"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--blue"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--green"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--yellow"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--purple"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
              </div>
            </div>

            <div className="chart">
              <div className="chart__title">نسبت کل کلمات</div>
              <div className="chart__chart">
                <Doughnut
                  data={data1}
                  height={143}
                  width={143}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
              <div className="chart__points">
                <div className="point">
                  <div className="point__color point__color--red"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--blue"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--green"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--yellow"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--purple"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
              </div>
            </div>

            <div className="chart">
              <div className="chart__title">نسبت کل کلمات</div>
              <div className="chart__chart">
                <Doughnut
                  data={data1}
                  height={143}
                  width={143}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
              <div className="chart__points">
                <div className="point">
                  <div className="point__color point__color--red"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--blue"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--green"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--yellow"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--purple"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
              </div>
            </div>

            <div className="chart">
              <div className="chart__title">نسبت کل کلمات</div>
              <div className="chart__chart">
                <Doughnut
                  data={data1}
                  height={143}
                  width={143}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
              <div className="chart__points">
                <div className="point">
                  <div className="point__color point__color--red"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--blue"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--green"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--yellow"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
                <div className="point">
                  <div className="point__color point__color--purple"></div>
                  <div className="point__title">نمونه نوشته</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showToolTip && <ToolTip />}
    </>
  );
}
