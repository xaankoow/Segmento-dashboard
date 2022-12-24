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
import LinesComponent from "../../component/shared/RotateLines/LinesComponent";
import {
  handleLowOffLimitCount,
  resetLimitState,
} from "../../component/Redux/Action/workSpace";
import { useDispatch } from "react-redux";

export default function TitleCopyWriterBulk() {
  const [keyWordValue, setKeyWordValue] = useState("");
  const [title, setTitle] = useState(false);

  const [handleCopyAllIssue, setHandleCopyAllIssue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {});
  let listOfKeyWords = [];

  const createTitleButton = () => {
    setTitle(true)
    // if (keyWordValue.length > 0) setinputLastValue(keyWordValue);
    dispatch(handleLowOffLimitCount("TITLE_BUILDER_BATCH", 1));
    dispatch(resetLimitState());
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
    filtered.map((item) => {
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

  const handleSelectCategory = (index) => {
    setRadioCategories(index);
    setTitle(false)
  };

  return (
    <>
      <PageTitle
        title={"ابزار عنوان‌نویس انبوه"}
        badgeApi={"titleCopyWriterBulk"}
        hasLimit={true}
      />
      <div className="mx-9 mt-9 mb-7">
        <TextArea
          textLabelInput={"1. درج کلمات کلیدی (در هر خط فقط یک کلمه وارد کنید)"}
          classes={
            "w-full !h-[222px] border border-sectionDisable !p-5 !rounded-lg overflow-y-auto leading-relaxed"
          }
          handleChange={setKeyWordValue}
          handleChangeValue={() =>
            setTitle(false)
          }
        />{" "}
      </div>
      <span className=" text-[10px] mx-11 ">2. انتخاب جنس موضوع</span>
      <div className="border border-sectionDisable rounded-lg mx-9 mb-4 flex justify-around h-[67px] items-center ">
        {categoriesQuestion.map((item, index) => {
          return (
            <div className="flex items-center z-0" key={index}>
              <input
                type="radio"
                onClick={() => handleSelectCategory(index)}
                name="categories"
              />
              <span className={radioCategoris === index ? "" : `text-silver `}>
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
      <AuthButton
        textButton={"تولید عنوان"}
        disabled={radioCategoris === -1 ? true : false}
        classes={` mx-auto`}
        handlerClick={() => createTitleButton()}
      />
      <span className="text-[10px] mx-11 mt-7 mb-2">
        3. نمایش عناوین پیشنهادی
      </span>

      {radioCategoris === 0 && title && keyWordValue.length !== 0 ? (
        filtered.map((keyword, index) => {
          return (
            <LinesComponent
              titleName={"موضوعات مقایسه‌ای"}
              keyWordValue={keyword}
              lineData={lineData}
              isBulk={true}
              bluskId={index}
              title={title}
              classname={{
                height: "h-[352px]",
                marginRight: "-mr-3",
                marginTop: "",
              }}
            />
          );
        })
      ) : radioCategoris === 1 && title && keyWordValue.length !== 0 ? (
        filtered.map((keyword, index) => {
          return (
            <LinesComponent
              titleName={"موضوعات سوالی"}
              keyWordValue={keyword}
              lineData={lineData2}
              isBulk={true}
              title={title}
              classname={{
                height: "h-[900px]",
                marginRight: "-mr-3",
                marginTop: "-mt-10",
              }}
            />
          );
        })
      ) : radioCategoris === 2 && title && keyWordValue.length !== 0 ? (
        filtered.map((keyword, index) => {
          return (
            <LinesComponent
              titleName={"موضوعات متفرقه"}
              keyWordValue={keyword}
              isBulk={true}
              lineData={lineData3}
              title={title}
              classname={{
                height: "h-[594px]",
                marginRight: "-mr-3",
                marginTop: "",
              }}
            />
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
      <div className="flex relative">
        <button
          className={`mx-9 btn-style mt-4 flex items-center gap-3 `}
          disabled={title === false && true}
          onClick={() => copyAll(listAllItem)}
        >
          <img src={ImageContainer.copyIconWhite} alt="" />
          کپی همه{" "}
        </button>
        <span
          className={
            handleCopyAllIssue
              ? `flex tooltip tooltip-left absolute !right-44 top-3 items-center rounded bg-[#ffffff] `
              : "  hidden"
          }
        >
          کپی شد!
        </span>
      </div>
    </>
  );
}
