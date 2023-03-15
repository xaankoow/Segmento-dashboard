import React, { useState } from "react";
import { ImageContainer } from "../../../../assets/img/IMG";

export default function Index() {
  const [toggleShowMoreInfo, setToggleShowMoreInfo] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden transition-all">
      <p className=" text-right text-title py-3 pr-5 bg-white">تحلیل تکنیکال</p>
      <div className="flex flex-col">
        <div className="flex justify-between py-7 px-5">
          <div className="flex justify-start items-center w-2/6 h-full">
            <img
              src={ImageContainer.directionOfTheGreenValue}
              alt="green arrow"
              className=" w-6 h-6 rotate-180"
            />
            <span className=" text-[#063468] text-sm pr-5">
              عنوان سایت (Tag Title)
            </span>
          </div>
          <div className=" flex-col w-3/6">
            <p className=" text-sm text-gray text-right">
              چکاپ تولز یک سایت جامع برای آنالیز سئو و سرعت سایت شما می باشد که
              با بیش از 60 ابزار مختلف سایت شما را بررسی میکند و نیاز اصلی هر
              وبمستر می باشد .{" "}
            </p>
            <p className=" text-right mt-3">
              طول :<span className="text-gray text-sm pr-1"> 225 حرف </span>
            </p>
          </div>
          <div className="flex justify-end items-center w-1/6">
            <img
              src={ImageContainer.moveDownArrow}
              alt="arrow"
              onClick={() => setToggleShowMoreInfo(!toggleShowMoreInfo)}
              className={` w-6 h-24 py-2 px-1 cursor-pointer ${
                !toggleShowMoreInfo && "rotate-180"
              }  transition-all`}
            />
          </div>
        </div>
        {toggleShowMoreInfo && (
          <div>
            <p className="text-lg text-gray px-8 bg-white text-right py-4">
              توضیحات متا یک تگ HTML است که خلاصه ای کوتاه و دقیق از صفحه وب
              ارائه می دهد. توضیحات متا توسط موتورهای جستجو برای شناسایی موضوع
              صفحه وب و ارائه نتایج جستجوی مرتبط استفاده می شود.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
