import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import StaticInputText from "../../../../../component/Utils/staticInputText/textInput";
import AuthInput from "../../../../../component/Auth/authInput/AuthInput";

import React from 'react'
import { ImageContainer } from "../../../../../assets/img/IMG";

export default function FilterData({
    radioTarget,
    FactorHandler,
    datePickerValues,
    inputWidth
  }) {
    switch (radioTarget) {
      case "بدون فیلتر":
        return "";
      case "آدرس صفحات URLs":
        return (
          <StaticInputText handleChange={e=>FactorHandler("https://"+e.target.value)}  typeInput={"text"} textLabelInput={"آدرس صفحه مورد نظر را وارد کنید:"} staticText={"https://"}  placeholder={"www.example.ir"} width={inputWidth}/>
        );
  
      case "کلمه کلیدی":
        return (
          <AuthInput handleChange={FactorHandler} typeInput={"text"} placeholder={"کلمه کلیدی مورد نظر را وارد کنید:"} width={inputWidth}/>
        );
  
      case "رتبه کلمه کلیدی":
  
        return (
          <AuthInput
          placeholder={"رتبه کلمه کلیدی مورد نظر را وارد کنید:"}
          maxlength={10}
          pressNumber={true}
          handleChange={FactorHandler} 
          width={inputWidth}
        />
        );
  
      case "تاریخ بروزرسانی":
        return (
          <DatePicker
            range
            value={datePickerValues||""}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            onChange={FactorHandler}
            format="DD MMMM YYYY - "
            render={(value, openCalendar) => (
              <div
                className="flex justify-start items-center px-3 h-10 border-[1.5px] border-[#D9D9D9] rounded-sm text-center border-b-[#7D7D7D] hover:border-[#7D7D7D] active:border-b-[#0A65CD]"
                onClick={openCalendar}
              >
                <img
                  src={ImageContainer.calendarIco}
                  alt="file_download"
                />
                <span className="text-xs mr-3">{value}</span>
              </div>
            )}
          ></DatePicker>
        );
      
        case "وضعیت صفحه":
        return (
          <AuthInput
          placeholder={"عدد درصد وضعیت مورد نظر را وارد کنید:"}
          maxlength={10}
          pressNumber={true}
          handleChange={FactorHandler} 
          width={inputWidth}
        />
  
        );
      default:
        break;
    }
  };
