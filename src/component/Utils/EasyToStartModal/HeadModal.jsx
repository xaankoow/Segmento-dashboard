import React from 'react'
import { useNavigate } from 'react-router-dom';
import AuthButton from '../../Auth/authButton/AuthButton'
import { TitleModal } from './HandleTitleModal'

export default function Head({ stepModal, free }) {
  const navigate = useNavigate();
  return (
    <header className='pr-5 pl-3.5 border rounded-lg border-[#F2F5F7] my-3 mx-2'>
      <div>
        <span>{TitleModal(stepModal, free)}</span>
        <span className='info'></span>
      </div>
      <div className='close_suport_container'>
        {stepModal == 1 || stepModal == 2 ?<a href="https://segmento.ir/support"><AuthButton classes={"btn-secondary"} textButton={"پشتیبانی"} /></a> : null}
        <div className='flex justify-center items-center p-1 rounded-[3px] cursor-pointer hover:bg-[#F352421A]' onClick={() => navigate(-1)}>
          <div className='close_modal_ico' ></div>
        </div>
      </div>
    </header>
  )
}
