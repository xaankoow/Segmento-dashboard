import React from 'react'
import HeaderCardInfo from '../../../Dashboard/DashboaedComponents/support/HeaderCardInfo'
import MessageBody from './MessageBody'
import MessageFooter from './MessageFooter'
import MessageHeader from './MessageHeader'

export default function index({ type }) {
  return (
    <div className='m-auto mt-5 rounded-lg overflow-hidden border border-sectionDisable box-content max-w-5xl'>

      <MessageHeader type={type} />
      <MessageBody />
      <MessageFooter type={type} />
    </div>
  )
}

