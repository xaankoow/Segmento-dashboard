import React, { useEffect } from "react";
import DashboardHeader from "./DashboaedComponents/DashboardHeader";
import { useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router";
import SidebarComponent from "./DashboaedComponents/SidebarComponents/SidebarComponent";
import BuyPlanEasyToStartModal from "../Utils/EasyToStartModal";
import PhoneNumberOperations from "../Utils/Modals/phoneNumber/PhoneNumberOperations";
import { useSelector } from "react-redux";
import PopUp from "../Utils/PopUp/PopUp";

// import PopUp from "../../../Utils/PopUp/PopUp";

export default function DashboardBody() {
  const { checkVerifyPhoneNumber } = useSelector((state) => state.userState);

  const navigate = useNavigate();

  const [showModalBuyPlanResult, setShowModalBuyPlanResult] = useState({
    type: "",
    result: true,
  }); //handle buy plan type
  const [showWorkSpace, setShowWorkSpace] = useState(true); //handle close buy plan result
  // item sidebar hover active mode

  const [clicked, setActiveIconHandlerClicked] = useState(
    localStorage.getItem("ActiveIconHandlerClicked") != null
      ? Number(localStorage.getItem("ActiveIconHandlerClicked"))
      : 2
  );

  const [clicked1, setClicked1] = useState(
    localStorage.getItem("sidebarItemClicked") != null
      ? Number(localStorage.getItem("sidebarItemClicked"))
      : 2
  );
  useEffect(() => {
    localStorage.setItem("sidebarItemClicked", clicked1);
    localStorage.setItem("ActiveIconHandlerClicked", clicked);
  }, [clicked1, clicked]);
  //check buy plan result
  useEffect(() => {
    const status_buy_plan = localStorage.getItem("statusBuyPlna");
    const buy_type = localStorage.getItem("buyType");
    if (
      status_buy_plan &&
      status_buy_plan != undefined &&
      status_buy_plan != null &&
      status_buy_plan != ""
    ) {
      if (buy_type != null) {

        if (buy_type == "modal") {
          if (status_buy_plan == true) {
            setShowWorkSpace(false);
            setShowModalBuyPlanResult({ type: "modal", result: true });
          } else {
            setShowModalBuyPlanResult({ type: "modal", result: false });
          }
        } else {
          localStorage.removeItem("buyType")
          navigate("/dashboard/buyPlan/buyInfo");
        }
      }

    }
  }, []);

  const [showVerifyPhoneNumberModal, setShowVerifyPhoneNumberModal] =
    useState(false); //handle close buy plan result

  return (
    <div id="DASHBOARD">
      <div id="main-header_layOut" className="w-full h-16 bg-[#ffffff] shadow-3xl">
        <DashboardHeader
          setActiveIconHandlerClicked={setActiveIconHandlerClicked}
          setClicked1={setClicked1}
        />
      </div>
      <div id="main-body_container_layOut" className="flex flex-row-reverse relative w-full h-screen body">
        <div
          id="dashboardMap"
          className="bg-[#ffffff] pb-5 overflow-y-scroll relative h-full shadow-3xl mx-2 rounded-md z-[1] flex-grow main"
        >
          <Outlet />
        </div>

        <SidebarComponent
          setActiveIconHandlerClicked={setActiveIconHandlerClicked}
          hoverIconClicked={clicked}
          clicked1={clicked1}
          setClicked1={setClicked1}
        />
      </div>
      {!checkVerifyPhoneNumber &&
        setTimeout(() => {
          setShowVerifyPhoneNumberModal(true);
        }, 7000)}
      {showVerifyPhoneNumberModal && <PhoneNumberOperations />}
      {showModalBuyPlanResult.type != "" ? (
        <BuyPlanEasyToStartModal checkBuyPlan={showModalBuyPlanResult.result} />
      ) : (
        ""
      )}
    </div>
  );
}
