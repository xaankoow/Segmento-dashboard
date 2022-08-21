import React, { useEffect, useRef, useState } from "react";

export default function SelectBox({
  optionItems,
  title,
  handlechange,
  select,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const handleopenSelectBox = (e) => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col gap-3 ">
      <span>{title}</span>
      <div className="rounded-lg border border-[#D9D9D9] relative">
        <select
          id="large"
          ref={ref}
          onClick={handleopenSelectBox}
          className=" h-[45px] px-4 w-full text-base  rounded-lg border border-[#D9D9D9] text-[#7D7D7D] focus:border-[#D9D9D9] checked:border-[#D9D9D9]"
          onChange={(e) => handlechange(e)}
        >
          <option
            value={0}
            selected={select == 0 ? true : false}
            className="text-[#7D7D7D]"
            disabled
           
          >
            لطفا یک گزینه را انتخاب کنید
          </option>
          {optionItems &&
            optionItems.map((item, index) => {
              return (
                <option
                  value={index + 1}
                  selected={select == index + 1 ? true : false}
                 
                >
                  {item}
                </option>
              );
            })}
        </select>
        <img
          src="/img/dashboard/nav_right/down.svg"
          alt="down"
          className={
            open
              ? "rotate-180 absolute left-3 top-[18px]"
              : "absolute left-3 top-[18px]"
          }
        />
      </div>
    </div>
  );
}
