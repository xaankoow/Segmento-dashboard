import React from 'react'
import AuthButton from '../../../Auth/authButton/AuthButton'
import { EditorCustomizedToolbarOption } from '../../../Dashboard/pages/EditUserProfile/components/Editor/Editor'
import { ImageContainer } from '../../IMG'

export default function index() {
    return (
        <div className='w-full mt-6'>
            <EditorCustomizedToolbarOption />
            <div className='flex items-center h-12 -mt-5 w-full border border-lightGray rounded-lg'>
                <img src={ImageContainer.infoBlue} alt="information" className=' mx-3' />
                <p className=' py-2 text-sm '>
                    امکان بارگزاری یک یا چند فایل همزمان را دارید.
                </p>
            </div>
            <div className='flex w-full mt-2 items-center'>
                <div className='flex flex-grow items-center border border-sectionDisable rounded-[3px] justify-between px-3 h-11'>
                    <span className='text-title text-sm'>پیوست فایل</span>
                    <span className='text-silver text-s'>فایلی انتخاب نشده است. </span>
                </div>
                <AuthButton classes={"btn-secondary mr-5"} textButton={"انتخاب فایل"} />
            </div>
            <p className='text-title text-s mt-2'>پسوند های مجاز: .jpg, .gif, .jpeg, .png, .zip, .txt, .pdf</p>
        </div>
    )
}
