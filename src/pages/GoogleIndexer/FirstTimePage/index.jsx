import React from 'react'
import { ImageContainer } from '../../../assets/img/IMG'
import AuthButton from '../../../component/Auth/authButton/AuthButton'
import pagePicture from '../../../assets/img/dashboard/googleIndexer/firstOnePagePicture.svg'
export default function FirstTimePage() {
    return (
        <div className=' px-24'>
            <div>
                <div className='border border-dashed rounded-lg w-full border-primary px-14 py-9'>
                    <div className=' break-words'>ابزار ایندکسر گوگل یک ابزار مبتنی بر APIهای رسمی گوگل بوده و به کاربران اجازه میدهد بتوانند با اتصال سایت خودشان به سیستم سگمنتو و ارسال جدیدترین لینک های منتشرشده در سایتشان (از طریق RSS یا Feed یا نقشه وب سایت XML) به گزارشگیر سگمنتو، اماده ایندکس صفحاتشان در گوگل شوند. این اتفاق در کمترین زمان رخ میدهد چرا که آنها میتوانند درخواست های مکرر دستی خود را من بعد بصورت خودکار با کمک سگمنتو پس از انتشار هر ادرس سایت یا بروزرسانی محتوا لینک های همین صفحات توسط سگمنتو برای ایندکس جدید در گوگل ارسال شود</div>
                    <img src={pagePicture} alt="searchPages" className=" m-auto mt-7" />
                </div>
            </div>
            <div className='w-full flex justify-between mt-9'>
                <div></div>
                <AuthButton textButton={<><img src={ImageContainer.plus} className=" ml-4" />افزودن ورک‌اسپیس</>} />
            </div>
        </div>
    )
}
