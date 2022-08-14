import React, { useEffect } from "react";
import DashboardHeader from "./DashboaedComponents/DashboardHeader";
import { useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router";
import SidebarComponent from "./DashboaedComponents/SidebarComponents/SidebarComponent";
import BuyPlanEasyToStartModal from "../Utils/EasyToStartModal";


export default function DashboardBody() {
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


  // DashboardHeader nav icon that close the left sidebar
  const [closeNav, setCloseNav] = useState(true);
  const closeNavItem = () => {
    setCloseNav(!closeNav);
  };


  // const userToken = localStorage.getItem("token");
  // useEffect(() => {
  //   // debugger
  //   if (!userToken) {
  //     navigate("/dashboard/accountOperations/login", { replace: true });
  //   }
  // }, [userToken])

  return (
    <div id="DASHBOARD">
      <div className="w-full h-16 bg-whiteBg shadow-3xl">
        <DashboardHeader setCloseNav={closeNavItem} />
      </div>
      <div className="flex flex-row-reverse relative top-1 w-full h-screen body">
        <div className="bg-[#ffffff] overflow-y-scroll pb-14 relative h-full shadow-3xl mt-1 mx-2 rounded-md z-[1] flex-grow main">
          <Outlet />
        </div>
        <SidebarComponent closeNav={closeNav} openMenu={() => setCloseNav(true)} />
      </div>
      {showModalBuyPlanResult.type != "" ? (
        <BuyPlanEasyToStartModal checkBuyPlan={showModalBuyPlanResult.result} />
      ) : ("")}
    </div>
  );
}
