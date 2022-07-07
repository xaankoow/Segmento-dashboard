import React, { useEffect } from "react";
import DashboardHeader from "./DashboaedComponents/DashboardHeader";
import ItemSidebarHover from "./DashboaedComponents/SidebarComponents/ItemSidebarHover";
import PopUp from "../Utils/PopUp/PopUp";
import { useState } from "react";
import EasyStart from "./DashboaedComponents/EasyStart/EasyStart";
import HandleModal from "./../Utils/handleModal";
import BuyPlan from "./DashboaedComponents/BuyPlan/BuyPlan";
import WorkSpace from "../Utils/workSpaceModal/workSpace";
import TabMenu from "./DashboaedComponents/tabMenu/TabMenu";
import IconsRight from "./DashboaedComponents/SidebarComponents/IconsRight";
import AcardionItem from "./DashboaedComponents/AcardionItem/AcardionItem";
import KeyWords from "./KeyWords/KeyWords";
import SaveListModal from "./ContentProduction/SaveListModal";
import ContentpProduction from "./ContentProduction/ContentpProduction";
import MyList from "./KeyWords/MyList/MyList";
import WorkSpaceReport from "./DashboaedComponents/workSpace/workSpaceReport";
import AleartMessageBuyPlan from "./DashboaedComponents/BuyPlan/AleartMessageBuyPlan";
import SidebarComponent from "./DashboaedComponents/SidebarComponents/SidebarComponent";
import MylistContentProduction from "./ContentProduction/MyListContentProduction/MyListContentProduction";
import { Route, Routes } from "react-router-dom";


export default function DashboardBody() {
  const [showModal, setShowModal] = useState(false);
  const [showWorkSpaceModal, setShowWorkSpaceModal] = useState(true);

  // DashboardHeader nav icon that close the left sidebar
  const [closeNav, setCloseNav] = useState(false);
  const closeNavItem = () => {
    setCloseNav(!closeNav);
  };

  // end
  // icon Handler  when click in navHover
  const iconClickHandler = () => {
    if (closeNav) setCloseNav(!closeNav);
  };
  // end
  // showing modal
  const startButtonClick = () => {
    setShowModal(true);
  };
  const resetHandleShowModal = () => {
    setShowModal(false);
  };
  const closeWorkSpaceModal = () => {
    setShowWorkSpaceModal(false);
  };

  // cosnt
  // tab content
  const tabContent = [
    {
      title: "جست و جو",
      content: <KeyWords />,
    },
    {
      title: "لیست من",
      content: <MyList />,
    },
  ];
  const tabContent2 = [
    {
      title: "جست و جو",
      content: <ContentpProduction />,
    },
    {
      title: "لیست من",
      content: <MylistContentProduction />,
    },
  ];
  return (
    <div id="DASHBOARD">
      <div className="w-full h-16 bg-[#fff] shadow-3xl">
        <DashboardHeader setCloseNav={closeNavItem} />
      </div>
      <div className="flex flex-row-reverse relative top-1 w-full h-screen body">
        <div className="bg-[#ffffff] overflow-y-scroll pb-8 relative h-full shadow-3xl mt-1 mx-2 rounded-md z-[1] grow main">
          {/* <PopUp title={"موفقیت آمیز"} text={"کار شما با موفقیت انجام شد !"} buttonText={"باشه، فهمیدم !"} type={"error"}/> */}
          {/* <EasyStart startButtonClick={startButtonClick} /> */}
          {/* keyWords */}
          {/* <Routes>
          <Route path="" element={<TabMenu tabsContent={tabContent} title={"تحقیق کلمات کلیدی"} numberLeft={"20"} numberRight={"189"}/>} />
          <Route path="/dashboard/content" element={ <TabMenu tabsContent={tabContent2} title={"ایده تولید محتوا"} numberLeft={"20"} numberRight={"189"}/>} />
       </Routes> */}

          <TabMenu tabsContent={tabContent} title={"تحقیق کلمات کلیدی"} numberLeft={"20"} numberRight={"189"}/>
          {/* <TabMenu
            tabsContent={tabContent2}
            title={"ایده تولید محتوا"}
            numberLeft={"20"}
            numberRight={"189"}
          /> */}
          {/* <BuyPlan title={"خرید اشتراک سگمنتو"} /> */}
          {/* <WorkSpaceReport/> */}
          {/* <BuyPlan title={"خرید اشتراک سگمنتو"}/> */}

          {
            // <WorkSpace handleClose={closeWorkSpaceModal}/>
            // showModal ? <HandleModal show={true} handleClose={resetHandleShowModal} /> : ""
            // <HandleModal showModal={showModal} setShowModal={setShowModal}/>
          }

          {/* <AleartMessageBuyPlan/> */}
        </div>
        <SidebarComponent closeNav={closeNav} />
      </div>
      {/* <Modal/> */}
    </div>
  );
}
