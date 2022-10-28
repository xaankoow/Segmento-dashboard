import React, { Fragment, useEffect } from "react";
import Register from "./pages/register/Register";
import "./App.css";
import Forgotpass from "./pages/forgotPassword/Forgotpass";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ValidateEmail from "./pages/validateEmail/ValidateEmail";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login.jsx";
import DashboardBody from "./component/Dashboard/DashboardBody";
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
import LandingPage from "./component/Utils/landingPage/landingPage";
import PageCounter from "./component/Dashboard/pages/PageCounter/PageCounter";
import PhoneNumberOperations from "./component/Utils/Modals/phoneNumber/PhoneNumberOperations";
import Support from "./component/Dashboard/pages/Support&Tickets/Support";
import SupportMessage from "./component/Dashboard/DashboaedComponents/support/index";
import TitleCopywriter from "./pages/titleCopywriter";
import ReportSupport from "./component/Dashboard/pages/Support&Tickets/SatusSupport";
import PopUp from "./component/Utils/PopUp/PopUp";
import errorIco_svg from './assets/img/popUp/errorIco.svg'
import AuthButton from "./component/Auth/authButton/AuthButton";
import TitleCopyWriterBulk from "./pages/titleCopyWriterBulk/TitleCopyWriterBulk";
import WorkSpaceManagement from "./pages/workSpace management/WorkSpaceManagement"
import { DashboardRote } from "./Route";
import {RoundPriceToUp} from './component/Utils/FORMAT/price'
export default function App() {
  
  const { forceUpdate } = useSelector((state) => state.userState);
  const { resultSetWorkSpace } = useSelector((state) => state.workSpaceState);
  const navigate = useNavigate();

  useEffect(() => {
    resultSetWorkSpace.reportStatus == true && navigate("/dashboard/workSpaceReport")
  }, [resultSetWorkSpace.reportStatus])
  
  const location = useLocation();
  const background = location.state && location.state.background;

  const tabContent = [
    {
      title: " جستجوی کلمه جدید",
      content: <KeyWords />,
    },
    {
      title: "لیست‌های من",
      content: <MyList />,
    },
  ];
  const tabContent2 = [
    {
      title: "جستجوی ایده جدید",
      content: <ContentpProduction />,
    },
    {
      title: "لیست‌های من",
      content: <MylistContentProduction />,
    },
  ];

  
  return (
    <Fragment>
      <div className="app">
        <Routes>
          <Route path="/dashboard/*">
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
                    {DashboardRote.map(item=>(
                      <Route path={item.path} element={item.component} />
                    ))}
                  </Route>
                </Routes>
              </>)
            }>
            </Route>
          </Route>
          <Route path="/payment*" element={<LandingPage />} />
          <Route path={"*"} element={<Page404 />} />
        </Routes>
        {background != "" && (
          <Routes>
            <Route exact path={`dashboard/buyPlanEasyToStartModal`} element={<BuyPlanEasyToStartModal />} />
            <Route exact path={`dashboard/setWorkSpace`} element={<WorkSpace />} />
            <Route path={`dashboard/phoneNumberOperations`} element={<PhoneNumberOperations />} />

            {/* availability tools popup */}
            <Route exact path={`dashboard/checkLimit`} element={
              <PopUp
                image={errorIco_svg}
                type={"warning"}
                buttonText={"باشه"}
                text={
                  "کاربر گرامی منابع اشتراک فعلی شما به پایان رسیده، برای حفظ اطلاعات و تداوم دسترسی به امکانات سگمنتو اشتراک بخرید."
                }
                createFooterTag={(
                  <div className="flex justify-between items-center w-full px-3">
                    <span className="buttonText mt-5 third-btn" onClick={() => navigate(-1)}>باشه، فهمیدم!</span>
                    <div>
                      <AuthButton textButton={"خرید اشتراک"} setOnclickValue={1} />
                    </div>
                  </div>
                )}
                title={"موفقیت آمیز"}
              />} />
            <Route exact path={`dashboard/checkedPackage`} element={
              <PopUp
                image={errorIco_svg}
                type={"warning"}
                buttonText={"باشه"}
                text={
                  "کاربر گرامی زمان اشتراک شما به پایان رسیده، برای حفظ اطلاعات و تداوم دسترسی به امکانات سگمنتو اشتراک بخرید. "
                }
                createFooterTag={(
                  <div className="flex justify-between items-center w-full px-3">
                    <span className="buttonText mt-5 third-btn" onClick={() => navigate(-1)}>باشه، فهمیدم!</span>
                    <div>
                      <AuthButton textButton={"خرید اشتراک"} setOnclickValue={1} />
                    </div>
                  </div>
                )}
                title={"موفقیت آمیز"}
              />} />
            <Route path={`dashboard/phoneNumberOperations`} element={<PhoneNumberOperations />} />
          </Routes>
        )}
        {/* <LoadingPage /> */}
        <ToastContainer rtl />
        {forceUpdate ? "" : ""}
      </div>
    </Fragment>
  );
}