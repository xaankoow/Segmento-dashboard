import React from 'react'
import AuthButton from '../../../../component/Auth/authButton/AuthButton'
// import { ImageContainer } from "../../../../assets/img/IMG";
import { ImageContainer } from "../../../../assets/img/IMG";


export default function index() {
  return (
    <div className='flex justify-between items-center'>
        <span className='text-title text-lg'>لیست صفحات تجاری من</span>
        <AuthButton classes={"btn-style"} textButton={<><img src={ImageContainer.plus} alt="plus" className=' ml-4'/>افزودن صفحه</>}/>
        {/* <img src={ImageContainer} alt="" /> */}
        
    </div>
  )
}
