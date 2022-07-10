import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

export default function WorkSpaceReport({ websiteName }) {

    const {  
        keyWord1,
        keyWord2,
        keyWord3,
        keyWord4,
        keyWord5,
        keyWord6,
        keyWord7,
        keyWord8,
        keyWord9,
        keyWord10,
        commercialPage1,
        commercialPage2,
        commercialPage3,
        commercialPage4,
        commercialPage5,
        commercialPage6,
        commercialPage7,
        commercialPage8,
        commercialPage9,
        commercialPage10,
        websitePage1,
        websitePage2,
        websitePage3,
        websitePage4,
        websitePage5,
        websitePage6,
        websitePage7,
        websitePage8,
        websitePage9,
        websitePage10
    } = useSelector(state => state.workSpaceState)
    // const [{site:"https://example.ir/page1",key:"a"}]
    const data = [{ site: "https://example.ir/page1", key: "a" }, { site: "https://example.ir/page1", key: "a" }]
    // const ahmad={fullName:"ddd",age:17};
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
                    <img src="/img/dashboard/workSpace/headMessageReport/workSpace_report_ico.svg" alt="" className='' />
                </div>
                {/* web site name */}
                <div className='w-full px-48'>
                    <div className=' pl-5 py-2 border border-[#D9D9D9] mt-7'>
                        <div className='flex gap-6 justify-between items-center relative'>
                            <div className='w-[20px] h-[2px] bg-[#0A65CD] rotate-90 rounded absolute -right-[10px]' />
                            <span className=' text-sm mr-3'>آدرس وبسایت شما: </span>
                            <span className='text-sm float-left'>https://example.ir</span>
                        </div>
                    </div>
                    {/* site key words */}
                    <div className=' pl-5 py-2 border border-[#D9D9D9] mt-7'>
                        <div className='flex gap-6 justify-between items-center relative'>
                            <div className='w-[20px] h-[2px] bg-[#0A65CD] rotate-90 rounded absolute -right-[10px]' />
                            <span className=' text-sm mr-3'>کلمات کلیدی وبسایت:</span>
                        </div>
                        <div className=' flex justify-between px-5 mt-2'>
                            <div className=' w-2/4 pl-3'>
                                <div className='pl-2'>
                                    <p className=' w-full text-right text-xs'>سایت مرتبط</p>
                                    <p className=' w-full text-left text-sm mt-3'>https://example.ir/page1</p>
                                </div>
                            </div>
                            <div className=' w-2/4 pr-3'>
                                <div className='pr-2'>
                                    <p className=' w-full text-right text-xs'>سایت مرتبط</p>
                                    <p className=' w-full text-left text-sm mt-3'>https://example.ir/page1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* site commercial page */}
                    <div className=' pl-5 py-2 border border-[#D9D9D9] mt-7'>
                        <div className='flex gap-6 justify-between items-center relative'>
                            <div className='w-[20px] h-[2px] bg-[#0A65CD] rotate-90 rounded absolute -right-[10px]' />
                            <span className=' text-sm mr-3'>صفحات تجاری وبسایت:</span>
                        </div>
                        <div className='px-5 mt-2 w-full'>
                            <div className=''>
                                <p className=' w-full text-right text-xs'>صفحه تجاری با اولویت یک </p>
                                <p className=' w-full text-left text-sm mt-3'>https://example.ir/page1</p>
                            </div>
                        </div>
                        <div className='px-5 mt-2 w-full'>
                            <div className=''>
                                <p className=' w-full text-right text-xs'>صفحه تجاری با اولویت دو</p>
                                <p className=' w-full text-left text-sm mt-3'>https://example.ir/page1</p>
                            </div>
                        </div>
                    </div>
                    {/* page test speed */}
                    <div className=' pl-5 py-2 border border-[#D9D9D9] mt-7'>
                        <div className='flex gap-6 justify-between items-center relative'>
                            <div className='w-[20px] h-[2px] bg-[#0A65CD] rotate-90 rounded absolute -right-[10px]' />
                            <span className=' text-sm mr-3'>رهگیری سرعت صفحات</span>
                        </div>
                        <div className='px-5 mt-2 w-full'>
                            <div className=''>
                                <p className=' w-full text-right text-xs'>آدرس صفحه</p>
                                <p className=' w-full text-left text-sm mt-3'>https://example.ir/page1</p>
                            </div>
                        </div>
                        <div className='px-5 mt-2 w-full'>
                            <div className=''>
                                <p className=' w-full text-right text-xs'>آدرس صفحه</p>
                                <p className=' w-full text-left text-sm mt-3'>https://example.ir/page1</p>
                            </div>
                        </div>
                    </div>
                    <div className=' pl-5 py-2 border border-[#D9D9D9] mt-7'>
                        <div className='flex gap-6 justify-between items-center relative'>
                            <div className='w-[20px] h-[2px] bg-[#0A65CD] rotate-90 rounded absolute -right-[10px]' />
                            <span className=' text-sm mr-3'>وب‌سایت رقبا</span>
                        </div>
                        <div className=' px-5 mt-2'>
                            <div className='flex justify-between'>
                                <div className=' w-2/4 pl-3'>
                                    <div className='pl-2'>
                                        <p className=' w-full text-right text-xs'>سایت مرتبط</p>
                                        <p className=' w-full text-left text-sm mt-3'>https://example.ir/page1</p>
                                    </div>
                                </div>
                                <div className=' w-2/4 pr-3'>
                                    <div className='pr-2'>
                                        <p className=' w-full text-right text-xs'>سایت مرتبط</p>
                                        <p className=' w-full text-left text-sm mt-3'>https://example.ir/page1</p>
                                    </div>
                                    <div className='pr-2'>
                                        <p className=' w-full text-right text-xs'>سایت مرتبط</p>
                                        <p className=' w-full text-left text-sm mt-3'>https://example.ir/page1</p>
                                    </div>
                                    <div className='pr-2'>
                                        <p className=' w-full text-right text-xs'>سایت مرتبط</p>
                                        <p className=' w-full text-left text-sm mt-3'>https://example.ir/page1</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between mt-14'>
                                <div className=' w-2/4 pl-3'>
                                    <div className='pl-2'>
                                        <p className=' w-full text-right text-xs'>سایت مرتبط</p>
                                        <p className=' w-full text-left text-sm mt-3'>https://example.ir/page1</p>
                                    </div>
                                </div>
                                <div className=' w-2/4 pr-3'>
                                    <div className='pr-2'>
                                        <p className=' w-full text-right text-xs'>سایت مرتبط</p>
                                        <p className=' w-full text-left text-sm mt-3'>https://example.ir/page1</p>
                                    </div>
                                    <div className='pr-2 '>
                                        <p className=' w-full text-right text-xs'>سایت مرتبط</p>
                                        <p className=' w-full text-left text-sm mt-3'>https://example.ir/page1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn-style mt-7"><img className=' ml-3' src='/img/dashboard/workSpace/footer/button_ico.svg' />پیشخان</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
