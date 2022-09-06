import React from 'react'
import MessageBody from './MessageBody'
import MessageFooter from './MessageFooter'
import MessageHeader from './MessageHeader'

export default function index() {
  return (
    <div className='m-auto mt-5 rounded-lg overflow-hidden border border-sectionDisable box-content max-w-5xl'>
        <MessageHeader type={"admn"}/>
        <MessageBody />
        <MessageFooter type={"admn"}/>
    </div>
  )
}

