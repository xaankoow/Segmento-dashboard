import React, { useState } from "react";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import PageTitle from "../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle";
import RotateLine from "../../component/shared/rotateLine";
import add_chart_svg from "../../assets/img/dashboard/table/add_chart.svg";
import {
  categoriesQuestion,
  lineData,
  lineData2,
  lineData3,
} from "../../variables/copyWritingFeature";
import { ImageContainer } from "../../assets/img/IMG";
import SubmitForm from "../../component/Utils/Submit";
import TextArea from "../../component/shared/TeaxtArea/TextArea";
import { useEffect } from "react";

export default function TitleCopyWriterBulk() {
  const [keyWordValue, setKeyWordValue] = useState("");
  const [title, setTitle] = useState(false);
  const [handleCopy, setHandleCopy] = useState(false);
  const [activeRow, setActiveRow] = useState(0);
  const [handleCopyIssue, setHandleCopyIssue] = useState(false);
  const [handleCopyAllIssue, setHandleCopyAllIssue] = useState("");
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
  useEffect(() => {});
  let listOfKeyWords = [];

  const createTitleButton = () => {
    setTitle(true);
    return (listOfKeyWords = keyWordValue.split(/\r?\n/));
  };
  // list of value that we write in textArea
  listOfKeyWords = keyWordValue.split(/\r?\n/);
  var filtered = listOfKeyWords.filter(function (el) {
    return el != "";
  });
  //

  const [radioCategoris, setRadioCategories] = useState(-1);
  const listAllItem = [];
  switch (radioCategoris) {
    case 0:
      listAllItem.push(...lineData);
      break;
    case 1:
      listAllItem.push(...lineData2);
      break;
    case 2:
      listAllItem.push(...lineData3);
      break;
    default:
      break;
  }

  const copyAll = (arrayData) => {
    var myListOutput = "";
    const checkTitleValue = title && keyWordValue.length > 0 && keyWordValue;
    listOfKeyWords.map((item) => {
      for (var i = 0; i < arrayData.length; i++) {
        //check if list is NOT the last in the array, if last don't output a line break
        if (i != arrayData.length - 1) {
          let lineItem =
            arrayData[i].textUp + " " + item + " " + arrayData[i].text + "\n";
          myListOutput = myListOutput + lineItem;
        } else {
          let lineItem =
            arrayData[i].textUp + " " + item + " " + arrayData[i].text + "\n";
          myListOutput = myListOutput + lineItem;
        }
      }
    });
    setHandleCopyAllIssue(true);
    setTimeout(() => {
      setHandleCopyAllIssue(false);
    }, 500);
    navigator.clipboard.writeText(myListOutput);
  };

  return (
    <>
      <PageTitle
        title={"ابزار عنوان‌نویس انبوه"}
      />
      <div className="mx-9 mt-9 mb-7">
        <TextArea
          textLabelInput={
            "1. درج کلمات کلیدی (در هر خط فقط یک کلمه وارد کنید)"
          }
          classes={
            "w-full !h-[222px] border border-sectionDisable !p-5 !rounded-lg overflow-y-auto leading-relaxed"
          }
          handleChange={setKeyWordValue}
          handleChangeValue={() => setTitle(false)}
        />{" "}
      </div>
      <span className=" text-[10px] mx-11 ">2. انتخاب جنس موضوع</span>
      <div className="border border-sectionDisable rounded-lg mx-9 mb-4 flex justify-around h-[67px] items-center ">
        {categoriesQuestion.map((item, index) => {
          return (
            <div className="flex items-center " key={index}>
              <input
                type="radio"
                onClick={() => setRadioCategories(index)}
                name="categories"
              />
              <span className={radioCategoris === index ? "" : `text-silver `}>
                {item}
              </span>
            </div>
          );
        })}
      </div>
      <AuthButton
        textButton={"تولید عنوان"}
        classes={"mx-auto"}
        handlerClick={() => createTitleButton()}
      />
      <span className="text-[10px] mx-11 mt-7 mb-2">
        3. نمایش عناوین پیشنهادی
      </span>

      {radioCategoris === 0 && title && keyWordValue.length !== 0 ? (
        filtered.map((keyword, index) => {
          return (
            <div
              className={`border border-sectionDisable rounded-lg relative h-[352px] mx-9 flex items-center ${
                index > 0 && "mt-4"
              }`}
            >
              <RotateLine
                lineData={lineData}
                lineChartClass={""}
                title={"موضوعات مقایسه‌ای"}
                degree={"rotate-[23deg]"}
                isBlusk={true}
                keyword={keyword}
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
                        {title && keyWordValue.length > 0 && keyword}
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
          );
        })
      ) : (
        <div className="h-[70%] flex flex-col items-center justify-center gap-3  border border-sectionDisable rounded-lg  mx-9">
          <img src={add_chart_svg} alt="imgNothingSearch" />
          <span className="text-[#E5E5E5]">
            اطلاعاتی برای نمایش وجود ندارد!
          </span>
        </div>
      )}
      <button
        className="mx-9 btn-style mt-4 flex items-center gap-3 relative "
        onClick={() => copyAll(listAllItem)}
      >
        <span
          className={
            handleCopyAllIssue
              ? `flex tooltip tooltip-left absolute  top-0 right-[133px] rounded !text-[8px] bg-[#ffffff] `
              : "  hidden"
          }
        >
          کپی شد!
        </span>
        <img src={ImageContainer.copyIconWhite} alt="" />
        کپی همه{" "}
      </button>
    </>
  );
}
