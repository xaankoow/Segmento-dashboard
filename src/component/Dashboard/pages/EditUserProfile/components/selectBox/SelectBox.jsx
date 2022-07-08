import React from "react";

export default function SelectBox({ optionItems ,title}) {
  return (
    <div className="flex flex-col gap-3">
      <span>{title}</span>
      <select
        id="large"
        class="block h-[45px] px-4 w-full text-base  rounded-lg border border-[#D9D9D9] text-[#7D7D7D] focus:border-[#D9D9D9] checked:border-[#D9D9D9]"
      >
        <option selected className="text-[#7D7D7D]">
          لطفا یک گزینه را انتخاب کنید
        </option>
        {optionItems.map((item) => {
          return <option value="DE">{item}</option>;
        })}
      </select>
    </div>
  );
}
