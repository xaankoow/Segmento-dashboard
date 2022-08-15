// import { Chart } from 'chart.js';
import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import PageTitle from "../pageTitle/pageTitle";
import { usetLimit } from "../../../service/userLimit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SetTitleTabBrowser from "../../../Utils/SetTitleTabBrowser";
// import './'
// import "./output.css"
// import './script'
export default function PlanStatus() {
  useEffect(() => {
    if (datas == "") pastSelexboxData();
  });
  const [datas, setDatas] = useState([]);

  var moment = require("jalali-moment");

  const allWords=100;

  const userState = useSelector((state) => state.userState);

  var nowDate = new Date();

  var startDate= userState.userData.package!=undefined && new Date(moment(userState.userData.package.start).format("YYYY/M/D")) ;
  var expiryDate= userState.userData.package!=undefined && new Date(moment(userState.userData.package.end).format("YYYY/M/D")) ;
  
  var timeSecDaysLeft = Math.abs(expiryDate-nowDate);
  var timeSecDays = Math.abs(expiryDate-startDate);


  var numberOfDaysLeft=Math.ceil(timeSecDaysLeft / (1000 * 60 * 60 * 24))
  var numberOfDays=Math.ceil(timeSecDays / (1000 * 60 * 60 * 24))
  



  var user_package_title = "";
  var package_end_dates = "";
  var user_package_type_text = "";
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
  const pastSelexboxData = async () => {
    try {
      const { data, status } = await usetLimit();
      setDatas(data.data); //5
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  ChartJS.register(ArcElement, Tooltip, Legend);

  const content=datas.length>0 &&  datas[3].count;
  const keyword=datas.length>0 &&  datas[4].count;
  const dateExColor=datas.length>0 &&  datas[4].count;
  const data = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: "# of Votes",
        // data: [numberOfDays,numberOfDaysLeft],
        data: [numberOfDaysLeft,numberOfDays-numberOfDaysLeft],
        cutout: 50,
        backgroundColor: content &&  content < 20 ?  ["#D9D9D9", "#F35242"] :content && content < 50 ? ["#D9D9D9", "#FFCE47"] : ["#D9D9D9", "#10CCAE"],
        borderWidth: 0,
        borderRadius: 7,
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        // borderWidth: 1,
      },
    ],
  };

  const miniChartSetting2 = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: "# of Votes",
        data: [30, 70],
        cutout: 36,
        // cutout: 38,
        // width:35,
        // height:35,
        backgroundColor:content &&  content < 20 ?  ["#D9D9D9", "#F35242"] :content && content < 50 ? ["#D9D9D9", "#FFCE47"] : ["#D9D9D9", "#10CCAE"],
        borderWidth: 0,
        borderRadius: 5,
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        // borderWidth: 1,
      },
    ],
  };

  const miniChartSetting = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: "# of Votes",
        data: [30, 70],
        cutout: 36,
        // cutout: 38,
        // width:35,
        // height:35,
        backgroundColor:keyword &&  keyword < 20 ?  ["#D9D9D9", "#F35242"] :keyword && keyword < 50 ? ["#D9D9D9", "#FFCE47"] : ["#D9D9D9", "#10CCAE"],
        borderWidth: 0,
        borderRadius: 5,
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        // borderWidth: 1,
      },
    ],
  };

  return (
    <div className="">
      <PageTitle title={" وضعیت اشتراک"} />
      <div className="mx-auto w-full mt-9">
        <div className=" flex flex-col h-100vh w-100vh rounded mx-4 my-4 bg-white">
          {/* <!--عنوان 1--> */}

          {/* <div className="flex flex-row items-center">
                        <span id="line1" className="w-0.5 h-5 mt-5"></span>
                        <span className="mr-3 mt-4 ">وضعیت اشتراک</span>
                    </div> */}

          <div className="flex lg:flex-row md:flex-row sm:flex-col  justify-between lg:pt-16 md:pt-16 gap-10">
            {/* <!--باکس راست--> */}

            <div
              id="item2"
              className="flex flex-col rounded md:mx-2 sm:mx-auto md:mt-2 sm:mt-2 w-[25%] bg-[#FCFCFB]"
            >
              <div className="flex flex-row">
                <span
                  id="line2"
                  className="w-1 h-5 mt-5 mr-5 absolute rounded"
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
                  {userState.userData.package != undefined && moment(userState.userData.package.start).locale("fa").format("YYYY/M/D")}
                </div>

                <hr className="my-2 mx-1 border-[#D9D9D9]" />

                <div className="flex flex-row justify-between ">
                  <span>تاریخ اتمام اشتراک</span>
                  <span>
                    {userState.userData.package != undefined && moment(userState.userData.package.end).locale("fa").format("YYYY/M/D")}


                    {/* {package_end_dates && moment(package_end_dates.substring(0, 10))
                      .locale("fa")
                      .format("YYYY/M/D")} */}
                  </span>
                </div>

                <hr className="my-2 mx-1 border-[#D9D9D9]" />

                <div className="flex flex-row justify-between ">
                  <span>روز های باقی مانده</span>
                  <span>{numberOfDaysLeft} روز</span>
                </div>

                <button
                  id="btn1"
                  className="btn-style w-[122px] flex flex-row justify-center items-center rounded-lg mx-auto  mt-8 py-auto text-[#ffff]"
                >
                  تمدید اشتراک
                </button>
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
                  src="/img/dashboard/planStatus/date_range.svg"
                  alt=""
                />
                <span className=" mt-5 mr-3 text-sm">روز های باقی مانده</span>
              </div>

              <div className="mt-7 w-[143px] h-[143px] float-left relative mx-auto">
                <div className="w-full h-10 text-xs absolute top-1/2 left-0 my-[-20px] leading-5 text-center z-50">
                  {numberOfDaysLeft}
                  <br />
                  روز باقی مانده
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
                <div className="flex flex-row">
                  <span id="child1" className="w-1.5 h-1.5"></span>
                  <span id="child2">مصرف شده</span>
                </div>

                <div className="flex flex-row">
                  <span id="child3" className="w-1.5 h-1.5"></span>
                  <span id="child4">باقی مانده </span>
                </div>
              </div>
            </div>

            {/* <!--باکس چپ--> */}

            <div
              id="item3"
              className="bg-[#FCFCFB] flex flex-col justify-center items-center lg:mr-10 rounded pt-5  md:mx-2 sm:mx-auto md:mt-2 sm:mt-2 w-[35%]"
            >
              <span id="shape">تخفیف</span>
              <h1 id="off" className="font-extrabold">
                30%
              </h1>

              <span className="mt-1">اشتراک {user_package_type_text}</span>

              <div id="box-off">
                <div className="flex flex-row my-4">
                  <span>فقط</span>
                  <span className="mx-1 px-3 bg-[#0B4B94] rounded-2xl text-[#fff]">
                    10
                  </span>
                  <span>روز دیگر فرصت دارید</span>
                </div>
              </div>
              <button
                id=""
                className="btn-style  mb-8 mt-6 w-[161px] text-white"
              >
                خرید با 30% تخفیف
              </button>
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
                    {allWords}
                    </span>
                    <span className="mr-3">کلمات مصرف شده</span>
                    <span id="border" className="mr-3">
                  {datas.length>0 && allWords - datas[4].count}
                    </span>
                    <span className="mr-3">کلمات باقی مانده</span>
                    <span id="border" className="mr-3">
                    {datas.length>0 ? datas[4].count : ""}
                    </span>
                  </div>
                </div>

                <div className="w-24 h-24 float-left relative mx-auto">
                  <div className="w-full h-10 absolute top-1/2 left-0 mt-[-20px] text-[8px] leading-5 text-center z-50">
                    <span id="valuetwo"></span> {datas.length>0 ? datas[4].count : ""} <br />
                    کلمه باقی مانده
                  </div>
                  <figure className="flex bottom-1 relative h-full text-center justify-center">
                    <Doughnut
                      data={miniChartSetting}
                      options={{ maintainAspectRatio: false }}
                    />
                    {/* <canvas id="chartCanvas1" width="90" height="90"></canvas> */}
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
                    {allWords}
                    </span>
                    <span className="mr-3">کلمات مصرف شده</span>
                    <span id="border" className="mr-3">
                      {datas.length>0 ? allWords- datas[3].count : ""}
                    </span>
                    <span className="mr-3">کلمات باقی مانده</span>
                    <span id="border" className="mr-3">
                    {datas.length>0 ? datas[3].count : ""}
                    </span>
                  </div>
                </div>

                <div className="w-24 h-24 float-left relative mx-auto">
                  <div className="w-full h-10 absolute top-1/2 left-0 mt-[-20px] text-[8px] leading-5 text-center z-50">
                    <span id="valuethree"></span> {datas.length>0 ? datas[3].count : ""} <br />
                    کلمه باقی مانده
                  </div>
                  <figure className="flex bottom-1 relative h-full text-center justify-center">
                    <Doughnut
                      data={miniChartSetting2}
                      options={{ maintainAspectRatio: false }}
                    />
                    {/* <canvas id="chartCanvas1" width="90" height="90"></canvas> */}
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SetTitleTabBrowser nameSection={"وضعیت اشتراک"} />
    </div>
  );
}