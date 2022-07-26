import React, { Fragment, useState } from 'react'
import Modal from 'react-modal'
import { useSelector } from "react-redux";
import './style.css'

export default function LoadingPage({ show }) {
  // debugger
  // const [showLoading, setShowLoading] = useState(show!=undefined?show:false)
  const { ProcessingDelay, canRequest } = useSelector(state => state.loadingState)
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
      {ProcessingDelay.length>0 && canRequest == false ? (
        <div id='Loadin-Page'>
          <Modal
            isOpen={true}
            parentSelector={() => document.querySelector(".app #Loadin-Page")}
            // onAfterOpen={afterOpenModal}
            // onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          // className={"myModal"}
          >
            {/* <div className='w-screen h-screen flex items-center justify-center'> */}
              <div>
                <div id="loading-container-segmento-logo">
                  <div className="segmento_logo_1"></div>
                  <div className="segmento_logo_2"></div>
                  <div className="segmento_logo_3"></div>
                  <div className="segmento_logo_4"></div>
                  <div className="segmento_logo_5"></div>
                  <div className="segmento_logo_6"></div>
                  <div className="segmento_logo_7"></div>
                </div>
              </div>
                <p className=' mt-7 text-center'>درحال برسی اطلاعات...</p>
            {/* </div> */}
          </Modal>
        </div>
      ) : null}
    </Fragment>

  )
}
