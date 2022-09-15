import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImageContainer } from "../../../../assets/img/IMG";
import {
  filterBoxDatas,
  titleOfReportSupportTable,
} from "../../../../variables/support";
import AuthButton from "../../../Auth/authButton/AuthButton";
import ComboBox from "../../../shared/comboBox/ComboBox";
import GuideBox from "../../../shared/GuideBox/GuideBox";
import Table from "../../../shared/table/Table";
import PageTitle from "../../DashboaedComponents/pageTitle/pageTitle";
import { FilterDataSupport } from "./changeData";

export default function ReportSupport() {
  const [searchFilterOption, setSearchFilterOption] = useState("بدون فیلتر");

  const b = [
    {
      id: 1,
      factorNumber: "SEG-5242",
      title: "نمونه نوشته برای عنوان",
      categories: "امور مالی",
      date: "1401/2/2",
      status: "پاسخ داده شد",
      operation: (
        <Link to={"NewTicket"}>
        <div className="w-16 h-10 rounded-lg btn-secondary flex justify-center items-center">
          <img src={ImageContainer.visibility} alt="" />
        </div>
        </Link>
      ),
    },
    {
      id: 1,
      factorNumber: "SEG-5242",
      title: "نمونه نوشته برای عنوان",
      categories: "امور مالی",
      date: "1401/2/2",
      status: (
        <div className="w-[85px] h-7 bg-[#10CCAE] text-white rounded-3xl flex justify-center items-center">
          پاسخ داده شد
        </div>
      ),
      operation: (
        <Link to={"NewTicket"}>
        <div className="w-16 h-10 rounded-lg btn-secondary flex justify-center items-center">
          <img src={ImageContainer.visibility} alt="" />
        </div>
        </Link>
      ),
    },
    {
      id: 1,
      factorNumber: "SEG-5242",
      title: "نمونه نوشته برای عنوان",
      categories: "امور مالی",
      date: "1401/2/2",
      status: (
        <div className="w-[85px] h-7 bg-[#10CCAE] text-white rounded-3xl flex justify-center items-center">
          در انتظار پاسخ
        </div>
      ),
      operation: (
        <Link to={"NewTicket"}>
          {" "}
          <div className="w-16 h-10 rounded-lg btn-secondary flex justify-center items-center">
            <img src={ImageContainer.visibility} alt="" />
          </div>
        </Link>
      ),
    },
  ];
  const rowKey = [
    "row.id",
    "row.factorNumber",
    "row.title",
    "row.categories",
    "row.date",
    "row.status",
    "row.operation",
  ];
  return (
    <>
      <PageTitle title={"پشتیبانی و تیکت ها (تیکت جدید) "} />
      <GuideBox
        classname={"mt-7 mx-9"}
        text={
          "تمامِ تیکت‌هایی که برای واحد امور پشتیبانی سگمنتو ارسال کرده‌اید، در این صفحه لیست شده‌اند:"
        }
        buttonName={"ارسال تیکت جدید"}
        linkTo={"NewTicket"}
      />
      <div className="flex mx-9 justify-between my-5">
        <div className="min-w-[420px]">
          <ComboBox
            placeholder={"فیلد جستجو"}
            radioTextItems={filterBoxDatas}
            radioClickedHandler={(e) => setSearchFilterOption(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4 ">
          {searchFilterOption !== "بدون فیلتر" && (
            <span className="">مرتب سازی بر اساس</span>
          )}
          <FilterDataSupport radioTarget={searchFilterOption} />
        </div>
        <div className=" inline-block">
          <AuthButton textButton={"اعمال"} classes={"btn-secondary"} />
        </div>
      </div>

      <Table
        columnItem={titleOfReportSupportTable}
        rowsItem={b}
        rowKey={rowKey}
        classname={"px-9"}
      />
    </>
  );
}
