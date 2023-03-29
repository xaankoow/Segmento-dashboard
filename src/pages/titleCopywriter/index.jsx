import React, { useState } from "react";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import PageTitle from "../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle";
import add_chart_svg from "../../assets/img/dashboard/table/add_chart.svg";
import {
  lineData,
  lineData3,
  lineData2,
  categoriesQuestion,
} from "../../variables/copyWritingFeature";
import { ImageContainer } from "../../assets/img/IMG/index";
import LinesComponent from "../../component/shared/RotateLines/LinesComponent";
import SubmitForm from "../../component/Utils/Submit";
import { useDispatch } from "react-redux";
import { titleCopyWriterAction } from "../../component/Redux/Action/titleCopyWriter";

export default function TitleCopywriter() {
  const [keyWordValue, setKeyWordValue] = useState("");
  const [title, setTitle] = useState(false);
  const [inputLastValue, setinputLastValue] = useState("");
  const [handleCopyAllIssue, setHandleCopyAllIssue] = useState("");
  const dispatch = useDispatch();

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

    navigator.clipboard.writeText(myListOutput);
  };

  const listAllItem = [];
  listAllItem.push(...lineData);
  listAllItem.push(...lineData2);
  listAllItem.push(...lineData3);

  const copyAll = (arrayData) => {
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
    setHandleCopyAllIssue(true);
    setTimeout(() => {
      setHandleCopyAllIssue(false);
    }, 500);
    navigator.clipboard.writeText(myListOutput);
  };

  const buttonHandler = async () => {
    setTitle(true);
    if (keyWordValue.length > 0) {
      const checkedLimit = await dispatch(titleCopyWriterAction(keyWordValue));
      if (checkedLimit) {
        setinputLastValue(keyWordValue)
      }
    } else {
    }
  };

  return (
    <>
      <PageTitle title={"‌ابزار عنوان‌نویس"} hasLimit={true} badgeApi={"titleCopyWriter"}/>
      <SubmitForm submitFun={buttonHandler}>
        <div className="mx-9 mt-9 mb-7">
          <AuthInput
            textLabelInput={"درج کلمه کلیدی"}
            classes={"w-full "}
            handleChange={setKeyWordValue}
          />
        </div>
        <AuthButton
          textButton={"تولید عنوان"}
          classes={"mx-auto"}
          handlerClick={() => buttonHandler()}
        />
      </SubmitForm>
      {title !== false && keyWordValue.length > 0 ? (
        <>
          {categoriesQuestion.map((category) => {
            return (
              <LinesComponent
                titleName={category.title}
                copyIssue={copyIssue}
                keyWordValue={inputLastValue}
                lineData={category.lineData}
                title={title}
                classname={category.classname}
              />
            );
          })}
        </>
      ) : (
        <div className="h-[70%] flex flex-col items-center justify-center gap-3  border border-sectionDisable rounded-lg mt-7 mx-9">
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
