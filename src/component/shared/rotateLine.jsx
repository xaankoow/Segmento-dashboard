import React from "react";

export default function RotateLine() {
  var lineNumber = [
    { text: "fd", width: "w-[309.28px]" },
    { text: "fd", width: "w-[294.53px]" },
    { text: "fd", width: "w-[285.26px]" },
    { text: "fd", width: "w-[282px]" },
    { text: "fd", width: "w-[285.26px]" },
    { text: "fd", width: "w-[294.53px]" },
  ];

  return (
    <div className="relative rotate-[23deg]">
        <div className="w-3 h-3 bg-silver rounded-full absolute -right-1 z-10"></div>
      {lineNumber.map((item, index) => {
        let n = index * -8;
        return (
          
            <div
              id="line"
              className={` ${item.width}  bg-sectionDisable h-[0.8px] rotate-[${n}deg]  origin-bottom-right   rounded`}
            >
            
            <div className="w-2 h-2 bg-sectionDisable rounded-full absolute left-0 -top-1"></div>
          </div>
        );
      })}
    </div>
  );
}
