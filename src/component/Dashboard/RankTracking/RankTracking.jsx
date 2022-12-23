import React, { Fragment, useEffect, useState } from "react";
import './rankTracking.css';
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
} from 'chart.js';
import { Line  } from 'react-chartjs-2';
import {
  RANK_TRACKING_FILTERS_DATE,
} from "../../../variables/rankTrackingFilters";
import ComboBox from "../../shared/comboBox/ComboBox";
import { initWorkSpacePeriodData } from "../../Redux/Action/rankTraking";
import { useDispatch, useSelector } from "react-redux";
import { ImageContainer } from "../../../assets/img/IMG";
import ToolTip from "../../Utils/ToolTip";
// import MinichartController from "./card/miniChartCard/MinichartController";
// import MiniChartCard from "./card/miniChartCard/MiniCartCardController";
import MinichartController from "./card/miniChartCard/MiniChartCardController";
import TitleLastUpdateInfo from "./TitleLastUpdateInfo";




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


export default function RankTracking({ onClickHandler }) {

  const rankTrakingState = useSelector((state) => state.rankTrakingState);

  const dispatch=useDispatch();

  const axiosController = new AbortController();

  //tooltip handler
  const [showToolTip, setShowToolTip] = useState(true);

  const options = {
      scales: {
        yAxis: {
          min: 1,
          max: 10,
          
        }    
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
        position: 'top',
      },
      title: {
        display: false,
        text: '',
      }
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

const [labels,setLabels]=useState([])
const [positionKeyWork,setPositionKeyWork]=useState([])
// const [labels,setLabels]=useState([])
// const [labels,setLabels]=useState([])




  const data = {
    labels,
    datasets: [
      {
        fill: "end",
        
        label: 'Dataset 2',
        // data: [96, 54, 45, 34, 45, 4, 67, 76, 65],  
        data: positionKeyWork,  
        // data: [1,4,5,7,3,1,4], 
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        pointRadius: 3,
                    pointHitRadius: 1,
        
      },
    ]
  };


  useEffect(() => {
    dispatch(initWorkSpacePeriodData({axiosController}))
  }, [])

  useEffect(() => {
    return () => {
      axiosController.abort()
    }
  }, [])
  
  const setDateFilterOption = (e) => {
    console.log(e);
  }

  return (
    <>
    <TitleLastUpdateInfo/>
      <div className="tracker">
        <div className="tracker__wells">

        <MinichartController/>




          {/* <div className="well well--active relative">
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
            <div className="well__content">
              <div className="well__header">
                <div className="well__title">میانگین کل کلمات</div>
                <div className="well__date">روزانه</div>
              </div>
              <div className="well__chart">
              <Line options={options} data={data}/>
              </div>
              <div className="well__more">
                <div className="well__btn">
                  5 رتبه
                  <i className=""></i>
                </div>

                <div className="well__btn">
                  26%
                </div>
              </div>
            </div>
            <div className="well__footer">
              www.example.ir
            </div>
          </div> */}

          {/* <div className="well well--active relative">
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
            <div className="well__content">
              <div className="well__header">
                <div className="well__title">توزیع رتبه کلمات کلیدی</div>
              </div>
              <div className="well__chart">
                <Line options={options} data={data}/>
              </div>
              <div className="well__more">
                <div className="well__btn">
                  5 رتبه
                  <i className=""></i>
                </div>

                <div className="well__btn">
                  26%
                </div>
              </div>
            </div>
            <div className="well__footer">
              www.example.ir
            </div>
          </div> */}

          {/* <div className="well well--active relative">
          <div className=" absolute left-1 top-1">
              <img 
              src={ImageContainer.infoUtils}
               alt="section info"
                className=" w-3 h-3"
                data-tip="این نمودار به ازای هر دوره جایگاه کلمات کلیدی 
                آن را با دوره قبل مقایسه کرده و تعداد پیشرفت و افت 
                و تعداد کلمات ایستا ( بدون تغییر رتبه ) را نمایش می‌‌دهد"
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
            <div className="well__content">
              <div className="well__header">
                <div className="well__title">نمودار پیشرفت و افت کلمات</div>
                <div className="well__date">روزانه</div>
              </div>
              <div className="well__chart">
                <Line
                  options={options}
                  data={data}
                />
              </div>
              <div className="well__more">
                <div className="well__btn">
                  5 رتبه
                  <i className=""></i>
                </div>

                <div className="well__btn">
                  26%
                </div>
              </div>
            </div>
            <div className="well__footer">
              www.example.ir
            </div>
          </div>

          <div className="well well--active relative">
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
            <div className="well__content">
              <div className="well__header">
                <div className="well__title">کلمات رشد کرده</div>
                <div className="well__date">روزانه</div>
              </div>
              <div className="well__chart">
                <Line
                  options={options}
                  data={data}
                />
              </div>
              <div className="well__more">
                <div className="well__btn">
                  5 رتبه
                  <i className=""></i>
                </div>

                <div className="well__btn">
                  26%
                </div>
              </div>
            </div>
            <div className="well__footer">
              www.example.ir
            </div>
          </div>

          <div className="well well--active relative">
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
            <div className="well__content">
              <div className="well__header">
                <div className="well__title">کلمات افت کرده</div>
                <div className="well__date">روزانه</div>
              </div>
              <div className="well__chart">
                <Line
                  options={options}
                  data={data}
                />
              </div>
              <div className="well__more">
                <div className="well__btn">
                  5 رتبه
                  <i className=""></i>
                </div>

                <div className="well__btn">
                  26%
                </div>
              </div>
            </div>
            <div className="well__footer">
              www.example.ir
            </div>
          </div> */}



        </div>














        <div className="tracker__actions">

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

        </div>

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
              <img src={pishkhan_svg} className="chart__action" />
              <img src={pishkhan_svg} className="chart__action" />
              <img src={pishkhan_svg} className="chart__action chart__action--save" />

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

              <Line options={options} data={data} />
              
            </div>
          </div>
        </div>

        <div className="tracker__report-section">
          <div className="report__title">
            آمار و گزارش های نسبی
          </div>
          <div className="report__filter">

            <div className="filter__content">

              <div className="filter__title">
                <img src={pishkhan_svg} />
                <span>فیلتر براساس</span>
              </div>

              <div className="filter__items">
                <div className="filter__item filter__item--active ">
                  1 هفته
                </div>
                <div className="filter__item">
                  2 هفته
                </div>
                <div className="filter__item">
                  4 هفته
                </div>
                <div className="filter__item">
                  8 هفته
                </div>
                <div className="filter__item">
                  12 هفته
                </div>
              </div>

            </div>

            <img src={pishkhan_svg} className="filter__action" />

          </div>



          <div className="report__charts">

            <div className="chart">
              <div className="chart__title">نسبت کل کلمات</div>
              <div className="chart__chart">
                [chart]
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
                [chart]
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
                [chart]
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
                [chart]
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
