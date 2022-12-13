import React, { Fragment, useEffect, useState } from "react";

import Modal from 'react-modal';
import { defaultCustomModalStyle, modalParentSelector } from '../../../../variables/style';
import { afterOpenOrCloseAnyModal } from '../../../../variables/modal';


import './competitors.css';
import pishkhan_svg from "../../../../assets/img/dashboard/nav_right/pishkhan.svg";
import startEasyStartArrow_svg from '../../../../assets/img/dashboard/EasyStartPage/startEasyStartArrow.svg'

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
import { RANK_TRACKING_FILTERS_DATE } from "../../../../variables/rankTrackingFilters";
import ComboBox from "../../../shared/comboBox/ComboBox";
import Table from "../../../shared/table/Table";
import {
  filterBoxDatas,
  titleOfReportSupportTable,
} from "../../../../variables/support";
import { RANK_TRACKING_KEYWORD_TABLE } from "../../../../variables/rankTrackingKeywordTable";
import { Link } from "react-router-dom";
import { ImageContainer } from "../../../../assets/img/IMG";




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


export default function Competitors() {
  
  const [ShowAddcompetitorsModal, SetShowAddCompetitorsModal] = useState(true);
  const [ShowAddTagModal, SetShowAddTagModal] = useState(false);


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

  const b = [
    {
      chart: <img src={pishkhan_svg} />,
      id: 1,
      keyword: "SEG-5242",
      currentRank: "نمونه نوشته برای عنوان",
      growthNumber: "امور مالی",
      lastUpdate: "1401/2/2",
      avg7Days: "پاسخ داده شد",
      tag: "برچسب",
      importDate: "امور مالی",
      competitorRank: "امور مالی",
      operation: "امور مالی",
    },
  ];

  const rowKey = [
    "row.chart",
    "row.id",
    "row.keyword",
    "row.currentRank",
    "row.growthNumber",
    "row.lastUpdate",
    "row.avg7Days",
    "row.tag",
    "row.importDate",
    "row.competitorRank",
    "row.operation",
  ];

  const closeDialog = (state) => {
    SetShowAddCompetitorsModal(state);
  };

  return (
    <>
      <div className="competitors">
        <div className="header">
          <div className="header__title"></div>
          <div className="header__action">
            <button class="header__btn btn-style w-50 flex justify-between">
              <span>+</span>
              <div onClick={() => closeDialog(true)}> افزودن رقیب</div>
            </button>
          </div>
        </div>

        <div className="competitors__content">

          <div className="item">
            <div className="item__action">
              <img src={pishkhan_svg} />
            </div>

            <div className="item__content">
              <div className="item__title">رقیب شماره 1</div>
              <table>
                <tr>
                  <td rowspan="4">www.digikala.com</td>
                  <td rowspan="4">کلمه کلیدی</td>
                  <td></td>
                  <td>آدرس ورک اسپیس</td>
                  <td>www.digikala.ir</td>
                  <td rowspan="4" className="max-w-[300px]">
                    <div className="chartCell">
                      <div className="chartHelp">
                        <div className="chartHelp__item chartHelp__item--blue">آدرس ورک اسپیس</div>
                        <div className="chartHelp__item chartHelp__item--red">digikala</div>
                      </div>
                      <div className="item__chart">
                        <Line options={options} data={data} />
                      </div>
                    </div>
                  </td>
                  <td rowspan="4" className="max-w-[25px]">
                    <div className="actionCell">
                      <img src={pishkhan_svg} />
                      <img src={pishkhan_svg} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>رتبه فعلی</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>میزان تغییر</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>میانگین 7 روز </td>
                  <td></td>
                  <td></td>
                </tr>

              </table>
            </div>

          </div>


          <div className="item item--empty">
            <div className="item__action">
              <img src={pishkhan_svg} />
            </div>

            <div className="item__content">
              <div className="item__title">رقیب شماره 2</div>
              <div className="item__palceholder">
                <img src={pishkhan_svg} alt="" />
                <div className="item__message">
                  هنوز وبسایت رقیب ثبت نشده است.
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className="competitors__actions">

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

        <div className="competitors__chart-section">
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


      </div>


      <Modal
        isOpen={ShowAddcompetitorsModal}
        parentSelector={() => document.querySelector(modalParentSelector)}
        style={defaultCustomModalStyle}
        onAfterOpen={() => afterOpenOrCloseAnyModal({ open: true })}
        onAfterClose={() => afterOpenOrCloseAnyModal({ open: false })}
        contentLabel="competitorsModal Modal">
        <div className='competitorsModal w-[600px] rounded shadow-[0px_4px_8px_0px_rgb(0,0,0)]'>
          <header className='px-2.5 border-0 bg-[#FCFCFB] mb-2'>
            <div className="competitorsModal__header">
              <div className="competitorsModal__title">افزودن وبسایت رقیب</div>
              <div className="competitorsModal__counter"> وبسایت رقیب باقی مانده: 10</div>
            </div>
          </header>
          <body className='border-0 pt-2 px-5 pb-5'>
            <div className="rowbox">
              <input type="text" className="rowbox__competitors" placeholder="کلمه کلیدی" />
              <img src={startEasyStartArrow_svg} />

              <div className="rowbox__collection">
                <input type={'text'} className="rowbox__site" placeholder="سایت رقیب 1" />
                <button class="action btn-secondary w-50 flex justify-between">
                  <div className="action__icon">+</div>
                  <div onClick={() => closeDialog(false)}> رقیب جدید</div>
                </button>
              </div>

            </div>


            <div className="rowbox">
              <input type="text" className="rowbox__competitors" placeholder="کلمه کلیدی" />
              <img src={startEasyStartArrow_svg} />
              <div className="rowbox__collection">
                <input type={'text'} className="rowbox__site" placeholder="سایت رقیب 2" />
                <button class="action btn-secondary w-50 flex justify-between">
                  <div className="action__icon">+</div>
                  <div onClick={() => closeDialog(false)}> رقیب جدید</div>
                </button>
              </div>
            </div>

            <div className="rowbox">
              <input type="text" className="rowbox__competitors" placeholder="کلمه کلیدی" />
              <img src={startEasyStartArrow_svg} />

              <div className="rowbox__collection">
                <input type={'text'} className="rowbox__site" placeholder="سایت رقیب 3" />
                <button class="action btn-secondary w-50 flex justify-between">
                  <div className="action__icon">+</div>
                  <div onClick={() => closeDialog(false)}> رقیب جدید</div>
                </button>
              </div>
            </div>

            <div className="action">
              <button class="action__btn btn-style w-50 flex justify-between">
                <img src={startEasyStartArrow_svg} />
                <div onClick={() => closeDialog(false)}>ذخیره وبسایت رقبا</div>
              </button>
            </div>

          </body>
        </div>
      </Modal>
    </>
  );
}
