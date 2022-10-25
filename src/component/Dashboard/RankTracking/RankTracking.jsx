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
import { Line } from 'react-chartjs-2';
import {
  RANK_TRACKING_FILTERS_DATE,
} from "../../../variables/rankTrackingFilters";
import ComboBox from "../../shared/comboBox/ComboBox";




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

  const options = {
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
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: [96, 54, 45, 34, 45, 4, 67, 76, 65],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  const setDateFilterOption = (e) => {
    console.log(e);
  }

  return (
    <>
      <div className="tracker">
        <div className="tracker__wells">
          <div className="well well--active">

            <div className="well__content">
              <div className="well__header">
                <div className="well__title">میانگین کل کلمات</div>
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

          <div className="well well--active">

            <div className="well__content">
              <div className="well__header">
                <div className="well__title">توزیع رتبه کلمات کلیدی</div>
                {/* <div className="well__date">روزانه</div> */}
              </div>
              <div className="well__chart">
                <Line options={options} data={data} />
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

          <div className="well well--active">

            <div className="well__content">
              <div className="well__header">
                <div className="well__title">میانگین کل کلمات</div>
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

          <div className="well well--active">

            <div className="well__content">
              <div className="well__header">
                <div className="well__title">میانگین کل کلمات</div>
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

          <div className="well well--active">

            <div className="well__content">
              <div className="well__header">
                <div className="well__title">میانگین کل کلمات</div>
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

          </div>

        </div>



      </div>
    </>
  );
}
