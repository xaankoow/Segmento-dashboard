import React from "react";
import Modal from "react-modal";
import { modalParentSelector } from "../../../variables/style";
import AuthButton from "../../Auth/authButton/AuthButton";

const PopUp = ({ type, title, text, buttonText, image, clickHandler, tryFreePlan, tryFreePlanClick }) => {

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
        document.querySelector(modalParentSelector)
      }
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="popUpContainer">
        <div
          className="PopUpBox h-28"
          style={{
            backgroundColor:
              type === "sucsess"
                ? " #10CCAE "
                : "error"
                  ? "#F24939F2"
                  : type === "info"
                    ? "info"
                    : type === "aler"
                      ? "info"
                      : "#10CCAE",
          }}
        >
          <img src={image} alt="popUpImage" className=" w-24 h-w-24" />
        </div>
        <div className="popUpContent mt-3">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-sm px-4">{text}</span>
          {tryFreePlan != undefined & tryFreePlan ? (
            <div className="flex justify-between items-center w-full px-3">
              <div>
                <AuthButton textButton={"اشتراک میخرم"} handlerClick={tryFreePlanClick} setOnclickValue={1} />
              </div>
              <span className="buttonText mt-5 third-btn" onClick={() => clickHandler()}>{buttonText}</span>
            </div>
          ) : <span className="buttonText mt-5 third-btn" onClick={() => clickHandler()}>{buttonText}</span>}

        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
