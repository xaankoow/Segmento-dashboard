import React from 'react'
import { ImageContainer } from '../../../../assets/img/IMG'
import AuthButton from '../../../../component/Auth/authButton/AuthButton'

export default function index() {
  return (
    <div className='flex justify-between items-baseline'>
        {/* <div className=''> */}

        {/* </div> */}
        <div className=' inline-block'>
            <img src={ImageContainer.blueArrowBtn} alt="arrow" className=' inline-block rotate-180 ml-4'/>
            <span className='text-shortText text-sm'>بازگشت</span>
        </div>
        <AuthButton textButton={<><img src={ImageContainer.plus} alt="plus" className=' ml-4'/>افزودن صفحه</>} classes="inline-block"/>
    </div>
  )
}
