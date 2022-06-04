
import React from 'react';

const EasyStart = ({startButtonClick}) => {
    return (
        <>

           <div className='EasyStartBox EasyStartcontactus'>
               <span>برای راهنمایی و مشاوره استفاده از امکانات سگمنتو تماس بگیرید :  </span>
               <button className="btn-style">مشاوره و تماس</button>
           </div> 
           <div className="EasyStartBoxContentBox">
                <div className='EasyStartTitle'>
                                شروع آسان و نحوه استفاده از امکانات سگمنتو
               </div>
                <div className='EasyStartBox EasyStartBoxContent'>
                        

                        <div className='EasyStartBoxSapn'>
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
