import React from "react";
import { useNavigate } from "react-router";

export default function PageTitle({
  numberRight,
  numberLeft,
  title,
  hasNumber,
  closeIco
}) {

  const navigate = useNavigate();

  //TODO: check ico problem (new adding)
  return (
    <div className="flex justify-between gap-6 items-center pr-4 w-full bg-[#FCFCFB] py-3">
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
      {closeIco&&(
      <div className='flex justify-center ml-6 items-center p-1 rounded-[3px] cursor-pointer hover:bg-[#F352421A]' >
        <div className='close_modal_ico' onClick={() => navigate(-1)}></div>
      </div>
      )}
    </div>
  );
}
