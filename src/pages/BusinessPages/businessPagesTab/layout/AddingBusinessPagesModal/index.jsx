import React from "react";
import Header from "./Header";
import Modal from "react-modal";
import InputContainer from "./InputContainer";
import Footer from "./Footer";
import InputGetWorkSpaceInfo from "../../../../../component/Utils/workSpaceModal/inputValue";

import {
  defaultCustomModalStyle,
  modalParentSelector,
} from "../../../../../variables/style";
import PageTitle from "../../../../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle";
import AuthButton from "../../../../../component/Auth/authButton/AuthButton";
import { ImageContainer } from "../../../../../assets/img/IMG";
import { useNavigate } from "react-router";

export default function index({ showModal }) {
    // const navigate=useNavigate()
  return (
    <Modal
      isOpen={true}
      parentSelector={() => document.querySelector(modalParentSelector)}
      style={defaultCustomModalStyle}
      contentLabel="Example Modal"
      onRequestClose={() => showModal(false)}
    >
      {/* <div className=" w-[862px] pb-7"> */}
      <div className=" w-[862px]">

        {/* <Header/> */}
        {/* <div className=' relative'> */}
        <PageTitle
          title={"افزودن صفحه تجاری"}
          parentClass="py-2"
          badgeApi={3}
          hasLimit
        />

        {/* </div> */}
        <body className="px-5 bg-[#fff]">
            {/* <InputContainer/> */}
          <InputGetWorkSpaceInfo countInput={5} step={2} />
          <AuthButton textButton={<><img src={ImageContainer.savingNewList} alt="save list" className=" ml-3"/>ذخیره صفحه تجاری</>} classes="float-left relative -top-10"/>
        </body>
      </div>
    </Modal>
  );
}
