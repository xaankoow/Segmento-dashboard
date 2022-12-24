import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ToolTip from "../../../Utils/ToolTip";
import pishkhan_svg from "../../../../assets/img/dashboard/nav_right/pishkhan.svg";
import analyze_svg from "../../../../assets/img/dashboard/nav_right/analyze.svg";
import { allLimitDataFeature, ChackBusinessCustomer } from "../../../Redux/Action/workSpace";

export default function IconsRight({ setActive, activeIcons }) {
  const [activeIcon, setActiveIcon] = useState(
    localStorage.getItem("activeIcon") != null
      ? Number(localStorage.getItem("activeIcon"))
      : 0
  );
  const [showToolTip, setShowToolTip] = useState(true);

  const userState = useSelector((state) => state.userState);

  const dispatch=useDispatch();

  // dispatch(ChackBusinessCustomer()) //TODO: get this process in back end 
  // dispatch(allLimitDataFeature())  

  // TODO:EDITE TITLE IMG
  const navBarRightSection = [
    { imgSrc: pishkhan_svg, title: "خانه", link: "" },
    {
      imgSrc: analyze_svg,
      title: " ابزار سئو",
      link: "/dashboard/PageCounter",
    },
  ];

  var activeClass =
    "bg-secondary ICONRIGHT nav_right_box flex items-center justify-center relative z-0";
  var normalClass =
    "nav_right_box flex items-center justify-center relative z-0";


  // const initSeoUtilsSection = () => {
  //   // dispatch(ChackBusinessCustomer()) //TODO: get this process in back end 
  //   dispatch(allLimitDataFeature())
  // }
  return (
    <div className="top relative">
      {navBarRightSection.map((items, index) => (
        <div
          id={index}
          className={index === activeIcon ? activeClass : normalClass}
          key={index}
          onClick={(e) => {
            setActiveIcon(index);
            setActive(e);

          }}
          // onMouseDown={() => items.title == " ابزار سئو" ? initSeoUtilsSection() : ""}
        >
          <Link to={items.link}>
            <img
              id={index}
              src={items.imgSrc}
              alt="imageSidebar z-0  "
              data-tip={items.title}
              data-type="light"
              data-place="left"
              width={"24px"}
              height={"24px"}
              onMouseEnter={() => setShowToolTip(true)}
              onMouseLeave={() => {
                setShowToolTip(false);
                setTimeout(() => setShowToolTip(true), 0);
              }}
            />
          </Link>
          {index === activeIcon && (
            <hr className="w-5 h-[3px] bg-primary text-[#D9D9D9] rotate-90 absolute -right-2 rounded" />
          )}
        </div>
      ))}
      {/* {showToolTip && <ToolTip />} */}

      {/* <IconsRight image={"../img/dashboard/nav_right/pishkhan.svg"}/>
        <IconsRight image={"../img/dashboard/nav_right/analyze.svg"}/> */}
    </div>
  );
}
