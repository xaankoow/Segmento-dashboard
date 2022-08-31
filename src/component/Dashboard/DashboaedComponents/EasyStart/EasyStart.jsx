import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReplaceClass } from "../../../Utils/replaceClass";
import SetTitleTabBrowser from "../../../Utils/SetTitleTabBrowser";

const EasyStart = ({ startButtonClick }) => {
  const location = useLocation();

  return (
    <>
      <div className=" flex items-center justify-between my-9 mx-7 border  text-sm rounded-lg border-lightGray px-7 py-11">
        <span className="text-primaryV1">
          اگر سوالی دارید، با همکاران ما در واحد پشتیبانی تماس بگیرید.{" "}
        </span>
        <button className="btn-style"> برقراری تماس</button>
      </div>
      <div className="flex flex-col relative mt-9 mx-7 mb-7 ">
        <div className="flex items-center justify-center text-title bg-gold text-base py-5 absolute w-full -top-5  rounded-t-lg z-10 ">
          شروع آسان
        </div>
        <div className="rounded-lg border border-lightGray EasyStartBoxContent flex flex-col  px-7">
          <div className="flex flex-col gap-1 text-sm mx-7 mt-20">
            <span className="text-primaryV1">
              چند گام کوچک از تمام قدرت سگمنتو فاصله دارید،
            </span>
            <span className="text-primaryV1">
              {" "}
              آدرس وب‌سایت و کلمات کلیدی خودتان را آماده کنید تا شروع کنیم.
            </span>
            <span className="text-primaryV1">
              پس از انتخاب اشتراک و انجام فرایند شروع آسان به داده‌های تمیز و
              ساده دسترسی دارید که قابل استفاده و مطمئن هستند.{" "}
            </span>
          </div>
          <div className="flex justify-between items-center mt-16 ">
            <Link
              to={"/dashboard/buyPlanEasyToStartModal"}
              state={{ background: location }}
              className="btn-style w-40 mb-5  bottom-0 flex justify-between"
              onClick={()=>ReplaceClass({
                elementClass:"easyToStartRocket",
                oldClass:"easyToStartRocket_animation",
                newClass:"easyToStartRocket_animation_fire",
                replaceClass:true
              })}
            >
              {" "}
              شروع کنیم{" "}
              <img
                src="/img/dashboard/EasyStartPage/startEasyStartArrow.svg"
                alt="EasyStartPage"
                className=" mr-3"
              />
            </Link>
            <div className="w-[209px]  flex justify-end relative ">
              <span className="bg-lightYellow w-11 h-4 absolute rounded-[40px] text-[5px] flex items-center justify-center bottom-[125px] left-9">
                {" "}
                صفحات تجاری
              </span>
              <span className="bg-lightYellow w-11 h-4 absolute rounded-[40px] text-[5px] flex items-center justify-center bottom-[60px] left-9">
                {" "}
                آدرس وب سایت
              </span>

              <span className="bg-lightYellow w-11 h-4 absolute rounded-[40px] text-[5px] flex items-center justify-center bottom-[80px] -right-8">
                {" "}
                کلمات کلیدی{" "}
              </span>

              <img
                src="/img/dashboard/EasyStartPage/moshak.svg"
                alt="EasyStartPage"
                // className="w-[209px] animate-pulse pb-1 ml-8 absolute -bottom-24 -right-10  z-10"
                // className="w-[209px] animate-bounce easyToStartRocket pb-1 ml-8 absolute -bottom-24 -right-10  z-10"
                className="w-[209px] easyToStartRocket easyToStartRocket_animation pb-1 ml-8 absolute -bottom-24 -right-10  z-10"
              />
              <img
                src="/img/dashboard/EasyStartPage/easystart.svg"
                alt="EasyStartPage"
                className="w-[209px] pb-1 ml-8 absolute -bottom-4 z-1"
              />
            </div>
          </div>
        </div>
      </div>
      <SetTitleTabBrowser nameSection={"شروع آسان"} />
    </>
  );
};

export default EasyStart;
