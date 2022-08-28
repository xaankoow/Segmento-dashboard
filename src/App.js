import React, { Fragment, useEffect, useState } from "react";
import Register from "./pages/register/Register";
import "./App.css";
import Forgotpass from "./pages/forgotPassword/Forgotpass";
import { Routes, Route, useLocation, useNavigate, Link } from "react-router-dom";
import ValidateEmail from "./pages/validateEmail/ValidateEmail";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login.jsx";
import DashboardBody from "./component/Dashboard/DashboardBody";
import Nav from "./component/Dashboard/DashboaedComponents/navMenu/Nav";
import { useSelector } from "react-redux";
import LoadingPage from "./component/Utils/loadingPage/LoadingPage";
import PlanStatus from "./component/Dashboard/DashboaedComponents/PlanStatus";
import EditUserProfile from "./component/Dashboard/pages/EditUserProfile/EditUserProfile";
import TableFinancialReports from "./component/Dashboard/DashboaedComponents/FinancialReports/TableFinancialReports";
import BuyPlan from "./component/Dashboard/DashboaedComponents/BuyPlan/BuyPlan";
import BuyPlanEasyToStartModal from "./component/Utils/EasyToStartModal";
import WorkSpace from "./component/Utils/workSpaceModal/workSpace";
import KeyWords from "./component/Dashboard/KeyWords/KeyWords";
import MyList from "./component/Dashboard/KeyWords/MyList/MyList";
import ContentpProduction from "./component/Dashboard/ContentProduction/ContentpProduction";
import TabMenu from "./component/Dashboard/DashboaedComponents/tabMenu/TabMenu";
import MylistContentProduction from "./component/Dashboard/ContentProduction/MyListContentProduction/MyListContentProduction.jsx"
import EasyStart from "./component/Dashboard/DashboaedComponents/EasyStart/EasyStart";
import AleartMessageBuyPlan from "./component/Dashboard/DashboaedComponents/BuyPlan/AleartMessageBuyPlan";
import WorkSpaceReport from "./component/Dashboard/DashboaedComponents/workSpace/workSpaceReport";
import Page404 from "./component/Utils/Error404/page404";
import { usetLimit } from "./component/service/userLimit";
import LandingPage from "./component/Utils/landingPage/landingPage";
import PageCounter from "./component/Dashboard/pages/PageCounter/PageCounter";

export default function App() {
  const { forceUpdate } = useSelector((state) => state.userState);
  const { resultSetWorkSpace } = useSelector((state) => state.workSpaceState);
  // var Perf = require('react-addons-perf');
  const navigate = useNavigate();

  useEffect(() => {
    resultSetWorkSpace.reportStatus == true && navigate("/dashboard/workSpaceReport")
  }, [resultSetWorkSpace.reportStatus])


  const location = useLocation();
  const background = location.state && location.state.background;

  const tabContent = [
    {
      title: " جستجو",
      content: <MyList />,
    },
    {
      title: "لیست‌های من",
      content: <KeyWords />,
    },
  ];
  const tabContent2 = [
    {
      title: "جستجو",
      content: <MylistContentProduction />,
    },
    {
      title: "لیست‌های من",
      content: <ContentpProduction />,
    },
  ];
  return (
    <Fragment>
      <div className="app">

        <Routes>
          <Route path="dashboard/*">
            <Route path="accountOperations">
              <Route exact path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgotPassword" element={<Forgotpass />} />
              <Route path="ValidateEmail" element={<ValidateEmail />} />
              <Route path="*" element={<Login />} />
            </Route>
            <Route path="*" element={
              (<>
                <Routes location={background || location}>
                  <Route path="*" element={<DashboardBody />}>
                    <Route path="userProfile" element={<EditUserProfile />} />
                    <Route path="planStatus" element={<PlanStatus />} />
                    <Route path="buyPlan/buyInfo" element={<AleartMessageBuyPlan />} />
                    <Route path="buyPlan" element={<BuyPlan title={"خرید اشتراک سگمنتو"} />} />
                    <Route path="financialReports" element={<TableFinancialReports title={"گزارش‌های مالی"} />} />
                    <Route path="workSpaceReport" element={<WorkSpaceReport stepWorkSpace={resultSetWorkSpace.reportStep} />} />
                    <Route exact path="keywordResearch" element={<TabMenu tabsContent={tabContent} title={"تحقیق کلمات کلیدی"} amountOfData={"isKeyword"}/>} />
                    <Route path="contentCreation" element={<TabMenu tabsContent={tabContent2} title={"ایده تولید محتوا"} amountOfData={"isContentProduction"}/>} />
                    <Route path="PageCounter"  element={<PageCounter/>}/>
                    <Route path="" element={<EasyStart />} />
                    <Route path="*" element={<Page404 />} />
                  </Route>
                </Routes>
              </>)
            }>
            </Route>
          </Route>

          <Route path="/payment*" element={<LandingPage />} />
          <Route path={"*"} element={<Link className="btn-style" to="/dashboard">change route</Link>} />

        </Routes>

        {background != "" && (
          <Routes>
            <Route exact path={`dashboard/buyPlanEasyToStartModal`} element={<BuyPlanEasyToStartModal />} />
            <Route exact path={`dashboard/setWorkSpace`} element={<WorkSpace />} />
          </Routes>
        )}
        <LoadingPage />
        <ToastContainer rtl />
        {forceUpdate ? "" : ""}
      </div>
    </Fragment>
  );
}
