import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import StaticInputText from "../../../../../component/Utils/staticInputText/textInput";
import AuthInput from "../../../../../component/Auth/authInput/AuthInput";

import React from "react";
import { ImageContainer } from "../../../../../assets/img/IMG";
import { BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB } from "../../../../../variables/businessPages";

export default function index({
  radioTarget,
  FactorHandler,
  datePickerValues,
  inputWidth,
}) {
  switch (radioTarget) {
    case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[0]:
      return "";

    case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[1]: //تاریخ بروزرسانی
      return (
        <DatePicker
          range
          value={datePickerValues || ""}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          onChange={FactorHandler}
          format="DD MMMM YYYY - "
          render={(value, openCalendar) => (
            <div
              className="flex justify-start items-center px-3 h-10 border-[1.5px] border-[#D9D9D9] rounded-sm text-center border-b-[#7D7D7D] hover:border-[#7D7D7D] active:border-b-[#0A65CD]"
              onClick={openCalendar}>
              <img src={ImageContainer.calendarIco} alt="file_download" />
              <span className="text-xs mr-3">{value}</span>
            </div>
          )}></DatePicker>
      );

    case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[2]: //کلمه کلیدی
      return (
        <AuthInput
          handleChange={FactorHandler}
          typeInput={"text"}
          placeholder={"کلمه کلیدی مورد نظر را وارد کنید:"}
          width={inputWidth}
        />
      );

    case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[3]: // رتبه گوگل
      return (
        <AuthInput
          placeholder={"رتبه کلمه کلیدی مورد نظر را وارد کنید:"}
          maxlength={10}
          pressNumber={true}
          handleChange={FactorHandler}
          width={inputWidth}
        />
      );

    case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[4]: //عملکرد اجرایی
      return (
        <AuthInput
          placeholder={"عدد عملکرد اجرایی مورد نظر را وارد کنید:"}
          maxlength={10}
          pressNumber={true}
          handleChange={FactorHandler}
          width={inputWidth}
        />
      );

    case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[5]: // دسترسی پذیری
      return (
        <AuthInput
          placeholder={"عدد دسترسی پذیری مورد نظر را وارد کنید:"}
          maxlength={10}
          pressNumber={true}
          handleChange={FactorHandler}
          width={inputWidth}
        />
      );
    
      case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[6]: // معیار های مهم
      return (
        <AuthInput
          placeholder={"عدد معیار های مهم مورد نظر را وارد کنید:"}
          maxlength={10}
          pressNumber={true}
          handleChange={FactorHandler}
          width={inputWidth}
        />
      );
    case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[7]: // سئو
      return (
        <AuthInput
          placeholder={"عدد سئو مورد نظر را وارد کنید:"}
          maxlength={10}
          pressNumber={true}
          handleChange={FactorHandler}
          width={inputWidth}
        />
      );
      case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[8]:
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
}
