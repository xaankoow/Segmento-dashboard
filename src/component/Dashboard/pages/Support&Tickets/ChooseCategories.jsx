import React, { useState } from "react";
import { ticketCategories } from "../../../../variables/support";

export default function ChooseCategories() {
  const [clickedItem, setClicked] = useState(-1);
  return (
    <div className="my-7">
      <div className="border border-sectionDisable rounded-lg mx-9 py-7 flex justify-center">
        <span className="m-auto">
          لطفا از دسته بندی های زیر برای ارسال تیکت یک مورد را انتخاب کنید:
        </span>
      </div>
      <div className="flex mt-16 flex-wrap mx-28 gap-12 justify-center">
        {ticketCategories.map((item, index) => {
          return (
            <div
              onClick={() => setClicked(index)}
              className={`w-[260px] h-[260px] border border-sectionDisable rounded-lg relative flex justify-center hover:border-silver active:border-primary  focus:border-primary ${
                clickedItem === index && "border-primary"
              }`}
            >
              <span className="absolute bottom-7">{item}</span>
            </div>
          );
        })}
      </div>
      <div className="flex mt-20 justify-end mx-9">
        <button
          className="btn-style"
          disabled={clickedItem == -1 ? true : false}
        >
          <img src="" alt="" /> ادامه فرایند
        </button>
      </div>
    </div>
  );
}
