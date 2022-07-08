import React from "react";

export default function PageTitle({
  numberRight,
  numberLeft,
  title,
  hasNumber,
}) {
  return (
    <div className="flex gap-6 items-center pr-4 w-full bg-[#FCFCFB] py-3">
      <div className="w-[20px] h-[2px] bg-[#001F43] rotate-90 rounded absolute -right-[9px]" />
      <span className="text-lg">{title}</span>
      {hasNumber && (
        <div className="flex items-center text-[#7D7D7D] bg-[#D9D9D9] rounded  px-2 ">
          <span className="text-[#7D7D7D] text-sm pt-[5px] pb-[2px]">
            {numberRight}
          </span>
          <hr className="w-4 bg-gray text-[#7D7D7D] rotate-90" />
          <span className="text-[#7D7D7D] text-sm pt-[5px] pb-[2px]">
            {numberLeft}
          </span>
        </div>
      )}
    </div>
  );
}
