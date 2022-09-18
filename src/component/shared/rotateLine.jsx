import React from "react";

export default function RotateLine({
  lineData,
  firstText,
  title,
  lineChartClass,
  degree,
}) {
  return (
    <div className={` absolute  flex items-center h-[348px] pb-14 `}>
      <div className="flex items-baseline justify-center gap-5 ">
        <div className="flex justify-between gap-6 items-center pr-4      ">
          <div className="w-[20px] h-[2px] bg-primary rotate-90 rounded-2xl absolute -right-[9px]" />
          <span className="text-lg">{title}</span>
        </div>
        <div>
        <div className={`${degree} h-[65px]`}>
          <div className="w-3 h-3 bg-silver rounded-full  absolute -right-2 -top-1 z-10"></div>

          {lineData.map((item, index) => {
            let n = index * -8;
            return (
              <div
                id="line"
                className={` ${item.width}  bg-sectionDisable h-[0.8px] rotate-[${n}deg]  origin-bottom-right   rounded`}
              >
                <div className="w-2 h-2 bg-sectionDisable rounded-full absolute left-0 -top-1 "></div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
}
