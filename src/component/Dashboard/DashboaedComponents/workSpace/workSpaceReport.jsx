import React, { Fragment } from 'react'

export default function WorkSpaceReport({websiteName}) {
    return (
        <Fragment>

            <div>
                <div className='flex gap-6 items-center relative mt-3'>
                    <div className='w-[20px] h-[2px] bg-[#0A65CD] rotate-90 rounded absolute -right-[10px]' />
                    <span className=' text-lg mr-3'>پیکربندی ورک‌اسپیس جدید</span>
                </div>
            </div>
            <div className='p-9'>
                <div className='flex justify-between pl-10 pr-4 py-5 bg-[#10CCAE] rounded-lg'>
                    <div>
                        <p className=' text-xl font-bold text-[#fff] mb-3'>موفقیت آمیز!</p>
                        <p className=' text-xl font-bold text-[#fff]'>کاربر عزیز ورک‌اسپیس جدید شما با موفقیت ایجاد شد!</p>
                    </div>
                    <img src="/img/dashboard/workSpace/headMessageReport/workSpace_report_ico.svg" alt="" className=''/>
                </div>
                <div className=' w-full p-48'>
                    <div className=' pl-5 py-2'>
                        <div className='flex gap-6 items-center relative'>
                            <div className='w-[20px] h-[2px] bg-[#0A65CD] rotate-90 rounded absolute -right-[10px]' />
                            <span className=' text-sm mr-3'>آدرس وبسایت شما: </span>
                        </div>
                        <span className='text-sm'>{websiteName}</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
