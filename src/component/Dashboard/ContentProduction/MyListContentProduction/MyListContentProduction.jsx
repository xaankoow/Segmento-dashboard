import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentProductionGetService } from "../../../service/contentProductionStore";
import SearchBox from "../../DashboaedComponents/SearchBox/SearchBox";
import Table from "../../DashboaedComponents/TableData/TableData";
import arrow_downnn_ios_new_svg from "../../../../assets/img/dashboard/nav_right/arrow_downnn_ios_new.svg";
import arrow_up_ios_new_svg from "../../../../assets/img/dashboard/nav_right/arrow_up_ios_new.svg";

export default function MyList() {
  const [clicked, setClicked] = React.useState(false);
  // set api data
  const [tableDatas, setTableDatas] = useState([]);
  //saerch box value
  const [searchBoxValue, setSarchBoxValue] = useState("");
  //search box button click
  const [searchBoxHandleClick, setSearchBoxHandleClick] = useState(false);
  // jalali moment
  var moment = require("jalali-moment");

  const dispatch = useDispatch();
  const toggle = (index) => {
    if (clicked === index) {
      // if active close
      return setClicked(null);
    }
    setClicked(index);
  };

  useEffect(() => {
    handleGetcontent();
  }, []);

  const loadingState = useSelector((state) => state.loadingState);

  const handleGetcontent = async () => {
    {
      loadingState.ProcessingDelay.push("ContentProductionGetService");
      loadingState.canRequest = false;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
    try {
      const { data, status } = await ContentProductionGetService();
      const tableDataFiltered = [];
      for (let index = data.data.length; index >= 0; index--) {
        if (data.data[index] != undefined)
          tableDataFiltered.push(data.data[index]);
      }

      setTableDatas(tableDataFiltered);
    } catch (error) {}
    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "ContentProductionGetService"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };
  // SearchBox value
  const changeHandlerSearchBox = (e) => {
    setSarchBoxValue(e.target.value);
    if (searchBoxValue == "") {
      setSearchBoxHandleClick(false);
    }
  };
  // filter
  const filterTableDatas = tableDatas.filter((item) => {
    if (!searchBoxHandleClick) return tableDatas;
    else return item.word.includes(searchBoxValue);
  });

  return (
    <div className="px-4 py-7 bg-[#ffffff]">
      <div className="flex justify-between items-center mb-4">
        <span> لیست‌های اخیر شما:</span>
        <SearchBox
          className={"w-[450px] flex gap-2 items-center"}
          changeHandler={changeHandlerSearchBox}
          handlClick={() => setSearchBoxHandleClick(true)}
        />
      </div>
      {filterTableDatas.map((item, index) => {
        return (
          <div
            className={
              index + 1 == filterTableDatas.length
                ? `${clicked === index && "pb-5"} flex flex-col border border-[#D9D9D9]  rounded-xl rounded-t-sm px-3  mb-8  mt-2`
                : `${clicked === index && "pb-5"}  flex flex-col border border-[#D9D9D9]  rounded-xl rounded-t-sm px-3  mb-4 mt-2`
            }
          >
            <div
              onClick={(e) => toggle(index, e)}
              className={
                clicked === index
                  ? "flex items-center  justify-between py-5  cursor-pointer"
                  : "flex items-center cursor-pointer py-5   justify-between  "
              }
            >
              <div className="flex items-center gap-6 w-[265px]">
                <span className="text-sm"> {item.word}</span>
                <span className="flex items-center justify-center bg-[#D9D9D9] rounded-lg min-w-[45px] text-[#7D7D7D] text-small p-1">
                  {item.data.length} مورد
                </span>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#7D7D7D]">
                    آخرین به روزرسانی :
                  </span>
                  <span className="text-sm text-[#7D7D7D]">
                    {moment(item.created_at.substring(0, 10))
                      .locale("fa")
                      .format("YYYY/M/D")}
                  </span>
                </div>
                <div className="pl-5 cursor-pointer">
                  <img
                    src={arrow_up_ios_new_svg}
                    alt=""
                    className={`${
                      clicked === index && "-rotate-180"
                    } transition-transform cursor-pointer`}
                  />
                </div>
              </div>
            </div>
            {clicked === index ? (
              <Table
                data={item.data}
                WordsSearcher={true}
                contentsProduction={true}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
