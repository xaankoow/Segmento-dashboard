import React, { Fragment } from 'react'

export default function AleartMessageBuyPlan() {
    const typeAlert = "success";

    return (
        <Fragment>
            <div className='flex gap-6 items-center pr-4 mt-3'>
                <div className='w-[20px] h-[2px] bg-[#001F43] rotate-90 rounded absolute -right-[9px]' />
                <span className='text-lg'>خرید اشتراک سگمنتو</span>
            </div>
            <div className=' px-10 mt-12'>
                <div className={`flex justify-between pl-10 pr-4 py-5  ${typeAlert == "success" ? "bg-[#10CCAE]" : "bg-[#F35242]"} rounded-lg`}>
                    <div>
                        <p className=' text-xl font-bold text-[#fff] mb-3'>{typeAlert == "success" ? "موفقیت آمیز!" : "خطایی رخ داده!"}</p>
                        <p className=' text-xl font-bold text-[#fff] mb-3'>{typeAlert == "success" ? "کاربر عزیز اشتراک 12 ماهه طلایی برای شما فعال شد :)" : "کاربر عزیز اشتراک شما فعال نشد :("}</p>
                        <p className=' text-lg font-normal text-[#fff]'>{typeAlert == "success" ? "از امکانات سگمنتو لذت ببرید." : "برای خرید یا فعالسازی مجدد اشتراک لطفا دوباره سعی کنید."}</p>
                    </div>
                    {typeAlert == "success" ? <img src="/img/dashboard/buyPlan/alert/success_ico.svg" alt="" className='' /> : <img src="/img/dashboard/buyPlan/alert/error_ico.svg" alt="" className='' />}
                </div>
                <div className=' mt-7'>
                    {typeAlert == "success" ? (
                        <Fragment>
                            <button className='btn-style inline-block'>مشاهده اشتراک</button>
                            <button className='btn-style bg-[#F2F5F7] inline-block text-[#488CDA] mr-7'>داشبورد</button>
                        </Fragment>
                    ) :<button className='btn-style inline-block'>خرید مجدد اشتراک</button>}
                </div>
            </div>
        </Fragment>
    )
}
