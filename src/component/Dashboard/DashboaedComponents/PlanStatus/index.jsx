// import { Chart } from 'chart.js';
import React, { useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import './'
// import "./output.css"
// import './script'
export default function PlanStatus({ title }) {



    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [30,70],
            cutout: 55,
            backgroundColor: [
                '#D9D9D9',
                '#0A65CD',
            ],
            borderWidth: 0,
            borderRadius:50
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

    return (
        <div className=''>
            <div>
                <div className='flex gap-6 items-center pr-4 mt-3'>
                    <div className='w-[20px] h-[2px] bg-[#001F43] rotate-90 rounded absolute -right-[9px]' />
                    <span className='text-lg'>{title}</span>
                </div>
            </div>
            <div className="mx-auto w-full">
                <div className=" flex flex-col h-100vh w-100vh rounded mx-4 my-4 bg-white">

                    {/* <!--عنوان 1--> */}

                    {/* <div className="flex flex-row items-center">
                        <span id="line1" className="w-0.5 h-5 mt-5"></span>
                        <span className="mr-3 mt-4 ">وضعیت اشتراک</span>
                    </div> */}


                    <div className="flex lg:flex-row md:flex-row sm:flex-col justify-between lg:pt-16 md:pt-16">

                        {/* <!--باکس راست--> */}

                        <div id="item2" className="flex flex-col rounded md:mx-2 sm:mx-auto md:mt-2 sm:mt-2">
                            <div className="flex flex-row">
                                <span id="line2" className="w-1 h-5 mt-5 mr-5 absolute"></span>
                                <span className="absolute mt-4 mr-10 ">اشتراک طلایی</span>
                            </div>

                            <div id="content" className="flex flex-col mx-8 px-2 mt-20">
                                <div className="flex flex-row justify-between">
                                    <span>تاریخ خرید اشتراک</span>
                                    <span>1401/02/03</span>
                                </div>

                                <hr className="my-2 mx-1 border-[#D9D9D9]" />

                                <div className="flex flex-row justify-between ">
                                    <span>تاریخ اتمام اشتراک</span>
                                    <span>1401/04/02</span>
                                </div>

                                <hr className="my-2 mx-1 border-[#D9D9D9]" />

                                <div className="flex flex-row justify-between ">
                                    <span>روز های باقی مانده</span>
                                    <span>12 روز</span>
                                </div>

                                <button id="btn1"
                                    className="flex flex-row justify-center items-center rounded-lg mx-8 mt-8 py-auto text-[#ffff]">تمدید
                                    اشتراک</button>
                            </div>
                        </div>

                        {/* <!--باکس وسط--> */}

                        <div id="item2" className="flex flex-col lg:mr-10 rounded md:mx-2 sm:mx-auto md:mt-2 sm:mt-2 ">

                            <div className="flex flex-row">
                                {/* <img className="mt-5 mr-5 " src="../picture/date_range.svg" alt="" /> */}
                                <img className="mt-5 mr-5 w-5 h-5" src="./img/dashboard/planStatus/date_range.svg" alt="" />
                                <span className=" mt-5 mr-3 text-sm">روز های باقی مانده</span>
                            </div>


                            <div className="mt-7 w-[143px] h-[143px] float-left relative mx-auto">

                                <div
                                    className='w-full h-10 text-xs absolute top-1/2 left-0 my-[-20px] leading-5 text-center z-50'>
                                    12<br />
                                    روز باقی مانده
                                </div>
                                <Doughnut data={data} height={143} width={143}/>
                                {/* <canvas id="chart1" width="150px" height="150px"></canvas> */}
                            </div>


                            <div className="flex flex-row justify-around justify-center items-center py-2 text-xs ">
                                <div className="flex flex-row">
                                    <span id="child1" className="w-1.5 h-1.5"></span>
                                    <span id="child2">مصرف شده</span>
                                </div>

                                <div className="flex flex-row">
                                    <span id="child3" className="w-1.5 h-1.5"></span>
                                    <span id="child4">باقی مانده </span>
                                </div>
                            </div>

                        </div>

                        {/* <!--باکس چپ--> */}

                        <div id="item3"
                            className="flex flex-col justify-center items-center lg:mr-10 rounded w-96  md:mx-2 sm:mx-auto md:mt-2 sm:mt-2">

                            <span id="shape">تخفیف</span>
                            <span id="off" className="">30%</span>

                            <span className="mt-1">اشتراک الماسی</span>


                            <div id="box-off">
                                <div className="flex flex-row my-4">
                                    <span>فقط</span>
                                    <span className="mx-1 px-3 bg-[#0B4B94] rounded-2xl text-[#fff]">10</span>
                                    <span>روز دیگر فرصت دارید</span>
                                </div>
                            </div>
                            <button id="btn2"
                                className="flex flex-row justify-center items-center rounded-lg mb-8 mt-6 py-2 text-white">خرید با
                                30% تخفیف</button>
                        </div>
                    </div>

                    <hr className="mt-6 mx-auto w-full" />

                    {/* <!--عنوان 2--> */}

                    <span className=" my-7 md:mx-auto sm:mx-auto">وضعیت ابزار ها</span>

                    <div className=" flex flex-col  mb-8">

                        <div className="flex justify-between lg:flex-row mb-10 md:flex-col sm:flex-col">

                            <div id="item-1" className="flex w-[48%] flex-row justify-between border border-[#D9D9D9] rounded-sm  md:mx-auto sm:mx-auto md:my-2 sm:my-2">

                                <div className="flex flex-col ">

                                    <div className="flex flex-row">
                                        <span id="line3" className=" w-0.5 h-5 mt-2"></span>
                                        <span className="mt-2 mr-4">ابزار تحقیق کلمه کلیدی</span>
                                    </div>

                                    <div className="flex flex-row  text-[10px] mt-6">
                                        <span className="mr-4 ">تعداد کل کلمات</span>
                                        <span id="border" className="mr-3">100</span>
                                        <span className="mr-3">کلمات مصرف شده</span>
                                        <span id="border" className="mr-3">20</span>
                                        <span className="mr-3">کلمات باقی مانده</span>
                                        <span id="border" className="mr-3">80</span>
                                    </div>

                                </div>

                                <div className=" w-[100px] h-[100px] float-left relative mx-auto">
                                    <div
                                        className='w-full h-10 absolute top-1/2 left-0 mt-[-20px] text-[10px] leading-5 text-center z-50'>
                                        <span id="valuetwo"></span> <br />
                                        کلمه باقی مانده
                                    </div>
                                    <figure>
                                        <canvas id="chartCanvas1" width="90" height="90"></canvas>
                                    </figure>
                                </div>
                            </div>

                            <div id="item-1"
                                className="flex w-[48%] flex-row justify-between border border-[#D9D9D9] rounded-sm  md:mx-auto sm:mx-auto md:my-2 sm:my-2">
                                <div className="flex flex-col">

                                    <div className="flex flex-row">
                                        <span id="line3" className=" w-0.5 h-5 mt-2"></span>
                                        <span className="mt-2 mr-4">ابزار تحقیق کلمه کلیدی</span>
                                    </div>

                                    <div className="flex flex-row  text-[10px] mt-6">
                                        <span className="mr-4">تعداد کل کلمات</span>
                                        <span id="border" className="mr-3">100</span>
                                        <span className="mr-3">کلمات مصرف شده</span>
                                        <span id="border" className="mr-3">20</span>
                                        <span className="mr-3">کلمات باقی مانده</span>
                                        <span id="border" className="mr-3">80</span>
                                    </div>
                                </div>

                                <div className="w-24 h-24 float-left relative mx-auto">
                                    <div
                                        className='w-full h-10 absolute top-1/2 left-0 mt-[-20px] text-[10px] leading-5 text-center z-50' >
                                        <span id="valuethree"></span> <br />
                                        کلمه باقی مانده
                                    </div>
                                    <figure>
                                        <canvas id="chartCanvas2" width="90" height="90"></canvas>
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between lg:flex-row mb-10 md:flex-col sm:flex-col lg:mt-10 md:mx-auto sm:mx-auto">

                            <div id="item-1" className="flex w-[48%] flex-row justify-between border border-[#D9D9D9] rounded-sm  md:mx-auto sm:mx-auto md:my-2 sm:my-2">
                                <div className="flex flex-col">

                                    <div className="flex flex-row">
                                        <span id="line3" className=" w-0.5 h-5 mt-2"></span>
                                        <span className="mt-2 mr-4">ابزار تحقیق کلمه کلیدی</span>
                                    </div>

                                    <div className="flex flex-row  text-xs mt-6">
                                        <span className="mr-4">تعداد کل کلمات</span>
                                        <span id="border" className="mr-3">100</span>
                                        <span className="mr-3">کلمات مصرف شده</span>
                                        <span id="border" className="mr-3">20</span>
                                        <span className="mr-3">کلمات باقی مانده</span>
                                        <span id="border" className="mr-3">80</span>
                                    </div>
                                </div>

                                <div className="w-24 h-24 float-left relative mx-auto">
                                    <div
                                        className='w-full h-10 absolute top-1/2 left-0 mt-[-20px] text-[10px] leading-5 text-center z-50'>
                                        <span id="valuefour"></span> <br />
                                        کلمه باقی مانده
                                    </div>
                                    <figure>
                                        <canvas id="chartCanvas3" width="90" height="90"></canvas>
                                    </figure>
                                </div>
                            </div>

                            <div id="item-1" className="flex w-[48%] flex-row justify-between border border-[#D9D9D9] rounded-sm  md:mx-auto sm:mx-auto md:my-2 sm:my-2">
                                <div className="flex flex-col">

                                    <div className="flex flex-row">
                                        <span id="line3" className=" w-0.5 h-5 mt-2"></span>
                                        <span className="mt-2 mr-4">ابزار تحقیق کلمه کلیدی</span>
                                    </div>

                                    <div className="flex flex-row  text-xs mt-6">
                                        <span className="mr-4">تعداد کل کلمات</span>
                                        <span id="border" className="mr-3">100</span>
                                        <span className="mr-3">کلمات مصرف شده</span>
                                        <span id="border" className="mr-3">20</span>
                                        <span className="mr-3">کلمات باقی مانده</span>
                                        <span id="border" className="mr-3">80</span>
                                    </div>
                                </div>

                                <div className=" w-24 h-24 float-left relative mx-auto">
                                    <div
                                        className='w-full h-10 absolute top-1/2 left-0 mt-[-20px] text-[10px] leading-5 text-center z-50'>
                                        <span id="valuefive"></span> <br />
                                        کلمه باقی مانده
                                    </div>
                                    <figure>
                                        <canvas id="chartCanvas4" width="90" height="90"></canvas>
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between lg:flex-row mb-10 md:flex-col sm:flex-col lg:mt-10 md:mx-auto sm:mx-auto">

                            <div id="item-1" className="flex w-[48%] flex-row justify-between border border-[#D9D9D9] rounded-sm  md:mx-auto sm:mx-auto md:my-2 sm:my-2">
                                <div className="flex flex-col">

                                    <div className="flex flex-row">
                                        <span id="line3" className=" w-0.5 h-5 mt-2"></span>
                                        <span className="mt-2 mr-4">ابزار تحقیق کلمه کلیدی</span>
                                    </div>

                                    <div className="flex flex-row  text-xs mt-6">
                                        <span className="mr-4">تعداد کل کلمات</span>
                                        <span id="border" className="mr-3">100</span>
                                        <span className="mr-3">کلمات مصرف شده</span>
                                        <span id="border" className="mr-3">20</span>
                                        <span className="mr-3">کلمات باقی مانده</span>
                                        <span id="border" className="mr-3">80</span>
                                    </div>
                                </div>

                                <div className="w-24 h-24 float-left relative mx-auto">
                                    <div
                                        className='w-full h-10 absolute top-1/2 left-0 mt-[-20px] text-[10px] leading-5 text-center z-50'>
                                        <span id="valuesix"></span> <br />
                                        کلمه باقی مانده
                                    </div>
                                    <figure>
                                        <canvas id="chartCanvas5" width="90" height="90"></canvas>
                                    </figure>
                                </div>
                            </div>

                            <div id="item-1" className="flex w-[48%] flex-row justify-between border border-[#D9D9D9] rounded-sm  md:mx-auto sm:mx-auto md:my-2 sm:my-2">
                                <div className="flex flex-col">

                                    <div className="flex flex-row">
                                        <span id="line3" className=" w-0.5 h-5 mt-2"></span>
                                        <span className="mt-2 mr-4">ابزار تحقیق کلمه کلیدی</span>
                                    </div>

                                    <div className="flex flex-row  text-xs mt-6">
                                        <span className="mr-4">تعداد کل کلمات</span>
                                        <span id="border" className="mr-3">100</span>
                                        <span className="mr-3">کلمات مصرف شده</span>
                                        <span id="border" className="mr-3">20</span>
                                        <span className="mr-3">کلمات باقی مانده</span>
                                        <span id="border" className="mr-3">80</span>
                                    </div>
                                </div>

                                <div className="w-24 h-24 float-left relative mx-auto">

                                    <div className="w-24 h-24 float-left relative mx-auto">
                                        <div
                                            className='w-full h-10 absolute top-1/2 left-0 mt-[-20px] text-[10px] leading-5 text-center z-50'>
                                            <span id="valueseven"></span><br />
                                            کلمه باقی مانده
                                        </div>

                                        <figure>
                                            <canvas id="chartCanvas6" width="90" height="90"></canvas>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
