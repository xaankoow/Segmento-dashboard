import React from 'react'
import { ImageContainer } from '../../../assets/img/IMG'
import AuthButton from '../../../component/Auth/authButton/AuthButton'
import WorkSpaceIndexerCardInfo from './workSpaceCard'

import InfoPage from '../../../component/shared/InfoPage'


export default function Index() {
  return (
    <div>
      <InfoPage title="برای ابزار ایندکسر گوگل  لطفا به نکات زیر توجه کنید: ">
        <li>نمونه متن برای نوشتن نکات مهم برای ابزار ایندکسر گوگل</li>
        <li>نمونه متن برای نوشتن نکات مهم برای ابزار ایندکسر گوگل</li>
      </InfoPage>
      <div id="alert-2" class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
        <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 ml-2 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Info</span>
        <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
          کاربر عزیز لیمیت اختصاص یافته برای ایندکسر خودکار شما به اتمام رسیده است و دیگر برای گوگل درخواستی ارسال نمیشود.
        </div>
      </div>
      <div className='w-full text-right py-5'>
        <div className='inline-block pt-3'>
          <ul class="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
            <li class="flex items-center">
              <svg className='ml-3' width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#0A65CD" />
              </svg>
              لیست درخواست  های ایندکسر خودکار
            </li>
          </ul>
        </div>
        <div className='inline-block float-left'>
          <button type="button" className="text-[#fff] bg-[#0A65CD]  hover:bg-[#0A65CD]/90  rounded-lg focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            <img className='ml-2' src={ImageContainer.plus} />
            درخواست جدید
          </button>
        </div>
      </div>
      <WorkSpaceIndexerCardInfo />
    </div>
  )
}
