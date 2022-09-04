import React, { useEffect, useState } from 'react'
import AuthButton from '../../../Auth/authButton/AuthButton';
import { useSelector } from 'react-redux';
export default function ShowFinalReportModal() {

    const { userData } = useSelector((state) => state.userState);

    // debugger
    const [title, setTitle] = useState(""); //handle close buy plan result
    const [typePlan, setTypePlan] = useState(""); //handle buy plan type

    useEffect(() => {
        var title_plan = userData.package != undefined ? userData.package.title : "پلن خریداری شده یافت نشد";
        var type_plan = userData.package != undefined ? userData.package.type_text : "";
        if (title != title_plan) {
            setTitle(title_plan);
        }
        if (typePlan != type_plan) {
            setTypePlan(type_plan);
        }
    }, [userData]);

    return (
        <body className='final_report_container'>
            <div className='popup'>
                <div className='title_popup'>اشتراک فعال سازی شده برای شما: </div>
                <div className='main_popup'>{title}</div>
            </div>
            <p className='text-center text-lg'>سگمنتو بهترین مشتریان را دارد! داشتن مشتریانی مثل شما باعث افتخار است.</p>
            <div className='support_container '>
                <p className=''>اگر سوالی دارید، با همکاران ما در واحد پشتیبانی تماس بگیرید.</p>
                <a href="https://segmento.ir/support"><AuthButton textButton={"برقراری تماس"} /></a>
                <img src="/img/dashboard/EasyStartPage/success.svg" alt="" />
            </div>
        </body>
    )
}
