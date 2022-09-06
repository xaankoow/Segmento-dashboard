import React from 'react'
import adminIco from '../../../../assets/img/dashboard/support/messageBox/head/adminIco.svg'

export default function MessageHeader({ type, name, section }) {
  return (
    <div className={`${type == "admin" ? " bg-sectionDisable " : "bg-white"} flex items-center justify-between px-4 h-14`}>
      <div className='h-10 flex items-center'>
        <img src={adminIco} alt="admin img" />
        <div className='flex items-start flex-col justify-between mr-5'>
          <p className='text-title text-sm'>name</p>
          {type=="admin"&&<p className='text-silver text-s'>admin experience</p>}
        </div>
      </div>
      <div className='text-title text-s'>
        1401/2/2
      </div>
    </div>
  )
}
