import React, { useState } from "react";
import AuthButton from "../../../../../component/Auth/authButton/AuthButton";
import ComboBox from "../../../../../component/shared/comboBox/ComboBox";
import Compare from "../../../../../assets/img/ico/compare.svg";
import ReactSelect from "react-select";

const FilterChart = ({
  selected,
  filteredTableData: data,
  handleSelectKeyword,
}) => {
  const [focuse, setFocuse] = useState(false);

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

      <div className="w-1/5  text-xs">
        <ReactSelect
          options={
            data.length
              ? data.map((item) => ({
                  value: item.uuid,
                  label: item.key,
                }))
              : []
          }
          isMulti
          closeMenuOnSelect={true}
          hideSelectedOptions={false}
          onChange={handleSelectKeyword}
          allowSelectAll={false}
          value={selected.map((item) => ({
            value: item.uuid,
            label: item.key,
          }))}
          isRtl={true}
          placeholder={"کلمه کلیدی دیگر"}
          style={{ border: "none" }}
          className={`border-2 w-full border-[#D9D9D9] border-b-[#7D7D7D] placeholder-[#D9D9D9] pr-2 h-11 border-l-0 rounded-l-none keyword-multi-select ${
            focuse ? "border-b-[#0A65CD]" : ""
          }`}
          onFocus={() => setFocuse(true)}
          onBlur={() => setFocuse(false)}
          isClearable={false}
        />
      </div>

      <div className="opacity-70 pointer-events-none w-1/5  text-xs">
        <ComboBox
          placeholder={"فیلد جستجو"}
          radioTextItems={["48 ساعت قبل"]}
          checkedItem={["48 ساعت قبل"]}
        />
      </div>

      <div className="opacity-70 pointer-events-none w-1/5  text-xs">
        <ComboBox
          placeholder={"فیلد جستجو"}
          radioTextItems={["رقیب شماره 1"]}
          checkedItem={["رقیب شماره 1"]}
        />
      </div>

      <div className="opacity-70 pointer-events-none w-1/5  text-xs">
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
