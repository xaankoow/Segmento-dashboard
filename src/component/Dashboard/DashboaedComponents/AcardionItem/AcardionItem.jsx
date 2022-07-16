import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowWorkSpaceModal } from "../../../Redux/Action/workSpace";
import ItemSidebarHover from "../SidebarComponents/ItemSidebarHover";

export default function AcardionItem() {

  const dispatch=useDispatch();

  const { allWorkSpace } = useSelector((state) => state.workSpaceState);
  console.log(allWorkSpace);
  const data = [
    {
      title: "ورک‌اسپیس‌ها",
      titleIcon: "./img/dashboard/nav_right/web.svg",
      acardionItems: allWorkSpace.map((item, index) => ({
        itemTitle: item.website,
        itemIcon: "./img/dashboard/nav_right/storefront.svg",
      })),
    },
    {
      title: "سئو",
      titleIcon: "./img/dashboard/nav_right/search.svg",
      acardionItems: [
        {
          itemTitle: "رتبه کلمات کلیدی ",
          itemIcon: "./img/dashboard/nav_right/rotbebandi.svg",
        },
        {
          itemTitle: "تحقیق کلمه کلیدی ",
          itemIcon: "./img/dashboard/nav_right/searchKeyWord.svg",
        },
        {
          itemTitle: "صفحات تجاری ",
          itemIcon: "./img/dashboard/nav_right/pageTejari.svg",
        },
        {
          itemTitle: "ایندکسر گوگل",
          itemIcon: "./img/dashboard/nav_right/googleIndex.svg",
        },
        {
          itemTitle: "آنالیز گوگل",
          itemIcon: "./img/dashboard/nav_right/pageSeo.svg",
        },
        {
          itemTitle: " آنالیز سئو داخل صفحه",
          itemIcon: "./img/dashboard/nav_right/monitoring.svg",
        },
      ],
    },
    {
      title: "سئو تکنیکال",
      titleIcon: "./img/dashboard/nav_right/teknikal.svg",
      acardionItems: [
        {
          itemTitle: " مانیتورینگ سرعت ",
          itemIcon: "./img/dashboard/nav_right/speedMonitoring.svg",
        },
        {
          itemTitle: "ابزار لایت هاوس  ",
          itemIcon: "./img/dashboard/nav_right/liteHouse.svg",
        },
        {
          itemTitle: "ابزار لایت فلو ",
          itemIcon: "./img/dashboard/nav_right/lightFlow.svg",
        },
        {
          itemTitle: "صفحات یتیم ",
          itemIcon: "./img/dashboard/nav_right/yatimPage.svg",
        },
        {
          itemTitle: " خودخواری Cannibalization   ",
          itemIcon: "./img/dashboard/nav_right/cannibalization.svg",
        },
        {
          itemTitle: "  ابزار فایل ربات robots.txt   ",
          itemIcon: "./img/dashboard/nav_right/robots.svg",
        },
        {
          itemTitle: "  ابزار انکار لینک Disavow   ",
          itemIcon: "./img/dashboard/nav_right/Disavow.svg",
        },
        {
          itemTitle: "سازنده اسکیما  ",
          itemIcon: "./img/dashboard/nav_right/skymacreator.svg",
        },
        {
          itemTitle: "شبیه ساز نتایج  ",
          itemIcon: "./img/dashboard/nav_right/result.svg",
        },
      ],
    },
    {
      title: "تولید محتوا",
      titleIcon: "./img/dashboard/nav_right/tolidMohtava.svg",
      acardionItems: [
        {
          itemTitle: " تاپیک ترند",
          itemIcon: "./img/dashboard/nav_right/trandTypic.svg",
        },
        {
          itemTitle: " ایده ساز",
          itemIcon: "./img/dashboard/nav_right/createIdea.svg",
        },
        {
          itemTitle: "کپی رایتر  ",
          itemIcon: "./img/dashboard/nav_right/copyWriter.svg",
        },
        {
          itemTitle: "کپی رایتر انبوه ",
          itemIcon: "./img/dashboard/nav_right/copyWriterAnboh.svg",
        },
        {
          itemTitle: "پیشنهاد ساز گوگل ",
          itemIcon: "./img/dashboard/nav_right/googleSuggestion.svg",
        },
      ],
    },
  ];
  const [clicked, setClicked] = React.useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      // if active close
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="" key={index}>
            <div className="flex items-center justify-between m-0 p-0">
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
                {clicked === index ? (
                  <img
                    src="./img/dashboard/nav_right/arrow_back_ios_new_down.svg"
                    alt=""
                    className="w-4 h-3"
                  />
                ) : (
                  <img
                    src="./img/dashboard/nav_right/arrow_back_ios_new.svg"
                    alt=""
                    className="w-3 h-4"
                  />
                )}
              </div>
            </div>
            {clicked === index ? (
              <div className="mr-5 mt-0">
                {item.acardionItems.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-[#002145] mb-3 mr-5 text-sm hover:cursor-pointer hover:text-blue SidebarHoverBox "
                    >
                      <img src={item.itemIcon} alt="icon" />
                      <span className={"w-auto"}>{item.itemTitle}</span>
                    </div>
                  );
                })}
                {item.title == "ورک‌اسپیس‌ها" && (
                  <div
                    key={index}
                    onClick={()=>dispatch(setShowWorkSpaceModal(true))}
                    className="flex items-center gap-3 text-[#002145] mb-3 mr-5 text-sm hover:cursor-pointer hover:text-blue SidebarHoverBox "
                  >
                    <img
                      src={"./img/dashboard/nav_right/add_circle.svg"}
                      alt="icon"
                    />
                    <span className={"w-auto"}>افزودن سایت</span>
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
