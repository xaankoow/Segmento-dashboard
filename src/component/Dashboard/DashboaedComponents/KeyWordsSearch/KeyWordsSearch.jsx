import { data } from "autoprefixer";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

export default function KeyWordsSearch({
  NothingSearch,
  dataItems,
  secoundSearch,
  radioClickedHandler,
  inputPlaceHolder,
  usedBySection,
  getRadioValue,
  radioValue,
  value,
  keywords,
}) {
  const SCTN = usedBySection != undefined ? usedBySection.split("/") : "";
  const [inputClick, setInputClick] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  const [radioText, setRadioText] = useState("همه عبارات");
  const [clicked, setClicked] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [placeholderPadding, setplaceholderPadding] = useState("");
  const toggle = (index) => {
    if (clicked === index) {
      // if active close
      return setClicked(null);
    }
    setClicked(index);
  };

  const ref = useRef();
  useEffect(() => {
    setplaceholderPadding(radioText.length);
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const handleDropDownItem = (sectionUsed, layOutUsed) => {
    switch (sectionUsed) {
      case "financialReports":
        switch (layOutUsed) {
          case "search":
            return (
              <div
                className={
                  "flex flex-col w-full border border-t-0 pr-3 rounded z-20 top-[45px] border-[#0000000a] absolute bg-[#ffffff] h-[150px] overflow-y-scroll"
                }
                ref={ref}
              >
                <div className="flex items-center gap-2 mt-3">
                  <input
                    type="radio"
                    className="w-4 h-4"
                    name="radio"
                    checked={radioValue === "شماره فاکتور"}
                    onClick={(e) => {
                      getRadioValue("شماره فاکتور");
                      // radioClickedHandler(e);
                    }}
                    value="1"
                  />
                  <span>شماره فاکتور</span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <input
                    type="radio"
                    className="w-4 h-4"
                    name="radio"
                    onClick={(e) => {
                      getRadioValue("نوع اشتراک");
                      // radioClickedHandler(e);
                    }}
                    value="2"
                  />
                  <span>نوع اشتراک </span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <input
                    type="radio"
                    className="w-4 h-4"
                    name="radio"
                    onClick={(e) => {
                      getRadioValue("تاریخ خرید");
                      // radioClickedHandler(e);
                    }}
                    value="3"
                  />
                  <span>تاریخ خرید </span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <input
                    type="radio"
                    className="w-4 h-4"
                    name="radio"
                    onClick={(e) => {
                      getRadioValue("تاریخ انقضا");
                      // radioClickedHandler(e);
                    }}
                    value="4"
                  />
                  <span> تاریخ انقضا </span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <input
                    type="radio"
                    className="w-4 h-4"
                    name="radio"
                    onClick={(e) => {
                      getRadioValue("مبلغ");
                      // radioClickedHandler(e);
                    }}
                    value="5"
                  />
                  <span>مبلغ </span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <input
                    type="radio"
                    className="w-4 h-4"
                    name="radio"
                    onClick={(e) => {
                      getRadioValue("وضعیت پرداخت");
                      // radioClickedHandler(e);
                    }}
                    value="6"
                  />
                  <span>وضعیت پرداخت </span>
                </div>
                <div className="flex items-center gap-2 mt-3 mb-3">
                  <input
                    type="radio"
                    className="w-4 h-4"
                    name="radio"
                    onClick={(e) => {
                      getRadioValue("عملیات");
                      // radioClickedHandler(e);
                    }}
                    value="7"
                  />
                  <span>عملیات </span>
                </div>
              </div>
            );

          case "sort":
            return (
              <div
                className={
                  "flex flex-col w-full border border-t-0 pr-3 rounded z-20 top-[45px] border-[#0000000a] absolute bg-[#ffffff]  overflow-y-scroll"
                }
                ref={ref}
              >
                <div className="flex items-center gap-2 mt-3">
                  <input
                    type="radio"
                    className="w-4 h-4"
                    name="radio"
                    onClick={(e) => {
                      getRadioValue("تاریخ خرید");
                      radioClickedHandler(e);
                    }}
                    value="4"
                  />
                  <span>تاریخ خرید </span>
                </div>
                <div className="flex items-center gap-2 mt-3 mb-3">
                  <input
                    type="radio"
                    className="w-4 h-4"
                    name="radio"
                    onClick={(e) => {
                      getRadioValue("تعداد خرید");
                      radioClickedHandler(e);
                    }}
                    value="4"
                  />
                  <span>تعداد خرید </span>
                </div>
              </div>
            );
          default:
            break;
        }
        break;

      default:
        break;
    }
  };

  return (
    <div
      className="flex flex-col items-center relative  w-full "
      id="keyWordSearch"
      ref={ref}
    >
      {/* <div className="h-10 w-[334px] flex flex-col "> last */}
      <div className=" w-full flex flex-col ">
        <div className="flex items-center relative searchBox">
          <div className=" grow">
            <input
              id="keyWordSearchBoxFilter"
              type="text"
              style={{
                paddingRight:
                  SCTN[0] == "financialReports"
                    ? "18px"
                    : radioText.length >= 18
                    ? "127px"
                    : radioText.length >= 13
                    ? "98px"
                    : "90px",
              }}
              className={`${
                !radioText
                  ? `pr-2 w-full  h-11 ${
                      SCTN[1] == "sort"
                        ? " border-l-0 border-y-2 border-r-2 cursor-pointer rounded-r"
                        : "border-2"
                    } border-[#D9D9D9] border-b-[#7D7D7D] placeholder-[#D9D9D9]`
                  : NothingSearch
                  ? "disableInput w-full placeholder-[#7D7D7D]  h-11"
                  : ` h-11 w-full ${
                      SCTN[1] == "sort"
                        ? " border-l-0 border-y-2 border-r-2 cursor-pointer rounded-r"
                        : "border-2"
                    } border-[#D9D9D9] border-b-[#7D7D7D] placeholder-[#D9D9D9]`
              }
                  rounded-l-none`}
              readOnly={SCTN[1] == "sort" ? true : false}
              value={value ? value : null}
              disabled={NothingSearch ? true : false}
              placeholder={
                inputPlaceHolder != undefined
                  ? inputPlaceHolder
                  : "جستجو کلمه کلیدی"
              }
              onChange={(e) => secoundSearch(e)}
              onClick={() => {
                setInputClick(true);
                setButtonClick(true);
                 setOpen(!open) 
              }}
              onBlur={() => setInputClick(!inputClick)}
            />
          </div>

          {SCTN[0] == "financialReports" ? null : (
            <div
              className={
                !radioText
                  ? "hidden"
                  : "text-xs min-w-[49px] h-[30px] px-1 py-1 rounded flex flex-col items-center justify-center bg-secondary text-[#7D7D7D] absolute right-2"
              }
            >
              {radioText}
            </div>
          )}

          <button
            disabled={NothingSearch ? true : false}
            onClick={() => {
               setOpen(!open);
            }}
            className={
              inputClick
                ? " left-1 h-11 border-2 border-[#D9D9D9] border-b-[#0A65CD] border-r-0 w-[44px] rounded-l flex justify-center items-center"
                : NothingSearch
                ? "btnDisabled  bg-[#D9D9D9] placeholder-[#7D7D7D] border-0  left-1 h-11 w-[44px] rounded-l flex justify-center items-center"
                : " left-1 h-11 border-2 border-[#D9D9D9] border-b-[#7D7D7D] border-r-0 w-[44px] rounded-l flex justify-center items-center"
            }
          >
            <img
              src={
                open
                  ? "/img/dashboard/searchBox/arrow_down_ios_new.svg"
                  : "/img/dashboard/searchBox/arrow_up_ios_new.svg"
                // ? "../../../../img/dashboard/searchBox/arrow_down_ios_new.svg"
                // : "../../../../img/dashboard/searchBox/arrow_up_ios_new.svg"
              }
              alt="arrow"
            />
          </button>
        </div>
      </div>
      {open ? (
        SCTN[0] == "financialReports" ? (
          handleDropDownItem(SCTN[0], SCTN[1])
        ) : (
          // <div
          //   className={
          //     "flex flex-col w-full border border-t-0 pr-3 rounded z-20 top-[45px] border-[#0000000a] w-[330px] absolute bg-[#ffffff] h-[150px] overflow-y-scroll"
          //   }
          // > last
          <div
            className={
              "flex flex-col w-full border border-t-0 pr-3 rounded z-20 top-[45px] border-[#0000000a] absolute bg-[#ffffff] h-[150px] overflow-y-scroll"
            }
          >
            <div className="flex gap-2 mt-3 items-center">
              <input
                type="radio"
                className="w-4 h-4"
                name="radio"
                checked={radioText === "همه عبارات" && true}
                onClick={(e) => {
                  setRadioText("همه عبارات");
                  radioClickedHandler(e);
                }}
                value="1"
              />
              <span>همه عبارات</span>
            </div>
            <div className="flex gap-2 mt-3 items-center">
              <input
                type="radio"
                className="w-4 h-4"
                name="radio"
                onClick={(e) => {
                  setRadioText("شامل این عبارت");
                  radioClickedHandler(e);
                }}
                value="2"
              />
              <span> شامل این عبارت باشد </span>
            </div>
            <div className="flex gap-2 mt-3 items-center">
              <input
                type="radio"
                className="w-4 h-4"
                name="radio"
                onClick={(e) => {
                  setRadioText("تکرار عینی این عبارت");
                  radioClickedHandler(e);
                }}
                value="3"
              />
              <span> تکرار عینی این عبارت باشد </span>
            </div>
            <div className="flex gap-2 mt-3 mb-3 items-center">
              <input
                type="radio"
                className="w-4 h-4"
                name="radio"
                onClick={(e) => {
                  setRadioText("بدون این عبارت");
                  radioClickedHandler(e);
                }}
                value="4"
              />
              <span>بدون این عبارت </span>
            </div>
          </div>
        )
      ) : null}
    </div>
  );
}
