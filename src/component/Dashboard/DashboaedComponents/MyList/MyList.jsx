import { list } from "postcss";
import React, { useState } from "react";
import { useEffect } from "react";
import { dataTable } from "../../../service/dataTable";
import SearchBox from "../SearchBox/SearchBox";
import Table from "../TableData/TableData";

export default function MyList() {
  const [clicked, setClicked] = React.useState(false);
  // set api data
  const[tableDatas,setTableDatas]=useState([]);
  const toggle = (index) => {
    if (clicked === index) {
      // if active close
      return setClicked(null);
    }
    setClicked(index);
  };

  useEffect(()=>{
    handleFetchingTableData()
  },[])
  const handleFetchingTableData = async()=>{
      try{
          const dataRaw={ "type":"suggest_google_character" }
          const {data,status}=await dataTable(dataRaw)
          console.log(data);
          debugger
          setTableDatas(data.data)
      }
      catch(error){
        debugger
          console.log(error)
      }
  }
  const listDatas = [1, 2, 3];

  return (
    <div className="px-4 py-7 bg-[#ffffff]">
      <div className="flex justify-between items-center mb-4">
        <span>لیست های اخیر شما:</span>

        <SearchBox className={"w-[450px] flex gap-2 items-center"} />
      </div>

      {listDatas.map((item, index) => {
        return (
          <div className="flex flex-col border border-[#D9D9D9]  rounded-xl rounded-t-sm px-3 py-5 mb-4 mt-2">
            <div className={clicked === index ? "mb-5 flex items-center  justify-between" :"flex items-center  justify-between  "}>
              <div className="flex items-center gap-6 w-[265px]">
                <span className="text-sm">آموزش سئو در مشهد</span>
                <span className="flex items-center justify-center bg-[#D9D9D9] rounded-lg w-[45px] text-[#7D7D7D] text-small p-1">
                  100 مورد
                </span>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#7D7D7D]">
                    آخرین به روزرسانی :
                  </span>
                  <span className="text-sm text-[#7D7D7D]">1401 / 2 / 30</span>
                </div>
                <div
                  onClick={() => toggle(index)}
                  className="pl-5 cursor-pointer"
                >
                  {clicked === index ? (
                    <img
                      src="./img/dashboard/nav_right/arrow_downnn_ios_new.svg"
                      alt=""
                    />
                  ) : (
                    <img
                      src="./img/dashboard/nav_right/arrow_up_ios_new.svg"
                      alt=""
                    />
                  )}
                </div>
              </div>
            
            </div>
            {clicked === index ? <Table data={""} WordsSearcher={true}/> : null}
          </div>
        );
      })}
    </div>
  );
}
