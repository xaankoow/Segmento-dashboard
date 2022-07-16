import { Tab } from "@headlessui/react";
import { list } from "postcss";
import React, { useState } from "react";
import { useEffect } from "react";
import { ContentProductionGetService } from "../../../service/contentProductionStore";
import { dataTableContentProduction } from "../../../service/dataTable";
import SearchBox from "../../DashboaedComponents/SearchBox/SearchBox";
import Table from "../../DashboaedComponents/TableData/TableData";

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
  var handleGetcontent = async () => {
    try {
      const { data, status } = await ContentProductionGetService();
      const tableDataFiltered = [];
      for (let index = data.data.length; index >=0; index--) {
        if (data.data[index] != undefined)
          tableDataFiltered.push(data.data[index]);
      }

      setTableDatas(tableDataFiltered);
    } catch (error) {
      console.log(error);
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
        <span>لیست های اخیر شما:</span>

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
                ? "flex flex-col border border-[#D9D9D9]  rounded-xl rounded-t-sm px-3 py-5 mb-8  mt-2"
                : "flex flex-col border border-[#D9D9D9]  rounded-xl rounded-t-sm px-3 py-5 mb-4 mt-2"
            }
          >
            <div
              className={
                clicked === index
                  ? "mb-5 flex items-center  justify-between"
                  : "flex items-center  justify-between  "
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
                <div
                  onClick={() => toggle(index)}
                  className="pl-5 cursor-pointer"
                >
                  {clicked === index ? (
                    <img
                      src="./img/dashboard/nav_right/arrow_downnn_ios_new.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                  ) : (
                    <img
                      src="./img/dashboard/nav_right/arrow_up_ios_new.svg"
                      alt=""
                      className=" cursor-pointer"
                    />
                  )}
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
