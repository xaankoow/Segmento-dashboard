
import React from 'react';

const EasyStart = ({startButtonClick}) => {
    return (
        <>

           <div className=' flex items-center justify-between mt-9 mx-7 mb-7 text-sm rounded-lg border-lisghtGray'>
               <span>برای راهنمایی و مشاوره استفاده از امکانات سگمنتو تماس بگیرید :  </span>
               <button className="btn-style">مشاوره و تماس</button>
           </div> 
           <div className="flex flex-col relative mt-9 mx-7 mb-7">
                <div className='flex items-center justify-center bg-yellow text-base py-5 absolute w-full -top-5 rounded-r-lg rounded-t-lg z-[2]'>
                                شروع آسان و نحوه استفاده از امکانات سگمنتو
               </div>
                <div className='rounded-lg border-lisghtGray EasyStartBoxContent flex flex-col'>
                        

                        <div className='flex flex-col gap-1 text-sm mx-7 mt-20'>
                            <span className=''>   
                                برای شروع آسان و نحوه استفاده ابزار های موجود در پلتفرم سگمنتو گام به گام مراحل رو 
                            </span>
                            <span>
                            انجام میدیم . کنارتون هستیم همیشه :)  
                            </span>
                        </div>
                        <div className='imageBox'>
                        <img src="../img/dashboard/EasyStartPage/EasySart.svg" alt="EasyStartPage" />
                        </div>
                        <button className="btn-style" onClick={()=>startButtonClick()}> شروع کن </button>
                </div>
           </div>
        </>
    );
}

export default EasyStart;
