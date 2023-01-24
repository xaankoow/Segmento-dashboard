import React, { Fragment, useEffect, useState } from "react";

import Modal from 'react-modal';
import { defaultCustomModalStyle, modalParentSelector } from '../../../../variables/style';
import { afterOpenOrCloseAnyModal } from '../../../../variables/modal';

import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";

import './keyword.css';
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
import AuthButton from "../../../Auth/authButton/AuthButton";
import { useDispatch, useSelector } from "react-redux";
import { initKeyWordsData, keyWordsPeriodData, selectingOrRemovingKeyWordsSelected } from "../../../Redux/Action/rankTraking";
import { DateObject } from "react-multi-date-picker";
import BigChartController from "../card/bigChart/BigChartController";




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


export default function Keyword({ onClickHandler }) {

  const [ShowAddKeywordModal, SetShowAddKeywordModal] = useState(false);
  const [ShowAddTagModal, SetShowAddTagModal] = useState(false);

  // const [tabelData, setTabelData] = useState([]);




  const {keyWordsData,bigChartDataInkeyWordsSection,keyWordsSelected} = useSelector((state) => state.rankTrakingState);

  const dispatch=useDispatch();

  const axiosController = new AbortController();
  const axiosControllerFromGetingKeyWordsPeriod = new AbortController();


  useEffect(() => {
    dispatch(initKeyWordsData({axiosController}))
    return () => {
      axiosController.abort();
    }
  }, [])

  useEffect(() => {
    // debugger
    // axiosControllerFromGetingKeyWordsPeriod.abort();
    if (keyWordsSelected.length!=0) {
      dispatch(keyWordsPeriodData({axiosController:axiosControllerFromGetingKeyWordsPeriod}))
    }
  }, [keyWordsSelected.length])
  


  

  
  


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
      chart: <img src={ImageContainer.lineChartIco} />,
      id: 1,
      keyword: "SEG-5242",
      currentRank: "نمونه نوشته برای عنوان",
      growthNumber: "امور مالی",
      lastUpdate: "1401/2/2",
      avg7Days: "پاسخ داده شد",
      tag: "برچسب",
      importDate: "امور مالی",
      // competitorRank: "امور مالی",
      // operation: "امور مالی",
    },
  ];

  const rowKey = [
    "row.chart",
    "row.id",
    "row.key",
    "row.latest_rank",
    "row.diff_rank",
    "row.updated_at",
    "row.average_rank",
    "row.tags[0]?.name?.fa",
    "row.created_at",
    // "row.competitorRank",
    // "row.operation",
  ];

  const closeDialog = (state) => {
    SetShowAddKeywordModal(state);
  };

  const closeAddTagDialog = (state) => {
    SetShowAddTagModal(state);
  };

  const checkIncludsKeyWord=(keyUuid)=>{
    return keyWordsSelected.includes(keyUuid)
  }

  const tabelData = keyWordsData.map((item, index) => {
    const includesKey=checkIncludsKeyWord(item.uuid)
    return {
      chart:<div className={` ${includesKey&&"logoLighting"} `}><img src={ImageContainer.lineChartIco} onClick={()=>dispatch(selectingOrRemovingKeyWordsSelected({keyUuid:item.uuid}))} className={" cursor-pointer hover:logoLighting"}/></div>,
      id: <span className={includesKey?"text-primary":"text-primaryV2"}>{index + 1}</span>,
      key:<span className={includesKey?"text-primary":"text-primaryV2"}>{item.key}</span>,
      latest_rank:<span className={includesKey?"text-primary":"text-primaryV2"}>{item.latest_rank}</span>,
      diff_rank:<span className={includesKey?"text-primary":"text-primaryV2"}>{item.diff_rank}</span>,
      updated_at: <span className={includesKey?"text-primary":"text-primaryV2"}>{new DateObject(item.updated_at).convert(persian, persian_en).format("YYYY/MM/DD")}</span>,
      average_rank:<span className={includesKey?"text-primary":"text-primaryV2"}>{item.average_rank}</span>,
      tags:<span className={includesKey?"text-primary":"text-primaryV2"}>{item.tags.length!=0?item.tags[0]?.name?.fa:""}</span>,
      created_at:<span className={includesKey?"text-primary":"text-primaryV2"}>{new DateObject(item.created_at).convert(persian, persian_en).format("YYYY/MM/DD")}</span>
    };
  });


  return (
    <>
      <div className="keyword">
        <div className="header">
          <div className="header__title">جدول کلمات کلیدی</div>
          <div className="header__action">
            <AuthButton handlerClick={closeAddTagDialog} setOnclickValue={true} textButton={<><img src={ImageContainer.plus} className=" w-3 h-3 ml-4" />افزودن کلمه کلیدی </>}/>
            {/* <img src={pishkhan_svg} className="" />
            <button class="header__btn btn-style w-50 flex justify-between">
              <span>+</span>
              <div onClick={() => closeAddTagDialog(true)}> افزودن صفحه جدید </div>
            </button> */}
          </div>
        </div>

        <div className="keyword__content">

          <div className="keyword__table">
            <Table
              columnItem={RANK_TRACKING_KEYWORD_TABLE}
              rowsItem={tabelData}
              rowKey={rowKey}
            />
          </div>


          {/* <div className="keyword__actions">

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


          <div className="keyword__chart-section">
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
                <BigChartController data={bigChartDataInkeyWordsSection}/>
                {/* <Line options={options} data={data} /> */}
              </div>
            </div>
          </div>


        </div>
      </div>


      <Modal
        isOpen={ShowAddKeywordModal}
        parentSelector={() => document.querySelector(modalParentSelector)}
        style={defaultCustomModalStyle}
        onAfterOpen={() => afterOpenOrCloseAnyModal({ open: true })}
        onAfterClose={() => afterOpenOrCloseAnyModal({ open: false })}
        contentLabel="keywordModal Modal">
        <div className='keywordModal w-[600px] rounded shadow-[0px_4px_8px_0px_rgb(0,0,0)]'>
          <header className='px-2.5 border-0 bg-[#FCFCFB] mb-2'>
            <div className="keywordModal__header">
              <div className="keywordModal__title">افزودن کلمه کلیدی</div>
              <div className="keywordModal__counter"> کلمات باقی مانده: 10</div>
            </div>
          </header>
          <body className='report_container border-0 pt-2 px-5 pb-5'>
            <div className="rowbox">
              <input type="text" className="rowbox__keyword" placeholder="کلمه کلیدی" />
              <img src={startEasyStartArrow_svg} />
              <input type={'text'} className="rowbox__site" placeholder="سایت مرتبط" />
            </div>

            <div className="rowbox">
              <input type="text" className="rowbox__keyword" placeholder="کلمه کلیدی" />
              <img src={startEasyStartArrow_svg} />
              <input type={'text'} className="rowbox__site" placeholder="سایت مرتبط" />
            </div>

            <div className="rowbox">
              <input type="text" className="rowbox__keyword" placeholder="کلمه کلیدی" />
              <img src={startEasyStartArrow_svg} />
              <input type={'text'} className="rowbox__site" placeholder="سایت مرتبط" />
            </div>

            <div className="action">

              <button class="action__btn btn-secondary w-50 flex justify-between">
                <img src={startEasyStartArrow_svg} />
                <div onClick={() => closeDialog(false)}> کلمه جدید </div>
              </button>

              <button class="action__btn btn-style w-50 flex justify-between">
                <img src={startEasyStartArrow_svg} />
                <div onClick={() => closeDialog(false)}>ذخیره کلمات کلیدی </div>
              </button>
            </div>

          </body>
        </div>
      </Modal>



      <Modal
        isOpen={ShowAddTagModal}
        parentSelector={() => document.querySelector(modalParentSelector)}
        style={defaultCustomModalStyle}
        onAfterOpen={() => afterOpenOrCloseAnyModal({ open: true })}
        onAfterClose={() => afterOpenOrCloseAnyModal({ open: false })}
        contentLabel="tagModal Modal">
        <div className='tagModal w-[600px] rounded shadow-[0px_4px_8px_0px_rgb(0,0,0)]'>
          <header className='px-2.5 border-0 bg-[#FCFCFB] mb-2'>
            <div className="tagModal__header">
              <div className="tagModal__title">افزودن برچسب</div>
              {/* <div className="tagModal__counter"> کلمات باقی مانده: 10</div> */}
            </div>
          </header>
          <body className=' border-0 pt-2 px-5 pb-5'>


            <div className="tagModal__add">

              <div className="tagModal__input">
                <div className="tagModal__label">افزودن برچسب جدید</div>
                <input type="text" />
              </div>

              <div className="action">
                <button class="action__btn btn-style w-50 flex justify-between">
                  <img src={startEasyStartArrow_svg} />
                  <div onClick={() => closeAddTagDialog(false)}> ذخیره برچسب جدید </div>
                </button>
              </div>

            </div>

            <div className="tagModal__search">

              <div className="tagModal__input">
                <div className="tagModal__label">افزودن برچسب جدید</div>
                <div className="search__input">
                  <input type="text" />
                  <button class="action__btn btn-style w-50 flex justify-between" onClick={() => closeAddTagDialog(false)}>
                    <img src={startEasyStartArrow_svg} />
                  </button>
                </div>
              </div>



              <div className="result">
                <div className="result__item">
                  <div className="result__title">برچسب</div>
                  <div className="result__count">
                    <div className="result__text">تعداد:</div>
                    <div className="result__text">10</div>
                  </div>
                </div>

                <div className="result__item">
                  <div className="result__title">برچسب</div>
                  <div className="result__count">
                    <div className="result__text">تعداد:</div>
                    <div className="result__text">10</div>
                  </div>
                </div>

                <div className="result__item">
                  <div className="result__title">برچسب</div>
                  <div className="result__count">
                    <div className="result__text">تعداد:</div>
                    <div className="result__text">10</div>
                  </div>
                </div>

              </div>
              <div className="action">
                <button class="action__btn btn-style w-50 flex justify-between">
                  <img src={startEasyStartArrow_svg} />
                  <div onClick={() => closeAddTagDialog(false)}> بروزرسانی برچسب </div>
                </button>
              </div>

            </div>




          </body>
        </div>
      </Modal>


    </>
  );
}
