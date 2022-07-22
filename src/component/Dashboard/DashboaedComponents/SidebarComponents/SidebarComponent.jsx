import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllWorkSpace } from "../../../Redux/Action/workSpace";
import AcardionItem from "../AcardionItem/AcardionItem";
import IconsRight from "./IconsRight";
import ItemSidebarHover from "./ItemSidebarHover";

export default function SidebarComponent({ closeNav }) {
  const [activeIcon, setActiveIcon] = useState(0);
  const [disableAdvertisement, setDisableAdvertisement] = useState(false);
  // useEffect(() => {

  // getAllWorkSpace()();
  // }, [])
  // debugger
  // console.log(allWorkSpace)
  // console.log(allWorkSpace)
  const activeIconHandler = (e) => {
    setActiveIcon(e.target.id);
  };

  const itemsHoverMenu = [
    "گزارش های منتخب",
    "خرید اشتراک",
    "شروع آسان",
    "خبرخوان",
    "آموزش",
    "پیشنهادات و تخفیف ها",
    "پشتیبانی و تیکت",
    "انتخاب سرویس",
  ];
  return (
    <>
      <div
        className="list_hover mt-1 pt-5 h-[93vh]  bg-[#fcfcfb] w-64 shadow-3xl rounded-tl-lg rounded-bl-lg flex flex-col justify-between"
        style={{ width: closeNav ? "0px" : "256px" }}
      >
        {activeIcon == 0 ? (
          <div>
            {itemsHoverMenu.map((item) => {
              return (
                <ItemSidebarHover
                  text={!closeNav && item}
                  icon={"../img/dashboard/sidebarHover/sidebarIcon1.svg"}
                  textColor={"#002145"}
                  textHover={"#0A65CD"}
                />
              );
            })}
          </div>
        ) : activeIcon == 1 ? (
          <div>
           
       <div className='flex items-center gap-3 text-[#002145] my-5 mr-5 text-sm hover:cursor-pointer hover:text-blue '  >
            <img src={"./img/dashboard/nav_right/dashboardPishKhan.svg"} alt='icon' />
            <span className={`text-[${"#0A65CD"}]`}>{!closeNav && "پیشخوان"}</span>
        </div>
            <div className="border-b border-lightGray w-11/12 m-auto" />
            <AcardionItem />
          </div>
        ) : null}
        {/* advertisement box */}
        {!disableAdvertisement ? (
          <div className="bg-[#F2F5F7] h-[57px] flex flex-col items-center justify-center mx-3 mb-7  relative bottom-0">
            <img
              src="./img/dashboard/nav_right/close.svg"
              alt="close"
              className="absolute top-2 left-2 cursor-pointer"
              onClick={() => setDisableAdvertisement(true)}
            />
            <span className="text-[#7D7D7D]">نمونه نوشته داینامیک</span>
          </div>
        ) : null}
      </div>
      <div className="nav_right relative flex flex-col right-0 bg-[#fcfcfb] items-center justify-between mt-1 w-14 shadow-3xl h-[93vh] min-h-[85vh]">
        <IconsRight setActive={activeIconHandler} />
        <div className="down">
          <div className="dropDownBox ">
            <div className="support w-7 h-7"></div>
            <div className="support_dropDown dropDownBox1">
              <span> پشتیبانی و تیکت </span>
            </div>
          </div>

          <div className="dropDownBox">
            <div className="information w-7 h-7"></div>
            <div className="support_dropDown dropDownBox2">
              <span>منابع و راهنمایی ها</span>
            </div>
          </div>

          <div className="line"></div>
          {/* <img src="./img/dashboard/nav_right/xaankoo-logo.svg" className='xaankoo_logo' alt="" /> */}
          <div className="xaankoo_logo w-11 h-9"></div>
        </div>
      </div>
    </>
  );
}
