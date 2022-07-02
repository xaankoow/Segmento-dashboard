import React from 'react'
import AuthButton from '../../Auth/authButton/AuthButton'
import { TitleModal } from './HandleTitleModal'

export default function Head({ handleClose, stepModal, free }) {
  return (
    <header className='pr-5 pl-3.5 border rounded-lg border-[#F2F5F7] my-3 mx-2'>
      <div>
        <span>{TitleModal(stepModal, free)}</span>
        <span className='info'></span>
      </div>
      <div className='close_suport_container'>
        {stepModal == 4 || stepModal == 5 ? <AuthButton style={{ backgroundColor: "#0A65CD26", color: "#0A65CDB2" }} textButton={"پشتیبانی"} /> : null}
        <div className='close_modal_ico' onClick={() => handleClose()}></div>
      </div>
    </header>
  )
}
