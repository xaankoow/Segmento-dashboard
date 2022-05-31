import React from 'react';

const DashboardHeader = () => {
    return (
        <div className='headercontainer'>
            <div className='right_header_box'>
                <div className='menuimage'></div>
                <div className='right_header_box_logo'>
                <div className='Iconimage'></div>
                <span className=''>سگمنتو segmento</span>
                </div>
            </div>
            <div className='left_header_box'>
                <div className='left_header_box_item1'>
                   <img src='../img/dashboard/header/userprof.svg' className='userImage' alt='userImage'/>
                   <div>
                    <span className='username'>علیرضا صندوقی زاده مشهدی</span>
                    <div className='left_header_box_item2'>
                        <span></span>
                        <span className='eshteraktalaee'>اشتراک طلایی</span>
                    </div>
                   </div>
                </div>
                <div className='left_header_box_item3'>
                    <span className='ImageIconSetting'></span>
                    <span className='ImageIconNotif'></span>
                    <span className='ImageIconMessage'></span>
                </div>
            </div>
        </div>
    );
}

export default DashboardHeader;
