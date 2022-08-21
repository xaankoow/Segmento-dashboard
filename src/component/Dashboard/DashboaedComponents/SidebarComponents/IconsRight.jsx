import React, { useState } from "react";

export default function IconsRight({ setActive }) {
  const [activeIcon, setActiveIcon] = useState(0);
  const imageSrc = [
    "/img/dashboard/nav_right/pishkhan.svg",
    "/img/dashboard/nav_right/analyze.svg",
  ];

  return (
    <div className="top relative">
      {imageSrc.map((items, index) => {
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
            <img id={index} src={items} alt="imageSidebar z-0  " />
            {index === activeIcon && (
              <hr className="w-5 h-[3px] bg-primary text-[#D9D9D9] rotate-90 absolute -right-2 rounded" />
            )}
          </div>
        );
      })}

      {/* <IconsRight image={"../img/dashboard/nav_right/pishkhan.svg"}/>
        <IconsRight image={"../img/dashboard/nav_right/analyze.svg"}/> */}
    </div>
  );
}
