import React from "react";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SetTitleTabBrowser from '../../../Utils/SetTitleTabBrowser';

const EasyStart = ({ startButtonClick }) => {

    const location = useLocation();

    return (
        <>
              <div className=" flex items-center justify-between my-9 mx-7 border  text-sm rounded-lg border-lightGray px-7 py-11">
        <span>
          برای راهنمایی و مشاوره استفاده از امکانات سگمنتو تماس بگیرید :{" "}
        </span>
        <button className="btn-style">مشاوره و تماس</button>
      </div>
        <div>
                <div className='flex items-center justify-center bg-yellow text-base py-5 absolute w-full -top-5  rounded-t-lg z-[2] '>
                    شروع آسان
                </div>
                <div className='rounded-lg border border-[#d3d5e2] EasyStartBoxContent flex flex-col px-7'>


                    <div className='flex flex-col gap-1 text-sm mx-7 mt-20'>
                        <span className=''>
                            چند گام کوچک از تمام قدرت سگمنتو فاصله دارید،
                        </span>
                        <span>
                            آدرس وب‌سایت و کلمات کلیدی خودتان را آماده کنید تا شروع کنیم.
                        </span>
                        <span>
                            پس از انتخاب اشتراک و انجام فرایند شروع آسان به داده‌های تمیز و ساده دسترسی دارید که قابل استفاده و مطمئن هستند.
                        </span>
                    </div>
                    <div className='imageBox'>
                        <img src="/img/dashboard/EasyStartPage/EasySart.svg" alt="EasyStartPage" className=' w-40 h-40 absolute top-[-15px] left-10' />
                    </div>
                    {/* <button className="btn-style" onClick={()=>startButtonClick()}> شروع کنیم </button> */}
                    <Link to={"/dashboard/buyPlanEasyToStartModal"} state={{ background: location }} className="btn-style w-32 mb-5">
                        شروع کن
                        <img src="/img/dashboard/EasyStartPage/startEasyStartArrow.svg" alt="EasyStartPage" className=' mr-3' />
                    </Link>
                </div>
            </div>
            <SetTitleTabBrowser nameSection={"شروع آسان"}/>
        </>
    );
}

>>>>>>> c851711db7812b727ffcefb5e8bd77251e425df5
export default EasyStart;
