import { Tab } from "@headlessui/react";
import { list } from "postcss";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataTable } from "../../../service/dataTable";
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
  // check wich api checked
  const tableDataFiltered = [];

  const toggle = (index) => {
    if (clicked === index) {
      // if active close
      return setClicked(null);
    }
    setClicked(index);
  };

  useEffect(() => {
    // if (canRequest) {

    handleFetchingTableData();
    // }
  }, []);


  const loadingState = useSelector(state => state.loadingState)
  const dispatch = useDispatch()
  const handleFetchingTableData = async () => {

    //handle show loadin
    {
      loadingState.ProcessingDelay.push("dataTable");
      loadingState.canRequest = false;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
    }


    try {
      const dataRaw = { type: "suggest_google_character" };
      const { data, status } = await dataTable(dataRaw);
      const listDatas = [];
      for (let index = data.data.length; index >= 0; index--) {
        if (data.data[index] != undefined) listDatas.push(data.data[index]);
      }
      // console.log(listDatas);
      setTableDatas(listDatas);
    } catch (error) {
      // console.log(error);
    }


    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(item => item != "dataTable");
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
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
    else return item.key.includes(searchBoxValue);
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
        let result = item.result;
        var lengthTable = 0;
        Object.keys(result).map((items) => {
          if (result[items] != null) {
            for (let i = 0; i < result[items].length - 1; i++) {
              // debugger
              lengthTable++;
            }
          }
        });

        if (clicked == index) {
          Object.keys(result).map((items) => {
            if (result[items] != null) {
              for (let i = 0; i < result[items].length - 1; i++) {
                // debugger
                tableDataFiltered.push(result[items][i]);
              }
            }
          });
        }
        // convert number into persian
        var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
        var persianMap = persianDigits.split("");
        function convertToPersianNumber(input) {
          return input.replace(/\d/g, function (m) {
            return persianMap[parseInt(m)];
          });
        }
        return (
          <div className="flex flex-col border border-[#D9D9D9]  rounded-xl rounded-t-sm px-3 py-5 mb-4 mt-2">
            <div
              className={
                clicked === index
                  ? "mb-5 flex items-center  justify-between"
                  : "flex items-center  justify-between  "
              }
            >
              <div className="flex items-center gap-6 w-[265px]">
                <span className="text-sm"> {item.key}</span>
                <span className="flex items-center justify-center bg-[#D9D9D9] rounded-lg min-w-[45px] text-[#7D7D7D] text-small p-1">
                  {lengthTable} مورد
                </span>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#7D7D7D]">
                    آخرین به روزرسانی :
                  </span>
                  <span className="text-sm text-[#7D7D7D]">
                    {convertToPersianNumber(item.created_at.substring(7, 18))}
                  </span>
                </div>
                <div
                  onClick={() => toggle(index)}
                  className="pl-5 cursor-pointer"
                >
                  {clicked === index ? (
                    <img
                      src="/img/dashboard/nav_right/arrow_downnn_ios_new.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                  ) : (
                    <img
                      src="/img/dashboard/nav_right/arrow_up_ios_new.svg"
                      alt=""
                      className=" cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>
            {clicked === index ? (
              <Table data={tableDataFiltered} WordsSearcher={true} savedItem={item.key} />
            )  : null}
            
          </div>
        );
      })}
    </div>
  );
}
