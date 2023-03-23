import React from "react";
import AuthButton from "../../../../../component/Auth/authButton/AuthButton";
import ComboBox from "../../../../../component/shared/comboBox/ComboBox";
import Compare from "../../../../../assets/img/ico/compare.svg";

const FilterChart = () => {
  return (
    <header className="flex items-center justify-between h-10 w-full gap-1">
      <div className="flex items-center justify-center gap-1">
        <AuthButton
          // handlerClick={handlClick}
          disabled={true}
          classes="h-10"
          style={{ padding: "9px 14px" }}
          textButton={<img src={Compare} alt="filter" />}
        />

        <span className=" ml-2">مقایسه براساس</span>
      </div>

      <div className="w-1/5">
        <ComboBox
          placeholder={"کلمه کلیدی دیگر"}
          radioTextItems={["48 ساعت"]}
        />
      </div>

      <div className="opacity-70 pointer-events-none w-1/5">
        <ComboBox
          placeholder={"فیلد جستجو"}
          radioTextItems={["48 ساعت قبل"]}
          checkedItem={["48 ساعت قبل"]}
        />
      </div>

      <div className="opacity-70 pointer-events-none w-1/5">
        <ComboBox
          placeholder={"فیلد جستجو"}
          radioTextItems={["رقیب شماره 1"]}
          checkedItem={["رقیب شماره 1"]}
        />
      </div>

      <div className="opacity-70 pointer-events-none w-1/5">
        <ComboBox
          placeholder={"فیلد جستجو"}
          radioTextItems={["دسکتاپ"]}
          checkedItem={["دسکتاپ"]}
        />
      </div>
    </header>
  );
};

export default FilterChart;
