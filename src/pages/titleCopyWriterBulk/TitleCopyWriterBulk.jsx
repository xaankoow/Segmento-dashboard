import React, { useState } from "react";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import PageTitle from "../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle";
import RotateLine from "../../component/shared/rotateLine";
import add_chart_svg from "../../assets/img/dashboard/table/add_chart.svg";
import { categoriesQuestion, lineData } from "../../variables/copyWritingFeature";
import { ImageContainer } from "../../assets/img/IMG";
import SubmitForm from "../../component/Utils/Submit";

export default function TitleCopyWriterBulk() {
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

  const createTitleButton = () => {
    setTitle(true);
  };

  const [radioCategoris,setRadioCategories]=useState(-1)


  return (
    <>
      <PageTitle
        title={"ابزار کپی رایتینگ عنوان انبوه (Bulk Title Copywriter)"}
      />
      <div className="mx-9 mt-9 mb-7">
        
          <AuthInput
            textLabelInput={"1. درج کلمات کلیدی"}
            classes={"w-full !h-[222px]"}
            handleChange={setKeyWordValue}
            handleChangeValue={() => setTitle(false)}
          />{" "}
      
      </div>
      <span className=" text-[10px] mx-11">2. انتخاب موضوع</span>
      <div className="border border-sectionDisable rounded-lg mx-9 mb-4 flex justify-around h-[67px] items-center">
        {
          categoriesQuestion.map((item,index)=>{
            return <div className="flex items-center " key={index}>
               <input type="radio"  onClick={()=>setRadioCategories(index)} name="categories"/>
                <span className={radioCategoris===index ? "":`text-silver `}>{item}</span>
            </div>
          })
        }
      </div>
      <AuthButton
        textButton={"تولید عنوان"}
        classes={"mx-auto"}
        handlerClick={() => createTitleButton()}
      />
      <span className="text-[10px] mx-11 mt-7 mb-2">3. نمایش عناوین پیشنهادی</span>

      {title && keyWordValue.length !== 0 ? (
        <div className="border border-sectionDisable rounded-3 relative h-[352px] mx-9 flex items-center">
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
      ) : (
        <div className="h-[70%] flex flex-col items-center justify-center gap-3  border border-sectionDisable rounded-lg  mx-9">
          <img src={add_chart_svg} alt="imgNothingSearch" />
          <span className="text-[#E5E5E5]">
            اطلاعاتی برای نمایش وجود ندارد!
          </span>
        </div>
      )}
    </>
  );
}
