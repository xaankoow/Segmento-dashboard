import React from 'react'
import HeaderCardInfo from '../../../Dashboard/DashboaedComponents/support/HeaderCardInfo'
import MessageBody from './MessageBody'
import MessageFooter from './MessageFooter'
import MessageHeader from './MessageHeader'

export default function index({ type ,text ,personeName,date}) {
  return (
    <div className='m-auto mt-5 rounded-lg overflow-hidden border border-sectionDisable box-content max-w-5xl'>

      <MessageHeader type={type} personeName={personeName} date={date}/>
      <MessageBody text={text}/>
      <MessageFooter type={type} />
    </div>
  )
}

