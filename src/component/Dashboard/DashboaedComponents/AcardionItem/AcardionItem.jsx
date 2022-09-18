import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setShowWorkSpaceModal } from "../../../Redux/Action/workSpace";
import ItemSidebarHover from "../SidebarComponents/ItemSidebarHover";
import arrow_back_ios_new_svg from "../../../../assets/img/dashboard/nav_right/arrow_back_ios_new.svg";
import add_circle_svg from "../../../../assets/img/dashboard/nav_right/add_circle.svg";
import web_svg from "../../../../assets/img/dashboard/nav_right/web.svg";
import storefront_svg from "../../../../assets/img/dashboard/nav_right/storefront.svg";
import search_svg from "../../../../assets/img/dashboard/nav_right/search.svg";
import rotbebandi_svg from "../../../../assets/img/dashboard/nav_right/rotbebandi.svg";
import searchKeyWord_svg from "../../../../assets/img/dashboard/nav_right/searchKeyWord.svg";
import pageTejari_svg from "../../../../assets/img/dashboard/nav_right/pageTejari.svg";
import googleIndex_svg from "../../../../assets/img/dashboard/nav_right/googleIndex.svg";
import pageSeo_svg from "../../../../assets/img/dashboard/nav_right/pageSeo.svg";
import monitoring_svg from "../../../../assets/img/dashboard/nav_right/monitoring.svg";
import tolidMohtava_svg from "../../../../assets/img/dashboard/nav_right/tolidMohtava.svg";
import trandTypic_svg from "../../../../assets/img/dashboard/nav_right/trandTypic.svg";
import createIdea_svg from "../../../../assets/img/dashboard/nav_right/createIdea.svg";
import copyWriter_svg from "../../../../assets/img/dashboard/nav_right/copyWriter.svg";
import copyWriterAnboh_svg from "../../../../assets/img/dashboard/nav_right/copyWriterAnboh.svg";
import googleSuggestion_svg from "../../../../assets/img/dashboard/nav_right/googleSuggestion.svg";
import { showToast } from "../../../Utils/toastifyPromise";
import { ChackingAvailabilityTools } from "../../../Utils/CheckingAvailabilityTools";

