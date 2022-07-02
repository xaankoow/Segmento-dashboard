import React, { Fragment } from 'react'
import AuthButton from '../../../Auth/authButton/AuthButton';
export default function ShowFinalReportModal() {
    return (
        <body className='final_report_container'>
            <div className='popup'>
                <div className='title_popup'>اشتراک فعال سازی شده برای شما: </div>
                <div className='main_popup'>اشتراک طلایی ، 3 ماهه</div>
            </div>
            <p className='text-center text-lg'>سگمنتو بهترین مشتریان را دارد! داشتن مشتریانی مثل شما باعث افتخار است.</p>
            <div className='support_container '>
                <p className=''>تا اینجای کار اگر نیاز به راهنمایی و مشاوره داشتی میتونی از این طریق باهامون تماس بگیری</p>
                <AuthButton textButton={"مشاوره و تماس"} />
                <img src="./img/modal/body/report.svg" alt="" />
            </div>
        </body>
    )
}
