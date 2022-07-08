import React from "react";
import PageTitle from "../../DashboaedComponents/pageTitle/pageTitle";
import ProfileInformation from "./components/profileInfo/ProfileInformation";
import AuthInput from "../../../Auth/authInput/AuthInput";
import SelectBox from "./components/selectBox/SelectBox";
export default function EditUserProfile() {
  const selectBoxData = [
    {
      title: "زمینه فعالیت شما (نوع سایت)",
      optionItems: [
        "سایت فروش محصولات فیزیکی",
        "سایت فروش محصولات مجازی",
        "سایت آموزشی",
        "سایت شرکتی",
        "سایت صنعتی",
        "سایت ارز دیجیتال",
        "سایت خبری",
        "سایت استارتاپ",
        "سایت وبلاگی",
        "سایت شخصی",
        "سایت لوازم بهداشتی",
        "سایت لوازم آرایشی",
        "سایت پوشاک",
        "سایت لوازم ورزشی",
        "سایت فروش کتاب",
        "سایت موسیقی",
        "سایت دیجیتال مارکتینگ",
        "سفارشی",
      ],
    },
    {
      title: "تعداد اعضای شرکت",
      optionItems: [
        "کمتر از 3 نفر",
        "کمتر از 5 نفر",
        "کمتر از 10 نفر",
        "کمتر از 20 نفر",
        "کمتر از 50 نفر",
        "کمتر از 100 نفر",
      ],
    },
    {
      title: "تعداد متخصص سئو",
      optionItems: [
        "کمتر از 3 نفر",
        "کمتر از 5 نفر",
        "کمتر از 10 نفر",
        "کمتر از 20 نفر",
      ],
    },
    {
      title: "  ترافیک ماهانه وب سایت شما",
      optionItems: [
              "کمتر از 1k",
              "کمتر از 5k",
              "کمتر از 10k",
              "کمتر از 20k",
              "کمتر از 50k",
              "کمتر از 100k",
              "کمتر از 200k",
              "کمتر از 300k",
              "کمتر از 500k",
              "کمتر از 1M",
              "کمتر از 2M",
              "کمتر از 5M",
      ],
    },
    {
      title: "  سمت شما در تیم ",
      optionItems: [
               "متخصص سئو",
               "مدیر ارشد سئو",
               "مشاور سئو",
               "پیمانکار سئو",
               "فریلنسر",
               "وبمستر",
               "مدیر دیجیتال مارکتینگ",
              
      ],
    },
    {
      title: "  روش آشنایی با سگمنتو ",
      optionItems: [
                "آشنایی قبلی",
                "گوگل",
                "تبلیغات",
                "سایت همکار",
                "متخصص های همکار",
                "لینکدین",
                "اینستاگرام",
      ],
    },
  ];
  return (
    <div className="">
      <PageTitle title={"حساب کاربری"} />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="m-h-[650px]">
          <div className="mt-12 flex justify-between">
            <ProfileInformation
              userName={"سجاد قدرتی"}
              userType={"کاربر طلایی"}
              email={"sajjad@gmail.com"}
            />
            <button className="btn-style h-10 rounded-lg text-[14px] mr-[181px]">
              خروج{" "}
              <img
                src="./img/dashboard/header/logoutProfile.svg"
                alt="logout"
                className="mr-3"
              />
            </button>
          </div>
          <div className="mt-14 mb-9">
            <span className="text-[#002145]">اطلاعات شخصی</span>
            <div className="flex gap-4 my-9">
              <AuthInput
                textLabelInput="نام "
                width={"310px"}
                typeInput="text"
              />
              <div className="flex flex-col items-start relative">
                <AuthInput
                  textLabelInput=" نام خانوادگی"
                  width={"310px"}
                  typeInput="text"
                />
                <div className="ErrorBadgeBox">
                  <img
                    sdivrc="/img/ErrorBadge.svg"
                    alt="ErrorBadge"
                    className="bg[#C42B1C] p-1 rounded-full"
                  />
                  <h5>گذرواژه همخوانی ندارد</h5>
                </div>
              </div>
            </div>
            <AuthInput
              textLabelInput="آدرس ایمیل "
              width={"100%"}
              errorTextId="errRejesterFormatEmail"
            />
            <div className="w-full flex justify-end mt-7">
              {" "}
              <button className="third-btn">تغییر گذرواژه</button>
            </div>
          </div>
          <div className="border-b border-lightGray w-full m-auto" />
          <div className="mt-7 mb-9">
            <span className="text-[#002145] mb-7"> اطلاعات کسب و کار شما</span>
            <div className="flex flex-col gap-4 mt-7">
              {selectBoxData.map((item) => {
                return (
                  <SelectBox
                    optionItems={item.optionItems}
                    title={item.title}
                  />
                );
              })}
              <div className="flex justify-end gap-7 mt-9">
              <button className="btn-secondary">انصراف </button>
                <button className="btn-style">ذخیره تغییرات</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
