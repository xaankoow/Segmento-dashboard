import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllFinancialReportsData } from "../../../service/financialReportsService";
import success_ico_svg from "../../../../assets/img/dashboard/buyPlan/alert/success_ico.svg";
import error_ico_svg from "../../../../assets/img/dashboard/buyPlan/alert/error_ico.svg";

export default function AleartMessageBuyPlan() {
  const [financialData, setFinancialData] = useState([]);

  const typeAlert ="success"
  // const typeAlert =
  //   financialData.length != 0 &&
  //   financialData[0].payment_status_text == "پرداخت موفق"
  //     ? "err"
  //     : "err";

  const dispatch = useDispatch();

  useEffect(() => {
    if (financialData.length == 0) {
      GetFinancialReportsData();
    }
  }, []);

  const loadingState = useSelector((state) => state.loadingState);

  const GetFinancialReportsData = async () => {
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
          setFinancialData(data.data);
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

  return (
    <Fragment>
      <div className="flex gap-6 items-center pr-4 mt-3">
        <div className="w-[20px] h-[2px] bg-[#001F43] rotate-90 rounded absolute -right-[9px]" />
        <span className="text-lg">خرید اشتراک سگمنتو</span>
      </div>
      {financialData.length > 0 ? (
        <div className=" px-10 mt-12">
          <div
            className={`flex justify-between pl-10 pr-4 py-5  ${
              typeAlert == "success" ? "bg-[#10CCAE]" : "bg-[#F35242]"
            } rounded-lg`}
          >
            {typeAlert == "success" ? (
              <div>
                <p className=" text-lg font-normal text-[#fff] min-w-[104px]">
                  "تبریک به شما "
                </p>
              </div>
            ) : (
              ``
            )}

            {typeAlert == "success" ? (
              <div className="w-full flex flex-col justify-center items-center">
                <span className=" text-[#fff]">اشتراک فعال‌شده برای شما:</span>
                <span className=" text-[#fff]">
                  {financialData.length != 0 &&
                    financialData[0].package.title +
                      " " +
                      financialData[0].package.type_text}
                </span>
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
              <img src={success_ico_svg} alt="" className="" />
            ) : (
              <img src={error_ico_svg} alt="" className="" />
            )}
          </div>
          <div className=" mt-7">
            {typeAlert == "success" ? (
              <div className="flex gap-3">
                <Link
                  to={"/dashboard/planStatus"}
                  className="btn-style ml-7 inline-block w-[153px]"
                >
                  مشاهده اشتراک
                </Link>
                <Link
                  to={"/dashboard/easyStart"}
                  className="btn-secondary inline-block w-[85px]"
                >
                  داشبورد
                </Link>
              </div>
            ) : (
              <Link
                to={"/dashboard/buyPlan"}
                className="btn-style inline-block w-[153px]"
              >
                خرید مجدد اشتراک{" "}
              </Link>
            )}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}
