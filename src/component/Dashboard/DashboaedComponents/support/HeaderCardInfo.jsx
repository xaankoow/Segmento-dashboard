import React from 'react'
import AuthButton from '../../../Auth/authButton/AuthButton'
import ArrowBack from '../../../../assets/img/dashboard/support/sectionMessage/arrow_back.svg'
import { Link, useNavigate } from 'react-router-dom'

export default function HeaderCardInfo({ ticketId, updateDate, chatStatus }) {

    const navigate = useNavigate();

    var chatPosition = "مشخص نشده";
    var badgePositionColor="";

    switch (chatStatus) {
        case 0:
            chatPosition = "بسته"
            badgePositionColor="sectionDisable"
            break;
        case 1:
            chatPosition = "در انتظار پاسخ"
            badgePositionColor="gold"
            break;
            case 2:
                chatPosition = "پاسخ داده شده"
                badgePositionColor="success"
            break;
        default:
            break;
    }

    return (
        <div className='flex justify-between rounded-lg border border-sectionDisable box-content my-7 m-auto h-20 max-w-5xl'>
            <div className='flex mr-5 py-3'>
                <div className='h-full flex justify-center items-center'>
                    <div className=''>
                        <div onClick={() => navigate(-1)}>
                            <AuthButton classes={"btn-secondary"} textButton={<img src={ArrowBack} className="p-1" />} />
                        </div>
                    </div>
                </div>
                <div className='border border-silver mx-5'></div>
                <div className='h-full flex flex-col justify-between py-1'>
                    <p className=' text-sm text-title'>این متن برای نمونه نام عنوان است </p>
                    <p className='text-silver text-s'>شناسه تیکت: {ticketId}</p>
                </div>
            </div>

            <div className='h-full flex justify-around flex-col ml-5 py-3 '>
                <div className='text-s text-title flex justify-between'>
                    <span className=' w-28  text-left'>تاریخ آخرین بروزرسانی:</span>
                    <div className=' w-28'>

                        <span className='text-s text-title mr-4 text-right'>{updateDate}</span>
                    </div>
                </div>
                <div className='text-s text-title flex justify-between'>
                    <span className='w-28 text-left'> وضعیت: </span>
                    <div className='w-28'>
                        <span className={`rounded-2xl text-s text-[#fff] bg-${badgePositionColor} py-1 px-2 mr-4 text-right`}>{chatPosition}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
