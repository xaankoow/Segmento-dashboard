import React, { useEffect } from 'react'
import DashboardHeader from './DashboaedComponents/DashboardHeader';
import ItemSidebarHover from './DashboaedComponents/SidebarComponents/ItemSidebarHover';
import PopUp from '../Utils/PopUp/PopUp';
import { useState } from 'react';
import EasyStart from './DashboaedComponents/EasyStart/EasyStart';
import HandleModal from './../Utils/handleModal';
import BuyPlan from './DashboaedComponents/BuyPlan/BuyPlan';
import WorkSpace from '../Utils/workSpaceModal/workSpace';
import TabMenu from './DashboaedComponents/tabMenu/TabMenu';
import ContentProduction from './DashboaedComponents/ContentProduction/ContentProduction';
import IconsRight from './DashboaedComponents/SidebarComponents/IconsRight';
import AcardionItem from './DashboaedComponents/AcardionItem/AcardionItem';
import KeyWords from './KeyWords/KeyWords';
import WorkSpaceReport from './DashboaedComponents/workSpace/workSpaceReport';
import AleartMessageBuyPlan from './DashboaedComponents/BuyPlan/AleartMessageBuyPlan';



export default function DashboardBody() {
  const [showModal, setShowModal] = useState(false)
  const [showWorkSpaceModal, setShowWorkSpaceModal] = useState(true)
  // DashboardHeader nav icon that close the left sidebar
  const [closeNav, setCloseNav] = useState(false);
  const closeNavItem = () => {
    setCloseNav(!closeNav)
  }


  // end
  // icon Handler  when click in navHover
  const iconClickHandler = () => {
    if (closeNav)
      setCloseNav(!closeNav)
  }
  // end
  // showing modal
  const startButtonClick = () => {
    setShowModal(true)
  }
  const resetHandleShowModal = () => {
    setShowModal(false)
  }
  const closeWorkSpaceModal = () => {
    setShowWorkSpaceModal(false)
  }

  const itemsHoverMenu = ["گزارش های منتخب", "خرید اشتراک", "شروع آسان", "خبرخوان", "آموزش", "پیشنهادات و تخفیف ها", "پشتیبانی و تیکت", "انتخاب سرویس"]
  // cosnt 
  // tab content
  const tabContent = [
    {
      title: "جست و جو",
      content: <KeyWords />
    },
    {
      title: "لیست من",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
    }
  ]
  return (

    <div id='DASHBOARD'>
      <div className='w-full h-16 bg-[#fff] shadow-3xl'>
        <DashboardHeader setCloseNav={closeNavItem} />
      </div>
      <div className='flex flex-row-reverse relative top-1 w-full h-screen body'>
        <div className='bg-[#ffffff] overflow-y-scroll pb-8 relative h-full shadow-3xl mt-1 mx-2 rounded-md z-[1] grow main'>
          {/* <PopUp title={"موفقیت آمیز"} text={"کار شما با موفقیت انجام شد !"} buttonText={"باشه، فهمیدم !"} type={"error"}/> */}
          {/* <EasyStart startButtonClick={startButtonClick} /> */}
          {/* <TabMenu tabsContent={tabContent} title={"تحقیق کلمات کلیدی"} numberLeft={"20"} numberRight={"189"}/> */}
          {/* <BuyPlan title={"خرید اشتراک سگمنتو"} /> */}
          
          {/* <WorkSpaceReport/> */}
        {/* <TabMenu tabsContent={tabContent} title={"تحقیق کلمات کلیدی"} numberLeft={"20"} numberRight={"189"}/> */}
          {/* <BuyPlan title={"خرید اشتراک سگمنتو"}/> */}
 
  
          {
            // <WorkSpace handleClose={closeWorkSpaceModal} />
            // showModal ? <HandleModal show={true} handleClose={resetHandleShowModal} /> : ""
            // <HandleModal showModal={showModal} setShowModal={setShowModal}/>
          }

          <AleartMessageBuyPlan/>
        </div>
        <div className='list_hover mt-1 pt-5 h-full bg-[#fcfcfb] w-64 shadow-3xl rounded-tl-lg rounded-bl-lg' style={{ width: closeNav ? '0px' : "256px" }}>
          {/* {
            itemsHoverMenu.map(item => {
              return <ItemSidebarHover text={!closeNav && item} icon={"../img/dashboard/sidebarHover/sidebarIcon1.svg"} textColor={"#002145"} textHover={"#0A65CD"} iconClickHandler={iconClickHandler} />
            })
          } */}
          <ItemSidebarHover icon={"./img/dashboard/nav_right/dashboardPishKhan.svg"} text={!closeNav && "پیشخوان"} textColor={"#0A65CD"} />
          <div className='border-b border-lightGray w-11/12 m-auto' />
          <ItemSidebarHover icon={"./img/dashboard/nav_right/web.svg"} text={!closeNav && "ورک‌اسپیس‌ها"} textColor={"#002145"} />
          <div className="mr-4">
            <ItemSidebarHover icon={"./img/dashboard/nav_right/storefront.svg"} text={!closeNav && "xaankoo.com"} textColor={"#002145"} />
            <ItemSidebarHover icon={"./img/dashboard/nav_right/add_circle.svg"} text={!closeNav && "تعریف ورک‌اسپیس جدید"} textColor={"#002145"} />
          </div>
          <div className='border-b border-lightGray w-11/12 m-auto' />
          <AcardionItem />
        </div>
        <div className='nav_right relative flex flex-col right-0 bg-[#fcfcfb] items-center justify-between mt-1 w-14 shadow-3xl h-[93vh] min-h-[85vh]'>
          <IconsRight />
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
