import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllFinancialReports } from "../../../Redux/Action/financialReports";

export default function AleartMessageBuyPlan() {
  const { financialDataTable } = useSelector((state) => state.financialState);

  const typeAlert =
    financialDataTable.length != 0
      ? financialDataTable[0].payment_status_text == "پرداخت موفق"
        ? "success"
        : "err"
      : "";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFinancialReports());
  }, []);

  return (
    <Fragment>
      <div className="flex gap-6 items-center pr-4 mt-3">
        <div className="w-[20px] h-[2px] bg-[#001F43] rotate-90 rounded absolute -right-[9px]" />
        <span className="text-lg">خرید اشتراک سگمنتو</span>
      </div>
      {financialDataTable.length > 0 ? (
        <div className=" px-10 mt-12">
          <div
            className={`flex justify-between pl-10 pr-4 py-5  ${
              typeAlert == "success" ? "bg-[#10CCAE]" : "bg-[#F35242]"
            } rounded-lg`}
          >
            <div>
              {/* <p className=' text-xl font-bold text-[#fff] mb-3'>{typeAlert == "success" ? "موفقیت آمیز!" : "خطایی رخ داده!"}</p> */}
              {/* <p className=' text-xl font-bold text-[#fff] mb-3'>{typeAlert == "success" ? "کاربر عزیز اشتراک 12 ماهه طلایی برای شما فعال شد :)" : "کاربر عزیز اشتراک شما فعال نشد :("}</p> */}
              {/* <p className=' text-xl font-bold text-[#fff] mb-3'>{financialDataTable[0].description}</p> */}
              <p className=" text-lg font-normal text-[#fff] min-w-[104px]" >
                {typeAlert == "success"
                  ? "تبریک به شما    "
                  : ``}
              </p>
            </div>

            {typeAlert == "success" ? (
              <div className="w-full flex flex-col justify-center items-center">
                <span className=" text-[#fff]">اشتراک فعال‌شده برای شما:</span>
                <span className=" text-[#fff]">اشتراک طلایی 3 ماهه</span>
              </div>
            ) : (
              <div className="w-full flex flex-col my-auto justify-center ">
                <span className=" text-[#fff]">
                  چه اتفاق ناراحت کننده‌ای! متاسفیم که در جریان پرداخت با مشکل
                  مواجه شدید.{" "}
                </span>
                <span className=" text-[#fff]">
                  {" "}
                  دکمه تلاش دوباره را بزنید.{" "}
                </span>
              </div>
            )}

            {typeAlert == "success" ? (
              <img
                src="/img/dashboard/buyPlan/alert/success_ico.svg"
                alt=""
                className=""
              />
            ) : (
              <img
                src="/img/dashboard/buyPlan/alert/error_ico.svg"
                alt=""
                className=""
              />
            )}
          </div>
          <div className=" mt-7">
            {typeAlert == "success" ? (
              <Fragment>
                <Link
                  to={"/dashboard/planStatus"}
                  className="btn-style ml-7 inline-block"
                >
                  مشاهده اشتراک
                </Link>
                <Link
                  to={"/dashboard/easyStart"}
                  className="btn-secondary inline-block"
                >
                  داشبورد
                </Link>
                {/* <button className='btn-style inline-block'>مشاهده اشتراک</button> */}
                {/* <button className='btn-style bg-[#F2F5F7] inline-block text-[#488CDA] mr-7'>داشبورد</button> */}
              </Fragment>
            ) : (
              <Link
                to={"/dashboard/buyPlan"}
                className="btn-style inline-block"
              >
خرید مجدد اشتراک              </Link>
            )}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}
