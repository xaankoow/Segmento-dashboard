import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coreUser, logoutAction } from '../../Redux/Action';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getAllWorkSpace } from '../../Redux/Action/workSpace';

const DashboardHeader = ({ setCloseNav }) => {

    const dispatch = useDispatch()
    const userToken = localStorage.getItem("token");
    const userState = useSelector(state => state.userState)
    const { checkUseTryFree } = useSelector(state => state.planState)
    const [userName, setUserName] = useState("");
    var user_name = "";
    if (userState.userData.user) {
        user_name = userState.userData.user.name ? userState.userData.user.name : "";
    } else {

    }
    const forceUpdate = userState.forceUpdate;

    const navigate = useNavigate();

    // ChartJS.defaults.global.tooltips.enabled = false;

    var moment = require("jalali-moment");

    // const userState = useSelector((state) => state.userState);

    var nowDate = new Date();

    var startDate = userState.userData.package != undefined && new Date(moment(userState.userData.package.start).format("YYYY/M/D"));
    var expiryDate = userState.userData.package != undefined && new Date(moment(userState.userData.package.end).format("YYYY/M/D"));

    var timeSecDaysLeft = Math.abs(expiryDate - nowDate);
    var timeSecDays = Math.abs(expiryDate - startDate);


    var numberOfDaysLeft = Math.ceil(timeSecDaysLeft / (1000 * 60 * 60 * 24))
    var numberOfDays = Math.ceil(timeSecDays / (1000 * 60 * 60 * 24))
    // debugger

    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: "# of Votes32",
                data: [numberOfDaysLeft - numberOfDays, numberOfDays],
                cutout: 5,
                backgroundColor: ["#D9D9D9", "#0A65CD"],
                borderWidth: 0,
                borderRadius: 7,

                // borderColor: [
                //   'rgba(255, 99, 132, 1)',
                //   'rgba(54, 162, 235, 1)',
                //   'rgba(255, 206, 86, 1)',
                //   'rgba(75, 192, 192, 1)',
                //   'rgba(153, 102, 255, 1)',
                //   'rgba(255, 159, 64, 1)',
                // ],
                // borderWidth: 1,
            },
        ],
    };

    useEffect(() => {
        // debugger
        if (!userToken) {
            navigate("/dashboard/accountOperations/login", { replace: true });
        }
    }, [userToken,])

    useEffect(() => {
        if (userToken != null) {
            setTimeout(() => {
                dispatch(coreUser());
            }, 1000);
            setTimeout(() => {
                dispatch(getAllWorkSpace());
            }, 2000);
        }
    }, [forceUpdate])
    useEffect(() => {
        dispatch(coreUser());
    }, [checkUseTryFree])

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
                <div className='userProfBox rounded hover:shadow-[0px 8px 16px rgba(0, 0, 0, 0.14)] border-b-0 w-64'>
                    <div className='flex gap-3 items-center cursor-pointer '>
                        <img src={userState.userData.user != undefined ? userState.userData.user.img != "" ? userState.userData.user.img : 'img/dashboard/header/userimage.svg' : 'img/dashboard/header/userimage.svg'} className='rounded w-10 h-10' alt='userImage' />
                        <div className=' h-11 relative w-full'>
                            <span className='text-sm absolute top-0 right-0'>{user_name}</span>
                            {userState.userData.package != undefined ?
                                <div className='flex items-center justify-start mt-1 '>
                                    <div className=' absolute bottom-0 right-0'>
                                        <Doughnut
                                            data={data}
                                            height={25}
                                            width={15}

                                            options={{
                                                maintainAspectRatio: false, plugins: {
                                                    tooltip: {
                                                        enabled: false
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                    <span className='text-xs absolute bottom-0 right-6 w-max'>{userState.userData.package.title}</span>
                                </div>
                                : ""
                            }
                        </div>
                    </div>
                    <div className='cursor-pointer absolute justify-center items-center pt-3 flex-col w-full rounded userHeaderProfInfo'>
                        <div className='border-b border-lightGray w-52 ' />
                        <div className='flex text-xs items-center justify-between w-full p-1 hover:bg-lightBlue mt-1'>
                            <div className='flex items-center'>
                                <img src="/img/dashboard/header/manage_accounts.svg" alt="manage_accounts" />
                                {/* <Link to={"userProfile"} state={{ background: location }}>تنظیمات حساب کاربری</Link> */}
                                <Link to={"userProfile"}>تنظیمات حساب کاربری</Link>
                            </div>
                        </div>
                        <div className='flex text-xs items-center justify-between w-full p-2 hover:bg-lightBlue '>
                            <div className='flex items-center gap-1'>
                                <img src="/img/dashboard/header/add_card.svg" alt="add_card" />
                                <Link to={"buyPlan"}>خرید اشتراک</Link>
                            </div>
                        </div>

                        <div className='flex text-xs items-center justify-between w-full p-2 hover:bg-lightBlue '>
                            <div className='flex items-center gap-1'>
                                <img src="/img/dashboard/header/statusPlan.svg" alt="currency_exchange" />
                                <Link to={"planStatus"}>  وضعیت اشتراک</Link>
                            </div>
                            {/* <img src="/img/dashboard/header/arrow.svg" alt="arrow" className='ml-3' /> */}
                        </div>
                        <div className='flex text-xs items-center justify-between w-full p-2 hover:bg-lightBlue mb-1'>
                            <div className='flex items-center gap-1'>
                                <img src="/img/dashboard/header/money.svg" alt="currency_exchange" />
                                <Link to={"financialReports"}>  گزارش های مالی </Link>
                            </div>
                            {/* <img src="/img/dashboard/header/arrow.svg" alt="arrow" className='ml-3' /> */}
                        </div>
                        <div className='border-b border-lightGray w-full ' />
                        <div className='flex text-xs items-center justify-between w-full p-1 hover:bg-lightBlue my-1' onClick={() => dispatch(logoutAction())}>
                            <div className='flex items-center pr-2'>
                                <span className="text-red">خروج از حساب کاربری</span>
                            </div>
                            <img src="/img/dashboard/header/redlogout.svg" alt="logout" className='ml-1' />
                            {/* <img src="../img/dashboard/header/arrow.svg" alt="arrow" className='ml-3' /> */}
                        </div>

                    </div>
                </div>
                <div className='flex items-center gap-3 ml-7'>
                    <img src="/img/dashboard/header/notif.svg" alt="notif" className="cursor-pointer" />
                    <div className='flex items-center justify-center relative text-[#fff] text-small'>
                        <span className='text-white left-3.5 -top-1 absolute text-center rounded-full bg-red notifNumber'>33</span>
                        <img src="/img/dashboard/header/message.svg" alt="message" className="cursor-pointer" />
                    </div>
                    <img src="/img/dashboard/header/settingicon.svg" alt="settingicon" className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default DashboardHeader;
