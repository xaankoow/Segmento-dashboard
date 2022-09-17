import React from "react";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import AuthInput from "../../component/Auth/authInput/AuthInput";
import PageTitle from "../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle";
import RotateLine from "../../component/shared/rotateLine";
import { lineData,lineData3 } from "../../variables/copyWritingFeature";
import {ImageContainer} from "../../assets/img/IMG/index";

export default function TitleCopywriter() {
  return (
    <>
      <PageTitle title={"ابزار کپی رایتینگ عنوان (Title Copywriter)"} />
      <div className="mx-9 mt-9 mb-7">
        <AuthInput textLabelInput={"درج کلمه کلیدی"} classes={"w-full "} />
      </div>
      <AuthButton textButton={"تولید عنوان"} classes={"mx-auto"} />
      <div className="border border-sectionDisable rounded-3 relative h-[352px] mx-9 mt-7 flex items-center">
        <RotateLine lineData={lineData} lineChartClass={""}  title={"موضوعات مقایسه‌ای"}/>
        <button className="btn-secondary mr-[18px] mt-24 flex items-center gap-3 z-10"><img src={ImageContainer.copyIcon} alt="copyIcon" /> کپی موضوعات</button>
        <div className=" absolute flex flex-col right-[485px] gap-[18px] top-[43px]">
          {lineData.map((item) => {
            return <div className={` flex gap-3 items-center `}>
             { item.textUp && <span>{item.textUp}</span>}
              <span className="text-silver">تهران</span>
            { item.text && <span>{item.text}</span>}
            </div>;
          })}
        </div>
      </div>
      
    </>
  );
}
