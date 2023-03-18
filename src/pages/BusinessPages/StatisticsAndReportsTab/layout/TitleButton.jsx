import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { ImageContainer } from '../../../../assets/img/IMG'
import AuthButton from '../../../../component/Auth/authButton/AuthButton'
import AddingBusinessPagesModal from '../../businessPagesTab/layout/AddingBusinessPagesModal'

export default function Index() {
  const [showAddBusindesPageModal, setShowAddBusindesPageModal] = useState(false);
  const navigate = useNavigate()

  return (
    <div className='flex justify-between items-baseline'>
        <div onClick={()=>navigate(-1)} className=' inline-block cursor-pointer'>
            <img src={ImageContainer.blueArrowBtn} alt="arrow" className=' inline-block rotate-180 ml-4'/>
            <span className='text-shortText text-sm'>بازگشت</span>
        </div>
        <AuthButton handlerClick={setShowAddBusindesPageModal} setOnclickValue={true} textButton={<><img src={ImageContainer.plus} alt="plus" className=' ml-4'/>افزودن صفحه</>} classes="inline-block"/>
        {showAddBusindesPageModal&&<AddingBusinessPagesModal showModal={setShowAddBusindesPageModal}/>}
   
    </div>
  )
}
