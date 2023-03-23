import React, { useEffect, useRef, useState } from "react";
import arrow_down_ios_new_svg from "../../../assets/img/dashboard/searchBox/arrow_down_ios_new.svg";
import arrow_up_ios_new_svg from "../../../assets/img/dashboard/searchBox/arrow_up_ios_new.svg";
import { ImageContainer } from "../../../assets/img/IMG";

export default function ComboBox({
  radioTextItems,
  checkedItem,
  searchBox,
  radioClickedHandler,
  selectedItem,
  placeholder,
  icons,
}) {
  const [radioText, setRadioText] = useState("");
  const ref = useRef();
  const radioRef = useRef();

  const [inputClick, setInputClick] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);
  return (
    <div
      className="flex flex-col items-center relative "
      id="keyWordSearch"
      ref={ref}
    >
      <div className=" w-full flex flex-col ">
        <div className="flex items-center relative ">
          <div className=" grow">
            <input
              type="text"
              className={
                "border-2 w-full border-[#D9D9D9] border-b-[#7D7D7D] focus:border-b-[#0A65CD] placeholder-[#D9D9D9] pr-2 h-11 border-l-0 rounded-l-none "
              }
              readOnly={true}
              placeholder={!radioText && placeholder}
              value={radioText ? radioText : selectedItem}
              onClick={() => {
                setInputClick(true);
                setOpen(!open);
              }}
              onBlur={() => setInputClick(!inputClick)}
              defaultValue={checkedItem}
            />
          </div>
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className={
              inputClick
                ? " left-1 h-11 border-2 border-[#D9D9D9] border-b-[#0A65CD] border-r-0 w-[44px] rounded-l flex justify-center items-center"
                : " left-1 h-11 border-2 border-[#D9D9D9] border-b-[#7D7D7D] border-r-0 w-[44px] rounded-l flex justify-center items-center"
            }
          >
            <img
              src={
                open ? arrow_up_ios_new_svg : arrow_down_ios_new_svg
                // ? "../../../../img/dashboard/searchBox/arrow_down_ios_new.svg"
                // : "../../../../img/dashboard/searchBox/arrow_up_ios_new.svg"
              }
              alt="arrow"
            />
          </button>
        </div>
      </div>
      {open ? (
        <div
          className={
            "flex flex-col w-full border border-t-0  rounded z-20 top-[45px] border-[#0000000a] absolute bg-[#ffffff]  pb-2 max-h-36 overflow-y-scroll"
          }
        >
          {radioTextItems &&
            radioTextItems.map((item, key) => {
              return (
                <div
                  className="flex gap-2 mt-1 items-center cursor-pointer pr-3 py-1 hover:bg-lightBlue"
                  onClick={(e) => {
                    setRadioText(item);
                    radioClickedHandler(item);
                  }}
                >
                  <input
                    type="radio"
                    className="w-4 h-4"
                    name="radio"
                    onClick={(e) => {
                      setRadioText(item);
                      radioClickedHandler(item);
                    }}
                    value={item}
                    checked={item == radioText ? true : false}
                    // ref={radioRef}
                  />
                  {icons ? (
                    <img src={icons[key]} alt={item} className="w-4 h-4" />
                  ) : null}
                  <span>{item} </span>
                </div>
              );
            })}
        </div>
      ) : null}
    </div>
  );
}
