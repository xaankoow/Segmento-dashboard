
import React from 'react';

const EasyStart = ({startButtonClick}) => {
    return (
        <>

           <div className=' flex items-center justify-between my-9 mx-7 border  text-sm rounded-lg border-[#d3d5e2] px-7 py-11'>
               <span>	اگر سوالی دارید، با همکاران ما در واحد پشتیبانی تماس بگیرید.  </span>
               <button className="btn-style"> برقراری تماس</button>
           </div> 
           <div className="flex flex-col relative mt-9 mx-7 mb-7 ">
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
                        <img src="/img/dashboard/EasyStartPage/EasySart.svg" alt="EasyStartPage" />
                        </div>
                        <button className="btn-style" onClick={()=>startButtonClick()}> شروع کنیم </button>
                </div>
           </div>
        </>
    );
}

export default EasyStart;
