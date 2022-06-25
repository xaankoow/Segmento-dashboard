import React from "react";
import Modal from "react-modal";
const PopUp = ({ type, title, text, buttonText, image,clickHandler }) => {
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
          className="PopUpBox"
          style={{
            backgroundColor:
              type === "sucsess"
                ? " #10CCAE "
                : "error"
                ? "#FF0000"
                : type === "info"
                ? "info"
                : type === "aler"
                ? "info"
                : "#10CCAE",
          }}
        >
          <img src={image} alt="popUpImage" />
        </div>
        <div className="popUpContent mt-3">
          <h3 className="title">{title}</h3>
          <span className="text">{text}</span>
          <span className="buttonText mt-5" onClick={()=>clickHandler()}>{buttonText}</span>
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
