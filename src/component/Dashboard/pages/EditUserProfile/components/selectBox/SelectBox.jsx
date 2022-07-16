import React from "react";

export default function SelectBox({ optionItems, title, handlechange }) {
  return (
    <div className="flex flex-col gap-3 ">
      <span>{title}</span>
      <div className="rounded-lg border border-[#D9D9D9] relative">
        <select
          id="large"
          class=" h-[45px] px-4 w-full text-base  rounded-lg border border-[#D9D9D9] text-[#7D7D7D] focus:border-[#D9D9D9] checked:border-[#D9D9D9]"
          onChange={(e) => handlechange(e)}
        >
          <option selected className="text-[#7D7D7D]" disabled>
            لطفا یک گزینه را انتخاب کنید
          </option>
          {optionItems &&
            optionItems.map((item, index) => {
              return <option value={index + 1}>{item}</option>;
            })}
        </select>
        <img src="./img/dashboard/nav_right/down.svg" alt="down" className="absolute left-3 top-[18px]" />
      </div>
    </div>
  );
}
