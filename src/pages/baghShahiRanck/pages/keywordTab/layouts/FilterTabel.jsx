import React from "react";
import AuthButton from "../../../../../component/Auth/authButton/AuthButton";
import ComboBox from "../../../../../component/shared/comboBox/ComboBox";
import { ImageContainer } from "../../../../../assets/img/IMG";

const FilterTabel = () => {
  return (
    <header className="flex items-center justify-between h-10 w-full gap-1">
      <div className="flex items-center justify-center gap-1">
        <AuthButton
          // handlerClick={handlClick}
          disabled={true}
          classes="h-10"
          style={{ padding: "9px 14px" }}
          textButton={<img src={ImageContainer.filter} alt="filter" />}
        />

        <span className=" ml-2">فیلتر براساس</span>
      </div>

      <div className="opacity-70 pointer-events-none w-1/5">
        <ComboBox
          placeholder={"فیلد جستجو"}
          radioTextItems={["48 ساعت"]}
          checkedItem={["48 ساعت"]}
        />
      </div>

      <div className="opacity-70 pointer-events-none w-1/5">
        <ComboBox
          placeholder={"فیلد جستجو"}
          radioTextItems={["تمام رتبه ها"]}
          checkedItem={["تمام رتبه ها"]}
        />
      </div>

      <div className="opacity-70 pointer-events-none w-1/5">
        <ComboBox
          placeholder={"فیلد جستجو"}
          radioTextItems={["دسکتاپ"]}
          checkedItem={["دسکتاپ"]}
        />
      </div>

      <div className="opacity-70 pointer-events-none w-1/5">
        <ComboBox
          placeholder={"فیلد جستجو"}
          radioTextItems={["23 شهریور 1401 - 23 مهر 1401"]}
          checkedItem={["23 شهریور 1401 - 23 مهر 1401"]}
        />
      </div>
    </header>
  );
};

export default FilterTabel;
