import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { DateObject } from "react-multi-date-picker";
import { ImageContainer } from "../../../../../assets/img/IMG";
import AuthButton from "../../../../../component/Auth/authButton/AuthButton";
import ComboBox from "../../../../../component/shared/comboBox/ComboBox";
import Table from "../../../../../component/shared/table/Table";
import {
  BUSINESS_PAGE_FILTER_TABEL_BUSINESS_TAB,
  BUSINESS_PAGE_TABEL_HEADER_ITEM_BUSINESS_TAB,
  BUSINESS_PAGE_TABEL_HEADER_ITEM_REPORTS_TAB,
} from "../../../../../variables/businessPages";
import FilterData from "./FilterData";
import MultiProgress from "react-multi-progress";
import { sampleChartColors } from "../../../../baghShahiRanck/configs/sampleChartData";
import PopUp from "../../../../../component/Utils/PopUp/PopUp";
import SetKeyWordsModal from '../../../addKeyWordModal'
import { useSelector } from "react-redux";

export default function Index() {

  const { pagesData } = useSelector(state => state.businessPagesState)

  const [searchFilterOption, setSearchFilterOption] = useState("بدون فیلتر");

  const [addingKeyWordModal, setAddingKeyWordModal] = useState({key:[],showModal:false});



  const [deleteItem, setDeleteItem] = useState({data:[],showPopUp:false});
  const [datePickerValues, setDatePickerValues] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().add(0, "days"),
  ]);

  const arrayOfTickets = pagesData.map((item, index) => {
    return {
      id: (
        <p className=" w-11 text-center">
          <div className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
            <input
              type={"checkbox"}
              className="checkbox rounded border border-[#D9D9D9] bg-[#0A65CD] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border"
              // className="checkbox rounded border border-[#D9D9D9] bg-[#FCFCFB] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border"
              onClick={(e) => {
                if (e.target.checked) {
                  setDeleteItem({data:[...deleteItem.data, item],showPopUp:false});
                } else {
                  setDeleteItem(
                    {data:deleteItem.data.filter((copyItems) => copyItems != item),
                    showPopUp:false}
                  );
                }
                
                // handleCheckingInput(e.target.checked, item);
              }}
            />
          </div>
        </p>
      ),
      index: index + 1,
      link: item.page.link,
      addingKeyWord: (
        <AuthButton
          textButton={
            <img
              src={ImageContainer.bluePlus}
              alt="blue plus"
              // className="w-4 h-4"
            />
          }
          disabled
          handlerClick={setAddingKeyWordModal}
          setOnclickValue={{key:[item],showModal:true}}
          classes="btn-secondary m-auto py-3 px-6"
        />
      ),
      position: item.keyword.position||"ثبت نشده",
      updated_at: item.updated_at||"ثبت نشده",
      pageStatus: (
        <MultiProgress
          transitionTime={1.2}
          height="10px"
          // className=" overflow-visible-force"
          elements={[
            {
              // actual:65,
              value: 100-item.insight[0]?.performance||0,
              color: "#D9D9D9",
              showPercentage: false,
              fontSize: 9,
              textColor: "black",
              isBold: false,
            },
            {
              actual: 65,

              value: item.insight[0]?.performance||0,
              color: "#10CCAE",
              showPercentage: false,
              // textColor: "white",
              fontSize: 9,
              isBold: false,
              // className: "my-custom-css-class",
            },
          ]}
          component={({ children, element, ...rest }) => {
            // console.log(children, element, "iiiiiii");

            // console.log({ xx }); progressBar__single
            return (
              <>
                <div
                  {...rest} // adds all styles for rendering the progress bar
                  style={{
                    fontWeight: element.isBold ? 900 : 300,
                  }}>
                  {children}
                  <div className="text-xs">
                    <span className="ml-3 text-s absolute left-0 -top-6">
                      {element?.actual}
                    </span>
                    <i
                      className={` inline-block ${
                        element.color === sampleChartColors.failure
                          ? "borderBT--red triangle-down"
                          : element.color === sampleChartColors.success
                          ? "triangle-up"
                          : "dot"
                      }`}></i>
                  </div>
                </div>
              </>
            );
          }}
        />
      ),
      moreInfo: (
        <AuthButton
          textButton={<img src={ImageContainer.blueArrowBtn} />}
          classes="btn-secondary"
        />
      ),
    };
  });

  const rowKey = [
    "row.id ",
    "row.index",
    "row.link",
    "row.addingKeyWord",
    "row.position",
    "row.updated_at",
    "row.pageStatus",
    "row.moreInfo",
  ];

  return (
    <div>
      <header className="flex items-center justify-between h-10 w-full mb-7 mt-10">
        <div className=" w-96">
          <ComboBox
            placeholder={"فیلد جستجو"}
            radioTextItems={BUSINESS_PAGE_FILTER_TABEL_BUSINESS_TAB}
            radioClickedHandler={(e) => setSearchFilterOption(e)}
          />
        </div>
        <div className="flex items-center ">
          {searchFilterOption !== "بدون فیلتر" && (
            <span className=" ml-2">مرتب سازی بر اساس</span>
          )}

          <div className=" inline">
            <FilterData
              radioTarget={searchFilterOption}
              datePickerValues={datePickerValues}
              inputWidth="300px"
            />
          </div>

          {/* <FilterData
              userTypeData={(e) => setUserType(e)}
              FactorHandler={setFactorHandler}
              setDatePickerValues={setDatePickerValues}
              datePickerValues={datePickerValues}
              priceHandler={setPrice}
              priceHandler1={setPrice2}
            /> */}
        </div>

        <div className=" inline-block">
          <AuthButton textButton={"اعمال"} />
        </div>
      </header>

      <Table
        columnItem={BUSINESS_PAGE_TABEL_HEADER_ITEM_BUSINESS_TAB}
        rowsItem={arrayOfTickets}
        rowKey={rowKey}
      />
      {/* <div className=""> */}
      {deleteItem.data.length>0 ? (
        <AuthButton
          textButton={
            <>
              <img src={ImageContainer.deleteBtn} className=" ml-4" />
              حذف
            </>
          }
          handlerClick={setDeleteItem}
          setOnclickValue={{data:deleteItem.data,showPopUp:true}}

          classes="btn-delete mr-auto mt-4"
        />
      ) : null}
      {deleteItem.showPopUp==true?<PopUp
        image={ImageContainer.popupError}
        type={"error"}
        title="توجه !"
        text="آیا برای حذف صفحات تجاری خود مطمعا هستید؟"
        createFooterTag={
          <div className="flex justify-between items-center mt-14 mb-2 w-full px-4">
            <span
              className=" cursor-pointer text-sm text-shortText"
              onClick={()=>setDeleteItem({data:[],showPopUp:false})}>
              نه! پشیمون شدم
            </span>
            <AuthButton textButton={"باشه، حذف کن"} />
          </div>
        }
      />:null}
      {addingKeyWordModal.showModal?<SetKeyWordsModal showModal={setAddingKeyWordModal}/>:null}
      
      {/* </div> */}
    </div>
  );
}
