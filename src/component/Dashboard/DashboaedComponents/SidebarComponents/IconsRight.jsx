import React, { useState } from "react";
import ToolTip from "../../../Utils/ToolTip";

export default function IconsRight({ setActive }) {
  const [activeIcon, setActiveIcon] = useState(0);

  const [showToolTip, setShowToolTip] = useState(true);

  // TODO:EDITE TITLE IMG
  const navBarRightSection = [
    {imgSrc:"/img/dashboard/nav_right/pishkhan.svg",title:"منوی اول"},
    {imgSrc:"/img/dashboard/nav_right/analyze.svg",title:"دپارتمان سئو"}
  ];

  return (
    <div className="top relative">
      {navBarRightSection.map((items, index) => {
        return (
          <div
            id={index}
            className={
              index === activeIcon
                ? "bg-secondary ICONRIGHT nav_right_box flex items-center justify-center relative z-0"
                : "nav_right_box flex items-center justify-center relative z-0"
            }
            key={index}
            onClick={(e) => {
              setActiveIcon(index);
              setActive(e);
            }}
          >
            <img id={index} src={items.imgSrc} alt="imageSidebar z-0  "
              data-tip={items.title}
              data-type="light"
              data-place="left"
              onMouseEnter={() => setShowToolTip(true)}
              onMouseLeave={() => {
                setShowToolTip(false);
                setTimeout(() => setShowToolTip(true), 0);
              }} />
            {index === activeIcon && (
              <hr className="w-5 h-[3px] bg-primary text-[#D9D9D9] rotate-90 absolute -right-2 rounded" />
            )}
          </div>
        );
      })}
      {/* {showToolTip && <ToolTip />} */}

      {/* <IconsRight image={"../img/dashboard/nav_right/pishkhan.svg"}/>
        <IconsRight image={"../img/dashboard/nav_right/analyze.svg"}/> */}
    </div>
  );
}
