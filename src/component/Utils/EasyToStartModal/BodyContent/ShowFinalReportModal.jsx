import React, { useEffect, useState } from 'react'
import AuthButton from '../../../Auth/authButton/AuthButton';
import { useDispatch, useSelector } from 'react-redux';
import { allLimitDataFeature, ChackBusinessCustomer, getAllWorkSpace } from '../../../Redux/Action/workSpace';
import success_svg from '../../../../assets/img/dashboard/EasyStartPage/success.svg'

export default function ShowFinalReportModal() {

    const { userData } = useSelector((state) => state.userState);


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

    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            initWorkSpaceOption()
        }
    }, [])

    const initWorkSpaceOption = async () => {
        dispatch(allLimitDataFeature())
        dispatch(getAllWorkSpace())
        dispatch(ChackBusinessCustomer())
    }
    return (
        <body className='final_report_container bg-[#fff]'>
            <div className='popup'>
                <div className='title_popup'>اشتراک فعال سازی شده برای شما: </div>
                <div className='main_popup'>{title}</div>
            </div>
            <p className='text-center text-lg'>سگمنتو بهترین مشتریان را دارد! داشتن مشتریانی مثل شما باعث افتخار است.</p>
            <div className='support_container '>
                <p className=''>اگر سوالی دارید، با همکاران ما در واحد پشتیبانی تماس بگیرید.</p>
                <a href="https://segmento.ir/support"><AuthButton textButton={"برقراری تماس"} /></a>
                <img src={success_svg} alt="" />
            </div>
        </body>
    )
}
