import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coreUser, logoutAction } from "../../Redux/Action";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { allLimitDataFeature, ChackBusinessCustomer, getAllWorkSpace } from "../../Redux/Action/workSpace";
import { setCloseNav } from "../../Redux/Action/navMenu";
import segmento_logofa_svg from "../../../assets/img/dashboard/header/segmento-logofa.svg";
import manage_accounts_svg from "../../../assets/img/dashboard/header/manage_accounts.svg";
import add_card_svg from "../../../assets/img/dashboard/header/add_card.svg";
import statusPlan_svg from "../../../assets/img/dashboard/header/statusPlan.svg";
import money_svg from "../../../assets/img/dashboard/header/money.svg";
import arrow_svg from "../../../assets/img/dashboard/header/arrow.svg";
import redlogout_svg from "../../../assets/img/dashboard/header/redlogout.svg";
import notif_svg from "../../../assets/img/dashboard/header/notif.svg";
import message_svg from "../../../assets/img/dashboard/header/message.svg";
import settingicon_svg from "../../../assets/img/dashboard/header/settingicon.svg";
import profileImage_png from "../../../assets/img/dashboard/userProfile/profileImage.png";

const DashboardHeader = ({ setActiveIconHandlerClicked, setClicked1 }) => {
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("token");
  const userState = useSelector((state) => state.userState);

  var user_name = "";
  if (userState.userData.user) {
    user_name = userState.userData.user.name
      ? userState.userData.user.name
      : "";
  } else {
  }
  const forceUpdate = userState.forceUpdate;

  const navigate = useNavigate();

  var moment = require("jalali-moment");

  ChartJS.register(ArcElement, Tooltip, Legend);

  const [doughnutChartData, setDoughnutChartData] = useState({
    datasets: [
      {
        label: "# of Votes32",
        // data: [numberOfDays - numberOfDaysLeft, numberOfDaysLeft],
        data: [1, 0],
        cutout: 5,
        backgroundColor: ["#D9D9D9", "#10CCAE"],
        borderWidth: 0,
        borderRadius: 7,
      },
    ],
  });
  useEffect(() => {
    var nowDate = new Date();

    if (userState.userData.package != undefined) {
      if (userState.userData.package.start != null) {

        var startDate = new Date(moment(userState.userData.package.start).format("YYYY/M/D"));
        var expiryDate = new Date(moment(userState.userData.package.end).format("YYYY/M/D"));

        var timeSecDaysLeft = Math.abs(expiryDate - nowDate);
        var timeSecDays = Math.abs(expiryDate - startDate);

        var numberOfDaysLeft = Math.ceil(timeSecDaysLeft / (1000 * 60 * 60 * 24));
        var numberOfDays = Math.ceil(timeSecDays / (1000 * 60 * 60 * 24));

        setDoughnutChartData({
          datasets: [
            {
              label: "# of Votes32",
              data: [numberOfDays - numberOfDaysLeft, numberOfDaysLeft],
              cutout: 5,
              backgroundColor:
                numberOfDays &&
                  numberOfDaysLeft >= Math.round((numberOfDays * 70) / 100)
                  ? ["#D9D9D9", "#10CCAE"]
                  : numberOfDaysLeft &&
                    numberOfDaysLeft >= Math.round((numberOfDays * 30) / 100)
                    ? ["#D9D9D9", "#FFCE47"]
                    : numberOfDaysLeft &&
                      numberOfDaysLeft >= Math.round((numberOfDays * 1) / 100)
                      ? ["#D9D9D9", "#F35242"]
                      : ["#D9D9D9", "#ffffff"],
              borderWidth: 0,
              borderRadius: 7,
            },
          ],
        });
      }

    }

  }, [userState.userData.package])



  useEffect(() => {
    // debugger
    if (!userToken) {
      navigate("/dashboard/accountOperations/login", { replace: true });
    }
  }, [userToken]);

  useEffect(() => {
    if (userToken != null) {
      // setTimeout(() => {
      init()
      // }, 1000);
      // setTimeout(() => {
        // }, 2000);
      }
    }, [forceUpdate]);
    const init = async () => {

      await dispatch(coreUser());
      await dispatch(getAllWorkSpace());
      await dispatch(ChackBusinessCustomer())
      await dispatch(allLimitDataFeature())
    }
  // useEffect(() => {
  //   dispatch(coreUser());
  // }, [checkUseTryFree]);

  const location = useLocation();
  return (
    <div className="flex h-full items-center justify-between px-5">
      <div className="flex items-center gap-7">
        <div
          className="menuimage w-6 h-6 hover:cursor-pointer"
          onClick={() => dispatch(setCloseNav())}
        ></div>
        <div className="flex items-center gap-3 hover:cursor-pointer">
          {/* <div className='Iconimage w-7 h-8'></div> */}
          <img src={segmento_logofa_svg} className="w-7 h-8" alt="" />
          <span className="">سگمنتو segmento</span>
        </div>
      </div>
      <div className="flex items-center gap-9">
        <div className="header_animation userProfBox rounded transition-[shadow] hover:shadow-[0px 8px 16px rgba(0, 0, 0, 0.14)] border-b-0 w-64">
          <div className="flex gap-3 items-center cursor-pointer ">
            <img
              src={
                userState.userData.user != undefined
                  ? userState.userData.user.img != ""
                    ? userState.userData.user.img
                    : profileImage_png
                  : profileImage_png
              }
              className="rounded w-10 h-10"
              alt="userImage"
            />
            <div className=" h-11 relative w-full">
              <span className="text-sm absolute top-0 right-0">
                {user_name}
              </span>
              {userState.userData.package != undefined ? (
                <div className="flex items-center justify-start mt-1 ">
                  <div className=" absolute bottom-0 right-0 w-4">
                    <Doughnut
                      data={doughnutChartData}
                      height={30}
                      width={18}
                      // height={25}
                      // width={15}

                      options={{
                        maintainAspectRatio: false,
                        plugins: {
                          tooltip: {
                            enabled: false,
                          },
                        },
                      }}
                    />
                  </div>
                  <span className="text-xs absolute bottom-0 right-6 w-max">
                    {userState.userData.package.title == "پکیج پایه" | userState.userData.package.title == "14 روز رایگان" ? userState.userData.package.title : userState.userData.package.title + " " + userState.userData.package.type_text}
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-start mt-1 ">
                  <div className=" absolute bottom-0 right-0">
                    <Doughnut
                      data={doughnutChartData}
                      height={30}
                      width={18}
                      // height={25}
                      // width={15}

                      options={{
                        maintainAspectRatio: false,
                        plugins: {
                          tooltip: {
                            enabled: false,
                          },
                        },
                      }}
                    />
                  </div>
                  <span className="text-xs absolute bottom-0 right-6 w-max">
                    بدون پکیج
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="header_animation cursor-pointer absolute justify-center items-center pt-3 flex-col w-full rounded userHeaderProfInfo">
            <div className="border-b border-lightGray w-52 " />
            <div
              className="flex text-xs items-center justify-between w-full p-1 hover:bg-lightBlue mt-1"
              onClick={() => {
                setActiveIconHandlerClicked(-3);
                setClicked1(-3);
              }}
            >
              <div className="flex items-center">
                <img src={manage_accounts_svg} alt="manage_accounts" />
                {/* <Link to={"userProfile"} state={{ background: location }}>تنظیمات حساب کاربری</Link> */}
                <Link to={"userProfile"}>تنظیمات حساب کاربری</Link>
              </div>
            </div>
            <div
              className="flex text-xs items-center justify-between w-full p-2 hover:bg-lightBlue "
              onClick={() => {
                setActiveIconHandlerClicked(-3);
                setClicked1(-3);
              }}
            >
              <div className="flex items-center gap-1">
                <img src={add_card_svg} alt="add_card" />
                <Link to={"buyPlan"}>خرید اشتراک</Link>
              </div>
            </div>

            <div
              className="flex text-xs items-center justify-between w-full p-2 hover:bg-lightBlue "
              onClick={() => {
                setActiveIconHandlerClicked(-3);
                setClicked1(-3);
              }}
            >
              <div className="flex items-center gap-1">
                <img src={statusPlan_svg} alt="currency_exchange" />
                <Link to={"planStatus"}> وضعیت اشتراک</Link>
              </div>
              {/* <img src={arrow_svg} alt="arrow" className='ml-3' /> */}
            </div>
            <div
              className="flex text-xs items-center justify-between w-full p-2 hover:bg-lightBlue mb-1"
              onClick={() => {
                setActiveIconHandlerClicked(-3);
                setClicked1(-3);
              }}
            >
              <div className="flex items-center gap-1">
                <img src={money_svg} alt="currency_exchange" />
                <Link to={"financialReports"}> گزارش های مالی </Link>
              </div>
              {/* <img src={arrow_svg} alt="arrow" className='ml-3' /> */}
            </div>
            <div className="border-b border-lightGray w-full " />
            <div
              className="flex text-xs items-center justify-between w-full p-1 hover:bg-lightBlue my-1"
              onClick={() => dispatch(logoutAction())}
            >
              <div className="flex items-center pr-2">
                <span className="text-red">خروج از حساب کاربری</span>
              </div>
              <img src={redlogout_svg} alt="logout" className="ml-1" />
              {/* <img src={arrow_svg} alt="arrow" className='ml-3' /> */}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 ml-7">
          <img src={notif_svg} alt="notif" className="cursor-pointer" />
          <div className="flex items-center justify-center relative text-[#fff] text-small ">
            <span className="text-white left-3.5 -top-1 absolute text-center rounded-full bg-red notifNumber hidden">
              33
            </span>
            <img src={message_svg} alt="message" className="cursor-pointer" />
          </div>
          <img
            src={settingicon_svg}
            alt="settingicon"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
