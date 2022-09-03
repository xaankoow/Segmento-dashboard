import React, { Fragment, useState } from 'react'
import Modal from 'react-modal'
import { useSelector } from "react-redux";
import './style.css'

export default function LoadingPage() {
  const { ProcessingDelay, canRequest } = useSelector(state => state.loadingState)
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
      {ProcessingDelay.length > 0 && canRequest == false ? (
        <div id='Loadin-Page'>
          <Modal
            isOpen={true}
            parentSelector={() => document.querySelector(".app #Loadin-Page")}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='flex justify-center items-center rounded-2xl bg-white w-52 h-52'>
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
          </Modal>
        </div>
      ) : null}
    </Fragment>
  )
}
