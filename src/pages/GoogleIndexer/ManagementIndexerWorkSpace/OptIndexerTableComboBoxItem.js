import DatePicker, { DateObject } from "react-multi-date-picker";
import { partItemFilterBox, ticketCategories, ticketStatus } from "../../../../variables/support";
import ComboBox from "../../../shared/comboBox/ComboBox";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ImageContainer } from "../../../../assets/img/IMG";
import { indexerLinkStatus } from "../../../variables/indexer";

export const OptIndexerTableComboBoxItem = ({
  radioTarget,
  FactorHandler,
  userTypeData,
  datePickerValues,
  setDatePickerValues,
  priceHandler,
  priceHandler1,
}) => {
  // {filterName:"url",apiKey:"none"},
  // {filterName:"تاریخ و ساعت آپدیت",apiKey:"none"},
  // {filterName:"تاریخ ثبت",apiKey:"none"},
  // {filterName:"نوع ایندکسر",apiKey:"none"},
  // {filterName:"تناوب ارسال",apiKey:"none"},
  // {filterName:"وضعیت",apiKey:"none"}
  switch (radioTarget) {
    case "بدون فیلتر":
      return "";
    case "url":
      return (
        <input
          type={"text"}
          placeholder="لطفا شناسه تیکت خود را وارد کنید:"
          onChange={(e) => FactorHandler(e.target.value)}
          className="min-w-[288px] placeholder-[#D9D9D9] h-11 border-2 border-b-[#7D7D7D] pr-2"
        />
      );
    case "تاریخ آپدیت":
      return (
        <input
          type={"text"}
          placeholder="لطفا عنوان خود را وارد کنید:"
          onChange={(e) => FactorHandler(e.target.value)}
          className="min-w-[288px] placeholder-[#D9D9D9] h-11 border-2 border-b-[#7D7D7D] pr-2"
        />
      );
    case "تاریخ ثبت":
      return <ComboBox 
      placeholder={"لطفا دسته بندی خود را انتخاب کنید:"} 
      radioTextItems={ticketCategories.map(item => { return item.partName })} 
      radioClickedHandler={(e) => FactorHandler(e.target.value)}/>;
    case "نوع ایندکسر":
      return <DatePicker
        range
        value={datePickerValues}
        // ref={datePickerRef}
        // onOpen={true}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        onChange={FactorHandler}
        format="DD MMMM YYYY - "
        maxDate={new DateObject()}
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
    case "تناوب ارسال":
      return <ComboBox 
      placeholder={"لطفا وضعیت خود را انتخاب کنید:"} 
      radioTextItems={ticketStatus.map(item => { return item.partName })} 
      radioClickedHandler={(e) => FactorHandler(e.target.value)}
      />;
    case "وضعیت":
      return <ComboBox 
      placeholder={"لطفا وضعیت خود را انتخاب کنید:"} 
      radioTextItems={indexerLinkStatus.map(item => { return item.partName })} 
      radioClickedHandler={(e) => FactorHandler(e.target.value)}
      />;
    default:
      break;
  }
};
