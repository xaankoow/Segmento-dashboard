import React from 'react'
import { ImageContainer } from '../../../assets/img/IMG'
import AuthButton from '../../../component/Auth/authButton/AuthButton'
import AuthInput from '../../../component/Auth/authInput/AuthInput'
import HorizontalLineInBeforText from '../../../component/shared/Text/HorizontalLineInBeforText'
import { defaultBoxStyleIndexer, parentHorizontalLineInBeforTextStyleIndexer } from '../../../variables/indexer'

export default function AutoSection({ disableSection }) {
  return (
    <div className={`${defaultBoxStyleIndexer} relative`}>
      {disableSection ? <div className='w-full h-full float-right top-0 bg-sectionDisable opacity-40 absolute bg- z-40'></div> : null}
      <div className='flex justify-between items-center'>
        <div className={parentHorizontalLineInBeforTextStyleIndexer}>
          <HorizontalLineInBeforText text={"آپلود سایت مپ"} />
        </div>
        <div className=' w-full'>
          <div className=' relative'>
            <AuthInput classes={"w-full"} wrapperClass="pl-5" />
            <span className=' absolute right-3 top-14 text-s'>پسوند مجاز برای آپلود سایت مپ: XML</span>
          </div>
        </div>
        <AuthButton classes={"btn-secondary"} textButton="تغییر" />
      </div>
      <br />
      <br />
      <div className='pr-4'>
        <hr className=' border-border' />
      </div>
      <div className='flex justify-between mt-7'>
        <div className={parentHorizontalLineInBeforTextStyleIndexer}>
          <div className=' -mb-2'>
            <HorizontalLineInBeforText text={`تنظیم تناوب ارسال `} />
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
          <div className=' mt-5 rounded-lg border border-dashed border-primary bg-secondary py-1 px-4'>
            <ul className='mt-2'>
              <li>
                <div className=' w-2 h-2 bg-primary rounded-full inline-block'></div>
                <span className='text-title text-sm mr-3 py-2 inline-block'>اشتراک الماسی: 100 آدرس در هر درخواست ( قابلیت تنظیم تناوب : هر روز 2 بار، هر روز 1 بار، هر 2 روز یکبار، هر 3 روز یکبار، هر 7 روز یکبار، هر 10 روز یکبار )</span>
              </li>
              <li>
                <div className=' w-2 h-2 bg-primary rounded-full inline-block'></div>
                <span className='text-title text-sm mr-3 py-2 inline-block'>اشتراک طلایی: 50 آدرس در هر درخواست ( قابلیت تنظیم تناوب : هر روز 1 بار، هر 2 روز یکبار، هر 3 روز یکبار، هر 7 روز یکبار، هر 10 روز یکبار )</span>
              </li>
              <li>
                <div className=' w-2 h-2 bg-primary rounded-full inline-block'></div>
                <span className='text-title text-sm mr-3 py-2 inline-block'>اشتراک نقره‌ای: 20 آدرس در هر درخواست ( قابلیت تنظیم تناوب : هر 2 روز یکبار، هر 3 روز یکبار، هر 7 روز یکبار، هر 10 روز یکبار )</span>
              </li>
              <li>
                <div className=' w-2 h-2 bg-primary rounded-full inline-block'></div>
                <span className='text-title text-sm mr-3 py-2 inline-block'>اشتراک برنزی: 10 آدرس در هر درخواست ( قابلیت تنظیم تناوب : هر 3 روز یکبار، هر 7 روز یکبار، هر 10 روز یکبار )</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=' text-left w-full mt-7'>
        <div className=' inline-block'>
          <AuthButton textButton={<><span className='text-orgWhite'>ارسال لینک</span><img src={ImageContainer.sendLinkAdress} alt="arrow" className=' mr-3' /></>} disabled={disableSection} />
        </div>
      </div>
    </div>
  )
}