import React, { Fragment, useState } from 'react'
import Modal from 'react-modal'
import { useSelector } from "react-redux";
import AnimationSegmentoLogo from '../../shared/AnimationSegmentoLogo';
import './style.css'

export default function LoadingPage() {
  const { ProcessingDelay,ImportantProcessingDelay, canRequest } = useSelector(state => state.loadingState)
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
      {ImportantProcessingDelay.length > 0 && canRequest == false ? (
      // {true ? (
        <div id='Loadin-Page'>
          <Modal
            isOpen={true}
            parentSelector={() => document.querySelector(".app #Loadin-Page")}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <AnimationSegmentoLogo parentClass={"w-52 h-52 p-8"} animation={true}/>
          </Modal>
        </div>
      ) : null}
    </Fragment>
  )
}
