import React from "react";

export default function RotateLine() {
  var lineNumber = [
    {
      text: "fd",
      width: "w-[309.28px]",
      oriantation: "top-[0.8rem] right-[19.7rem]",
    },
    {
      text: "fd",
      width: "w-[294.53px]",
      oriantation: "top-[3.5rem] right-[18.6rem]",
    },
    {
      text: "fd",
      width: "w-[285.26px]",
      oriantation: "top-[5.8rem] right-[17.5rem]",
    },
    {
      text: "fd",
      width: "w-[282px]",
      oriantation: "top-[8rem] right-[16.5rem]",
    },
    {
      text: "fd",
      width: "w-[285.26px]",
      oriantation: "top-[10.2rem] right-[15.6rem]",
    },
    {
      text: "fd",
      width: "w-[294.53px]",
      oriantation: "top-[12.6rem] right-[14.5rem]",
    },
    {
      text: "fd",
      width: "w-[309.28px]",
      oriantation: "top-[15.2rem] right-[13.4rem]",
    },
  ];

  return (
    <div className="rotate-[23deg]">
      <div className="w-3 h-3 bg-silver rounded-full absolute -right-2 -top-1 z-10"></div>

      {lineNumber.map((item, index) => {
        let n = index * -8;
        return (
          <>
            <div
              className={`absolute ${item.oriantation} flex items-center gap-3 -rotate-[23deg]`}
            >
              <span>تهران</span>
              <span>....</span>
              <span>مثل</span>
            </div>
            <div
              id="line"
              className={` ${item.width}  bg-sectionDisable h-[0.8px] rotate-[${n}deg]  origin-bottom-right   rounded`}
            >
              <div className="w-2 h-2 bg-sectionDisable rounded-full absolute left-0 -top-1 "></div>
            </div>
          </>
        );
      })}
    </div>
  );
}