export default function AcardionItem({clicked,setClicked}) {
  const dispatch = useDispatch();

  const location = useLocation();

  const user = useSelector((state) => state.userState);
  // debugger
  const workSpaceState = useSelector((state) => state.workSpaceState);
  const { allWorkSpace } = useSelector((state) => state.workSpaceState);
  // console.log(allWorkSpace);
  const data = [
    {
      title: "ورک‌اسپیس‌ها",
      titleIcon: web_svg,
      acardionItems: allWorkSpace.map((item, index) => ({
        itemTitle: item.website,
        itemIcon: storefront_svg,
        itemLink: " ",
      })),
    },
    {
      title: "سئو",
      titleIcon: search_svg,
      acardionItems: [
        {
          itemTitle: "رتبه کلمات کلیدی ",
          itemIcon: rotbebandi_svg,
          itemLink: "",
        },
        {
          itemTitle: "تحقیق کلمه کلیدی ",
          itemIcon: searchKeyWord_svg,
          itemLink: "keywordResearch",
          section: "keyWords"
        },
        {
          itemTitle: "صفحات تجاری ",
          itemIcon: pageTejari_svg,
          itemLink: "",
        },
        {
          itemTitle: "ایندکسر گوگل",
          itemIcon: googleIndex_svg,
          itemLink: "",
        },
        {
          itemTitle: "آنالیز گوگل",
          itemIcon: pageSeo_svg,
          itemLink: "",
        },
        {
          itemTitle: " آنالیز سئو داخل صفحه",
          itemIcon: monitoring_svg,
          itemLink: "",
        },
      ],
    },
    // {
    //   title: "سئو تکنیکال",
    //   titleIcon: "/img/dashboard/nav_right/teknikal.svg",
    //   acardionItems: [
    //     {
    //       itemTitle: " مانیتورینگ سرعت ",
    //       itemIcon: "/img/dashboard/nav_right/speedMonitoring.svg",
    //       itemLink: "",
    //     },
    //     {
    //       itemTitle: "ابزار لایت هاوس  ",
    //       itemIcon: "/img/dashboard/nav_right/liteHouse.svg",
    //       itemLink: "",
    //     },
    //     {
    //       itemTitle: "ابزار لایت فلو ",
    //       itemIcon: "/img/dashboard/nav_right/lightFlow.svg",
    //       itemLink: "",
    //     },
    //     {
    //       itemTitle: "صفحات یتیم ",
    //       itemIcon: "/img/dashboard/nav_right/yatimPage.svg",
    //       itemLink: "",
    //     },
    //     {
    //       itemTitle: " خودخواری Cannibalization   ",
    //       itemIcon: "/img/dashboard/nav_right/cannibalization.svg",
    //       itemLink: "",
    //     },
    //     {
    //       itemTitle: "  ابزار فایل ربات robots.txt   ",
    //       itemIcon: "/img/dashboard/nav_right/robots.svg",
    //       itemLink: "",
    //     },
    //     {
    //       itemTitle: "  ابزار انکار لینک Disavow   ",
    //       itemIcon: "/img/dashboard/nav_right/Disavow.svg",
    //       itemLink: "",
    //     },
    //     {
    //       itemTitle: "سازنده اسکیما  ",
    //       itemIcon: "/img/dashboard/nav_right/skymacreator.svg",
    //       itemLink: "",
    //     },
    //     {
    //       itemTitle: "شبیه ساز نتایج  ",
    //       itemIcon: "/img/dashboard/nav_right/result.svg",
    //       itemLink: "",
    //     },
    //   ],
    // },
    {
      title: "تولید محتوا",
      titleIcon: tolidMohtava_svg,
      itemLink: "",
      acardionItems: [
        {
          itemTitle: " تاپیک ترند",
          itemIcon: trandTypic_svg,
          itemLink: "",
          section: ""
        },
        {
          itemTitle: " ایده ساز",
          itemIcon: createIdea_svg,
          itemLink: "contentCreation",
          section: ""
        },
        {
          itemTitle: "کپی رایتر  ",
          itemIcon: copyWriter_svg,
          itemLink: "",
          section: ""
        },
        {
          itemTitle: "کپی رایتر انبوه ",
          itemIcon: copyWriterAnboh_svg,
          itemLink: "",
          section: ""
        },
        {
          itemTitle: "پیشنهاد ساز گوگل ",
          itemIcon: googleSuggestion_svg,
          itemLink: "",
          section: ""
        },
      ],
    },
  ];
  // const [clicked, setClicked] = React.useState(false);
  const [ItemsClicked, setItemsClicked] = useState(-1);
  const toggle = (index) => {
    if (clicked === index) {
      // if active close
      return setClicked(null);
    }
    setClicked(index);
  };
  // debugger
  const { limitsDatas } = useSelector((state) => state.workSpaceState);

  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="" key={index}>
            <div className="flex items-center justify-between m-0 p-0 SidebarHoverBox">
              <div
                key={index}
                className="flex items-center gap-3 text-[#002145] mt-4 mb-3  mr-5 text-sm  w-full"
              >
                <img
                  src={item.titleIcon}
                  alt="icon"
                  className="cursor-pointer"
                  onClick={() => toggle(index)}
                />
                <span
                  className="w-full cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  {item.title}
                </span>
              </div>
              <div
                onClick={() => toggle(index)}
                className="pl-3 cursor-pointer w-10 h-4 flex justify-end"
              >
                {/* {clicked === index ? (
                  <img
                    src="/img/dashboard/nav_right/arrow_back_ios_new_down.svg"
                    alt=""
                    className="w-4 h-3"
                  />
                ) : (
                  <img
                    src="/img/dashboard/nav_right/arrow_back_ios_new.svg"
                    alt=""
                    className="w-3 h-4"
                  />
                  )} */}
                  <img
                    src={arrow_back_ios_new_svg}
                    alt=""
                    className={`w-3 h-4 ${clicked === index && "-rotate-90"} transition-transform`}
                  />
              </div>
            </div>
            {clicked === index ? (
              <div className="mr-5 mt-0">
                {item.acardionItems.map((acardionItem, indexx) => {
                  return (

                    acardionItem.itemLink == " " ? (
                      <div className={"w-auto"}>
                        <div
                        onClick={()=>setItemsClicked(acardionItem.itemTitle)}
                          key={indexx}
                          className={`flex items-center gap-3 text-[#002145] mb-3 mr-5 text-sm hover:cursor-pointer hover:text-blue  ${ clicked === index  && ItemsClicked == acardionItem.itemTitle && "active"}`}
                        >
                          <img src={acardionItem.itemIcon} alt="icon" />
                          <span className={"w-auto hover:text-blue"}>{acardionItem.itemTitle}</span>
                        </div>
                      </div>
                  
                    ):acardionItem.itemLink != ""&&(
                      // <Link to={ChackingAvailabilityTools({path:acardionItem.itemLink,section:acardionItem.section,userState:user,workSpaceState:workSpaceState})} className={"w-auto"}>
                      <Link to={acardionItem.itemLink} className={"w-auto"}>
                      <div
                      onClick={()=>setItemsClicked(acardionItem.itemTitle)}
                        key={indexx}
                        className={`flex items-center gap-3 text-[#002145] mb-3 mr-5 text-sm hover:cursor-pointer hover:text-blue  ${ clicked === index  && ItemsClicked == acardionItem.itemTitle && "active"}`}
                      >
                        <img src={acardionItem.itemIcon} alt="icon" />
                        <span className={"w-auto hover:text-blue"}>{acardionItem.itemTitle}</span>
                      </div>
                    </Link>
                    )


                  );
                })}
                {item.title == "ورک‌اسپیس‌ها" && (
                  <div
                    key={index}
                    // onClick={()=>dispatch(setShowWorkSpaceModal(true))}
                    className="flex items-center gap-3 text-[#002145] mb-3 mr-5 text-sm hover:cursor-pointer hover:text-blue SidebarHoverBox "
                  >
                    <img
                      src={add_circle_svg}
                      alt="icon"
                    />
                    <Link
                      // to={user.userData.package != undefined ?limitsDatas.length > 0 && limitsDatas[2].count>0? "setWorkSpace":"checkLimit": location}
                      to={user.userData.package != undefined ?`${ChackingAvailabilityTools({path:"setWorkSpace",userState:user,workSpaceState:workSpaceState})}`: location}
                      // to={user.userData.package != undefined ?`${<ChackingAvailabilityTools path={"setWorkSpace"} section="workspace"/>}`: location}
                      onClick={()=>user.userData.package == undefined && showToast("شما پلن فعالی ندارید", "error")}
                      state={{ background: location }}
                      className={"w-auto"}
                    >
                      افزودن سایت
                    </Link>
                  </div>
                )}
              </div>
            ) : null}
            {index == 0 && (
              <div className="border-b border-lightGray w-11/12 m-auto" />
            )}
          </div>
        );
      })}
    </>
  );
}
