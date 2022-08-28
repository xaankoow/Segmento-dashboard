import DatePicker, { DateObject } from "react-multi-date-picker";
import ComboBox from "../../../shared/comboBox/ComboBox";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";

export const filterData = (radioTarget, FactorHandler) => {
  var filterFinancialReportData = [];
  const radioTextItems = {
    type: ["برنزی", "نقره ای", "طلایی", "الماسی"],
    payStatus: ["موفقیت آمیز", " نا موفق", "پرداخت نشده"],
    sort: ["خرید پکیچ", "شارژ پکیچ"],
  };
  // const [datePickerValues, setDatePickerValues] = useState([
  //   new DateObject().subtract(4, "days"),
  //   new DateObject().add(0, "days"),
  // ]);
  switch (radioTarget) {
    case "شماره فاکتور":
      return (
        <input
          type={"text"}
          placeholder="شماره فاکتور خود را وارد کنید"
          onClick={FactorHandler}
          className="min-w-[288px] placeholder-[#D9D9D9] h-11 border-2 border-b-[#7D7D7D] pr-2"
        />
      );

    case "نوع اشتراک":
      return (
        <div className=" min-w-[288px]">
          {/* <KeyWordsSearch
          usedBySection={"financialReports/sort"}
          inputPlaceHolder={targetSortFilter}
          getRadioValue={setTargetSortFilter}
        /> */}
          <ComboBox
            radioTextItems={radioTextItems.type}
            placeholder={" نوع اشتراک را انتخاب کنید "}
          />
        </div>
      );

    case "تاریخ خرید":
      // debugger
      return (
        <DatePicker
          range
          // value={datePickerValues}
          // ref={datePickerRef}
          // onOpen={true}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          // onChange={setDatePickerValues}
          format="DD MMMM YYYY - "
          maxDate={new DateObject()}
          render={(value, openCalendar) => (
            <div
              className="flex justify-start items-center px-3 h-10 border-[1.5px] border-[#D9D9D9] rounded-sm text-center border-b-[#7D7D7D] hover:border-[#7D7D7D] active:border-b-[#0A65CD]"
              onClick={openCalendar}
            >
              <img
                src="/img/dashboard/financialReports/calendar/file_download.svg"
                alt="file_download"
              />
              <span className="text-xs mr-3">{value}</span>
            </div>
          )}
        ></DatePicker>
      );

    case "تاریخ انقضا":
      return (
        <DatePicker
          range
          // value={datePickerValues}
          // ref={datePickerRef}
          // onOpen={true}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          // onChange={setDatePickerValues}
          format="DD MMMM YYYY - "
          maxDate={new DateObject()}
          render={(value, openCalendar) => (
            <div
              className="flex justify-start items-center px-3 h-10 border-[1.5px] border-[#D9D9D9] rounded-sm text-center border-b-[#7D7D7D] hover:border-[#7D7D7D] active:border-b-[#0A65CD]"
              onClick={openCalendar}
            >
              <img
                src="/img/dashboard/financialReports/calendar/file_download.svg"
                alt="file_download"
              />
              <span className="text-xs mr-3">{value}</span>
            </div>
          )}
        ></DatePicker>
      );
    case "مبلغ":
      return (
        <div className=" flex items-center justify-between gap-2">
          <input
            type={"text"}
            placeholder="   بازه قیمتی(ریال)  "
            onClick={FactorHandler}
            className="min-w-[165px] placeholder-[#D9D9D9] h-11 border-2 pr-2"
          />
          <span>تا</span>
          <input
            type={"text"}
            placeholder="   بازه قیمتی(ریال)  "
            onClick={FactorHandler}
            className="min-w-[165px] placeholder-[#D9D9D9] h-11 border-2 pr-2"
          />
        </div>
      );
    case "وضعیت پرداخت":
      return (
        <div className=" min-w-[288px]">
          <ComboBox
            radioTextItems={radioTextItems.payStatus}
            placeholder={" وضعیت پرداخت را مشخص کنید"}
          />
        </div>
      );
    case "عملیات":
      return (
        <div className=" min-w-[288px]">
          <ComboBox
            radioTextItems={radioTextItems.sort}
            placeholder={" وضعیت عملیات را مشخص کنید   "}
          />
        </div>
      );

    default:
      break;
  }
};

// // filter with date or cound
// if (sortTarget == "تاریخ خرید") {
//     var convertDateStart = parseInt(new DateObject(sortValue[0]).convert(persian, persian_en).format("YYYYMMDD"));
//     var convertDateEnd = parseInt(new DateObject(sortValue[1]).convert(persian, persian_en).format("YYYYMMDD"));
//     filterFinancialReportData = filterFinancialReportData.filter(item => parseInt(item.created_at.replaceAll('/', '')) > convertDateStart & parseInt(item.created_at.replaceAll('/', '')) < convertDateEnd);
// } else {
//     filterFinancialReportData = filterFinancialReportData.splice(0, sortValue < filterFinancialReportData.length ? sortValue : filterFinancialReportData.length);
// }
