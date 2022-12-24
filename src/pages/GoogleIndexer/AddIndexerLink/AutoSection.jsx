import React from 'react'
import { ImageContainer } from '../../../assets/img/IMG'
import AuthButton from '../../../component/Auth/authButton/AuthButton'
import AuthInput from '../../../component/Auth/authInput/AuthInput'
import HorizontalLineInBeforText from '../../../component/shared/Text/HorizontalLineInBeforText'
import HorizontalBeforeText from '../../../component/shared/Text/HorizontalBeforeText'

import { defaultBoxStyleIndexer, parentHorizontalLineInBeforTextStyleIndexer } from '../../../variables/indexer'

export default function AutoSection({ disableSection }) {
  return (
    <div className={`${defaultBoxStyleIndexer} relative`}>
      {disableSection ? <div className='w-full h-full float-right top-0 bg-sectionDisable opacity-40 absolute bg- z-40'></div> : null}
      <div className='flex justify-between items-center'>
        <div className={parentHorizontalLineInBeforTextStyleIndexer}>
          <HorizontalBeforeText text={"آپلود سایت مپ"} />
        </div>
        <div className=' w-full'>
          <div className=' relative'>
            <AuthInput classes={"w-full"} wrapperClass="pl-5" />
            <span className=' absolute right-3 top-14 text-s'>پسوند مجاز برای آپلود سایت مپ: XML</span>
          </div>
        </div>
        <button type="button" className="text-[#488CDA] bg-[#F2F5F7]  hover:bg-[#0A65CD]/90  rounded-lg focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-0 mb-0">
          تغییر</button>
      </div>
      <br />
      <br />
      <div className='pr-4'>
        <hr className=' border-border' />
      </div>
      <div className='flex justify-between mt-7'>
        <div className={parentHorizontalLineInBeforTextStyleIndexer}>
          <div className=' -mb-2'>
            <HorizontalBeforeText text={`تنظیم تناوب ارسال `} />
          </div>
          <span className='text-gray pr-4 -mt-1 text-sm'>( ارسال خودکار )</span>
        </div>
        <div className='w-full'>
          <div className=' border basis-full border-border py-1 px-1 rounded-lg'>
            <div className='flex justify-around'>
              <span className=' text-xs py-4 text-gray'>
                اضافه شده:
                <span className='text-title pr-2'>
                  {5} لینک
                </span>
              </span>
              <div className='  border border-border inline-block'></div>
              <span className=' text-xs py-4'>
                باقی مانده مجاز روزانه:
                <span className='text-title pr-2'>
                  {5} آدرس
                </span>
              </span>
              <div className=' border border-border inline-block'></div>
              <span className=' text-xs py-4'>
                باقی مانده اشتراک:
                <span className='text-title pr-2'>
                  {5} لینک
                </span>
              </span>
            </div>
            <hr className='border-border my-1' />
            <div className='flex justify-around'>
              <span className=' text-xs py-4 text-gray'>
                اضافه شده:
                <span className='text-title pr-2'>
                  {5} لینک
                </span>
              </span>
              <div className='  border border-border inline-block'></div>
              <span className=' text-xs py-4'>
                باقی مانده مجاز روزانه:
                <span className='text-title pr-2'>
                  {5} آدرس
                </span>
              </span>
              <div className=' border border-border inline-block'></div>
              <span className=' text-xs py-4'>
                باقی مانده اشتراک:
                <span className='text-title pr-2'>
                  {5} لینک
                </span>
              </span>
            </div>
          </div>
          <div className='mt-5 rounded-lg border-2 border-blue-500 border-dashed border-primary bg-secondary py-1 px-4'>
            <ul className='mt-2'>
              <li className='flex mt-4 mb-4'>
                <svg className='ml-1 mt-1' width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#0A65CD" />
                </svg>
                <span className='text-sm mr-3  inline-block'>اشتراک الماسی: 100 آدرس در هر درخواست ( قابلیت تنظیم تناوب : هر روز 2 بار، هر روز 1 بار، هر 2 روز یکبار، هر 3 روز یکبار، هر 7 روز یکبار، هر 10 روز یکبار )</span>
              </li>
              <li className='flex mb-4'>
                <svg className='ml-1 mt-1' width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#0A65CD" />
                </svg>
                <span className='text-sm mr-3  inline-block'>اشتراک طلایی: 50 آدرس در هر درخواست ( قابلیت تنظیم تناوب : هر روز 1 بار، هر 2 روز یکبار، هر 3 روز یکبار، هر 7 روز یکبار، هر 10 روز یکبار )</span>
              </li>
              <li className='flex mb-4'>
                <svg className='ml-1 mt-1' width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#0A65CD" />
                </svg>
                <span className='text-sm mr-3  inline-block'>اشتراک نقره‌ای: 20 آدرس در هر درخواست ( قابلیت تنظیم تناوب : هر 2 روز یکبار، هر 3 روز یکبار، هر 7 روز یکبار، هر 10 روز یکبار )</span>
              </li>
              <li className='flex mb-4'>
                <svg className='ml-1 mt-1' width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#0A65CD" />
                </svg>
                <span className='text-sm mr-3  inline-block'>اشتراک برنزی: 10 آدرس در هر درخواست ( قابلیت تنظیم تناوب : هر 3 روز یکبار، هر 7 روز یکبار، هر 10 روز یکبار )</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=' text-left w-full mt-7'>
        <div className='inline-block'>
          <button type="button" className="text-[#fff] bg-[#0A65CD]  hover:bg-[#0A65CD]/90  rounded-lg focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            درخواست جدید
            <img className='mr-2' src={ImageContainer.sendLinkAdress} />
          </button>
        </div>
      </div>
    </div >
  )
}