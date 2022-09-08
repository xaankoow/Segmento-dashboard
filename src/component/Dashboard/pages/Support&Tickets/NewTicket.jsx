import React, { useState } from "react";
import { helpText } from "../../../../variables/support";
import AuthInput from "../../../Auth/authInput/AuthInput";
import ComboBox from "../../../shared/comboBox/ComboBox";
import { ticketCategories } from "../../../../variables/support";
import AuthButton from "../../../Auth/authButton/AuthButton";
export default function NewTicket() {
  const [filterCategories, setFilterCategories] = useState("امور مالی");
  return (
    <div className="my-7 flex flex-col gap-7 justify-center">
      <div className="border rounded-lg border-sectionDisable py-4 px-7 mx-9">
        <span className="text-lg">
          برای ارسال تیکت به کارشناسان امور پشتیبانی سگمنتو، فرم زیر را کامل
          کنید.
        </span>
        <div className="flex gap-3 flex-col justify-start mt-7">
          <span className="text-silver font-bold">
            لطفا به نکات زیر توجه کنید:{" "}
          </span>
          {helpText.map((item) => {
            return (
              <div className="flex gap-3 items-center">
                <span className="w-2 h-2 rounded-full bg-primary "></span>
                <span className="text-silver">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex  flex-col justify-center mt-7">
        <div className="w-2/3 mx-auto ">
          <AuthInput textLabelInput={"عنوان تیکت"} classes={"w-full"} />
        </div>
        <div className="w-2/3 mx-auto my-9 flex gap-7 justify-between items-center">
          <div className="max-w-[243px]">
            <ComboBox
              radioTextItems={ticketCategories}
              radioClickedHandler={(e) => setFilterCategories(e.target.value)}
              
            />
          </div>
          <div className="flex items-center gap-3 ">
            <span>اولویت</span>
            <div className="  border-sectionDisable flex gap-3 py-3 px-4 rounded border">
              <AuthButton classes={"btn-secondary h-10 w-[101px]"} textButton={"معمولی"} />
              <AuthButton classes={"btn-secondary h-10 w-[101px]"} textButton={"مهم"} />
              <AuthButton classes={"btn-secondary h-10"} textButton={"بسیار مهم"} />
            </div>
          </div>
        </div>{" "}
      </div>
      
    </div>
  );
}
