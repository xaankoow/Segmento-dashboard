import React from "react";

export default function RotateLine({ lineData, firstText, title }) {
  return (
    <div className="border border-sectionDisable rounded-3 relative">
      <div className="flex justify-between gap-6 items-center pr-4  py-3 right-2 -top-1 absolute">
        <div className="w-[20px] h-[2px] bg-[#001F43] rotate-90 rounded absolute -right-[9px]" />
        <span className="text-lg">{title}</span>
      </div>
      <div className="rotate-[23deg]  ">
        <div className="w-3 h-3 bg-silver rounded-full absolute -right-2 -top-1 z-10"></div>

        {lineData.map((item, index) => {
          let n = index * -8;
          return (
            <div className="">
              <div
                className={`absolute ${item.oriantation} flex items-center gap-3 -rotate-[23deg]`}
              >
                <span>{firstText}</span>
                <span>{item.text}</span>
              </div>
              <div
                id="line"
                className={` ${item.width}  bg-sectionDisable h-[0.8px] rotate-[${n}deg]  origin-bottom-right   rounded`}
              >
                <div className="w-2 h-2 bg-sectionDisable rounded-full absolute left-0 -top-1 "></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
