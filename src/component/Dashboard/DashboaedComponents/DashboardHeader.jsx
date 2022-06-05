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
        <div className='headercontainer'>
            <div className='right_header_box'>
                <div className='menuimage' onClick={()=>setCloseNav()}></div>
                <div className='right_header_box_logo'>
                    <div className='Iconimage'></div>
                    <span className=''>سگمنتو segmento</span>
                </div>
            </div>
            <div className='left_header_box'>
                <div className='userProfBox'>
                    <div className='left_header_box_item1'>
                    <img src='../img/dashboard/header/userimage.svg' className='userImage' alt='userImage'/>
                    <div className=''>
                        <span className='username'>{user_name}</span>
                        <div className='left_header_box_item2'>
                            <img src="../img/dashboard/header/Ellipse.svg" alt="Ellipse" />
                            <span className='eshteraktalaee'>اشتراک طلایی</span>
                        </div>
                    </div>
                    </div>
                    <div className='userHeaderProfInfo'>
                        <div className='underline'/>
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
