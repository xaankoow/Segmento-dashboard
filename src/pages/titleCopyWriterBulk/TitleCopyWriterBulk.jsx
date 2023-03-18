import React, { useState } from "react";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import PageTitle from "../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle";
import add_chart_svg from "../../assets/img/dashboard/table/add_chart.svg";
import {
  categoriesQuestion,
  lineData,
  lineData2,
  lineData3,
} from "../../variables/copyWritingFeature";
import { ImageContainer } from "../../assets/img/IMG";
import TextArea from "../../component/shared/TeaxtArea/TextArea";
import { useEffect } from "react";
import LinesComponent from "../../component/shared/RotateLines/LinesComponent";
import { useDispatch } from "react-redux";
import { getLineLength } from "../../component/Utils/textOparation";
import { titleCopyWriterAction } from "../../component/Redux/Action/titleCopyWriter";

export default function TitleCopyWriterBulk() {
  const [keyWordValue, setKeyWordValue] = useState("");
  const [title, setTitle] = useState(false);
  const [copyWriterBulkLineData, setCopyWriterBulkLineData] = useState([]);
  

  const [handleCopyAllIssue, setHandleCopyAllIssue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {});
  
  const createTitleButton = async() => {
    let listOfKeyWords = [];
    let innerLineData=[]
    setTitle(true)
    listOfKeyWords = keyWordValue.split(/\r?\n/);
    let checkedLimit=await dispatch(titleCopyWriterAction(listOfKeyWords));
    if (checkedLimit) {
      innerLineData=listOfKeyWords.filter((el)=> el != "")
    }
    setCopyWriterBulkLineData(innerLineData)
  };

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
    copyWriterBulkLineData.map((item) => {
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

  const handleLimitParagraph=(areaText)=>{
    var filteredTextLine=areaText;
    let getMyTextLineLength= getLineLength(areaText)
    
    if(getMyTextLineLength> 100){
      filteredTextLine="";
     var myKeyWordLine=areaText.split(/\r\n|\r|\n/)
     for (let i = 0; i < 100; i++) {
      filteredTextLine+=myKeyWordLine[i]+"\n"
     }
    }
    setKeyWordValue(filteredTextLine)
  }

  return (
    <>
      <PageTitle
        title={"ابزار عنوان‌نویس انبوه"}
        badgeApi={"titleCopyWriterBulk"}
        hasLimit={true}
      />
      <div className="mx-9 mt-9 mb-7">
        <div className="text-sm text-left pl-4">{Math.max(0,100-getLineLength(keyWordValue))}</div>
        <TextArea
          textLabelInput={"1. درج کلمات کلیدی (در هر خط فقط یک کلمه وارد کنید)"}
          classes={
            "w-full !h-[222px] border border-sectionDisable !p-5 !rounded-lg overflow-y-auto leading-relaxed"
          }
          handleChange={(e)=>100-getLineLength(keyWordValue)>=0|getLineLength(keyWordValue)>getLineLength(e)?handleLimitParagraph(e):getLineLength(e)}
          handleChangeValue={() =>
            setTitle(false)
          }
          value={keyWordValue}
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
        copyWriterBulkLineData.map((keyword, index) => {
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
        copyWriterBulkLineData.map((keyword, index) => {
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
        copyWriterBulkLineData.map((keyword, index) => {
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
