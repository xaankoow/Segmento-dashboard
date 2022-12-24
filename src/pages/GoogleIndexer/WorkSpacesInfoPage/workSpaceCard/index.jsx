import React from 'react'
import { ImageContainer } from '../../../../assets/img/IMG'
import DeletedIcon from '../../../../assets/img/delete.svg'

export default function WorkSpaceIndexerCardInfo() {
    return (
        <div>
            <div></div>
            <div className='flex justify-between flex-col py-3 px-5 border border-border rounded-lg my-5'>
                <div className='flex justify-between'>
                    <div className='pt-4 text-sm text-title'>
                        آدرس سایت مپ:
                        <span className='mr-2 text-gray-500 text-title text-sm'>
                            {"example.com"}
                        </span>
                    </div>
                    <div className='pt-4 text-sm text-title'>
                        تناوب ارسال:
                        <span className='mr-2 text-gray-500 text-title text-sm'>
                            هر دو روز یکبار
                        </span>
                    </div>
                    <div className='text-sm text-title'>
                        <div className='block'>
                            تاریخ و ساعت ایجاد درخواست:
                            <span className='mr-2 text-gray-500 text-title text-s'>
                                1340/2/2
                            </span>
                        </div>
                        <div className="block mt-2">
                            تاریخ و ساعت آخرین بروزرسانی:
                            <span className='mr-2 text-gray-500 text-title text-s'>
                                1340/2/2
                            </span>
                        </div>
                    </div>
                </div>
                <hr className=' border-border my-5' />
                <div className='flex justify-between'>
                    <div className='flex justify-between items-center'>
                        <img src={ImageContainer.indexerWorkSpaceListIco} alt="list ico" />
                        <div className='flex flex-col justify-between mr-3 w-30'>
                            <div className='flex justify-between w-50 text-s my-1'>
                                <span>تعداد آدرس ها:</span>
                                <span>{0} لینک</span>
                            </div>
                            {/* <div className='flex justify-between w-40 text-s my-1'>
                                <span>تعداد لینک های سایت‌مپ:</span>
                                <span>{0} لینک</span>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className='flex items-center'>
                        <img src={ImageContainer.greenTick} alt="green tick" className=' w-5 h-5' />
                        <div className='flex items-center flex-col text-s text-title mr-5'>
                            <span className='py-1'>ایندکس شده</span>
                            <span className='py-1'>{"data"}</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={ImageContainer.closeModalIco} alt="red multiplied" className=' w-5 h-5' />
                        <div className='flex items-center flex-col text-s text-title mr-5'>
                            <span className='py-1'>ایندکس نشده</span>
                            <span className='py-1'>{"data"}</span>
                        </div>
                    </div> */}
                    <div className='flex items-center'>
                        <img src={ImageContainer.updateList} alt="" className='' />
                        <div className='flex items-center flex-col text-s text-title mr-5'>
                            <span className='py-1'>در حال انجام</span>
                            <span className='py-1'>40%</span>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <button type="button" className="text-white float-left text-[#F35242] bg-[#F35242]/20 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2">
                            <img className='ml-2' src={DeletedIcon} alt="" />
                            حذف
                        </button>
                        <button type="button" className="text-[#0A65CD] bg-[#0A65CD]/25   rounded-lg focus:ring-4 focus:outline-none  font-medium text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                            جزئیات بیشتر
                            <img className="ml-2 mr-2 w-4 h-4" src={ImageContainer.blueArrowBtn} alt="arrow" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}