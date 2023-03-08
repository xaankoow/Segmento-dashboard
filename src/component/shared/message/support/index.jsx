import React from 'react'
import HeaderCardInfo from '../../../Dashboard/DashboaedComponents/support/HeaderCardInfo'
import MessageBody from './MessageBody'
import MessageFooter from './MessageFooter'
import MessageHeader from './MessageHeader'

export default function index({ chatData,type}) {
  // console.log('chatData', chatData)

  return (
    <div className='m-auto mt-5 rounded-lg overflow-hidden border border-sectionDisable box-content max-w-5xl'>

      <MessageHeader type={type} personeName={chatData.user.name} date={chatData.updated_at}/>
      <MessageBody text={chatData.message}/>
      <MessageFooter type={type} messageUuid={chatData.uuid} messageRate={chatData.rate} attachment={chatData.files}/>
    </div>
  )
}

