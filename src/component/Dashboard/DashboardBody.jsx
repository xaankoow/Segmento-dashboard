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

  const [showModalBuyPlanResult, setShowModalBuyPlanResult] = useState({ type: "", result: true }); //handle buy plan type
   const [showWorkSpace, setShowWorkSpace] = useState(true); //handle close buy plan result

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
      if (buy_type == "modal") {
        if (status_buy_plan == true) {
          setShowWorkSpace(false);
          setShowModalBuyPlanResult({ type: "modal", result: true });
        } else {
          setShowModalBuyPlanResult({ type: "modal", result: false });
        }
      } else {
        navigate("/dashboard/buyPlan/buyInfo");
      }
    }
  }, []);

  const [showVerifyPhoneNumberModal, setShowVerifyPhoneNumberModal] = useState(false); //handle close buy plan result

  return (
    <div id="DASHBOARD">
      <div className="w-full h-16 bg-[#ffffff] shadow-3xl" >
        <DashboardHeader  />
      </div>
      <div className="flex flex-row-reverse relative top-1 w-full h-screen body">
        <div id="dashboardMap" className="bg-[#ffffff] overflow-y-scroll pb-24 relative h-full shadow-3xl mt-1 mx-2 rounded-md z-[1] flex-grow main">
          <Outlet />
       
        </div>
       
        <SidebarComponent  />
        
      </div>
      {!checkVerifyPhoneNumber&&setTimeout(() => {
        setShowVerifyPhoneNumberModal(true)
      }, 7000)}
      {/* {showVerifyPhoneNumberModal&&<PhoneNumberOperations />} */}
      {showModalBuyPlanResult.type != "" ? (
        <BuyPlanEasyToStartModal checkBuyPlan={showModalBuyPlanResult.result} />
      ) : ("")}
    </div>
  );
}
