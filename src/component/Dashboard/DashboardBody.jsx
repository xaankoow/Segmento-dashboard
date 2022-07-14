import React, { useEffect } from "react";
import DashboardHeader from "./DashboaedComponents/DashboardHeader";
import ItemSidebarHover from "./DashboaedComponents/SidebarComponents/ItemSidebarHover";
import Modal from "react-modal";
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
import ContentpProduction from "./ContentProduction/ContentpProduction";
import MyList from "./KeyWords/MyList/MyList";
import WorkSpaceReport from "./DashboaedComponents/workSpace/workSpaceReport";
import AleartMessageBuyPlan from "./DashboaedComponents/BuyPlan/AleartMessageBuyPlan";
import { useNavigate } from "react-router";
import AuthButton from "../Auth/authButton/AuthButton";
import { useSelector } from "react-redux/es/exports";
import SidebarComponent from "./DashboaedComponents/SidebarComponents/SidebarComponent";
import MylistContentProduction from "./ContentProduction/MyListContentProduction/MyListContentProduction";
import BuyPlanEasyToStartModal from "../Utils/EasyToStartModal";

export default function DashboardBody() {
  const navigate = useNavigate();

  const { userData } = useSelector((state) => state.userState);
  const { resultSetWorkSpace } = useSelector((state) => state.workSpaceState);

  const [showResultModal, setShowResultModal] = useState(true); //handle close buy plan result
  const [showModalBuyPlanResult, setShowModalBuyPlanResult] = useState(""); //handle buy plan type
  
  const [showWorkSpace, setShowWorkSpace] = useState(true); //handle close buy plan result
  const [showReportWorkSpace, setShowReportWorkSpace] = useState({reportStatus:false,reportStep:0}); //handle buy plan type
  //check buy plan result
  useEffect(() => {
    const status_buy_plan = localStorage.getItem("statusBuyPlna");
    const buy_type = localStorage.getItem("buyType");
    // const response_new_workSpace = localStorage.getItem("modalWorkSpace").split(",");
    // if (response_new_workSpace.length!=0) {
    //   setShowReportWorkSpace({reportStatus:response_new_workSpace[0],reportStep:response_new_workSpace[1]})
    // }
    if (
      status_buy_plan &&
      status_buy_plan != undefined &&
      status_buy_plan != null &&
      status_buy_plan != ""
    ) {
      const title = userData.package.title;
      const type_plna = userData.package.type_text;
      if (buy_type == "modal") {
        if (status_buy_plan == true) {
          setShowWorkSpace(false);
          setShowModalBuyPlanResult({ type: "modal", result: true });
        } else {
          setShowModalBuyPlanResult({ type: "modal", result: false });
        }
      } else {
        navigate("dashboard/buyPlan/buyInfo");
      }
    }
  }, []);

  const [showModal, setShowModal] = useState(true);
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
  // debugger

  // var a = "setShowResultModal(false);"
  // if (showResultModal) {
  //   eval(a);
  //   console.log(showResultModal)
  // }
  // console.log(showResultModal)
  // alert( showResultModal)
  return (
    <div id="DASHBOARD">
      <div className="w-full h-16 bg-[#fff] shadow-3xl">
        <DashboardHeader setCloseNav={closeNavItem} />
      </div>
      <div className="flex flex-row-reverse relative top-1 w-full h-screen body">
        <div className="bg-[#ffffff] overflow-y-scroll pb-8 relative h-full shadow-3xl mt-1 mx-2 rounded-md z-[1] grow main">
          {resultSetWorkSpace.reportStatus==true?<WorkSpaceReport stepWorkSpace={resultSetWorkSpace.reportStep}/>:null}
          {/* <PopUp title={"موفقیت آمیز"} text={"کار شما با موفقیت انجام شد !"} buttonText={"باشه، فهمیدم !"} type={"error"}/> */}
          {/* <EasyStart startButtonClick={startButtonClick} /> */}
          {/* keyWords */}
          {/* <Routes>
          <Route path="" element={<TabMenu tabsContent={tabContent} title={"تحقیق کلمات کلیدی"} numberLeft={"20"} numberRight={"189"}/>} />
          <Route path="/dashboard/content" element={ <TabMenu tabsContent={tabContent2} title={"ایده تولید محتوا"} numberLeft={"20"} numberRight={"189"}/>} />
       </Routes> */}

          {/* <TabMenu tabsContent={tabContent} title={"تحقیق کلمات کلیدی"} numberLeft={"20"} numberRight={"189"}/> */}
          <TabMenu
            tabsContent={tabContent2}
            title={"ایده تولید محتوا"}
            numberLeft={"20"}
            numberRight={"189"}
          />

          {/* <WorkSpaceReport/> */}
          {/* <BuyPlan title={"خرید اشتراک سگمنتو"}/> */}

          {/* <button onClick={}>click me!</button> */}
          {
            <WorkSpace handleClose={closeWorkSpaceModal} />
            // showModal ? <HandleModal show={true} handleClose={resetHandleShowModal} /> : ""
            // <HandleModal showModal={showModal} setShowModal={setShowModal}/>
            // showModal ? <BuyPlanEasyToStartModal  handleClose={resetHandleShowModal}/> : ""
            // <BuyPlanEasyToStartModal  handleClose={resetHandleShowModal}/>
          }

          {/* <AleartMessageBuyPlan /> */}
        </div>
        {/* <div className='list_hover mt-1 pt-5 h-full bg-[#fcfcfb] w-64 shadow-3xl rounded-tl-lg rounded-bl-lg' style={{ width: closeNav ? '0px' : "256px" }}>
          <ItemSidebarHover icon={"./img/dashboard/nav_right/dashboardPishKhan.svg"} text={!closeNav && "پیشخوان"} textColor={"#0A65CD"} />
          <div className='border-b border-lightGray w-11/12 m-auto' />
          <ItemSidebarHover icon={"./img/dashboard/nav_right/web.svg"} text={!closeNav && "ورک‌اسپیس‌ها"} textColor={"#002145"} />
          <div className="mr-4">
            <ItemSidebarHover icon={"./img/dashboard/nav_right/storefront.svg"} text={!closeNav && "xaankoo.com"} textColor={"#002145"} />
            <ItemSidebarHover icon={"./img/dashboard/nav_right/add_circle.svg"} text={!closeNav && "تعریف ورک‌اسپیس جدید"} textColor={"#002145"} />
          </div>
          <div className='border-b border-lightGray w-11/12 m-auto' />
          <AcardionItem />
        </div> */}
        {/* <div className='nav_right relative flex flex-col right-0 bg-[#fcfcfb] items-center justify-between mt-1 w-14 shadow-3xl h-[93vh] min-h-[85vh]'>
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
            <div className='xaankoo_logo w-11 h-9'></div>

          </div>
        </div> */}
        <SidebarComponent closeNav={closeNav} />
      </div>
      {/* {showModalBuyPlanResult != "" && showModalBuyPlanResult == true ? ( */}
      {showModalBuyPlanResult != "" ? (
        "" // <BuyPlanEasyToStartModal checkBuyPlan={true} />
      ) : (
        // <Modal
        //   isOpen={showResultModal}
        //   parentSelector={() => document.querySelector(".app #DASHBOARD .body .main")}
        //   style={customStyles}
        //   contentLabel="Example Modal"
        // >
        //   <div className=' w-[907px]'>
        //     <body className='final_report_container p-5'>
        //       <div className='popup'>
        //         <div className='title_popup'>اشتراک فعال سازی شده برای شما: </div>
        //         {/* <div className='main_popup'>{planType}</div> */}
        //         <div className='main_popup'>اشتراک طلایی ، 3 ماهه</div>
        //       </div>
        //       <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته است . </p>
        //       <div className='support_container'>
        //         <p>تا اینجای کار اگر نیاز به راهنمایی و مشاوره داشتی میتونی از این طریق باهامون تماس بگیری</p>
        //         <AuthButton textButton={"مشاوره و تماس"} />
        //         <img src="./img/modal/body/report.svg" alt="" />
        //       </div>
        //     </body>
        //   </div>
        // </Modal>
        ""
      )}
    </div>
  );
}
