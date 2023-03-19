import { useMemo, useState } from "react";
import OptionsSlider from "../../components/optionsSlider";

// import FilterImage from "../../assets/images/filter.svg";
// import CompareImage from "../../assets/images/compare.svg";
import MainChart from "../../components/mainChart";
import FooterCharts from "../../components/footerCharts";
import ReactSelect from "react-select";
// import workSpacePeriodData from "../../configs/APIData";
import {
  allWordsCount,
  averageAllWords,
  decreaseFromPrevWordsAvg,
  decreaseFromPrevWordsCount,
  distributionCurrentAndPrevWords,
  increaseFromPrevWordsAvg,
  increaseFromPrevWordsCount,
} from "../../chartDataCalulator";

import mainChartTypes from "../../configs/mainChartTypes";
import PageTitle from "../../../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle";
import TitleLastUpdateInfo from "../../../../component/Dashboard/RankTracking/TitleLastUpdateInfo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initWorkSpacePeriodData } from "../../../../component/Redux/Action/rankTraking";
 
export const Home = () => {

  const {workSpacePeriodData:APISample} = useSelector((state) => state.rankTrakingState);


  const [currentTab, setCurrentTab] = useState(0);
  const [mainChart, setMainChart] = useState(mainChartTypes.allWordsCount);

  const [forceUpdate, setForceUpdate] = useState(0);

  const dispatch=useDispatch();

  var averageAllWordsMemo=[];
  var distributionCurrentAndPrevWordsMemo=[];
  var increaseFromPrevWordsCountMemo=[];
  var decreaseFromPrevWordsCountMemo=[];
  var increaseFromPrevWordsAvgMemo=[];
  var decreaseFromPrevWordsAvgMemo=[];
  var allWordsCountMemo=[];

  function InitData() {
    averageAllWordsMemo =useMemo(
      () => averageAllWords(APISample),
      [APISample]
    );
    distributionCurrentAndPrevWordsMemo =useMemo(
      () => distributionCurrentAndPrevWords(APISample),
      [APISample]
    );
    increaseFromPrevWordsCountMemo =useMemo(
      () => increaseFromPrevWordsCount(APISample),
      [APISample]
    );
    decreaseFromPrevWordsCountMemo =useMemo(
      () => decreaseFromPrevWordsCount(APISample),
      [APISample]
    );
    increaseFromPrevWordsAvgMemo =useMemo(
      () => increaseFromPrevWordsAvg(APISample),
      [APISample]
    );
    decreaseFromPrevWordsAvgMemo =useMemo(
      () => decreaseFromPrevWordsAvg(APISample),
      [APISample]
    );
    allWordsCountMemo =useMemo(
      () => allWordsCount(APISample),
      [APISample]
    );
    setForceUpdate(forceUpdate++)
  }

  useEffect(() => {
    InitData()
    
  }, [APISample.length])
  


  const axiosController = new AbortController();
  useEffect(() => {
    dispatch(initWorkSpacePeriodData({ axiosController }));
    return () => {
      axiosController.abort();
    };
  }, []);

return APISample.length!=0&averageAllWordsMemo.length!=0?  (<div className="container pt-4">
  <header className="flex justify-between">
    <div>
      {/* <h1 className="text-xl">ابزار رتبه سنج</h1> */}

     <PageTitle title={"ابزار رتبه سنج"} />
      

      <nav className="flex items-center mt-5 navBar">
        <button
          onClick={() => setCurrentTab(0)}
          className={`border-l transition px-7 -mr-3 py-1 border-[#D9D9D9] ${
            currentTab === 0 ? "active" : ""
          }`}
        >
          نمای کلی
        </button>
        <button
          disabled
          onClick={() => setCurrentTab(1)}
          className={`border-l transition px-7 py-1 border-[#D9D9D9] ${
            currentTab === 1 ? "active" : ""
          }`}
        >
          کلمات کلیدی
        </button>
        <button
          disabled
          onClick={() => setCurrentTab(2)}
          className={`px-7 py-1 transition ${
            currentTab === 2 ? "active" : ""
          }`}
        >
          رقبا
        </button>
      </nav>
    </div>
    <TitleLastUpdateInfo />
    {/* <div className="text-neutral-500 text-center">
      <div>
        <span>آخرین بروزرسانی: </span>
        <span>
          {
            Object.keys(APISample)[
              Object.keys(APISample).length - 1
            ]
          }
        </span>
      </div>
      <div className="mt-2">
        <span>دوره بروزرسانی: </span>
        <span className="text-sm">هر 48 ساعت</span>
      </div>
    </div> */}
  </header>

  {currentTab === 0 && (
    <>

    <div className="px-7">
      <OptionsSlider
        averageAllWordsMemo={averageAllWordsMemo}
        distributionCurrentAndPrevWordsMemo={
          distributionCurrentAndPrevWordsMemo
        }
        increaseFromPrevWordsCountMemo={increaseFromPrevWordsCountMemo}
        decreaseFromPrevWordsCountMemo={decreaseFromPrevWordsCountMemo}
        increaseFromPrevWordsAvgMemo={increaseFromPrevWordsAvgMemo}
        decreaseFromPrevWordsAvgMemo={decreaseFromPrevWordsAvgMemo}
        allWordsCountMemo={allWordsCountMemo}
        setMainChart={setMainChart}
        mainChart={mainChart}
      />

      {/* filters */}
      {/* <div className="border-t mt-3 pt-5">
        <div className="flex items-center justify-between pl-8">
          <div className="flex items-center min-w-[137px]">
            <div className="bg-neutral-100 rounded-md w-10 h-10 flex items-center justify-center ml-3">
              <img src={FilterImage} width="15" alt="filter" />
            </div>
            <div>فیلتر براساس</div>
          </div>
          <div>
            <ReactSelect
              placeholder="48 ساعت"
              classNamePrefix="custom-select"
              noOptionsMessage={() => "گزینه ای موجود نیست"}
              className="w-[197px]"
              isDisabled
            />
          </div>
          <div>
            <ReactSelect
              classNamePrefix="custom-select"
              placeholder="تمام رتبه ها"
              noOptionsMessage={() => "گزینه ای موجود نیست"}
              className="w-[197px]"
              isDisabled
            />
          </div>
          <div>
            <ReactSelect
              classNamePrefix="custom-select"
              placeholder="دسکتاپ"
              noOptionsMessage={() => "گزینه ای موجود نیست"}
              className="w-[197px]"
              isDisabled
            />
          </div>
          <div>
            <ReactSelect
              classNamePrefix="custom-select"
              placeholder="دسکتاپ"
              noOptionsMessage={() => "گزینه ای موجود نیست"}
              className="w-[197px]"
              isDisabled
            />
          </div>{" "}
        </div>
        <div className="flex items-center justify-between mt-7 pl-8">
          <div className="flex items-center min-w-[137px]">
            <div className="bg-neutral-100 rounded-md w-10 h-10 flex items-center justify-center ml-3">
              <img src={CompareImage} width="15" alt="compare" />
            </div>
            <div>مقایسه براساس</div>
          </div>
          <div>
            <ReactSelect
              classNamePrefix="custom-select"
              placeholder="دسکتاپ"
              noOptionsMessage={() => "گزینه ای موجود نیست"}
              className="w-[197px]"
              isDisabled
            />
          </div>
          <div>
            <ReactSelect
              classNamePrefix="custom-select"
              placeholder="دسکتاپ"
              noOptionsMessage={() => "گزینه ای موجود نیست"}
              className="w-[197px]"
              isDisabled
            />
          </div>
          <div>
            <ReactSelect
              classNamePrefix="custom-select"
              placeholder="دسکتاپ"
              noOptionsMessage={() => "گزینه ای موجود نیست"}
              className="w-[197px]"
              isDisabled
            />
          </div>
          <div>
            <ReactSelect
              classNamePrefix="custom-select"
              placeholder="دسکتاپ"
              isDisabled
              noOptionsMessage={() => "گزینه ای موجود نیست"}
              className="w-[197px]"
            />
          </div>
        </div>
      </div> */}

      <MainChart
        averageAllWordsMemo={averageAllWordsMemo}
        distributionCurrentAndPrevWordsMemo={
          distributionCurrentAndPrevWordsMemo
        }
        increaseFromPrevWordsCountMemo={increaseFromPrevWordsCountMemo}
        decreaseFromPrevWordsCountMemo={decreaseFromPrevWordsCountMemo}
        increaseFromPrevWordsAvgMemo={increaseFromPrevWordsAvgMemo}
        decreaseFromPrevWordsAvgMemo={decreaseFromPrevWordsAvgMemo}
        allWordsCountMemo={allWordsCountMemo}
        setMainChart={setMainChart}
        mainChart={mainChart}
      />

      <FooterCharts />
    </div>

    </>
  )}
  {forceUpdate?"":""}
</div>):null
};

export default Home;
