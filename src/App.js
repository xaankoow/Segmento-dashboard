import React, { Fragment, useEffect } from "react";
import Register from "./pages/register/Register";
import "./App.css";
import Forgotpass from "./pages/forgotPassword/Forgotpass";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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

export default function App() {
  const { forceUpdate } = useSelector((state) => state.userState);
  const { resultSetWorkSpace } = useSelector((state) => state.workSpaceState);

  const navigate = useNavigate();

  useEffect(() => {
    { resultSetWorkSpace.reportStatus == true && navigate("/dashboard/workSpaceReport") }
  }, [resultSetWorkSpace.reportStatus])


  const location = useLocation();
  const background = location.state && location.state.background;

  const tabContent = [
    {
      title: "جست و جو",
      content: <KeyWords />,
    },
    {
      title: "لیست های من",
      content: <MyList />,
    },
  ];
  const tabContent2 = [
    {
      title: "جست و جو",
      content: <ContentpProduction />,
    },
    {
      title: "لیست های من",
      content: <MylistContentProduction />,
    },
  ];


  return (
    <Fragment>
      <div className="app">
        <div className="flex flex-col items-center w-full justify-center overflow-hidden">
          <Routes>
            <Route exact path={"/"} element={<Nav path={"register"} />} />
            <Route exact path={"register"} element={<Nav path={""} />} />
            <Route exact path={"forgotPassword"} element={<Nav path={""} />} />
            <Route exact path={"ValidateEmail"} element={<Nav path={""} />} />
          </Routes>

          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgotPassword" element={<Forgotpass />} />
            <Route path="ValidateEmail" element={<ValidateEmail />} />
          </Routes>
        </div>
        <Routes location={background || location}>
          <Route path="/">
            <Route path="dashboard/*" element={<DashboardBody />}>
              <Route path="userProfile" element={<EditUserProfile />} />
              <Route path="planStatus" element={<PlanStatus />} />
              <Route path="buyPlan/buyInfo" element={<AleartMessageBuyPlan />} />
              <Route path="buyPlan" element={<BuyPlan title={"خرید اشتراک سگمنتو"} />} />
              <Route path="financialReports" element={<TableFinancialReports title={"گزارش‌های مالی"} />} />


              <Route path="workSpaceReport" element={<WorkSpaceReport stepWorkSpace={resultSetWorkSpace.reportStep} />} />
              <Route path="easyStart" element={<EasyStart />} />
              <Route exact path="keywordResearch" element={<TabMenu tabsContent={tabContent} title={"تحقیق کلمات کلیدی"} numberLeft={"20"} numberRight={"189"} />} />
              <Route path="contentCreation" element={<TabMenu tabsContent={tabContent2} title={"ایده تولید محتوا"} numberLeft={"20"} numberRight={"189"} />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Route>
        </Routes>
        {background != "" && (
          <Routes>
            <Route exact path={`dashboard/buyPlanEasyToStartModal`} element={<BuyPlanEasyToStartModal />} />
            <Route exact path={`dashboard/setWorkSpace`} element={<WorkSpace />} />
          </Routes>
        )}
        {/* <LoadingPage /> */}
        <ToastContainer rtl />
        {forceUpdate ? "" : ""}
      </div>
    </Fragment>
  );
}
