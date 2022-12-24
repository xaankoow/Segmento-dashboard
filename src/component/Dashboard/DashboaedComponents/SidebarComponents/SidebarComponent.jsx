import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCloseNav } from "../../../Redux/Action/navMenu";
import { getAllWorkSpace } from "../../../Redux/Action/workSpace";
import SidebarBaner from "../../../Utils/Baner/Sidebar/SidebarBaner";
import ToolTip from "../../../Utils/ToolTip";
import AcardionItem from "../AcardionItem/AcardionItem";
import IconsRight from "./IconsRight";
import ItemSidebarHover from "./ItemSidebarHover";
import sidebarIcon1_svg from "../../../../assets/img/dashboard/sidebarHover/sidebarIcon1.svg";
import dashboardPishKhan_svg from "../../../../assets/img/dashboard/nav_right/dashboardPishKhan.svg";

export default function SidebarComponent({
  setActiveIconHandlerClicked,
  hoverIconClicked,
  clicked1,
  setClicked1,
}) {
  const [showToolTip, setShowToolTip] = useState(true);
 
  const [activeIcon, setActiveIcon] = useState(localStorage.getItem("activeIcon") != null
  ? Number(localStorage.getItem("activeIcon"))
  : 0);

  const { closeNav } = useSelector((state) => state.navMenuState);
  const dispatch = useDispatch();
useEffect(() => {
    localStorage.setItem("activeIcon",activeIcon);
  
  }, [activeIcon]);
  const [disableAdvertisement, setDisableAdvertisement] = useState(false);

  const activeIconHandler = (e) => {
    setActiveIcon(e.target.id);
    setActiveIconHandlerClicked(-1);
    setClicked1(2);
    dispatch(setCloseNav(true));
   
  };

  const itemsHoverMenu = [
    { title: "گزارش های منتخب", link: "" },
    { title: "خرید اشتراک", link: "buyPlan" },
    { title: "شروع آسان", link: "/dashboard" },
    { title: "خبرخوان", link: "" },
    { title: "آموزش", link: "" },
    { title: "پیشنهادات و تخفیف ها", link: "" },
    { title: "پشتیبانی و تیکت", link: "ReportSupport" },
    { title: "انتخاب سرویس", link: "" },
  ];

  return (
    <>
      <div
        className="list_hover pt-5 h-full  bg-[#fcfcfb]  shadow-3xl rounded-tl-lg rounded-bl-lg flex flex-col justify-between min-w-[256px] overflow-hidden"
        style={{ width: closeNav ? "256px" : "0px" }}
      >
        {activeIcon == 0 ? (
          <div>
            {itemsHoverMenu.map((item, index) => {
              return (
                <ItemSidebarHover
                  text={item}
                  icon={sidebarIcon1_svg}
                  textColor={"#002145"}
                  textHover={"#0A65CD"}
                  index={index}
                  clicked={clicked1}
                  setClicked={() => setClicked1(index)}
                />
              );
            })}
          </div>
        ) : activeIcon == 1 ? (
          <div>
            <div
              onClick={() => setActiveIconHandlerClicked(-1)}
              className={`flex items-center gap-3 text-[#002145] my-5 mr-5 cursor-pointer text-sm hover:cursor-pointer hover:text-blue ${
                hoverIconClicked == -1 && "active"
              }`}
            >
              <img src={dashboardPishKhan_svg} alt="icon" />
              <Link to={"/dashboard/PageCounter"}>{closeNav && "پیشخان"}</Link>
            </div>
            <div className="border-b border-lightGray w-11/12 m-auto" />
            <AcardionItem
              clicked={hoverIconClicked}
              setClicked={setActiveIconHandlerClicked}
            />
          </div>
        ) : null}
        {/* advertisement box */}
        {/* {!disableAdvertisement && closeNav ? (
          <SidebarBaner setDisableAdvertisement={setDisableAdvertisement} />
        ) : null} */}
      </div>
      {/* ):null} */}

      <div className="nav_right relative flex flex-col right-0 bg-[#fcfcfb] items-center justify-between w-14 shadow-3xl h-full min-w-[56px]">
        <IconsRight setActive={activeIconHandler} activeIcons={activeIcon}/>
        <div className="down">
          <div className="dropDownBox mb-5">
            <a href="https://segmento.ir/about/support/">
            {/* <Link to="ReportSupport"> */}
              <div
                className="support w-8 h-8"
                data-tip=" پشتیبانی "
                data-type="light"
                data-place="left"
                onMouseEnter={() => setShowToolTip(true)}
                onMouseLeave={() => {
                  setShowToolTip(false);
                  setTimeout(() => setShowToolTip(true), 0);
                }}
              ></div>
            {/* </Link> */}
              </a>
            {/* <div className="support_dropDown dropDownBox1 flex text-center">
              <span> پشتیبانی و تیکت </span>
            </div> */}
          </div>

          <div className="dropDownBox mb-5  ">
            <div
              className="call-nav-right w-6 h-6 text-[20px] support"
              data-tip="شماره تماس: 38331497-051"
              data-type="light"
              data-place="left"
              data-class="sizeClass"
              onMouseEnter={() => setShowToolTip(true)}
              onMouseLeave={() => {
                setShowToolTip(false);
                setTimeout(() => setShowToolTip(true), 0);
              }}
            ></div>
            {/* <div className="support_dropDown dropDownBox2 text-center">
              <span>منابع و راهنمایی ها</span>
              <div className="w-3 h-3 absolute right-[-5px] bg-[#fff] rotate-45"></div>
            </div> */}
          </div>

          <div className="line mb-3"></div>
          {/* <img src="./img/dashboard/nav_right/xaankoo-logo.svg" className='xaankoo_logo' alt="" /> */}
          <a href={"https://xaankoo.com/"}>
            <div className="xaankoo_logo w-11 h-9"></div>
          </a>
        </div>
      </div>
      {showToolTip && <ToolTip />}
    </>
  );
}
