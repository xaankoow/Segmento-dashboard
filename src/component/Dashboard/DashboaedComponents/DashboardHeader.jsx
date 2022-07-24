import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coreUser, logoutAction } from '../../Redux/Action';
import getCookie from '../../Utils/findUser';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getAllWorkSpace } from '../../Redux/Action/workSpace';

const DashboardHeader = ({ setCloseNav }) => {

    const dispatch = useDispatch()
    const userToken = localStorage.getItem("token");
    const userState = useSelector(state => state.userState)
    const [userName,setUserName]=useState("");
    var user_name = "";
    if ( userState.userData.user) {
        user_name = userState.userData.user.name ? userState.userData.user.name : "";
    } else {

    }
    const forceUpdate = userState.forceUpdate;

    const navigate = useNavigate();
    // debugger

    useEffect(() => {
        // debugger
        if (!userToken) {
            navigate("/", { replace: true });
        }
    }, [userToken])

    useEffect(() => {
        if (userToken) {
            dispatch(coreUser());
            dispatch(getAllWorkSpace());
        }
    }, [forceUpdate])

    const location = useLocation();


    return (
        <div className='flex h-full items-center justify-between px-5'>
            <div className='flex items-center gap-7'>
                <div className='menuimage w-6 h-6 hover:cursor-pointer' onClick={() => setCloseNav()}></div>
                <div className='flex items-center gap-3 hover:cursor-pointer'>
                 
                    {/* <div className='Iconimage w-7 h-8'></div> */}
                    {/* <img src="/img/dashboard/header/segmento-logofa.svg" className='w-7 h-8' alt="" /> */}
                    <span className=''>سگمنتو segmento</span>
                </div>
            </div>
            <div className='flex items-center gap-9'>
                <div className='userProfBox rounded hover:shadow-[0px 8px 16px rgba(0, 0, 0, 0.14)] border-b-0 w-[262px]'>
                    <div className='flex gap-3 items-center'>
                        <img src='/img/dashboard/header/userimage.svg' className='rounded' alt='userImage' />
                        <div className=''>
                            <span className='text-sm'>{user_name}</span>
                            <div className='flex items-center justify-right mt-1 gap-3'>
                                <img src="/img/dashboard/header/Ellipse.svg" alt="Ellipse" />
                                <span className='text-xs'>اشتراک طلایی</span>
                            </div>
                        </div>
                    </div>
                    <div className='cursor-pointer absolute justify-center items-center pt-3 flex-col w-full rounded userHeaderProfInfo'>
                        <div className='border-b border-lightGray w-52 ' />
                        <div className='flex text-xs items-center justify-between w-full p-1 hover:bg-[#dae8f8] mt-1'>
                            <div className='flex items-center'>
                                <img src="/img/dashboard/header/manage_accounts.svg" alt="manage_accounts" />
                                {/* <Link to={"userProfile"} state={{ background: location }}>تنظیمات حساب کاربری</Link> */}
                                <Link to={"buyPlanEasyToStartModal"} state={{ background: location }}>تنظیمات حساب کاربری</Link>
                            </div>
                        </div>
                        <div className='flex text-xs items-center justify-between w-full p-2 hover:bg-[#dae8f8] '>
                            <div className='flex items-center gap-1'>
                                <img src="/img/dashboard/header/add_card.svg" alt="add_card" />
                                <Link to={"buyPlan"}>خرید اشتراک</Link>
                            </div>
                        </div>

                        <div className='flex text-xs items-center justify-between w-full p-2 hover:bg-[#dae8f8] '>
                            <div className='flex items-center gap-1'>
                                <img src="/img/dashboard/header/statusPlan.svg" alt="currency_exchange" />
                                <Link to={"planStatus"}>  وضعیت اشتراک</Link>
                            </div>
                            {/* <img src="/img/dashboard/header/arrow.svg" alt="arrow" className='ml-3' /> */}
                        </div>
                        <div className='flex text-xs items-center justify-between w-full p-2 hover:bg-[#dae8f8] mb-1'>
                            <div className='flex items-center gap-1'>
                                <img src="/img/dashboard/header/money.svg" alt="currency_exchange" />
                                <Link to={"financialReports"}>  گزارش های مالی </Link>
                            </div>
                            {/* <img src="/img/dashboard/header/arrow.svg" alt="arrow" className='ml-3' /> */}
                        </div>
                        <div className='border-b border-lightGray w-full ' />
                        <div className='flex text-xs items-center justify-between w-full p-1 hover:bg-[#dae8f8] my-1' onClick={() => dispatch(logoutAction())}>
                            <div className='flex items-center pr-2'>
                                <span className="text-[#F35242]">خروج از حساب کاربری</span>
                            </div>
                                <img src="/img/dashboard/header/redlogout.svg" alt="logout" className='ml-1'/>
                            {/* <img src="../img/dashboard/header/arrow.svg" alt="arrow" className='ml-3' /> */}
                        </div>

                    </div>
                </div>
                <div className='flex items-center gap-3 ml-7'>
                    <img src="/img/dashboard/header/notif.svg" alt="notif" className="cursor-pointer" />
                    <div className='flex items-center justify-center relative text-[#fff] text-small'>
                        <span className='text-[#fff] left-3.5 -top-1 absolute text-center rounded-full bg-[#ff7278] notifNumber'>33</span>
                        <img src="/img/dashboard/header/message.svg" alt="message" className="cursor-pointer" />
                    </div>
                    <img src="/img/dashboard/header/settingicon.svg" alt="settingicon" className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default DashboardHeader;
