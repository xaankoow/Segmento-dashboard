import React, { useEffect, useState } from "react";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import PageTitle from "../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle";
import RotateLine from "../../component/shared/rotateLine";
import {
  lineData,
  lineData3,
  lineData2,
} from "../../variables/copyWritingFeature";
import { ImageContainer } from "../../assets/img/IMG/index";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Canvas from "../../component/shared/Canvas/Canvas";

export default function TitleCopywriter() {
  const [keyWordValue, setKeyWordValue] = useState("");
  const [title, setTitle] = useState(false);
  const [handleCopy, setHandleCopy] = useState(false);
  const [activeRow, setActiveRow] = useState(0);
  const [handleCopyIssue, setHandleCopyIssue] = useState(false);
  // copy
  const copyIssue = (arrayData) => {
    var myListOutput = "";
    const checkTitleValue = title && keyWordValue.length > 0 && keyWordValue;
    for (var i = 0; i < arrayData.length; i++) {
      //check if list is NOT the last in the array, if last don't output a line break
      if (i != arrayData.length - 1) {
        let lineItem =
          arrayData[i].textUp +
          " " +
          checkTitleValue +
          " " +
          arrayData[i].text +
          "\n";
        myListOutput = myListOutput + lineItem;
      } else {
        let lineItem =
          arrayData[i].textUp + " " + checkTitleValue + " " + arrayData[i].text;
        myListOutput = myListOutput + lineItem;
      }
    }
    setHandleCopyIssue(true);
    setTimeout(() => {
      setHandleCopyIssue(false);
    }, 500);
    navigator.clipboard.writeText(myListOutput);
  };

  const copyItem = (data, index) => {
    navigator.clipboard.writeText(data);
    setHandleCopy(true);
    setTimeout(() => {
      setHandleCopy(false);
    }, 500);
    setActiveRow(index);
  };
  return (
    <>
      <PageTitle title={"ابزار کپی رایتینگ عنوان (Title Copywriter)"} />
      <div className="mx-9 mt-9 mb-7">
        <AuthInput
          textLabelInput={"درج کلمه کلیدی"}
          classes={"w-full "}
          handleChange={setKeyWordValue}
          handleChangeValue={() => setTitle(false)}
        />
      </div>
      <AuthButton
        textButton={"تولید عنوان"}
        classes={"mx-auto"}
        handlerClick={() => setTitle(true)}
      />
      <div className="border border-sectionDisable rounded-3 relative h-[352px] mx-9 mt-7 flex items-center">
        <RotateLine
          lineData={lineData}
          lineChartClass={""}
          title={"موضوعات مقایسه‌ای"}
          degree={"rotate-[23deg]"}
        />

        <button
          className="btn-secondary mr-[18px] mt-24 flex items-center gap-3 z-10 relative"
          onClick={() => copyIssue(lineData)}
        >
          <span
            className={
              handleCopyIssue
                ? `flex tooltip tooltip-bottom absolute right-[45px] -bottom-12 rounded bg-[#ffffff] `
                : "  hidden"
            }
          >
            کپی شد!
          </span>
          <img src={ImageContainer.copyIcon} alt="copyIcon" /> کپی موضوعات
        </button>
        <div className=" absolute flex flex-col right-[485px] gap-[18px] top-[43px] hover:text-primary">
          {lineData.map((item, index) => {
            return (
              <div
                className={` flex gap-3 items-center relative hover:text-primary`}
                onClick={() =>
                  copyItem(
                    item.textUp + " " + keyWordValue + " " + item.text,
                    index
                  )
                }
              >
                {item.textUp && <span>{item.textUp}</span>}
                <span className="text-silver">
                  {title && keyWordValue.length > 0 && keyWordValue}
                </span>
                {item.text && <span>{item.text}</span>}
                <div class=" absolute left-[14px] content_copy_blue w-4 h-5 "></div>
                {activeRow === index ? (
                  <span
                    className={
                      handleCopy
                        ? `flex tooltip tooltip-left absolute ${item.oriantation} rounded bg-[#ffffff] `
                        : "  hidden"
                    }
                  >
                    کپی شد!
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="border border-sectionDisable rounded-3 relative h-[900px] mx-9 mt-7 flex items-center ">
        {/* <RotateLine
          lineData={lineData2}
          lineChartClass={""}
          title={"موضوعات سوالی "}
          degree={"rotate-[20deg]"}
        />
        <button
          className="btn-secondary mr-[18px] mt-24 flex items-center gap-3 z-10"
          onClick={() => copyIssue(lineData2)}
        >
          <img src={ImageContainer.copyIcon} alt="copyIcon" /> کپی موضوعات
        </button>
        <div className=" absolute flex flex-col right-[485px] gap-[18px] top-[43px]">
          {lineData2.map((item, index) => {
            return (
              <div
                className={` flex gap-3 items-center relative `}
                onClick={() =>
                  copyItem(
                    item.textUp + " " + keyWordValue + " " + item.text,
                    index
                  )
                }
              >
                {item.textUp && <span>{item.textUp}</span>}
                <span className="text-silver">
                  {title && keyWordValue.length > 0 && keyWordValue}
                </span>
                {item.text && <span>{item.text}</span>}
                <div class=" absolute left-[14px] content_copy_blue w-4 h-5 "></div>
                {activeRow === index ? (
                  <span
                    className={
                      handleCopy
                        ? `flex tooltip tooltip-left absolute ${item.oriantation} rounded bg-[#ffffff] `
                        : "  hidden"
                    }
                  >
                    کپی شد!
                  </span>
                ) : null}
              </div>
            );
          })}
        </div> */}

        <Canvas/>
      </div>
    </>
  );
}
