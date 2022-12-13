import React from 'react'
import { ImageContainer } from '../../../assets/img/IMG'
import AuthButton from '../../../component/Auth/authButton/AuthButton'
import WorkSpaceIndexerCardInfo from './workSpaceCard'

export default function Index() {
  return (
    <div>
      <div className=' w-full text-left py-7'>
        <div className='inline-block'>
          <AuthButton textButton={<><img src={ImageContainer.plus} /><span className=' text-orgWhite mr-4'>افزودن ورک‌اسپیس</span></>} />
        </div>
      </div>
      <WorkSpaceIndexerCardInfo />
      <WorkSpaceIndexerCardInfo />
      <WorkSpaceIndexerCardInfo />
      <WorkSpaceIndexerCardInfo />
    </div>
  )
}
