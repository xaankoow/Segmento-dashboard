import React from 'react'
import { ImageContainer } from '../../../assets/img/IMG'
import AuthButton from '../../../component/Auth/authButton/AuthButton'

export default function index() {
  return (
    <div>
        <AuthButton textButton={<><img src={ImageContainer.savingNewList} alt="save list" className=' ml-3'/>ذخیره </>} classes="mr-auto"/>
    </div>
  )
}
