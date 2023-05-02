import React, { useEffect, useState } from 'react'
import { DateObject } from 'react-multi-date-picker';
import MultiProgress from 'react-multi-progress';
import { useSelector } from 'react-redux';
import { ImageContainer } from '../../../../../assets/img/IMG';
import AuthButton from '../../../../../component/Auth/authButton/AuthButton'
import ComboBox from '../../../../../component/shared/comboBox/ComboBox'
import { BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB } from '../../../../../variables/businessPages';
import { sampleChartColors } from '../../../../baghShahiRanck/configs/sampleChartData';
import FilterData from './FilterData';

export default function Index({setFilteredTableData}) {
  const [searchFilterOption, setSearchFilterOption] = useState("شماره فاکتور");

  const { pagesData } = useSelector(state => state.businessPagesState)

  const [addingKeyWordModal, setAddingKeyWordModal] = useState({key:[],showModal:false});

  const [deleteItem, setDeleteItem] = useState({data:[],showPopUp:false});

  const [datePickerValues, setDatePickerValues] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().add(0, "days"),
  ]);

  const arrayOfTickets = pagesData.map((item) => {
    return {
      id: (
        <p className=" w-11 text-center">
          <div className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
            <input
              type={"checkbox"}
              className="checkbox rounded border border-[#D9D9D9] bg-[#0A65CD] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border"
              onClick={(e) => {
                if (e.target.checked) {
                  setDeleteItem({data:[...deleteItem.data, item],showPopUp:false});
                } else {
                  setDeleteItem(
                    {data:deleteItem.data.filter((copyItems) => copyItems != item),
                    showPopUp:false}
                  );
                }
              }}
            />
          </div>
        </p>
      ),
      updated_at: item.updated_at||"ثبت نشده",
      title:  item.keyword.title==="ثبت نشده"?(
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
      ):item.keyword.title,
      categories: 2,
      position: item.keyword.position||"ثبت نشده",
      performance: item.insight[0]?.performance,
      accessibility: item.insight[0]?.accessibility,
      best_practices:  item.insight[0]?.best_practices,      
      seo:  item.insight[0]?.seo,      
      pageStatus: (
        <MultiProgress
          transitionTime={1.2}
          height="10px"
          elements={[
            {
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
              fontSize: 9,
              isBold: false,
            },
          ]}
          component={({ children, element, ...rest }) => {
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

    };
  });

  useEffect(() => {
    setFilteredTableData(arrayOfTickets);
  }, [])
  
  return (
    <header className="flex items-center justify-between h-10 w-full ">
    <div className=" w-96">
      <ComboBox
        placeholder={"فیلد جستجو"}
        radioTextItems={BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB}
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
    </div>
    <div className=" inline-block">
      <AuthButton textButton={"اعمال"} />
    </div>
  </header>
  )
}
