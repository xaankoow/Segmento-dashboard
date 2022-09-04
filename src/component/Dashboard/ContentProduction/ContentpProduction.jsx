import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    SetSaveInputValues(e);
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

  const loadingState = useSelector((state) => state.loadingState);
  const dispatch = useDispatch();
  
  const handleSetContentProduction = async () => {
    //handle show loadin
    {
      loadingState.ProcessingDelay.push("ContentProductionService");
      loadingState.canRequest = false;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
    try {
      let formdata = new FormData();
      formdata.append("keyword", searchBoxValue);
      formdata.append("limit", 10);
      // const { data, status } = await keywordService(searchBoxValue);
      const { data, status } = await ContentProductionService(formdata);
       
      setcontent([...content,...data.data]);
      // debugger;

    } catch (error) {
      // console.log(error);
    }
    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "ContentProductionService"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };

  
  

  return (
    <>
      {keyWordShowSaveModal && (
        <Fragment>
          <SaveListModal
            dataTable={content}
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
        placeholder={"برای نمونه (کتاب)"}
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
              data={content}
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
      <div className=" pb-4">
        <button
          className={
            searchBoxValue && searchBoxHandleClick
              ? "btn-style mr-5 mt-5 flex gap-3"
              : "bg-lightGray btn-style mr-5 mt-5 flex gap-3"
          }
          disabled={searchBoxHandleClick ? false : true}
          onClick={(e) => {
            handleSetContentProduction();
          }}
        >
          <img src="/img/dashboard/table/cached.svg" alt="cached" />
          تولید بیشتر
        </button>
      </div>
      {/* {number ? "" : ""} */}
    </>
  );
}
