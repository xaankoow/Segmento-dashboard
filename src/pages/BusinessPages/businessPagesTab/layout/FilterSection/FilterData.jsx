import DatePicker from 'react-multi-date-picker'
// import ComboBox from "../../../shared/comboBox/ComboBox";
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
// import { financialRadioTextItems } from "../../../../variables/financialReports";
// import { ImageContainer } from "../../../../assets/img/IMG";
// // filter with date or cound
// if (sortTarget == "تاریخ خرید") {
//     var convertDateStart = parseInt(new DateObject(sortValue[0]).convert(persian, persian_en).format("YYYYMMDD"));
//     var convertDateEnd = parseInt(new DateObject(sortValue[1]).convert(persian, persian_en).format("YYYYMMDD"));
//     filterFinancialReportData = filterFinancialReportData.filter(item => parseInt(item.created_at.replaceAll('/', '')) > convertDateStart & parseInt(item.created_at.replaceAll('/', '')) < convertDateEnd);
// } else {
//     filterFinancialReportData = filterFinancialReportData.splice(0, sortValue < filterFinancialReportData.length ? sortValue : filterFinancialReportData.length);
// }
import React from 'react'
import StaticInputText from '../../../../../component/Utils/staticInputText/textInput'
import AuthInput from '../../../../../component/Auth/authInput/AuthInput'
import { ImageContainer } from '../../../../../assets/img/IMG'

export default function FilterData ({
  radioTarget,
  FactorHandler,
  userTypeData,
  datePickerValues,
  setDatePickerValues,
  priceHandler,
  priceHandler1,
  inputWidth,
  onChange
}) {
  switch (radioTarget) {
    case 'بدون فیلتر':
      return ''
    case 'آدرس صفحات URLs':
      // <input
      //   type={"text"}
      //   placeholder="شماره فاکتور خود را وارد کنید"
      //   onChange={(e) => FactorHandler(e.target.value)}
      //   className="min-w-[288px] placeholder-[#D9D9D9] h-11 border-2 border-b-[#7D7D7D] pr-2"
      // />
      // <StaticInputText typeInput={"text"} width={"100%"} textLabelInput={"صفحه هدف"} staticText={"https://"} value={site1} reduxHandleChange={setSite1} placeholder={"page1"} />

      return (
        <StaticInputText typeInput={'text'} textLabelInput={'آدرس صفحه مورد نظر را وارد کنید:'} staticText={'https://'}
                         placeholder={'www.example.ir'} width={inputWidth} handleChange={onChange}/>
      )

    case 'کلمه کلیدی':
      // <AuthInput
      // classes={"verify_email_cod input_selector_3"}
      //
      // reduxHandleChange={setAuth2Redux}
      // maxlength={1}
      // pressNumber={true}
      // selectWithOnClick
      //   />
      return (
        <AuthInput typeInput={'text'} placeholder={'کلمه کلیدی مورد نظر را وارد کنید:'} width={inputWidth}
                   handleChange={onChange}/>
      )

    case 'رتبه کلمه کلیدی':

      return (
        <AuthInput
          placeholder={'رتبه کلمه کلیدی مورد نظر را وارد کنید:'}
          maxlength={10}
          pressNumber={true}
          width={inputWidth}
          handleChange={onChange}
        />
      )

    case 'تاریخ بروزرسانی':
      return (
        <DatePicker
          range
          value={datePickerValues || ''}
          // ref={datePickerRef}
          // onOpen={true}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          onChange={(v) => {
            onChange?.(v)
            setDatePickerValues?.(v)
          }}
          format="YYYY/MM/DD"
          // maxDate={new DateObject()}
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
      )

    case 'وضعیت صفحه':
      return (
        <AuthInput
          placeholder={'عدد درصد وضعیت مورد نظر را وارد کنید:'}
          maxlength={10}
          pressNumber={true}
          width={inputWidth}
        />

      )
    default:
      break
  }
};
