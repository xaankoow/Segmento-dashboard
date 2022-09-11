import React from 'react'
import Message from '../../../shared/message/support'
import CloseSection from './CloseSection'
import HeaderCardInfo from './HeaderCardInfo'
import SendMessage from '../../../shared/message/SendMessage.jsx/index'
import PageTitle from '../pageTitle/pageTitle'
import AuthButton from '../../../Auth/authButton/AuthButton'

export default function index() {
  return (
    <div className=' px-7'>
      <PageTitle title={"پشتیبانی و تیکت ها "} />
      <CloseSection />
      <HeaderCardInfo />
      <Message />
      <Message type={"admin"} />
      <Message />
      <Message type={"admin"} />
      <Message />
      <div className='border border-gray rounded-lg pb-5 mt-9 max-w-3xl m-auto'>
        <div>
          <header className=' px-2'>
            <h1 className='text-title text-lg pt-5'>ارسال پاسخ</h1>
            <h5 className='text-title text-sm mt-2'>برای ارسال پاسخ به این تیکت، از فرم زیر استفاده کنید.</h5>
          </header>
          <div className=' px-7 mt-7'>
            <span className='text-gray text-sm'>لطفا به نکات زیر توجه کنید: </span>
            <ul className=' mt-2'>
              <li>
                <div className=' w-2 h-2 bg-shortText rounded-full inline-block'></div>
                <span className='text-gray text-sm mr-3'>نمونه متن برای نوشتن نکات مهم برای تیکت</span>
              </li>
              <li>
                <div className=' w-2 h-2 bg-shortText rounded-full inline-block'></div>
                <span className='text-gray text-sm mr-3'>نمونه متن برای نوشتن نکات مهم برای تیکت</span>
              </li>
              <li>
                <div className=' w-2 h-2 bg-shortText rounded-full inline-block'></div>
                <span className='text-gray text-sm mr-3'>نمونه متن برای نوشتن نکات مهم برای تیکت</span>
              </li>
            </ul>
          </div>
        </div>
        <div className=' px-10 '>
          <SendMessage />
        </div>
      </div>
      <AuthButton textButton={"ارسال پاسخ"} classes="m-auto mt-7"/>
    </div>
  )
}
