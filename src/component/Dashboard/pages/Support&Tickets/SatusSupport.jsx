import React from "react";
import AuthButton from "../../../Auth/authButton/AuthButton";
import Table from "../../../shared/table/Table";
import PageTitle from "../../DashboaedComponents/pageTitle/pageTitle";

export default function ReportSupport() {
  const a = [
    { title: "ردیف", class: "px-9" },
    { title: "شناسه تیکت", class: "px-9" },
    { title: "عنوان", class: "pl-[160px] text-right" },
    { title: "دسته بندی", class: "pl-[50px] text-center" },
    { title: "آخرین بروز رسانی", class: "pl-[50px] py-[18px] text-center" },
    { title: "وضعیت", class: "pl-9" },
    { title: "عملیات", class: "px-3" },
  ];
  const b = [
    {
      id: 1,
      factorNumber: "SEG-5242",
      title: "نمونه نوشته برای عنوان",
      categories: "امور مالی",
      date: "1401/2/2",
      status: "پاسخ داده شد",
      operation:<div>czdczdc</div>
    },
    {
      id: 1,
      factorNumber: "SEG-5242",
      title: "نمونه نوشته برای عنوان",
      categories: "امور مالی",
      date: "1401/2/2",
      status: <div className="w-[85px] h-7 bg-[#10CCAE] text-white rounded-3xl flex justify-center items-center">پاسخ داده شد</div>,
      operation:<div>czdczdc</div>
    },
    {
      id: 1,
      factorNumber: "SEG-5242",
      title: "نمونه نوشته برای عنوان",
      categories: "امور مالی",
      date: "1401/2/2",
      status: <div className="w-[85px] h-7 bg-[#10CCAE] text-white rounded-3xl flex justify-center items-center">در انتظار پاسخ</div>,
      operation:<div className="w-16 h-10 rounded-lg bg-lightBlue"><img src="" alt="" /></div>
    },
    
  ];
  const rowKey = ["row.id", "row.factorNumber", "row.title", "row.categories","row.date","row.status","row.operation"];
  return (
    <>
      <PageTitle title={"پشتیبانی و تیکت ها (تیکت جدید) "} />
      <div className="">
        {/* <ComboBox placeholder={"فیلد جستجو"} radioTextItems={filterBoxDatas} radioClickedHandler={(e) => setSearchFilterOption(e.target.value)} /> */}
      </div>
      <div className="flex items-center ">
        <span className=" ml-2">مرتب سازی بر اساس</span>
      </div>

      <div className=" inline-block">
        <AuthButton textButton={"اعمال"} classes={"btn-secondary"} />
      </div>
      <Table columnItem={a} rowsItem={b} rowKey={rowKey} />
    </>
  );
}
