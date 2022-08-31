import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthButton from "../../../Auth/authButton/AuthButton";
import KeyWordsSearch from "../KeyWordsSearch/KeyWordsSearch";
import ReactExport from "react-export-excel";
import SetTitleTabBrowser from "../../../Utils/SetTitleTabBrowser";
import PageTitle from "../pageTitle/pageTitle";
import { setFormatPrice } from "../../../Utils/FORMAT/price";
import { filterFinancialData } from "../../../Utils/FilterData/filter";
import { getAllFinancialReportsData } from "../../../service/financialReportsService";
import { FilterData, filterData } from "./changeDataSearch";
import { DateObject } from "react-multi-date-picker";
import ComboBox from "../../../shared/comboBox/ComboBox";
export default function TableFinancialReports({ title }) {
  const dispatch = useDispatch();

  const [copyItem, setCopyItem] = useState([]);
  const [handleClickButton, setHandleClickButton] = useState(false);
  const [targetSortFilter, setTargetSortFilter] = useState("تاریخ خرید");
  const [searchFilterOption, setSearchFilterOption] = useState("شماره فاکتور");
  const [numFilter, setNumFilter] = useState(1);
  const [handleClickCopy, setHandleClickCopy] = useState(false);
  const filterBoxDatas=[ "شماره فاکتور","نوع اشتراک","تاریخ خرید","تاریخ انقضا","مبلغ", "وضعیت پرداخت","عملیات"];
  const [financialDataTableOrg, setFinancialDataTableOrg] = useState([]);
  const [financialDataTableFiltered, setFinancialDataTableFiltered] = useState(
    []
  );
  var filterFinancialReportData =
    financialDataTableFiltered.length > 0
      ? financialDataTableFiltered
      : financialDataTableOrg.length > 0 && financialDataTableOrg;
  // data of filtering
  const [userType, setUserType] = useState("");
  const [FactorHandler, setFactorHandler] = useState("");
  const [price, setPrice] = useState("");
  const [price2, setPrice2] = useState("");
  const [datePickerValues, setDatePickerValues] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().add(0, "days"),
  ]);

  const filterItems = {
    "شماره فاکتور": FactorHandler,
    "نوع اشتراک": userType,
    //psm: not working
    "تاریخ خرید": datePickerValues,
    "تاریخ انقضا": datePickerValues,
    مبلغ: [Number(price), Number(price2)],
      //psm: not working
    "وضعیت پرداخت": userType,
      //psm: not working
    عملیات: userType,
  };

  const [searchFilterText, setSearchFilterText] = useState("");

  const datePickerRef = useRef();
  const loadingState = useSelector((state) => state.loadingState);
  useEffect(() => {
    // debugger
    if (financialDataTableOrg.length == 0) {
      GetFinancialReportsData();
    }
  }, []);

  const GetFinancialReportsData = async () => {
    debugger;
    let toastMessage = "";
    try {
      if (!loadingState.ProcessingDelay.includes("getAllFinancialReports")) {
        const { data } = await getAllFinancialReportsData();
        console.log(data.data)
        // debugger
        if (data.status == true && data.code == 200) {
          setFinancialDataTableOrg(data.data);
        }
      }

      // debugger
    } catch (error) {}
  };
  var moment = require("jalali-moment");

  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  const dataSet1 = [
    {
      name: "Johson",
      amount: 30000,
      sex: "M",
      is_married: true,
    },
    {
      name: "Monika",
      amount: 355000,
      sex: "F",
      is_married: false,
    },
    {
      name: "John",
      amount: 250000,
      sex: "M",
      is_married: false,
    },
    {
      name: "Josef",
      amount: 450500,
      sex: "M",
      is_married: true,
    },
  ];

  function customCopy() {
    var myListOutput = "";
    for (var i = 0; i < copyItem.length; i++) {
      //check if list is NOT the last in the array, if last don't output a line break
      if (i != copyItem.length - 1) {
        let lineItem = copyItem[i] + "\n";
        myListOutput = myListOutput + lineItem;
      } else {
        let lineItem = copyItem[i];
        myListOutput = myListOutput + lineItem;
      }
    }
    return myListOutput;
  }

  const copyButton = () => {
    navigator.clipboard.writeText(customCopy());
    setHandleClickButton(true);
    setTimeout(() => {
      setHandleClickButton(false);
    }, 1000);
  };

  return (
    <div>
      <PageTitle title={title} />
      <div className=" w-full px-10 m-auto">
        <header className="flex items-center justify-between h-10 w-full mb-7 mt-10">
          <div className="w-[410px]">
         
            <ComboBox placeholder={"فیلد جستجو"}  radioTextItems={filterBoxDatas}  radioClickedHandler={(e) => setSearchFilterOption(e.target.value)}/>
          </div>
          <div className="flex items-center ">
            <span className=" ml-2">مرتب سازی بر اساس</span>

            <FilterData
              radioTarget={searchFilterOption}
              userTypeData={(e) => setUserType(e.target.value)}
              FactorHandler={setFactorHandler}
              setDatePickerValues={setDatePickerValues}
              datePickerValues={datePickerValues}
              priceHandler={setPrice}
              priceHandler1={setPrice2}
            />
          </div>

          <div className=" inline-block">
            <AuthButton
              textButton={"اعمال"}
              handlerClick={() =>
                setFinancialDataTableFiltered(
                  filterFinancialData(
                    financialDataTableOrg,
                    searchFilterOption,
                    filterItems[searchFilterOption]
                  )
                )
              }
              setOnclickValue={{
                textTarget: searchFilterOption,
                textValue: searchFilterText,
                sortTarget: targetSortFilter,
                sortValue:
                  targetSortFilter == "تاریخ خرید"
                    ? datePickerValues
                    : numFilter,
              }}
            />
          </div>
        </header>
        <div className=" w-full  rounded-lg border border-[#D9D9D9] h-[672px] ">
          <div className=" mb-4 h-full w-full">
            <div className=" h-full">
              <div className=" h-14 text-sm font-normal flex items-center justify-around flex-row-reverse bg-[#FCFCFB]">
                <p className=" w-28 text-center">عملیات</p>
                <p className=" w-24 text-center">وضعیت پرداخت</p>
                <p className=" w-11 text-center">مبلغ</p>
                <p className=" w-[68px] text-center">تاریخ انقضا</p>
                <p className=" w-16 text-center">تاریخ خرید</p>
                <p className=" w-36 text-center">نوع اشتراک</p>
                <p className=" w-20 text-center">شماره فاکتور</p>
                <p className=" w-8 text-center">ردیف</p>
                
              </div>
              <div className="overflow-scroll h-[94%] text-xs font-normal">
                {filterFinancialReportData.length > 0 &&
                  filterFinancialReportData.map((item, index) => (
                    <div
                      className={`w-full h-[61px] border-b border-[#0000000D] text-xs font-normal flex justify-around flex-row-reverse items-center`}
                    >
                      {/* عملیات */}
                      <p className=" w-28 text-center">{item.type_text}</p>
                      {/* وضعیت */}
                      <p className=" w-24 text-center">
                        <span
                          className={`inline-block w-20 py-2 text-center text-[#FFFFFF] rounded-[20px] ${
                            item.payment_status_text == "پرداخت ناموفق"
                              ? " bg-[#F35242]"
                              : item.payment_status_text == "پرداخت نشده"
                              ? "bg-yellow"
                              : "bg-[#10CCAE]"
                          }`}
                        >
                          {item.payment_status_text}
                        </span>
                      </p>
                      {/* مبلغ */}
                      {/* <p className=" w-11 text-center">{item.sub_total.toString().substring(0, item.sub_total.toString().length - 3)}</p> */}
                      <p className=" w-11 text-center">
                        {setFormatPrice(item.sub_total)}
                      </p>
                      {/* انقضا */}
                      <p className=" w-16 text-center">
                        {(item.user != undefined) &
                          (item.user.package_end_date != null) &&
                          moment(
                            item.user.package_end_date
                              .substring(0, 10)
                              .replaceAll("-", "/")
                          )
                            .locale("fa")
                            .format("YYYY/M/D")}
                      </p>
                      {/* خرید */}
                      <p className=" w-[68px] text-center">
                        {item.created_at != undefined &&
                          moment(
                            item.created_at
                              .substring(0, 10)
                              .replaceAll("-", "/")
                          )
                            .locale("fa")
                            .format("YYYY/M/D")}
                      </p>
                      {/* نوع اشتراک */}
                      <p className=" w-36 text-center">
                        {item.user != undefined &&
                        item.description
                          .substring(31, item.description.length)
                          .includes("رایگان") == true
                          ? "14 روز رایگان"
                          : item.description.substring(
                              31,
                              item.description.length
                            )}
                      </p>
                      {/* شماره فاکتور */}
                      <p className=" w-20 text-center">{item.order_code}</p>
                      {/* ردیف */}
                      <p className=" w-8 text-center">{index + 1}</p>
                    
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-left mt-7 pb-5">
          <div className=" inline-block">
            {/* TODO: HI ALI */}
            {true ? (
              <Fragment>
                <ExcelFile
                  element={
                    <AuthButton
                      handlerClick={""}
                      setOnclickValue={copyItem}
                      textButton={
                        <Fragment>
                          <img
                            src="/img/dashboard/financialReports/file_download.svg"
                            className=" ml-3"
                            alt="financialReports"
                          />{" "}
                          خروجی اکسل
                        </Fragment>
                      }
                    />
                  }
                >
                  <ExcelSheet data={copyItem} name="Employees">
                    <ExcelColumn label="شماره فاکتور" value={"order_code"} />
                    <ExcelColumn label="نوع اشتراک" value={"description"} />
                    <ExcelColumn label="تاریخ خرید" value={"created_at"} />
                    <ExcelColumn label="تاریخ انقضا" value={"updated_at"} />
                    <ExcelColumn label="مبلغ" value={"sub_total"} />
                    <ExcelColumn
                      label="وضعیت پرداخت"
                      value={"payment_status_text"}
                    />
                    <ExcelColumn label="عملیات" value={"type_text"} />
                  </ExcelSheet>
                </ExcelFile>
              </Fragment>
            ) : null}
          </div>
        </div>
      </div>
      <SetTitleTabBrowser nameSection={"گزارش های مالی"} />
    </div>
  );
}
