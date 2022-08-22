import React from "react";
import { Link, useLocation } from 'react-router-dom';
import SetTitleTabBrowser from '../../../Utils/SetTitleTabBrowser';

const EasyStart = ({ startButtonClick }) => {
    const location = useLocation(); 

    return (
        <>
            <div className=" flex items-center justify-between my-9 mx-7 border  text-sm rounded-lg border-lightGray px-7 py-11">
                <span>
                اگر سوالی دارید، با همکاران ما در واحد پشتیبانی تماس بگیرید.                </span>
                <button className="btn-style"> برقراری تماس</button>
            </div>
            <div className="flex flex-col relative mt-9 mx-7 mb-7 ">
                <div className="flex items-center justify-center bg-gold text-base py-5 absolute w-full -top-5  rounded-t-lg z-[2] ">
                    شروع آسان 
                </div>
                <div className="rounded-lg border border-lightGray EasyStartBoxContent flex flex-col  px-7">
                    <div className="flex flex-col gap-1 text-sm mx-7 mt-20 ">
                        <span className="">
                        چند گام کوچک از تمام قدرت سگمنتو فاصله دارید، 
                        </span>
                        <span>    آدرس وب‌سایت و کلمات کلیدی خودتان را آماده کنید تا شروع کنیم.</span>
                        <span>پس از انتخاب اشتراک و انجام فرایند شروع آسان به داده‌های تمیز و ساده دسترسی دارید که قابل استفاده و مطمئن هستند. </span>
                    </div>
                    <div className="flex justify-between items-center relative  w-full ">

                        <Link to={"/dashboard/buyPlanEasyToStartModal"} state={{ background: location }} className="btn-style w-36 mb-5 absolute bottom-0 flex justify-between">
                            {" "} 	شروع کنیم{" "}
                            <img src="/img/dashboard/EasyStartPage/startEasyStartArrow.svg" alt="EasyStartPage" className=' mr-3' />
                        </Link>
                        <div className="w-full  flex justify-end ">
                            <img
                                src="/img/dashboard/EasyStartPage/EasySart.svg"
                                alt="EasyStartPage"
                                className="w-40 pb-4"
                            />
                        </div>

                    </div>
                </div>
            </div>
            <SetTitleTabBrowser nameSection={"شروع آسان"} />
        </>
    );
};

export default EasyStart;