import { useState } from "react";
import { Link } from "react-router-dom";
import { ImageContainer } from "../../assets/img/IMG";
import AuthButton from "../../component/Auth/authButton/AuthButton";
import PageTitle from "../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle";
import { FilterDataSupport } from "../../component/Dashboard/pages/Support&Tickets/changeData";
import ComboBox from "../../component/shared/comboBox/ComboBox";
import GuideBox from "../../component/shared/GuideBox/GuideBox";
import Table from "../../component/shared/table/Table";
import PopUp from "../../component/Utils/PopUp/PopUp";
import {
  filterBoxDatasItems,
  helpTextWorkSpace,
  rowData,
  rowKey,
  workspaceManagementTitle,
} from "../../variables/workSpaceManagement";
import { FilterDataSearch } from "./FilterDataSearch";

export default function WorkSpaceManagement() {
  const [searchFilterOption, setSearchFilterOption] = useState("بدون فیلتر");
  const [showPopUp, setShowPopUp] = useState(false);
  const rowData = [
    {
      id: 1,
      webAdress: "https://example.ir",
      title: "1401/2/2 ",
      date: "1401/2/2",
      status: "قعال",
      authentication: (
        <div className="w-[85px] h-7 bg-[#10CCAE] text-white rounded-3xl flex justify-center items-center mx-auto">
          در انتظار پاسخ
        </div>
      ),
      operation: (
        <div className="w-16 h-10 rounded-lg  flex justify-center items-center gap-5 cursor-pointer">
          <img src={ImageContainer.blueVisible} alt="" />
          <img src={ImageContainer.download} alt="" />
          <img
            src={ImageContainer.garbage}
            alt=""
            onClick={() => setShowPopUp(true)}
          />
        </div>
      ),
    },
  ];
  return (
    <>
      {showPopUp && (
        <PopUp
          clickHandler={() => setShowPopUp(false)}
          image={ImageContainer.popupError}
          type={"error"}
          buttonText={"باشه، حذف کن!"}
          text={
            " کاربر گرامی ایا از حذف ورک اسپیس خود مطمعا هستید؟    با حذف ورک اسپیس تمامی اطلاعات و ابزارهای مربوط به ورک اسپیس حذف میشود و امکان بازگشت نیست. "
          }
          title={"توجه !"}
        />
      )}
      <>
        <PageTitle title={"مدیریت ورک اسپیس ها"} />
        <div className="border rounded-lg border-sectionDisable py-4 px-7 mx-9 mt-7">
          <span className="text-lg">
            کاربر عزیز لطفا به نکات گفته شده توجه فرمایید:
          </span>
          <div className="flex gap-3 flex-col justify-start mt-3">
            {helpTextWorkSpace.map((item) => {
              return (
                <div className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-primary "></span>
                  <span className="text-silver">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex mx-9 justify-between my-5">
          <div className="min-w-[420px]">
            <ComboBox
              placeholder={"لطفا یک گزینه را انتخاب کنید"}
              radioTextItems={filterBoxDatasItems}
              radioClickedHandler={(e) => setSearchFilterOption(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4 min-w-[520px]">
            {searchFilterOption !== "بدون فیلتر" && (
              <span className="min-w-fit">مرتب سازی بر اساس</span>
            )}
            <FilterDataSearch radioTarget={searchFilterOption} />
          </div>
          <div className=" inline-block">
            <AuthButton textButton={"اعمال"} classes={"btn-secondary"} />
          </div>
        </div>
        <Table
          columnItem={workspaceManagementTitle}
          rowsItem={rowData}
          rowKey={rowKey}
          classname={"px-9"}
        />
      </>
    </>
  );
}
