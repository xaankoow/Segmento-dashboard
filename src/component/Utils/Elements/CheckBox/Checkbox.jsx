import React from "react";

export default function Checkbox(handleClick, id, checked,label) {
  return (
    <label className=" text-[#083C78] pointer-events-auto relative translate-y-0 cursor-pointer">
      {label}
      <input
        type={"checkbox"}
        id={id}
        checked={checked}
        className={label ?"checkbox rounded border border-[#D9D9D9] ml-2 bg-[#0A65CD] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border" :"checkbox rounded border border-[#D9D9D9] bg-[#0A65CD] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border"}
        onClick={(e) => handleClick(e)}
      />
    </label>
  );
}
