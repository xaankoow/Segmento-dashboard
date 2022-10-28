import React, { useState } from "react";
import { ticketCategories,imgCategories } from "../../../../variables/support";

export default function ChooseCategories({link,clickedItem,setClicked,setCategoriValue}) {
 
  return (
    <div className="my-7">
      <div className="border border-sectionDisable rounded-lg mx-9 py-7 flex justify-center">
        <span className="m-auto">
          لطفا از دسته بندی های زیر برای ارسال تیکت یک مورد را انتخاب کنید:
        </span>
      </div>
      <div className="flex mt-16 flex-wrap gap-12 justify-center max-w-[880px] mx-auto">
        {ticketCategories.map((item, index) => {
          return (
            <div
            id="CATEGORIES"
              onClick={() => {setClicked(index);setCategoriValue(item)}}
              className={`w-[260px] h-[140px] border border-sectionDisable  hover:grayscale-0 rounded-lg relative flex flex-col justify-center items-center hover:border-[#0AC7E2]  active:border-[#0AC7E2]  focus:border-primary cursor-pointer ${
                clickedItem === index && "border-[#0AC7E2]"
              }`}
            >
              <img src={imgCategories[index]} alt="" className={`w-[80px] h-[80px] mx-auto absolute top-3 hover:grayscale-0   ${ clickedItem === index ? "grayscale-0" :"grayscale"}`}/>
              <span className="absolute mx-auto bottom-3">{item}</span>
            </div>
          );
        })}
      </div>
      <div className="flex mt-20 justify-center mx-9">
        <button
          className="btn-style"
          disabled={clickedItem == -1 ? true : false}
          onClick={()=>link(2)}
        >
          <img src="" alt="" /> ادامه فرایند
        </button>
      </div>
    </div>
  );
}
