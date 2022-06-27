import React, { Fragment, useState } from 'react'
import Modal from 'react-modal'
import { useSelector } from "react-redux";
export default function LoadingPage({show}) {
  // debugger
  // const [showLoading, setShowLoading] = useState(show!=undefined?show:false)
  const {showLoading,canRequest} =useSelector(state=>state.loadingState)
  // debugger
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
    <Fragment>
      {showLoading==true&&canRequest==false?(
        <div>
        <Modal
          isOpen={true}
          parentSelector={() => document.querySelector(".app #DASHBOARD")}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        // className={"myModal"}
        >
          <div className=' w-full h-full z-50'>

          <h1>Loading page</h1>
          </div>
        </Modal>
      </div>
      ):""}
    </Fragment>
    
  )
}
