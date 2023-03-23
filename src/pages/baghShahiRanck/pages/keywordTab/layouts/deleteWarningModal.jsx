import React from "react";
import Modal from "react-modal";
import { defaultCustomModalStyle } from "../../../../../variables/style";

//==== IMAGEs
import Exclamation from "../../../../../assets/img/ico/exclamation.svg";
import AuthButton from "../../../../../component/Auth/authButton/AuthButton";

const DeleteWarningModal = ({ show, onOk, onClose }) => {
  return (
    <Modal
      isOpen={show}
      parentSelector={() => document.getElementById("dashboardMap")}
      style={defaultCustomModalStyle}
      contentLabel="Delete Modal"
      onRequestClose={() => onClose()}
      preventScroll
    >
      {/* <div className=" w-[862px] pb-7"> */}
      <div className="delete-warning-modal">
        <div className="top-delete-warning">
          <img src={Exclamation} alt="" />
        </div>
        <div className="bottom p-2 py-5">
          <span>
            کاربر گرامی
            <br />
            آیا از حذف کلمه کلیدی خود مطمعا هستید؟
          </span>
          <div className="action-area flex items-center justify-between px-3 mt-5">
            <AuthButton handlerClick={onClose} textButton={"انصراف"} />
            <AuthButton
              keyLoading=""
              handlerClick={onOk}
              textButton={"بله، حذف کن!"}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteWarningModal;
