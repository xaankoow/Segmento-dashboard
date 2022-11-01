import React from 'react'
import { useSelector } from 'react-redux';
import adminIco from '../../../../assets/img/dashboard/support/messageBox/head/adminIco.svg'
import { ImageContainer } from '../../../../assets/img/IMG';

export default function MessageHeader({ type, personeName, section , date }) {

  const { userData } = useSelector((state) => state.userState);
  return (
    <div className={`${type == "admin" ? " bg-sectionDisable " : "bg-white"} flex items-center justify-between px-4 h-14`}>
      <div className='h-10 flex items-center'>
        <img src={userData.user!=undefined?userData.user.img!=""?userData.user.img:ImageContainer.userAvatar:ImageContainer.userAvatar} alt="admin img" className=' w-8 h-8 rounded-md'/>
        <div className='flex items-start flex-col justify-between mr-5'>
          <p className='text-title text-sm'>{personeName}</p>
          {type=="admin"&&<p className='text-silver text-s'>admin experience</p>}
        </div>
      </div>
      <div className='text-title text-s'>
        {date}
      </div>
    </div>
  )
}
