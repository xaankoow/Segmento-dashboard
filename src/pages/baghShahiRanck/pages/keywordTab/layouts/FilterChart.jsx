import React, { useState } from "react";
import AuthButton from "../../../../../component/Auth/authButton/AuthButton";
import ComboBox from "../../../../../component/shared/comboBox/ComboBox";
import Compare from "../../../../../assets/img/ico/compare.svg";
import ReactSelect from "react-select";

const FilterChart = ({
  selected,
  tableData: data,
  handleSelectForComparison,
  selectForComparison,
}) => {
  const [focuse, setFocuse] = useState(false);

  function priparedDataForSelect(data, selected) {
    if (!data.length || data.length === 1 || !selected.length) return [];
    let lastsData = [];
    for (let i = 0; i < data.length; i++) {
      let lopItem = data[i];
      if (lopItem.uuid === selected[0].uuid) continue;
      lastsData.push(lopItem);
    }
    return lastsData;
  }

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

      <div
        className="w-1/5 text-xs"
        style={!selected.length ? { background: "#f5f5f5" } : {}}
      >
        <ReactSelect
          options={
            data.length
              ? priparedDataForSelect(data, selected).map((item) => ({
                  value: item.uuid,
                  label: item.key,
                }))
              : []
          }
          isMulti={false}
          closeMenuOnSelect={true}
          hideSelectedOptions={false}
          onChange={handleSelectForComparison}
          allowSelectAll={false}
          value={selectForComparison}
          isRtl={true}
          placeholder={"کلمه کلیدی دیگر"}
          style={{ border: "none" }}
          className={`border-2 w-full border-[#D9D9D9] border-b-[#7d7d7dac] placeholder-[#D9D9D9] pr-2 h-11 border-l-0 rounded-l-none keyword-multi-select ${
            focuse ? "border-b-[#0A65CD]" : ""
          }`}
          onFocus={() => setFocuse(true)}
          onBlur={() => setFocuse(false)}
          isClearable={false}
          isDisabled={!selected.length}
          noOptionsMessage={() => (
            <span className="opacity-40">بدون گزینه</span>
          )}
        />
      </div>

      <div className="opacity-70 bg-slate-300 pointer-events-none w-1/5  text-xs">
        <ComboBox
          placeholder={"فیلد جستجو"}
          radioTextItems={["48 ساعت قبل"]}
          checkedItem={["48 ساعت قبل"]}
          disable
        />
      </div>

      <div className="opacity-70 bg-slate-300 pointer-events-none w-1/5  text-xs">
        <ComboBox
          placeholder={"فیلد جستجو"}
          radioTextItems={["رقیب شماره 1"]}
          checkedItem={["رقیب شماره 1"]}
          disable
        />
      </div>

      <div className="opacity-70 bg-slate-300 pointer-events-none w-1/5  text-xs">
        <ComboBox
          placeholder={"فیلد جستجو"}
          radioTextItems={["دسکتاپ"]}
          checkedItem={["دسکتاپ"]}
          disable
        />
      </div>
    </header>
  );
};

export default FilterChart;
