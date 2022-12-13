import React from 'react'
import { ImageContainer } from '../../../../assets/img/IMG'
import AuthButton from '../../../../component/Auth/authButton/AuthButton'

export default function WorkSpaceIndexerCardInfo() {
    return (
        <div>
            <div></div>
            <div className='flex justify-between flex-col py-7 px-5 border border-border rounded-lg my-5'>
                <div className='flex justify-between'>
                    <div className='text-sm text-title'>
                        آدرس ورک اسپیس:
                        <span className=' mr-2 text-title text-sm'>
                            {"example.com"}
                        </span>
                    </div>
                    <div className='text-sm text-title'>
                        تاریخ و ساعت آخرین آپدیت:
                        <span className=' mr-2 text-title text-s'>
                            {"[time]"}
                        </span>
                    </div>
                </div>
                <hr className=' border-border my-5' />
                <div className='flex justify-between'>
                    <div className='flex justify-between items-center'>
                        <img src={ImageContainer.indexerWorkSpaceListIco} alt="list ico" />
                        <div className='flex flex-col justify-between mr-3 w-50'>
                            <div className='flex justify-between w-40 text-s my-1'>
                                <span>تعداد لینک های دستی:</span>
                                <span>{0} لینک</span>
                            </div>
                            <div className='flex justify-between w-40 text-s my-1'>
                                <span>تعداد لینک های سایت‌مپ:</span>
                                <span>{0} لینک</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
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
                    </div>
                    <div className='flex items-center'>
                        <img src={ImageContainer.updateList} alt="" className=' w-7 h-7' />
                        <div className='flex items-center flex-col text-s text-title mr-5'>
                            <span className='py-1'>در حال انجام</span>
                            <span className='py-1'>{"data"}</span>
                        </div>
                    </div>
                    <div>
                        <AuthButton classes={"btn-secondary"} textButton={<>جزییات بیشتر <img src={ImageContainer.blueArrowBtn} alt="arrow" className=' mr-3' /></>} />
                    </div>
                </div>
            </div>
        </div>
    )
}