import ComboBox from "../../../shared/comboBox/ComboBox";

export const FilterDataSupport = ({
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
    case "شناسه تیکت":
      return (
        <input
          type={"text"}
          placeholder="لطفا شناسه تیکت خود را وارد کنید:"
          onChange={(e) => FactorHandler(e.target.value)}
          className="min-w-[288px] placeholder-[#D9D9D9] h-11 border-2 border-b-[#7D7D7D] pr-2"
        />
      );
    case "عنوان":
      return (
        <input
          type={"text"}
          placeholder="لطفا عنوان خود را وارد کنید:"
          onChange={(e) => FactorHandler(e.target.value)}
          className="min-w-[288px] placeholder-[#D9D9D9] h-11 border-2 border-b-[#7D7D7D] pr-2"
        />
      );
    case "دسته بندی":
      return <ComboBox placeholder={"لطفا دسته بندی خود را انتخاب کنید:"} />;
    case "آخرین بروز رسانی":
      return <ComboBox placeholder={"لطفا دسته بندی خود را انتخاب کنید:"} />;
    case "وضعیت":
      return <ComboBox placeholder={"لطفا وضعیت خود را انتخاب کنید:"} />;
    default:
      break;
  }
};
