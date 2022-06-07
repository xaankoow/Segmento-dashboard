
import React from 'react';
import AuthButton from '../../Auth/authButton/AuthButton';
import HandleModal from '../../Utils/handleModal';


const EasyStart = () => {
    return (
        <>
           <div className='EasyStartBox EasyStartcontactus'>
               <span>برای راهنمایی و مشاوره استفاده از امکانات سگمنتو تماس بگیرید :  </span>
                <AuthButton handlerClick={() =>HandleModal()}  textButton={"مشاوره و تماس"} />
           </div> 
           <div className='EasyStartBox EasyStartBoxContent'>
                <div className='EasyStartTitle'>
                شروع آسان و نحوه استفاده از امکانات سگمنتو
                </div>
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
                {/* <button className="btn_style" onClick={()=>HandleModal(true)}><span></span> شروع کن </button> */}
                <AuthButton handlerClick={HandleModal(true)}  textButton={"شروع کن"} />
           </div>
        </>
    );
}

export default EasyStart;
