import React from 'react'
import Modal from 'react-modal'

export default function WorkSpace() {


  const customStyles = {
    content: {
      top: '43vh',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgrounColor: "red",
      'z-index': '100'
    },
  };



  return (
    <Modal
    isOpen={true}
    parentSelector={() => document.querySelector(".app #DASHBOARD .body .main")}
    // onAfterOpen={afterOpenModal}
    // onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  // className={"myModal"}
  >
    
  </Modal>
  )
}
