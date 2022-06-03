import React from 'react'
import DashboardHeader from './DashboaedComponents/DashboardHeader';
import ItemSidebarHover from './DashboaedComponents/SidebarComponents/ItemSidebarHover';
import PopUp from '../Utils/PopUp/PopUp';
import { useState } from 'react';


export default function DashboardBody() {
  // DashboardHeader nav icon that close the left sidebar
  const[closeNav,setCloseNav]=useState(false);
  const closeNavItem=()=>{
    setCloseNav(!closeNav)
  }
  // end
  
  const itemsHoverMenu=["گزارش های منتخب","خرید اشتراک","شروع آسان","خبرخوان","آموزش","پیشنهادات و تخفیف ها","پشتیبانی و تیکت","انتخاب سرویس"]
  return (

    <div id='DASHBOARD'>
      <div className='nav_head'>
        <DashboardHeader setCloseNav={closeNavItem}/>
      </div>
      <div className='body'>
          <div className='main'>
            <PopUp title={"موفقیت آمیز"} text={"کار شما با موفقیت انجام شد !"} buttonText={"باشه، فهمیدم !"} type={"error"}/>
          </div>
          <div className='list_hover' style={{display:closeNav?'none':"block",opacity:closeNav?0:1}}>
           {
             itemsHoverMenu.map(item=>{
               return  <ItemSidebarHover text={item} icon={"../img/dashboard/sidebarHover/sidebarIcon1.svg"} textColor={"#002145"} textHover={"#0A65CD"}/>
              })
           }
          </div>
          <div className='nav_right'>
            <div className='top'>
            <div className='scroller'></div>
            <div className='dashboard'></div>
            <div className='analyze'></div>
            <div className='news'></div>
            <div className='servise'></div>
            <div className='youtub'></div>
            <div className='linkedin'></div>
          </div>
          <div className='down'>
            <div className='support'></div>
            <div className='information'></div>
            <div className='line'></div>
            {/* <img src="./img/dashboard/nav_right/xaankoo-logo.svg" className='xaankoo_logo' alt="" /> */}
          </div>
          <div className='xaankoo_logo'></div>
        </div>
      </div>
      {/* <Modal/> */}
    </div>
  )
}
