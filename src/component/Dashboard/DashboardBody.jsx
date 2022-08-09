import React, { useEffect } from "react";
import DashboardHeader from "./DashboaedComponents/DashboardHeader";
import ItemSidebarHover from "./DashboaedComponents/SidebarComponents/ItemSidebarHover";
import Modal from "react-modal";
import PopUp from "../Utils/PopUp/PopUp";
import { useState } from "react";
import EasyStart from "./DashboaedComponents/EasyStart/EasyStart";
// import HandleModal from "./../Utils/handleModal";
import BuyPlan from "./DashboaedComponents/BuyPlan/BuyPlan";
import WorkSpace from "../Utils/workSpaceModal/workSpace";
import TabMenu from "./DashboaedComponents/tabMenu/TabMenu";
import IconsRight from "./DashboaedComponents/SidebarComponents/IconsRight";
import AcardionItem from "./DashboaedComponents/AcardionItem/AcardionItem";
import KeyWords from "./KeyWords/KeyWords";
import ContentpProduction from "./ContentProduction/ContentpProduction";
import MyList from "./KeyWords/MyList/MyList";
import WorkSpaceReport from "./DashboaedComponents/workSpace/workSpaceReport";
import AleartMessageBuyPlan from "./DashboaedComponents/BuyPlan/AleartMessageBuyPlan";
import { Outlet, Route, Routes, useNavigate } from "react-router";
import AuthButton from "../Auth/authButton/AuthButton";
import { useSelector } from "react-redux/es/exports";
import SidebarComponent from "./DashboaedComponents/SidebarComponents/SidebarComponent";
import MylistContentProduction from "./ContentProduction/MyListContentProduction/MyListContentProduction";
import BuyPlanEasyToStartModal from "../Utils/EasyToStartModal";
import TableFinancialReports from "./DashboaedComponents/FinancialReports/TableFinancialReports";
import EditUserProfile from "./pages/EditUserProfile/EditUserProfile";
import PlanStatus from "./DashboaedComponents/PlanStatus";

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


  return (
    <div id="DASHBOARD">
      <div className="w-full h-16 bg-[#fff] shadow-3xl">
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
