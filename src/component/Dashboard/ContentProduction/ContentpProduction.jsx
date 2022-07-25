import React, { Fragment, useEffect, useState } from "react";
import { ContentProductionService } from "../../service/contentProduction";
import PopUp from "../../Utils/PopUp/PopUp";
import SearchBox from "../DashboaedComponents/SearchBox/SearchBox";
import Table from "../DashboaedComponents/TableData/TableData";
import SaveListModal from "./SaveListModal";

export default function ContentpProduction({ onClickHandler }) {
  // searchBox Value
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [UpdatePpUp, showUpdatePpUp] = useState(false);
  const [SavePopup, showSavePopup] = useState(false);
  const [keyWordShowSaveModal, setKeyWordShowSaveModal] = useState(false);
  const [SaveInputValue, SetSaveInputValues] = useState("");
  const [boxIndex, setUpdateBoxIndex] = useState(-1);
  const [activeboxValue, setActiveboxValue] = useState("");
  const SaveInputValues = (e) => {
    SetSaveInputValues(e.target.value);
  };
  const activeBoxUpdate = (e) => {
    setUpdateBoxIndex(e.target.id);
    setActiveboxValue(e.target.title);
  };
  const SearchBoxChangeHandler = (e) => {
    setSearchBoxValue(e.target.value);
    setSearchBoxHandleClick(false);
  };

  // search box click
  const [searchBoxHandleClick, setSearchBoxHandleClick] = useState(false);
  //filter from searchBox  in table

  const [content, setcontent] = useState([]);
  const handleSetContentProduction = async () => {
    try {
      let formdata = new FormData();
      formdata.append("keyword", searchBoxValue);
      // const { data, status } = await keywordService(searchBoxValue);
      const { data, status } = await ContentProductionService(formdata);
      // debugger
      setcontent(data.data); //5
          // content.map((item, index) => {
      //   if (item.includes(searchBoxValue)) { // هنگام ارسال درخواست به وبسرویس کلمه هم ارسال میشه پس شامل اون کلمه هست پس چرا دوباره برسی کنیم؟!
      //     tableDataFiltered.push(item);
      data.data.forEach((element, index) => {
        if (index <= 4) {
          tableDataFiltered2.push(element);
        }
      });
      setTableData(tableDataFiltered2);
      setNumber(5);
      // if (tableDataFiltered2.length < 5) {
      //   tableDataFiltered2.push(item);
      // }
      // }
      // return
      // });
    } catch (error) {
      console.log(error);
    }
  };
  var [tableData, setTableData] = useState([]);

  var tableDataFiltered = [];
  var tableDataFiltered2 = [];
  // content.map((item, index) => {
  //   if (item.includes(searchBoxValue)) {
  //     tableDataFiltered.push(item);
  //     if (tableDataFiltered2.length < 5) {
  //       tableDataFiltered2.push(item);
  //     }
  //   }
  //   // return
  // });
  // debugger

  useEffect(() => {
    // if (tableDataFiltered2.length!=tableData.length) {
    //   debugger
    //   setTableData(tableDataFiltered2);
    // }
  }, []);

  var [number, setNumber] = useState(5);

  const addMore = () => {
    // debugger;
    tableDataFiltered2 = tableData;
    for (
      let i = number;
      content.length > i + 5 ? i < number + 5 : i < content.length;
      i++
    ) {
      tableDataFiltered2.push(content[i]);
    }
    setTableData(tableDataFiltered2);
    setNumber(number + 5);
  };
  

  return (
    <>
      {keyWordShowSaveModal && (
        <Fragment>
          <SaveListModal
            dataTable={tableData}
            isContentProduction={true}
            updateButtonHandler={() => {
              if (boxIndex > -1) showUpdatePpUp(true);
            }}
            saveButtonHandler={() => {
              if (SaveInputValue) showSavePopup(true);
            }}
            SaveInputValues={SaveInputValues}
            activeBoxUpdate={activeBoxUpdate}
            close={() => setKeyWordShowSaveModal(false)}
          />
          {number ? "" : ""}
        </Fragment>
      )}
      {UpdatePpUp && (
        <PopUp
          clickHandler={() => showUpdatePpUp(false)}
          image={"/img/popUp/update.svg"}
          type={"sucsess"}
          buttonText={"باشه"}
          text={"لیست " + " " + activeboxValue + " " + "بروزرسانی شد!"}
          title={"موفقیت آمیز"}
        />
      )}
      {SavePopup && (
        <PopUp
          clickHandler={() => showSavePopup(false)}
          image={"/img/popUp/playlist_add.svg"}
          type={"sucsess"}
          buttonText={"باشه"}
          text={
            "کلمات کلیدی در لیست" + " " + SaveInputValue + " " + "ذخیره شد!"
          }
          title={"موفقیت آمیز"}
        />
      )}
      <div className="pt-3 flex flex-col justify-center items-center bg-[#ffffff]">
        <SearchBox
          changeHandler={SearchBoxChangeHandler}
          handlClick={() => {
            setSearchBoxHandleClick(true);
            handleSetContentProduction();
          }}
          className="w-[97%] flex items-center gap-2 justify-between"
        />

        <div className="flex flex-col  w-[97%]">
          {!searchBoxValue || !searchBoxHandleClick ? (
            <span className="text-right mt-4">هیچ کلمه ای جستجو نکردید!</span>
          ) : null}
          <div className="flex  justify-between w-full mt-5">
            <Table
              data={tableData}
              NothingSearch={
                !searchBoxValue || !searchBoxHandleClick ? true : false
              }
              headerButton={true}
              contentsProduction={true}
              openModal={() => setKeyWordShowSaveModal(true)}
            />
          </div>
        </div>
      </div>
      <button
        className={
          searchBoxValue && searchBoxHandleClick
            ? "btn-style mr-5 mt-5 flex gap-3"
            : "bg-[#D3D5E2] btn-style mr-5 mt-5 flex gap-3"
        }
        disabled={searchBoxHandleClick ? false : true}
        onClick={(e) => {
          addMore();
        }}
      >
        <img src="/img/dashboard/table/cached.svg" alt="cached" />
        تولید بیشتر
      </button>
      {/* {number ? "" : ""} */}
    </>
  );
}
