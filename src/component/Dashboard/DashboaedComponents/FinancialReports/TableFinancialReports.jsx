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
import { FilterData } from "./changeDataSearch";
import { DateObject } from "react-multi-date-picker";
import ComboBox from "../../../shared/comboBox/ComboBox";
import file_download_svg from "../../../../assets/img/dashboard/financialReports/file_download.svg";
import Skeleton from "react-loading-skeleton";

export default function TableFinancialReports({ title }) {
  const [targetSortFilter, setTargetSortFilter] = useState("تاریخ خرید");
  const [searchFilterOption, setSearchFilterOption] = useState("شماره فاکتور");
  const [numFilter, setNumFilter] = useState(1);
  const filterBoxDatas = [
    "بدون فیلتر",
    "شماره فاکتور",
    "نوع اشتراک",
    "تاریخ خرید",
    "تاریخ انقضا",
    "مبلغ",
    "وضعیت پرداخت",
    "عملیات",
  ];
  const [financialDataTableOrg, setFinancialDataTableOrg] = useState([]);
  const [financialDataTableFiltered, setFinancialDataTableFiltered] = useState(
    []
  );

  const dispatch = useDispatch();

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
    "تاریخ خرید": datePickerValues,
    "تاریخ انقضا": datePickerValues,
    مبلغ: [Number(price), Number(price2)],
    "وضعیت پرداخت": userType,
    عملیات: userType,
  };

  const [searchFilterText, setSearchFilterText] = useState("");

  const loadingState = useSelector((state) => state.loadingState);
  useEffect(() => {

    // if (financialDataTableOrg.length == 0) {
    GetFinancialReportsData();
    // }
  }, []);

  const GetFinancialReportsData = async () => {
    let toastMessage = "";
    try {
      if (!loadingState.ProcessingDelay.includes("getAllFinancialReports")) {
        //handle show loadin
        {
          loadingState.ProcessingDelay.push("getAllFinancialReports");
          loadingState.canRequest = false;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState,
          });
        }
        const { data } = await getAllFinancialReportsData();

        if (data.status == true && data.code == 200) {
          setFinancialDataTableOrg(data.data);
          setFinancialDataTableFiltered(data.data);
        }
        //handle hide loading
        {
          var removeProcessingItem = loadingState.ProcessingDelay.filter(
            (item) => item != "getAllFinancialReports"
          );
          loadingState.ProcessingDelay = removeProcessingItem;
          loadingState.canRequest = removeProcessingItem > 0 ? false : true;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState,
          });
        }
      }
    } catch (error) {
      //handle hide loading
      {
        var removeProcessingItem = loadingState.ProcessingDelay.filter(
          (item) => item != "getAllFinancialReports"
        );
        loadingState.ProcessingDelay = removeProcessingItem;
        loadingState.canRequest = removeProcessingItem > 0 ? false : true;
        await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
      }
    }
  };

  var moment = require("jalali-moment");

  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  return (
    <>
      <PageTitle title={title} />
      <div className=" w-full px-10 m-auto">
        <header className="flex items-center justify-between h-10 w-full mb-7 mt-10">
          <div className="w-[410px]">
            <ComboBox
              placeholder={"فیلد جستجو"}
              radioTextItems={filterBoxDatas}
              radioClickedHandler={(e) => setSearchFilterOption(e.target.value)}
            />
          </div>
          <div className="flex items-center ">
            {searchFilterOption !== "بدون فیلتر" && (
              <span className=" ml-2">مرتب سازی بر اساس</span>
            )}

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
                <p className=" w-[72px] text-center ">مبلغ (تومان)</p>
                <p className=" w-[68px] text-center">تاریخ انقضا</p>
                <p className=" w-16 text-center">تاریخ خرید</p>
                <p className=" w-36 text-center">نوع اشتراک</p>
                <p className=" w-20 text-center">شماره فاکتور</p>
                <p className=" w-8 text-center">ردیف</p>
              </div>
              <div className="overflow-scroll h-[94%] text-xs font-normal">
                {/* {financialDataTableFiltered.length > 0 && */}

                {financialDataTableFiltered.length != 0 ?
                  financialDataTableFiltered.map((item, index) => (
                    <div
                      className={`w-full h-[61px] border-b border-[#0000000D] text-xs font-normal flex justify-around flex-row-reverse items-center`}
                    >
                      {/* عملیات */}
                      <p className=" w-28 text-center">{item.type_text}</p>
                      {/* وضعیت */}
                      <p className=" w-24 text-center">
                        <span
                          className={`inline-block w-20 py-2 text-center text-[#FFFFFF] rounded-[20px] ${item.payment_status_text == "پرداخت ناموفق"
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
                      <p className=" w-[72px] text-center">
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
                  )) :
                  <div> {/* skeleton style */}
                    <div
                      className={`w-full h-[61px] border-b border-[#0000000D] text-xs font-normal flex justify-around flex-row-reverse items-center`}
                    >
                      {/* عملیات */}
                      <p className=" w-28 text-center">                 
                      <Skeleton/>
                      
                      </p>
                      {/* وضعیت */}
                      <p className=" w-24 text-center">
                        <span
                          className={`inline-block w-20 py-2 text-center text-[#FFFFFF] rounded-[20px]`}
                        >
                          <Skeleton/>
                        </span>
                      </p>
                      {/* مبلغ */}
                      {/* <p className=" w-11 text-center">{item.sub_total.toString().substring(0, item.sub_total.toString().length - 3)}</p> */}
                      <p className=" w-[72px] text-center">
                      <Skeleton/>
                      </p>
                      {/* انقضا */}
                      <p className=" w-16 text-center">
                      <Skeleton/>
                      </p>
                      {/* خرید */}
                      <p className=" w-[68px] text-center">
                      <Skeleton/>
                      </p>
                      {/* نوع اشتراک */}
                      <p className=" w-36 text-center">
                      <Skeleton/>
                      </p>
                      {/* شماره فاکتور */}
                      <p className=" w-20 text-center"><Skeleton/></p>
                      {/* ردیف */}
                      <p className=" w-8 text-center"><Skeleton/></p>
                    </div>
                    <div
                      className={`w-full h-[61px] border-b border-[#0000000D] text-xs font-normal flex justify-around flex-row-reverse items-center`}
                    >
                      {/* عملیات */}
                      <p className=" w-28 text-center">                 
                      <Skeleton/>
                      
                      </p>
                      {/* وضعیت */}
                      <p className=" w-24 text-center">
                        <span
                          className={`inline-block w-20 py-2 text-center text-[#FFFFFF] rounded-[20px]`}
                        >
                          <Skeleton/>
                        </span>
                      </p>
                      {/* مبلغ */}
                      {/* <p className=" w-11 text-center">{item.sub_total.toString().substring(0, item.sub_total.toString().length - 3)}</p> */}
                      <p className=" w-[72px] text-center">
                      <Skeleton/>
                      </p>
                      {/* انقضا */}
                      <p className=" w-16 text-center">
                      <Skeleton/>
                      </p>
                      {/* خرید */}
                      <p className=" w-[68px] text-center">
                      <Skeleton/>
                      </p>
                      {/* نوع اشتراک */}
                      <p className=" w-36 text-center">
                      <Skeleton/>
                      </p>
                      {/* شماره فاکتور */}
                      <p className=" w-20 text-center"><Skeleton/></p>
                      {/* ردیف */}
                      <p className=" w-8 text-center"><Skeleton/></p>
                    </div>
                    <div
                      className={`w-full h-[61px] border-b border-[#0000000D] text-xs font-normal flex justify-around flex-row-reverse items-center`}
                    >
                      {/* عملیات */}
                      <p className=" w-28 text-center">                 
                      <Skeleton/>
                      
                      </p>
                      {/* وضعیت */}
                      <p className=" w-24 text-center">
                        <span
                          className={`inline-block w-20 py-2 text-center text-[#FFFFFF] rounded-[20px]`}
                        >
                          <Skeleton/>
                        </span>
                      </p>
                      {/* مبلغ */}
                      {/* <p className=" w-11 text-center">{item.sub_total.toString().substring(0, item.sub_total.toString().length - 3)}</p> */}
                      <p className=" w-[72px] text-center">
                      <Skeleton/>
                      </p>
                      {/* انقضا */}
                      <p className=" w-16 text-center">
                      <Skeleton/>
                      </p>
                      {/* خرید */}
                      <p className=" w-[68px] text-center">
                      <Skeleton/>
                      </p>
                      {/* نوع اشتراک */}
                      <p className=" w-36 text-center">
                      <Skeleton/>
                      </p>
                      {/* شماره فاکتور */}
                      <p className=" w-20 text-center"><Skeleton/></p>
                      {/* ردیف */}
                      <p className=" w-8 text-center"><Skeleton/></p>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-left mt-7 pb-5">
          <div className=" inline-block">
            {financialDataTableFiltered.length != 0 ? (
              <Fragment>
                <ExcelFile
                  element={
                    <AuthButton
                      textButton={
                        <Fragment>
                          <img
                            src={file_download_svg}
                            className=" ml-3"
                            alt="financialReports"
                          />{" "}
                          خروجی اکسل
                        </Fragment>
                      }
                    />
                  }
                >
                  <ExcelSheet
                    data={
                      financialDataTableFiltered.length > 10
                        ? financialDataTableFiltered.slice(0, 10)
                        : financialDataTableFiltered
                    }
                    name="Employees"
                  >
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
    </>
  );
}
