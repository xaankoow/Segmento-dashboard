import AleartMessageBuyPlan from "../component/Dashboard/DashboaedComponents/BuyPlan/AleartMessageBuyPlan";
import BuyPlan from "../component/Dashboard/DashboaedComponents/BuyPlan/BuyPlan";
import TableFinancialReports from "../component/Dashboard/DashboaedComponents/FinancialReports/TableFinancialReports";
import PlanStatus from "../component/Dashboard/DashboaedComponents/PlanStatus";
import TabMenu from "../component/Dashboard/DashboaedComponents/tabMenu/TabMenu";
import WorkSpaceReport from "../component/Dashboard/DashboaedComponents/workSpace/workSpaceReport";
import EditUserProfile from "../component/Dashboard/pages/EditUserProfile/EditUserProfile";
import PageCounter from "../component/Dashboard/pages/PageCounter/PageCounter";
import ReportSupport from "../component/Dashboard/pages/Support&Tickets/SatusSupport";
import Support from "../component/Dashboard/pages/Support&Tickets/Support";
import SupportMessage from "../component/Dashboard/DashboaedComponents/support/index";
import TitleCopyWriterBulk from "../pages/titleCopyWriterBulk/TitleCopyWriterBulk";
import TitleCopywriter from "../pages/titleCopywriter";
import EasyStart from "../component/Dashboard/DashboaedComponents/EasyStart/EasyStart";
import Page404 from "../component/Utils/Error404/page404";
import KeyWords from "../component/Dashboard/KeyWords/KeyWords";
import MyList from "../component/Dashboard/KeyWords/MyList/MyList";
import ContentpProduction from "../component/Dashboard/ContentProduction/ContentpProduction";
import MylistContentProduction
    from "../component/Dashboard/ContentProduction/MyListContentProduction/MyListContentProduction.jsx"
import GoogleIndexer from "../pages/GoogleIndexer";
import WorkSpaceManagement from "../pages/workSpace management/WorkSpaceManagement";


const tabContent = [
  {
    title: " جستجو",
    content: <KeyWords />,
  },
  {
    title: "لیست‌های من",
    content: <MyList />,
  },
];
const tabContent2 = [
  {
    title: "جستجو",
    content: <ContentpProduction />,
  },
  {
    title: "لیست‌های من",
    content: <MylistContentProduction />,
  },
];

export const DashboardRote=[
    {path:"userProfile",component:<EditUserProfile/>},
    {path:"planStatus",component:<PlanStatus />},
    {path:"buyPlan/buyInfo",component:<AleartMessageBuyPlan />},
    {path:"buyPlan",component:<BuyPlan title={"خرید اشتراک سگمنتو"} />},
    {path:"financialReports",component:<TableFinancialReports title={"گزارش‌های مالی"} />},
    {path:"workSpaceReport",component:<WorkSpaceReport />},
    {path:"WorkSpaceManagement",component:<WorkSpaceManagement />},
    {path:"keywordResearch",component:<TabMenu tabsContent={tabContent} title={"تحقیق کلمات کلیدی"} amountOfData={"isKeyword"} />},
    {path:"contentCreation",component:<TabMenu tabsContent={tabContent2} title={"ایده تولید محتوا"} amountOfData={"isContentProduction"} />},
    {path:"PageCounter",component:<PageCounter />},
    {path:"ReportSupport",component:<ReportSupport />},
    {path:"ReportSupport/NewTicket",component:<Support />},
    {path:"ReportSupport/ticket/*",component:<SupportMessage />},
    {path:"TitleCopyWriterBulk",component:<TitleCopyWriterBulk />},
    {path:"TitleCopywriter",component:<TitleCopywriter />},
    {path:"GoogleIndexer",component:<GoogleIndexer />},
    {path:"",component:<EasyStart />},
    {path:"*",component:<Page404 />},
    ];

/*
const ranktrakingTabs = [
  {
    title: "نمای کلی",
    content: <RankTracking />,
  },
  {
    title: "کلمات کلیدی",
    content: <Keyword />,
  },
  {
    title: "رقبا",
    content: <Competitors />,
  },
  {
    title: "گزارش گیری",
    content: <Report />,
  },
];

export const DashboardRote = [
  { path: "userProfile", component: <EditUserProfile /> },
  { path: "planStatus", component: <PlanStatus /> },
  { path: "buyPlan/buyInfo", component: <AleartMessageBuyPlan /> },
  { path: "buyPlan", component: <BuyPlan title={"خرید اشتراک سگمنتو"} /> },
  { path: "financialReports", component: <TableFinancialReports title={"گزارش‌های مالی"} /> },
  { path: "workSpaceReport", component: <WorkSpaceReport /> },
  { path: "keywordResearch", component: <TabMenu tabsContent={tabContent} title={"تحقیق کلمات کلیدی"} amountOfData={"isKeyword"} /> },
  { path: "contentCreation", component: <TabMenu tabsContent={tabContent2} title={"ایده تولید محتوا"} amountOfData={"isContentProduction"} /> },
  { path: "rank-tracking", component: <TabMenu tabsContent={ranktrakingTabs} title={"ابزار رتبه سنج (رنک ترکینگ Rank Tracking)"} amountOfData={"isContentProduction"} /> },
  { path: "PageCounter", component: <PageCounter /> },
  { path: "ReportSupport", component: <ReportSupport /> },
  { path: "NewTicket", component: <Support /> },
  { path: "SupportMessage", component: <SupportMessage /> },
  { path: "TitleCopyWriterBulk", component: <TitleCopyWriterBulk /> },
  { path: "TitleCopywriter", component: <TitleCopywriter /> },
  { path: "", component: <EasyStart /> },
  { path: "*", component: <Page404 /> },
]*/
