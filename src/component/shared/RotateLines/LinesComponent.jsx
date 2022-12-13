import React, { useState } from "react";
import CreateRotateLine from ".";
import { ImageContainer } from "../../../assets/img/IMG";

export default function LinesComponent({
  lineData,
  copyIssue,
  keyWordValue,
  title,
  titleName,
  classname,
  isBulk,
}) {
  const [handleCopyIssue, setHandleCopyIssue] = useState(false);
  const [handleCopy, setHandleCopy] = useState(false);
  const [activeRow, setActiveRow] = useState(0);
  // check the item to copy them by text
  const [text, setText] = useState("");
  const handleCopyTitle = () => {
    if (isBulk) {
      copyIssuee(lineData);
    } else {
      copyIssue(lineData);
    }

    setHandleCopyIssue(true);
    setTimeout(() => {
      setHandleCopyIssue(false);
    }, 500);
  };
  // copy

  const copyItem = (data, index) => {
    navigator.clipboard.writeText(data);
    setHandleCopy(true);
    setTimeout(() => {
      setHandleCopy(false);
    }, 500);
    setActiveRow(index);
  };
  const copyText = (textUp, keyWordValue, text, id) => {
    copyItem(textUp + " " + keyWordValue + " " + text, id);
    setText(textUp + " " + keyWordValue + " " + text);
  };
  // just for title copy bulk
  const copyIssuee = (arrayData) => {
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

  return (
    <div
      className={`border border-sectionDisable rounded-3 relative ${
        classname && classname.height
      } mx-9 mt-7 flex items-center pr-5`}
    >
      <div className="w-[20px] h-[2px] bg-primary rotate-90 rounded-2xl absolute -right-[9px]" />
      <div className="flex items-center gap-3">
        <span>{titleName}</span>
        {isBulk && keyWordValue}
      </div>

      <CreateRotateLine array={lineData} />

      <button
        className="btn-secondary absolute mt-24 flex items-center gap-3 z-10 "
        onClick={() => handleCopyTitle()}
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
      <div className={`  flex flex-col ${classname && classname.marginRight} ${classname && classname.marginTop} gap-[18px] hover:text-primary`}>
        {lineData.map((item, index) => {
          return (
            <div
              className={` flex gap-3  items-center hover:text-primary`}
              onClick={() =>
                copyText(item.textUp, keyWordValue, item.text, item.id)
              }
            >
              <div className={`flex gap-3 showCopy relative items-center`}>
                {item.textUp && <span>{item.textUp}</span>}
                <span className="text-silver hover:text-primary ">
                  {title && keyWordValue.length > 0 && keyWordValue}
                </span>
                {item.text && <span>{item.text}</span>}
                <div class=" absolute left-[14px] content_copy_blue w-4 h-5 "></div>
                <img
                  src={ImageContainer.darkBlueCopy}
                  className="hidden"
                  alt=""
                />
                {text === item.textUp + " " + keyWordValue + " " + item.text &&
                activeRow === item.id ? (
                  <span
                    className={
                      handleCopy
                        ? `flex tooltip tooltip-left absolute -left-4  rounded bg-[#ffffff] `
                        : "  hidden"
                    }
                  >
                    کپی شد!
                  </span>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
