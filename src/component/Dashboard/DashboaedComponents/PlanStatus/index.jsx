import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import PageTitle from "../pageTitle/pageTitle";
import { usetLimit } from "../../../service/userLimit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SetTitleTabBrowser from "../../../Utils/SetTitleTabBrowser";
import { Link } from "react-router-dom";
import { getPackageInfO } from "../../../service/packages";
import { setFormatNumber } from "../../../Utils/FORMAT/number";
import date_range_svg from "../../../../assets/img/dashboard/planStatus/date_range.svg";
import boxDiscount_svg from "../../../../assets/img/dashboard/planStatus/boxDiscount.svg";
import balloonBoxDiscount_svg from "../../../../assets/img/dashboard/planStatus/balloonBoxDiscount.svg";
import { allLimitDataFeature } from "../../../Redux/Action/workSpace";
import { addLoadingItem, removeLoadingItem } from "../../../Redux/Action/loading";

export default function PlanStatus() {
  var moment = require("jalali-moment");

  // const [allLimitsDatas, setDatas] = useState([]);
  const [allWords, setAllWords] = useState([]);
  const userState = useSelector((state) => state.userState);
  const { allLimitsDatas } = useSelector((state) => state.workSpaceState);
  const loadingState = useSelector((state) => state.loadingState);

  const dispatch = useDispatch();

  const axiosController = new AbortController();
  var nowDate = new Date();
  // user type
  const type = userState.userData.package != undefined ? userState.userData.package.type_text : "بدون پکیج";

  var user_package_title = "--";
  var package_end_dates = "--";
  var user_package_type_text = "--";
  var numberOfDaysLeft = 0;
  var numberOfDays = 1;

  if (userState.userData.package != undefined) {
    if (userState.userData.package.start != null) {

      var startDate =
        userState.userData.package != undefined &&
        new Date(moment(userState.userData.package.start).format("YYYY/M/D"));
      var expiryDate =
        userState.userData.package != undefined &&
        new Date(moment(userState.userData.user.package_end_date).format("YYYY/M/D"));
      var timeSecDaysLeft = Math.abs(expiryDate - nowDate);
      var timeSecDays = Math.abs(expiryDate - startDate);

      numberOfDaysLeft = Math.ceil(timeSecDaysLeft / (1000 * 60 * 60 * 24));
      numberOfDays = Math.ceil(timeSecDays / (1000 * 60 * 60 * 24));
    }

  }


  if (userState.userData.package) {
    user_package_title = userState.userData.package.title
      ? userState.userData.package.title
      : "";
    user_package_type_text = userState.userData.package.type_text
      ? userState.userData.package.type_text
      : "";
    package_end_dates = userState.userData.package_end_date
      ? userState.userData.package_end_date
      : "";
  } else {
  }

  ChartJS.register(ArcElement, Tooltip, Legend);

  const content = allLimitsDatas.length > 0 && allLimitsDatas[20].count;
  const keyword = allLimitsDatas.length > 0 && allLimitsDatas[6].count;

  useEffect(() => {
    // console.log("plan status")
    dispatch(allLimitDataFeature({ axiosController }))
    // const pastSelexboxData = async () => {
    //   try {
    //     const { data, status } = await usetLimit();
    //     setDatas(data.data);
    //   } catch (error) { }
    // };
    // if (allLimitsDatas.length == 0) pastSelexboxData();
  }, []);

  useEffect(() => {
    dispatch(allLimitDataFeature({ axiosController }))

    const setPackagesInformation = async () => {
      let package_uuid = "";

      if (userState.userData.package != undefined) {
        package_uuid = userState.userData.package.uuid;
        try {
          if (!loadingState.ProcessingDelay.includes("getPackageInfO")) {
            dispatch(addLoadingItem("getPackageInfO"))
            const { data } = await getPackageInfO({ package_uuid, axiosController });
            if (data.code == 200 & data.status == true) {
              setAllWords(data.data.features);
            }


          }

        } catch (error) { }
        dispatch(removeLoadingItem("getPackageInfO"))
      }
    };

    if (allWords.length == 0) setPackagesInformation();
  }, [userState.userData.package]);

  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: userState.userData.package != undefined ? [numberOfDays - numberOfDaysLeft, numberOfDaysLeft] : [1, 0],
        cutout: 50,
        backgroundColor: !numberOfDays
          ? ["#D9D9D9", "#F35242"]
          : numberOfDaysLeft >= Math.round((numberOfDays * 70) / 100)
            ? ["#D9D9D9", "#10CCAE"]
            : numberOfDaysLeft &&
              numberOfDaysLeft >= Math.round((numberOfDays * 30) / 100)
              ? ["#D9D9D9", "#FFCE47"]
              : numberOfDaysLeft &&
                numberOfDaysLeft >= Math.round((numberOfDays * 1) / 100)
                ? ["#D9D9D9", "#F35242"]
                : ["#D9D9D9", "#F35242"],
        borderWidth: 0,
        borderRadius: 7,
      },
    ],
  };

  const miniChartSetting2 = {
    datasets: [
      {
        label: "# of Votes",
        data: [
          allLimitsDatas.length > 0 ?
            allWords.length != 0 &&
            allWords[20].count - allLimitsDatas[20].count : 1,
          allLimitsDatas.length > 0 ? allLimitsDatas[20].count : 0,
        ],
        cutout: 36,
        backgroundColor:
          content ?
            content >=
              Math.round((allWords.length != 0 && allWords[20].count * 70) / 100)
              ? ["#D9D9D9", "#10CCAE"]
              : content &&
                content >=
                Math.round(
                  (allWords.length != 0 && allWords[20].count * 30) / 100
                )
                ? ["#D9D9D9", "#FFCE47"]
                : content &&
                content >=
                Math.round(
                  (allWords.length != 0 && allWords[20].count * 1) / 100
                ) && ["#D9D9D9", "#F35242"] : ["#D9D9D9", "#F35242"],
        borderWidth: 0,
        borderRadius: 5,
      },
    ],
  };
  const backGround = () => {
    if (keyword) {
      if (
        keyword >=
        Math.round((allWords.length != 0 && allWords[6].count * 70) / 100)
      ) {
        return "#10CCAE";
      } else if (
        keyword >=
        Math.round((allWords.length != 0 && allWords[6].count * 30) / 100)
      ) {
        return "#FFCE47";
      } else if (
        keyword >=
        Math.round((allWords.length != 0 && allWords[6].count * 1) / 100)
      ) {
        return "#F35242";
      }
    } else {
      return "#F35242";
    }
  };

  const miniChartSetting = {
    datasets: [
      {
        label: "# of Votes",
        data: [
          allLimitsDatas.length > 0 ?
            allWords.length != 0 &&
            allWords[6].count - allLimitsDatas[6].count : 1,
          allLimitsDatas.length > 0 && allLimitsDatas[6].count,
        ],
        cutout: 36,
        backgroundColor:
          keyword ?
            keyword >=
              Math.round((allWords.length != 0 && allWords[6].count * 70) / 100)
              ? ["#D9D9D9", "#10CCAE"]
              : keyword &&
                keyword >=
                Math.round(
                  (allWords.length != 0 && allWords[6].count * 30) / 100
                )
                ? ["#D9D9D9", "#FFCE47"]
                : keyword &&
                keyword >=
                Math.round(
                  (allWords.length != 0 && allWords[6].count * 1) / 100
                ) && ["#D9D9D9", "#F35242"] : ["#D9D9D9", "#F35242"],
        borderWidth: 0,
        borderRadius: 5,
      },
    ],
  };

  useEffect(() => {
    return () => {
      axiosController.abort()
    }
  }, [])

  return (
    <>
      <PageTitle title={" وضعیت اشتراک"} />
      <div className="mx-auto w-full mt-9">
        <div className=" flex flex-col h-100vh w-100vh rounded mx-4 my-4 bg-[#fff]">
          {/* <!--عنوان 1--> */}

          <div className="flex lg:flex-row md:flex-row sm:flex-col  justify-between lg:pt-16 md:pt-16 gap-10">
            {/* <!--باکس راست--> */}

            <div
              id="item2"
              className="flex flex-col rounded md:mx-2 sm:mx-auto md:mt-2 sm:mt-2 w-[25%] bg-[#FCFCFB]"
            >
              <div className="flex flex-row">
                <span
                  className={`w-1 h-5 mt-5 mr-5 absolute rounded ${type.includes("طلایی")
                    ? " bg-yellow "
                    : type.includes("نقره ای")
                      ? " bg-secondary "
                      : type.includes("برنزی")
                        ? " bg-[#E99991] "
                        : type.includes("الماسی")
                          ? " bg-diamond rounded-3xl py-1 px-2 text-white text-center "
                          : type.includes("14 روز رایگان")
                            ? " bg-secondary "
                            : "  "
                    }`}
                ></span>
                <span className="absolute mt-4 mr-10 ">
                  {" "}
                  {user_package_title}
                </span>
              </div>

              <div
                id="content"
                className="flex flex-col  px-9 mt-20 w-full justify-center"
              >
                <div className="flex flex-row justify-between">
                  <span>تاریخ خرید اشتراک</span>
                  {userState.userData.package != undefined && userState.userData.package.start != null ?
                    moment(userState.userData.package.start)
                      .locale("fa")
                      .format("YYYY/M/D") : "00/00/00"}
                </div>

                <hr className="my-2 mx-1 border-[#D9D9D9]" />

                <div className="flex flex-row justify-between ">
                  <span>تاریخ اتمام اشتراک</span>
                  <span>
                    {userState.userData.package != undefined && userState.userData.package.start != null ?
                      moment(userState.userData.package.end)
                        .locale("fa")
                        .format("YYYY/M/D") : "00/00/00"}

                    {/* {package_end_dates && moment(package_end_dates.substring(0, 10))
                      .locale("fa")
                      .format("YYYY/M/D")} */}
                  </span>
                </div>

                <hr className="my-2 mx-1 border-[#D9D9D9]" />

                <div className="flex flex-row justify-between ">
                  <span>روز‌‌های باقی‌مانده</span>
                  <span>
                    {userState.userData.package ? numberOfDaysLeft : "0"} روز
                  </span>
                </div>
                <Link to={"/dashboard/buyPlan"}>
                  <button
                    id="btn1"
                    className="btn-style w-[122px] flex flex-row justify-center items-center rounded-lg mx-auto  mt-8 py-auto text-[#ffff]"
                  >
                    تمدید اشتراک
                  </button>
                </Link>
              </div>
            </div>

            {/* <!--باکس وسط--> */}

            <div
              id="item2"
              className="flex flex-col lg:mr-10 rounded md:mx-2 sm:mx-auto md:mt-2 sm:mt-2 w-[25%] bg-[#FCFCFB]"
            >
              <div className="flex flex-row">
                {/* <img className="mt-5 mr-5 " src="../picture/date_range.svg" alt="" /> */}
                <img
                  className="mt-5 mr-5 w-5 h-5"
                  src={date_range_svg}
                  alt=""
                />
                <span className=" mt-5 mr-3 text-sm">روز‌‌های باقی‌مانده</span>
              </div>

              <div className="mt-7 w-[143px] h-[143px] float-left relative mx-auto">
                <div className="w-full h-10 text-xs absolute top-1/2 left-0 my-[-20px] leading-5 text-center">
                  {userState.userData.package ? numberOfDaysLeft : "0"}
                  <br />
                  روز باقی‌مانده
                </div>
                <Doughnut
                  data={data}
                  height={143}
                  width={143}
                  options={{ maintainAspectRatio: false }}
                />
                {/* <canvas id="chart1" width="150px" height="150px"></canvas> */}
              </div>

              <div className="flex flex-row justify-around justify-center items-center py-2 text-xs ">
                <div className="flex items-center  flex-row">
                  <span id="child3" className="w-1.5 h-1.5"></span>
                  <span id="child2">مصرف شده</span>
                </div>

                <div className="flex items-center flex-row gap-1">
                  <span
                    id=""
                    className={`w-1.5 h-1.5 rounded-sm bg-[${backGround()}]`}
                  ></span>
                  <span id="">باقی مانده </span>
                </div>
              </div>
            </div>

            {/* <!--باکس چپ--> */}

            <div
              id="item3"
              className="bg-[#FCFCFB] flex flex-col justify-between items-center lg:mr-10 rounded pt-5  md:mx-2 sm:mx-auto md:mt-2 sm:mt-2 w-[35%]"
            >
              <div className="w-64 h-64 relative">
                <img src={boxDiscount_svg} className="w-full h-full" />
                <img
                  src={balloonBoxDiscount_svg}
                  className="w-full h-full absolute top-0 discountBoxBallonAnimation"
                />
              </div>
              <div>
                <Link to={"/dashboard/buyPlan"}>
                  <button
                    id=""
                    className="btn-style mb-2 mt-3 w-[161px] text-white"
                  >
                    خرید با 15% تخفیف
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <hr className="mt-6 mx-auto w-full border-[#D9D9D9]" />

          {/* <!--عنوان 2--> */}

          <span className=" my-7 md:mx-auto sm:mx-auto">وضعیت ابزار ها</span>

          <div className=" flex flex-col  mb-8">
            <div className="flex justify-between lg:flex-row mb-10 md:flex-col sm:flex-col">
              <div
                id="item-1"
                className="flex w-[48%] flex-row justify-between border border-[#D9D9D9] rounded-sm  md:mx-auto sm:mx-auto md:my-2 sm:my-2"
              >
                <div className="flex flex-col ">
                  <div className="flex flex-row">
                    <span id="line3" className=" w-0.5 h-5 mt-2"></span>
                    <span className="mt-2 mr-4">ابزار تحقیق کلمه کلیدی</span>
                  </div>

                  <div className="flex flex-row  text-[10px] mt-6">
                    <span className="mr-4 ">تعداد کل کلمات</span>
                    <span id="border" className="mr-3">
                      {allWords.length != 0
                        ? setFormatNumber(allWords[6].count)
                        : "0"}
                    </span>
                    <span className="mr-3">کلمات مصرف شده</span>
                    <span id="border" className="mr-3">
                      {allLimitsDatas.length > 0
                        ? allWords.length != 0 &&
                        setFormatNumber(allWords[6].count - allLimitsDatas[6].count)
                        : "0"}
                    </span>
                    <span className="mr-3">کلمات باقی مانده</span>
                    <span id="border" className="mr-3">
                      {allLimitsDatas.length > 0 ? setFormatNumber(allLimitsDatas[6].count) : "0"}
                    </span>
                  </div>
                </div>

                <div className="w-24 h-24 float-left relative mx-auto">
                  <div className="w-full h-10 absolute top-1/2 left-0 mt-[-20px] text-[8px] leading-5 text-center">
                    <span id="valuetwo"></span>{" "}
                    {allLimitsDatas.length > 0 ? setFormatNumber(allLimitsDatas[6].count) : "0"}{" "}
                    <br />
                    کلمه باقی مانده
                  </div>
                  <figure className="flex bottom-1 relative h-full text-center justify-center">
                    <Doughnut
                      data={miniChartSetting}
                      options={{ maintainAspectRatio: false }}
                    />
                  </figure>
                </div>
              </div>

              <div
                id="item-1"
                className="flex w-[48%] flex-row justify-between border border-[#D9D9D9] rounded-sm  md:mx-auto sm:mx-auto md:my-2 sm:my-2"
              >
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <span id="line3" className=" w-0.5 h-5 mt-2"></span>
                    <span className="mt-2 mr-4"> ابزار عنوان ساز محتوا</span>
                  </div>

                  <div className="flex flex-row  text-[10px] mt-6">
                    <span className="mr-4">تعداد کل کلمات</span>
                    <span id="border" className="mr-3">
                      {allWords.length != 0
                        ? setFormatNumber(allWords[20].count)
                        : "0"}
                    </span>
                    <span className="mr-3">کلمات مصرف شده</span>
                    <span id="border" className="mr-3">
                      {allLimitsDatas.length > 0
                        ? allWords.length != 0 &&
                        setFormatNumber(allWords[20].count - allLimitsDatas[20].count)
                        : "0"}
                    </span>
                    <span className="mr-3">کلمات باقی مانده</span>
                    <span id="border" className="mr-3">
                      {allLimitsDatas.length > 0
                        ? setFormatNumber(allLimitsDatas[20].count)
                        : "0"}
                    </span>
                  </div>
                </div>

                <div className="w-24 h-24 float-left relative mx-auto">
                  <div className="w-full h-10 absolute top-1/2 left-0 mt-[-20px] text-[8px] leading-5 text-center">
                    <span id="valuethree"></span>{" "}
                    {allLimitsDatas.length > 0 ? setFormatNumber(allLimitsDatas[20].count) : "0"}{" "}
                    <br />
                    کلمه باقی مانده
                  </div>
                  <figure className="flex bottom-1 relative h-full text-center justify-center">
                    <Doughnut
                      data={miniChartSetting2}
                      options={{ maintainAspectRatio: false }}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SetTitleTabBrowser nameSection={"وضعیت اشتراک"} />
    </>
  );
}
