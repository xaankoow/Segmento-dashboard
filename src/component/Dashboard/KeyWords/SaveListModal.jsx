import React from "react";
import AuthInput from "../../Auth/authInput/AuthInput";
import SearchBox from "../DashboaedComponents/SearchBox/SearchBox";
import Modal from "react-modal";

export default function SaveListModal({
  saveButtonHandler,
  updateButtonHandler,
}) {
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

  return (
    <Modal
      isOpen={true}
      parentSelector={() =>
        document.querySelector(".app #DASHBOARD .body .main")
      }
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      // className={"myModal"}
    >
      <div className="flex flex-col items-center px-4 py-8 gap-5">
        <AuthInput
          textLabelInput="افزودن لیست جدید "
          width={"100%"}
          typeInput="text"
        />
        <div className="w-full">
          <button
            className="btn-style flex items-center gap-3 w-[183px] py-2"
            onClick={(e) => saveButtonHandler(e)}
          >
            <img src="./img/modal/keyWords/playlist_add.svg" alt="keyWords" />
            ذخیره لیست جدید
          </button>
        </div>
        <div className="border-b border-[#7D7D7D] w-full m-auto" />
        <SearchBox
          className={"w-full mt-2 flex items-center gap-2 justify-between"}
        />
        <div className="overflow-y-scroll max-h-[300px] px-2">
          <div className="flex items-center border border-[#D9D9D9] rounded-xl justify-between px-3 py-5 mb-4 mt-2 rounded-t-sm">
            <div className="flex items-center gap-6 w-[265px]">
              <span className="text-sm">آموزش سئو در مشهد</span>
              <span className="flex items-center justify-center bg-[#D9D9D9] rounded-lg w-[45px] text-[#7D7D7D] text-small p-1">
                100 مورد
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#7D7D7D]">
                آخرین به روزرسانی :{" "}
              </span>
              <span className="text-sm text-[#7D7D7D]">1401 / 2 / 30</span>
            </div>
          </div>
          <div className="flex items-center border border-[#D9D9D9] rounded-xl justify-between px-3 py-5 mb-4 mt-2 rounded-t-sm">
          <div className="flex items-center gap-6 w-[265px]">
            <span className="text-sm">آموزش سئو در مشهد</span>
            <span className="flex items-center justify-center bg-[#D9D9D9] rounded-lg w-[45px] text-[#7D7D7D] text-small p-1">
              100 مورد
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#7D7D7D]">آخرین به روزرسانی : </span>
            <span className="text-sm text-[#7D7D7D]">1401 / 2 / 30</span>
          </div>
        </div>
        <div className="flex items-center border border-[#D9D9D9] rounded-xl justify-between px-3 py-5 mb-4 mt-2 rounded-t-sm">
          <div className="flex items-center gap-6 w-[265px]">
            <span className="text-sm">آموزش سئو در مشهد</span>
            <span className="flex items-center justify-center bg-[#D9D9D9] rounded-lg w-[45px] text-[#7D7D7D] text-small p-1">
              100 مورد
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#7D7D7D]">آخرین به روزرسانی : </span>
            <span className="text-sm text-[#7D7D7D]">1401 / 2 / 30</span>
          </div>
        </div>
        <div className="flex items-center border border-[#D9D9D9] rounded-xl justify-between px-3 py-5 mb-4 mt-2 rounded-t-sm">
            <div className="flex items-center gap-6 w-[265px]">
              <span className="text-sm">آموزش سئو در مشهد</span>
              <span className="flex items-center justify-center bg-[#D9D9D9] rounded-lg w-[45px] text-[#7D7D7D] text-small p-1">
                100 مورد
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#7D7D7D]">
                آخرین به روزرسانی :{" "}
              </span>
              <span className="text-sm text-[#7D7D7D]">1401 / 2 / 30</span>
            </div>
          </div>
          <div className="flex items-center border border-[#D9D9D9] rounded-xl justify-between px-3 py-5 mb-4 mt-2 rounded-t-sm">
          <div className="flex items-center gap-6 w-[265px]">
            <span className="text-sm">آموزش سئو در مشهد</span>
            <span className="flex items-center justify-center bg-[#D9D9D9] rounded-lg w-[45px] text-[#7D7D7D] text-small p-1">
              100 مورد
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#7D7D7D]">آخرین به روزرسانی : </span>
            <span className="text-sm text-[#7D7D7D]">1401 / 2 / 30</span>
          </div>
        </div>
        <div className="flex items-center border border-[#D9D9D9] rounded-xl justify-between px-3 py-5 mb-4 mt-2 rounded-t-sm">
          <div className="flex items-center gap-6 w-[265px]">
            <span className="text-sm">آموزش سئو در مشهد</span>
            <span className="flex items-center justify-center bg-[#D9D9D9] rounded-lg w-[45px] text-[#7D7D7D] text-small p-1">
              100 مورد
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#7D7D7D]">آخرین به روزرسانی : </span>
            <span className="text-sm text-[#7D7D7D]">1401 / 2 / 30</span>
          </div>
        </div>
        </div>

        <div className="w-full">
          <button
            className="btn-style flex items-center gap-3 w-[183px] py-2"
            onClick={(e) => updateButtonHandler(e)}
          >
            <img src="./img/modal/keyWords/update.svg" alt="keyWords" />
            بروزرسانی لیست
          </button>
        </div>
      </div>
    </Modal>
  );
}
