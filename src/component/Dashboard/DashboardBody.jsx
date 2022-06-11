import React from 'react'
import DashboardHeader from './DashboaedComponents/DashboardHeader';
import ItemSidebarHover from './DashboaedComponents/SidebarComponents/ItemSidebarHover';
import PopUp from '../Utils/PopUp/PopUp';
import { useState } from 'react';
import EasyStart from './DashboaedComponents/EasyStart/EasyStart';
import HandleModal from './../Utils/handleModal';


export default function DashboardBody() {
  const[showModal,setShowModal]=useState(true)
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
      <div className='w-full h-16 bg-[#fff] shadow-3xl'>
        <DashboardHeader setCloseNav={closeNavItem}/>
      </div>
      <div className='flex flex-row-reverse relative top-1 w-full h-screen body'>
          <div className='bg-[#ffffff] relative h-full shadow-3xl mt-1 mx-2 rounded-md z-[1] grow main'>
            {/* <PopUp title={"موفقیت آمیز"} text={"کار شما با موفقیت انجام شد !"} buttonText={"باشه، فهمیدم !"} type={"error"}/> */}
             <EasyStart startButtonClick={startButtonClick}/>
             {
               showModal && <HandleModal showModal={showModal} setShowModal={setShowModal}/>
                // <HandleModal showModal={showModal} setShowModal={setShowModal}/>
             }
          </div>
          <div className='list_hover mt-1 pt-5 h-full bg-[#fcfcfb] w-64 shadow-3xl rounded-tl-lg rounded-bl-lg' style={{width:closeNav?'60px':"256px"}}>
            {
              itemsHoverMenu.map(item=>{
                return  <ItemSidebarHover text={!closeNav && item} icon={"../img/dashboard/sidebarHover/sidebarIcon1.svg"} textColor={"#002145"} textHover={"#0A65CD"} iconClickHandler={iconClickHandler}/>
                })
            }
          </div>
          <div className='nav_right relative flex flex-col right-0 bg-[#fcfcfb] items-center justify-between mt-1 w-14 shadow-3xl h-[90vh] min-h-[85vh]'>
            <div className='top relative'>
           
              <div className='nav_right_box flex items-center justify-center'>
              <div className='dashboard'></div>
              </div>
              <div className='nav_right_box flex items-center justify-center'>
                <div className='analyze'></div>
              </div>
              <div className='nav_right_box flex items-center justify-center'>
                <div className='news'></div>
              </div>
              <div className='nav_right_box flex items-center justify-center'>
                <div className='servise'></div>
              </div>
              <div className='nav_right_box flex items-center justify-center'>
                <div className='youtub'></div>
              </div>
              <div className='nav_right_box flex items-center justify-center'>
                <div className='linkedin'></div>
              </div>
              
          </div>
          <div className='down'>
            <div className='dropDownBox '>
              <div className='support w-7 h-7'></div>
              <div className='support_dropDown dropDownBox1'><span> پشتیبانی و تیکت </span></div>
            </div>

            <div className='dropDownBox'>
              <div className='information w-7 h-7'></div>
              <div className='support_dropDown dropDownBox2'><span>منابع و راهنمایی ها</span></div>
            </div>
            
            <div className='line'></div>
            {/* <img src="./img/dashboard/nav_right/xaankoo-logo.svg" className='xaankoo_logo' alt="" /> */}
            <div className='xaankoo_logo w-11 h-9'></div>
          
          </div>
        </div>
      </div>
      {/* <Modal/> */}
    </div>
  )
}
