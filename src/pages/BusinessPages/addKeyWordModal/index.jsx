import React from "react";
import Modal from "react-modal";
import Title from "./Title";
import InputContainer from './InputContainer'
import Footer from './Footer'
import PageTitle from "../../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle";
import {
  defaultCustomModalStyle,
  modalParentSelector,
} from "../../../variables/style";

export default function Index({ showModal }) {
  return (
    <Modal
      isOpen={true}
      parentSelector={() => document.querySelector(modalParentSelector)}
      style={defaultCustomModalStyle}
      contentLabel="Example Modal"
      onRequestClose={() => showModal({key:[],showModal:false})}>
      <div className="w-[842px]">
        <PageTitle title={"افزودن کلمه کلیدی"} parentClass="py-2" />
        <div className="px-7">
          <div className=" mt-4">
            <Title />
          </div>
          <InputContainer/>
          <div className=" my-4">
          <Footer/>
          </div>
        </div>
      </div>
    </Modal>
  );
}
