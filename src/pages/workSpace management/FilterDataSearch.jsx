import React from 'react'
import ComboBox from '../../component/shared/comboBox/ComboBox';

export const FilterDataSearch= ({
    radioTarget,
    FactorHandler,
    userTypeData,
    datePickerValues,
    setDatePickerValues,
    priceHandler,
    priceHandler1,
  }) => {
    switch (radioTarget) {
      case "بدون فیلتر":
        return "";
        case "آدرس وبسایت":
            return (
              <input
                type={"text"}
                placeholder="لطفا آدرس وبسایت خود را وارد کنید:"
                onChange={(e) => FactorHandler(e.target.value)}
                className="min-w-[288px] placeholder-[#D9D9D9] h-11 border-2 border-b-[#7D7D7D] pr-2"
              />
            );
      case "تاریخ ایجاد":
        return (
          <input
            type={"text"}
            placeholder="لطفا شناسه تیکت خود را وارد کنید:"
            onChange={(e) => FactorHandler(e.target.value)}
            className="min-w-[288px] placeholder-[#D9D9D9] h-11 border-2 border-b-[#7D7D7D] pr-2"
          />
        );
      case "تاریخ آخرین آپدیت":
        return (
          <input
            type={"text"}
            placeholder="لطفا عنوان خود را وارد کنید:"
            onChange={(e) => FactorHandler(e.target.value)}
            className="min-w-[288px] placeholder-[#D9D9D9] h-11 border-2 border-b-[#7D7D7D] pr-2"
          />
        );
      case "وضعیت کل":
        return <ComboBox placeholder={"لطفا وضعیت کل خود را انتخاب کنید:"} />;
      case "احراز هویت":
        return <ComboBox placeholder={"لطفا وضعیت احراز هویت خود را انتخاب کنید:"} />;
      
      default:
        break;
    }
  };
  
