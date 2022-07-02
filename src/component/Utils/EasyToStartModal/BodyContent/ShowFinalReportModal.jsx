import React, { Fragment } from 'react'
import AuthButton from '../../../Auth/authButton/AuthButton';
export default function ShowFinalReportModal() {
    return (
        <body className='final_report_container'>
            <div className='popup'>
                <div className='title_popup'>اشتراک فعال سازی شده برای شما: </div>
                <div className='main_popup'>اشتراک طلایی ، 3 ماهه</div>
            </div>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته است . </p>
            <div className='support_container'>
                <p>تا اینجای کار اگر نیاز به راهنمایی و مشاوره داشتی میتونی از این طریق باهامون تماس بگیری</p>
                <AuthButton textButton={"مشاوره و تماس"} />
                <img src="./img/modal/body/report.svg" alt="" />
            </div>
        </body>
    )
}
