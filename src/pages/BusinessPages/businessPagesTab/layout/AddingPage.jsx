import React, { useState } from 'react'
import AuthButton from '../../../../component/Auth/authButton/AuthButton'
// import { ImageContainer } from "../../../../assets/img/IMG";
import { ImageContainer } from "../../../../assets/img/IMG";
import AddingBusinessPagesModal from './AddingBusinessPagesModal'


export default function Index() {
  const [showAddBusindesPageModal, setShowAddBusindesPageModal] = useState(false);

  return (
    <div className='flex justify-between items-center'>
        <span className='text-title text-lg'>لیست صفحات تجاری من</span>
        <AuthButton classes={"btn-style"} disabled handlerClick={setShowAddBusindesPageModal} setOnclickValue={true} textButton={<><img src={ImageContainer.plus} alt="plus" className=' ml-4'/>افزودن صفحه</>}/>
        {/* <img src={ImageContainer} alt="" /> */}
        {showAddBusindesPageModal&&<AddingBusinessPagesModal showModal={setShowAddBusindesPageModal}/>}
    </div>
  )
}
