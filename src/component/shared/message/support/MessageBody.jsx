import React from 'react'

export default function MessageBody({text}) {
  return (
    <div className=' px-7 py-4 '>
      <p className=' text-sm text-primaryV1'>
       {text}
      </p>
    </div>
  )
}
