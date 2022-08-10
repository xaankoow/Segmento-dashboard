import React, { useState } from "react";
import AuthInput from "../../Auth/authInput/AuthInput";
import SearchBox from "../DashboaedComponents/SearchBox/SearchBox";
import Modal from "react-modal";
import {
  ContentProductionGetService,
  ContentProductionStoreService,
} from "../../service/contentProductionStore";
import { useEffect } from "react";
import { Deblur } from "@mui/icons-material";
import { useSelector } from "react-redux";

export default function SaveListModal({
  saveButtonHandler,
  updateButtonHandler,
  isContentProduction,
  dataTable,
  SaveInputValues,
  activeBoxUpdate,
  close,
  forceUpdate
}) {
  const { canRequest } = useSelector((state) => state.loadingState);
  const customStyles = {
    content: {
      top: "43vh",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgrounColor: "red",
      "z-index": "100",
    },
  };
  const [disable, setDisable] = useState(true);
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const [SaveInputValue, setSaveInputValue] = useState("");
  const [SaveUpdateValue, setSaveUpdateValue] = useState("");
  const [update, setUpdate] = useState(false);
  const [content, setcontent] = useState([]);
  const [searchBoxHandleClick, setSearchBoxHandleClick] = useState(false);

  // jalali moment
  var moment = require("jalali-moment");

  var itemFiltered = content.filter((item, index) => {
    if (!searchBoxHandleClick) return content;
    else {
      if (item.word.includes(searchBoxValue)) {
        return item;
      }
    }

    // return
  });
  const [activeBox, setActiveBox] = useState(-1);
  const SearchBoxChangeHandler = (e) => {
    setSearchBoxValue(e.target.value);
    setSearchBoxHandleClick(false);
  };
  const handlechangeSaveInput = (e) => {
    setSaveInputValue(e.target.value);
    SaveInputValues(e);
  };

  useEffect(() => {
    handleGetcontent();
  }, []);
  if (isContentProduction) {
    var handleSetcontent = async () => {
      try {
        const dd = {
          word: SaveInputValue,
          data: dataTable,
        };

        const { data, status } = await ContentProductionStoreService(dd);
        setUpdate(!update);
        handleGetcontent();
      } catch (error) {
        // console.log(error);
      }
    };
    var handleUpdate = async () => {
      try {
        const dd = {
          word: SaveUpdateValue,
          data: dataTable,
        };

        const { data, status } = await ContentProductionStoreService(dd);
        setUpdate(!update);
        handleGetcontent()
      } catch (error) {
        // console.log(error);
      }
    };
    var handleGetcontent = async () => {
      try {
        const { data, status } = await ContentProductionGetService();
        // debugger;
        setcontent(data.data);
      } catch (error) {
        // console.log(error);
      }
    };
  }

  return (
    <Modal
      isOpen={true}
      parentSelector={() =>
        document.querySelector(".app #DASHBOARD .body .main")
      }
      id={"MODALBOX"}
      shouldCloseOnOverlayClick={true}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      // className={"myModal"}
    >
      <div className="flex flex-col items-center px-4 py-8 gap-5 z-50 min-w-[500px]" >
      <img
              src="/img/dashboard/nav_right/close.svg"
              alt="close"
              width={"14px"}
              height={"14px"}
              className="absolute top-4 left-6 cursor-pointer mb-7"
              onClick={() =>close()}
            />
            <div></div>
        <AuthInput
          textLabelInput="افزودن لیست جدید "
          width={"100%"}
          typeInput="text"
          handleChange={handlechangeSaveInput}
        />
        <div className="w-full">
          <button
            className="btn-style flex items-center gap-3 w-[183px] py-2"
            disabled={!canRequest}
            onClick={(e) => {
              saveButtonHandler(e);
              handleSetcontent();
            }}
          >
            <img src="/img/modal/keyWords/playlist_add.svg" alt="keyWords" />
            ذخیره لیست جدید
          </button>
        </div>
        <div className="border-b border-[#7D7D7D] w-full m-auto" />

        <SearchBox
          className={"w-full mt-2 flex items-center gap-2 justify-between"}
          changeHandler={SearchBoxChangeHandler}
          handlClick={() => setSearchBoxHandleClick(true)}
        />

        <div
          className="overflow-y-scroll max-h-[300px] px-2 cursor-pointer "
          onClick={() => setDisable(false)}
        >
          {itemFiltered.map((item, index) => {
            return (
              <div
                title={item.word}
                id={index}
                className={
                  activeBox == index
                    ? "flex cursor-pointer items-center border border-[#D9D9D9] rounded-xl justify-between px-3 py-5 mb-4 mt-2 rounded-t-sm hover:border hover:border-[#0A65CD] bg-secondary "
                    : "flex cursor-pointer items-center border border-[#D9D9D9] rounded-xl justify-between px-3 py-5 mb-4 mt-2 rounded-t-sm hover:border hover:border-[#0A65CD] focus:bg-secondary "
                }
                onClick={(e) => {
                  setSaveUpdateValue(item.word);
                  setActiveBox(index);
                  activeBoxUpdate(e);
                }}
              >
                <div
                  className="flex items-center gap-6 w-[265px]"
                  title={item.word}
                  id={index}
                >
                  <span className="text-sm" title={item.word} id={index}>
                    {item.word}
                  </span>
                  <span
                    title={item.word}
                    id={index}
                    className="flex items-center justify-center bg-[#D9D9D9] rounded-lg w-[45px] text-[#7D7D7D] text-small p-1"
                  >
                    {item.data.length}
                  </span>
                </div>
                <div
                  className="flex items-center gap-2"
                  title={item.word}
                  id={index}
                >
                  <span
                    className="text-sm text-[#7D7D7D]"
                    title={item.word}
                    id={index}
                  >
                    آخرین به روزرسانی :{" "}
                  </span>
                  <span
                    className="text-sm text-[#7D7D7D]"
                    title={item.word}
                    id={index}
                  >
                    {moment(item.created_at.substring(0, 10))
                      .locale("fa")
                      .format("YYYY/M/D")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full">
          <button
            disabled={canRequest ? (!disable ? false : true) : true}
            className="btn-style flex items-center gap-3 w-[183px] py-2"
            onClick={(e) => {
              updateButtonHandler(e);
              handleUpdate();
              setUpdate(!update);
            }}
          >
            <img src="/img/modal/keyWords/update.svg" alt="keyWords" />
            بروزرسانی لیست
          </button>
        </div>
        {update ? "" : ""}
      </div>
    </Modal>
  );
}
