import React from "react";
import Modal from "react-modal";
import AuthButton from "../../Auth/authButton/AuthButton";
const PopUp = ({ type, title, text, buttonText, image,clickHandler,tryFreePlan,tryFreePlanClick }) => {
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
          <img src={image} alt="popUpImage" className=" w-28 h-28"/>
        </div>
        <div className="popUpContent mt-3">
          <h3 className="title">{title}</h3>
          <span className="text px-4">{text}</span>
          {tryFreePlan!=undefined&tryFreePlan?(
            <div className="flex justify-between items-center w-full px-3">
              <div>

              <AuthButton textButton={"خرید اشتراک"} handlerClick={tryFreePlanClick} setOnclickValue={1}/>
              </div>
              <span className="buttonText mt-5" onClick={()=>clickHandler()}>{buttonText}</span>

            </div>
          ):<span className="buttonText mt-5" onClick={()=>clickHandler()}>{buttonText}</span>}
          
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
