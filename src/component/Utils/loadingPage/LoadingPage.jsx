import React, { Fragment, useState } from 'react'
import Modal from 'react-modal'
import { useSelector } from "react-redux";
import './style.css'

export default function LoadingPage({ show }) {
  // debugger
  // const [showLoading, setShowLoading] = useState(show!=undefined?show:false)
  const { showLoading, canRequest } = useSelector(state => state.loadingState)
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
      {!showLoading == true && !canRequest == false ? (
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
            {/* <div className='w-screen h-screen flex items-center justify-center'> */}
              <div>
                <div id="loading-container-segmento-logo">
                  <div class="segmento_logo_1"></div>
                  <div class="segmento_logo_2"></div>
                  <div class="segmento_logo_3"></div>
                  <div class="segmento_logo_4"></div>
                  <div class="segmento_logo_5"></div>
                  <div class="segmento_logo_6"></div>
                  <div class="segmento_logo_7"></div>
                </div>
                <p className=' mt-7 text-center'>درحال برسی اطلاعات...</p>
              </div>
            {/* </div> */}
          </Modal>
        </div>
      ) : ""}
    </Fragment>

  )
}
