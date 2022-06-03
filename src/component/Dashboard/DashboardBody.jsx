import React from 'react'
import DashboardHeader from './DashboaedComponents/DashboardHeader';
import ItemSidebarHover from './DashboaedComponents/SidebarComponents/ItemSidebarHover';
import PopUp from '../Utils/PopUp/PopUp';
import { useState } from 'react';
import EasyStart from './DashboaedComponents/EasyStart/EasyStart';
import HandleModal from './../Utils/handleModal';


export default function DashboardBody() {
  const[showModal,setShowModal]=useState(false)
  // DashboardHeader nav icon that close the left sidebar
  const[closeNav,setCloseNav]=useState(false);
  const closeNavItem=()=>{
    setCloseNav(!closeNav)
  }
  // end
  // icon Handler  when click in navHover
  const iconClickHandler=()=>{
    if(closeNav)
    setCloseNav(!closeNav)
  }
  // end
  // showing modal
  const startButtonClick=()=>{
    setShowModal(true)
  }
  const itemsHoverMenu=["گزارش های منتخب","خرید اشتراک","شروع آسان","خبرخوان","آموزش","پیشنهادات و تخفیف ها","پشتیبانی و تیکت","انتخاب سرویس"]
  // cosnt 
  return (

    <div id='DASHBOARD'>
      <div className='nav_head'>
        <DashboardHeader setCloseNav={closeNavItem}/>
      </div>
      <div className='body'>
          <div className='main'>
            {/* <PopUp title={"موفقیت آمیز"} text={"کار شما با موفقیت انجام شد !"} buttonText={"باشه، فهمیدم !"} type={"error"}/> */}
             <EasyStart startButtonClick={startButtonClick}/>
             {
               showModal && <HandleModal showModal={showModal} setShowModal={setShowModal}/>
             }
          </div>
          <div className='list_hover' style={{width:closeNav?'60px':"256px"}}>
            {
              itemsHoverMenu.map(item=>{
                return  <ItemSidebarHover text={!closeNav && item} icon={"../img/dashboard/sidebarHover/sidebarIcon1.svg"} textColor={"#002145"} textHover={"#0A65CD"} iconClickHandler={iconClickHandler}/>
                })
            }
          </div>
          <div className='nav_right'>
            <div className='top'>
           
              <div className='nav_right_box'>
              <div className='dashboard'></div>
              </div>
              <div className='nav_right_box'>
                <div className='analyze'></div>
              </div>
              <div className='nav_right_box'>
                <div className='news'></div>
              </div>
              <div className='nav_right_box'>
                <div className='servise'></div>
              </div>
              <div className='nav_right_box'>
                <div className='youtub'></div>
              </div>
              <div className='nav_right_box'>
                <div className='linkedin'></div>
              </div>
              
          </div>
          <div className='down'>
            <div className='dropDownBox '>
              <div className='support'></div>
              <div className='support_dropDown dropDownBox1'><span> پشتیبانی و تیکت </span></div>
            </div>

            <div className='dropDownBox'>
              <div className='information'></div>
              <div className='support_dropDown dropDownBox2'><span>منابع و راهنمایی ها</span></div>
            </div>
            
            <div className='line'></div>
            {/* <img src="./img/dashboard/nav_right/xaankoo-logo.svg" className='xaankoo_logo' alt="" /> */}
            <div className='xaankoo_logo'></div>
          
          </div>
        </div>
      </div>
      {/* <Modal/> */}
    </div>
  )
}
