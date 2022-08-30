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

export default function SidebarComponent() {

  const [showToolTip, setShowToolTip] = useState(true);

  const [activeIcon, setActiveIcon] = useState(0);
  const { closeNav } = useSelector(state => state.navMenuState)
  const dispatch = useDispatch();
  const [disableAdvertisement, setDisableAdvertisement] = useState(false);
  // useEffect(() => {

  // getAllWorkSpace()();
  // }, [])
  // debugger
  // console.log(allWorkSpace)
  // console.log(allWorkSpace)
  const activeIconHandler = (e) => {
    setActiveIcon(e.target.id);
    dispatch(setCloseNav(true))
    // setCloseNav(true);
  };

  const itemsHoverMenu = [
    { title: "گزارش های منتخب", link: "" },
    { title: "خرید اشتراک", link: "buyPlan" },
    { title: "شروع آسان", link: "/dashboard" },
    { title: "خبرخوان", link: "" },
    { title: "آموزش", link: "" },
    { title: "پیشنهادات و تخفیف ها", link: "" },
    { title: "پشتیبانی و تیکت", link: "" },
    { title: "انتخاب سرویس", link: "" },
  ];

  return (
    <>


      <div
        className="list_hover mt-1 pt-5 h-[93vh]  bg-[#fcfcfb]  shadow-3xl rounded-tl-lg rounded-bl-lg flex flex-col justify-between"
        style={{ width: closeNav ? "256px" : "0px" }}
      >
        {activeIcon == 0 ? (
          <div>
            {itemsHoverMenu.map((item) => {
              return (
                <ItemSidebarHover
                  text={item}
                  icon={"../img/dashboard/sidebarHover/sidebarIcon1.svg"}
                  textColor={"#002145"}
                  textHover={"#0A65CD"}
                />
              );
            })}
          </div>
        ) : activeIcon == 1 ? (
          <div>
            <div className="flex items-center gap-3 text-[#002145] my-5 mr-5 text-sm hover:cursor-pointer hover:text-blue ">
              <img
                src={
                  // "/%PUBLIC_URL%/img/dashboard/nav_right/dashboardPishKhan.svg"
                  "/img/dashboard/nav_right/dashboardPishKhan.svg"
                }
                alt="icon"
              />
              <Link to={"/dashboard/PageCounter"} className={`text-[${"#0A65CD"}]`}>
                {closeNav && "پیش خوان"}
              </Link>
            </div>
            <div className="border-b border-lightGray w-11/12 m-auto" />
            <AcardionItem />
          </div>
        ) : null}
        {/* advertisement box */}
        {!disableAdvertisement && closeNav ? (
          <SidebarBaner setDisableAdvertisement={setDisableAdvertisement} />
        ) : null}
      </div>
      {/* ):null} */}

      <div className="nav_right relative flex flex-col right-0 bg-[#fcfcfb] items-center justify-between mt-1 w-14 shadow-3xl h-[93vh] min-h-[85vh]">
        <IconsRight setActive={activeIconHandler} />
        <div className="down">
          <div className="dropDownBox mb-5">
            <a href="https://segmento.ir/support">
              <div className="support w-7 h-7"
                data-tip=' پشتیبانی '
                data-type="light"
                data-place="left"
                onMouseEnter={() => setShowToolTip(true)}
                onMouseLeave={() => {
                  setShowToolTip(false);
                  setTimeout(() => setShowToolTip(true), 0);
                }}
              ></div>
            </a>
            {/* <div className="support_dropDown dropDownBox1 flex text-center">
              <span> پشتیبانی و تیکت </span>
            </div> */}
          </div>

          <div className="dropDownBox mb-5">
            <div className="call-nav-right w-6 h-6 text-[20px]"
              data-tip=' tel:051-38331497 '
              data-type="light"
              data-place="left"
              data-event='hover'
              data-class='sizeClass'
              onMouseEnter={() => setShowToolTip(true)}
              // onMouseLeave={() => {
              //   setShowToolTip(false);
              //   setTimeout(() => setShowToolTip(true), 0);
              // }}
            ></div>
            {/* <div className="support_dropDown dropDownBox2 text-center">
              <span>منابع و راهنمایی ها</span>
              <div className="w-3 h-3 absolute right-[-5px] bg-[#fff] rotate-45"></div>
            </div> */}
          </div>

          <div className="line mb-3"></div>
          {/* <img src="./img/dashboard/nav_right/xaankoo-logo.svg" className='xaankoo_logo' alt="" /> */}
          <a href={"https://segmento.ir/"}>
            <div className="xaankoo_logo w-11 h-9"></div>
          </a>
        </div>
      </div>
      {showToolTip && <ToolTip />}
    </>
  );
}
