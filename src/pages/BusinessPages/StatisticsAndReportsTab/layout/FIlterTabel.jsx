import React from 'react'
import AuthButton from '../../../../component/Auth/authButton/AuthButton'
import ComboBox from '../../../../component/shared/comboBox/ComboBox'

export default function Index() {
  const [searchFilterOption, setSearchFilterOption] = useState("شماره فاکتور");

  return (
    <div>
                <header className="flex items-center justify-between h-10 w-full mb-7 mt-10">
          <div className="w-[410px]">
            <ComboBox
              placeholder={"فیلد جستجو"}
              radioTextItems={filterBoxDatas}
              radioClickedHandler={(e) => setSearchFilterOption(e)}
            />
          </div>
          <div className="flex items-center ">
            {searchFilterOption !== "بدون فیلتر" && (
              <span className=" ml-2">مرتب سازی بر اساس</span>
            )}

            <FilterData
              radioTarget={searchFilterOption}
              userTypeData={(e) => setUserType(e)}
              FactorHandler={setFactorHandler}
              setDatePickerValues={setDatePickerValues}
              datePickerValues={datePickerValues}
              priceHandler={setPrice}
              priceHandler1={setPrice2}
            />
          </div>

          <div className=" inline-block">
            <AuthButton
              textButton={"اعمال"}
              handlerClick={() =>
                setFinancialDataTableFiltered(
                  filterFinancialData(
                    financialDataTableOrg,
                    searchFilterOption,
                    filterItems[searchFilterOption]
                  )
                )
              }
              setOnclickValue={{
                textTarget: searchFilterOption,
                textValue: searchFilterText,
                sortTarget: targetSortFilter,
                sortValue:
                  targetSortFilter == "تاریخ خرید"
                    ? datePickerValues
                    : numFilter,
              }}
            />
          </div>
        </header>
    </div>
  )
}
