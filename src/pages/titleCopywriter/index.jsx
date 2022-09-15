import React from "react";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import PageTitle from "../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle";
import RotateLine from "../../component/shared/rotateLine";
import { lineData } from "../../variables/copyWritingFeature";

export default function TitleCopywriter() {
  return (
    <>
      <PageTitle title={"ابزار کپی رایتینگ عنوان (Title Copywriter)"} />
      <div className="mx-9 mt-9 mb-7">
        <AuthInput textLabelInput={"درج کلمه کلیدی"} classes={"w-full "}/>
      </div>
    <AuthButton textButton={"تولید عنوان"} classes={"mx-auto"}/>
      <RotateLine lineData={lineData} firstText={"آب"} title={"gsgd"}/>
    </>
  );
}
