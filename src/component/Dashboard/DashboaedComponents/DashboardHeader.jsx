import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../Redux/Action';
import getCookie from '../../Utils/findUser';
import { useNavigate } from 'react-router-dom'

const DashboardHeader = ({setCloseNav}) => {
    
    const dispatch=useDispatch()
    const user_name=getCookie("user_name");
    const navigate=useNavigate();
    // debugger
    useEffect(() => {
        // debugger
          if (!user_name) {
              navigate("/",{replace:true})
            }
      }, [user_name])
      
    
    return (
        <div className='flex h-full items-center justify-between px-5'>
            <div className='right_header_box flex items-center gap-7'>
                <div className='menuimage' onClick={()=>setCloseNav()}></div>
                <div className='flex items-center gap-3'>
                    <div className='Iconimage'></div>
                    <span className=''>سگمنتو segmento</span>
                </div>
            </div>
            <div className='left_header_box'>
                <div className='userProfBox'>
                    <div className='left_header_box_item1'>
                    <img src='../img/dashboard/header/userimage.svg' className='rounded' alt='userImage'/>
                    <div className=''>
                        <span className='text-sm'>{user_name}</span>
                        <div className='flex items-center justify-right mt-1 gap-3'>
                            <img src="../img/dashboard/header/Ellipse.svg" alt="Ellipse" />
                            <span className='text-xs'>اشتراک طلایی</span>
                        </div>
                    </div>
                    </div>
                    <div className='hidden absolute justify-center items-center pt-3 flex-col w-full rounded userHeaderProfInfo'>
                        <div className='border-b border-lightGray w-52 '/>
                     <div className='dropdowItem'>
                          <div className='dropdowItemText'>
                              <img src="../img/dashboard/header/manage_accounts.svg" alt="manage_accounts" />
                              <span>تنظیمات حساب کاربری</span>
                          </div>
                      </div>
                      <div className='dropdowItem'>
                          <div className='dropdowItemText'>
                              <img src="../img/dashboard/header/add_card.svg" alt="add_card" />
                              <span>خرید اشتراک</span>
                          </div>
                      </div>

                      <div className='dropdowItem'>
                          <div className='dropdowItemText'>
                              <img src="../img/dashboard/header/currency_exchange.svg" alt="currency_exchange" />
                              <span>جابجایی بین حساب ها</span>
                          </div>
                          <img src="../img/dashboard/header/arrow.svg" alt="" className='arrow'/>
                      </div>
                      <div className='dropdowItem' onClick={()=>dispatch(logoutAction())}>
                          <div className='dropdowItemText'>
                              <img src="../img/dashboard/header/logout.svg" alt="" />
                              <span>خروج از حساب کاربری</span>
                          </div>
                          <img src="../img/dashboard/header/arrow.svg" alt="" className='arrow'/>
                      </div>
                      
                    </div>
                </div>
                <div className='left_header_box_item3'>
                    <img src="../img/dashboard/header/notif.svg" alt="notif" />
                    <div className='notifIconBox'>
                        <span className='notifNumber'>33</span>
                        <img src="../img/dashboard/header/message.svg" alt="message" />
                    </div>
                    <img src="../img/dashboard/header/settingicon.svg" alt="settingicon" />
                </div>
            </div>
        </div>
    );
}

export default DashboardHeader;
