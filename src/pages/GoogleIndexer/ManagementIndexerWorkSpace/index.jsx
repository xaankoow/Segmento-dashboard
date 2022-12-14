import React from 'react'
import { useState } from 'react'
import { ImageContainer } from '../../../assets/img/IMG'
import AuthButton from '../../../component/Auth/authButton/AuthButton'
import { FilterDataSupport } from '../../../component/Dashboard/pages/Support&Tickets/changeData'
import ComboBox from '../../../component/shared/comboBox/ComboBox'
import Table from '../../../component/shared/table/Table'
import { filterIndexerTabelItem, titleOfIndexerTable } from '../../../variables/indexer'
import InfoWorkSpaceCard from '../WorkSpacesInfoPage/workSpaceCard'
import InfoPage from '../../../component/shared/InfoPage'

export default function Index() {

    const [searchFilterOption, setSearchFilterOption] = useState("بدون فیلتر");

    return (
        <div>
            <InfoPage title="برای ابزار ایندکسر گوگل  لطفا به نکات زیر توجه کنید: ">
                <li>نمونه متن برای نوشتن نکات مهم برای ابزار ایندکسر گوگل</li>
                <li>نمونه متن برای نوشتن نکات مهم برای ابزار ایندکسر گوگل</li>

            </InfoPage>

            <div className=' flex justify-end mt-5'>
                <AuthButton textButton={<><img src={ImageContainer.addLinkBtn} alt="setting" className=' ml-3' />افزودن لینک</>} />
                <AuthButton textButton={<><img src={ImageContainer.settingBtn} alt="setting" className=' ml-3' />تنظیمات ایندکسر خودکار</>} classes="btn-secondary mr-5" />
            </div>
            <InfoWorkSpaceCard />
            <div>
                {/* <div className="flex mx-9 justify-between my-5">
                    <div className="min-w-[420px]">
                        <ComboBox
                            placeholder={"فیلد جستجو"}
                            radioTextItems={filterIndexerTabelItem.map(item => { return item.filterName })}
                            radioClickedHandler={(e) => setSearchFilterOption(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-4 ">
                        {searchFilterOption !== "بدون فیلتر" && (
                            <span className="">مرتب سازی بر اساس</span>
                        )}
                        <FilterDataSupport
                            radioTarget={searchFilterOption}
                            datePickerValues={datePickerValues}
                            FactorHandler={setSearchFilterValue}
                            setDatePickerValues={setDatePickerValues} />
                    </div>
                    <div className=" inline-block">
                        <AuthButton textButton={"اعمال"} classes={"btn-secondary"} handlerClick={filterTableData} />
                    </div>
                </div> */}
                {/* fileter section */}
            </div>
            <div>
                {/* <Table
                    columnItem={titleOfIndexerTable}
                    rowsItem={arrayOfTickets}
                    rowKey={rowKey}
                    classname={"px-9"}
                /> */}
            </div>
            <div className=' relative'>

                <div className='flex justify-between items-center absolute'>
                    <div className='flex items-center'>
                        <img src={ImageContainer.blueArrowBtn} alt="back arrow" className=' rotate-180 w-4 h-4 inline-block' />
                        <span className='text-shortText text-sm mr-4'>
                            بازگشت
                        </span>
                    </div>
                    <div className='flex items-center'>
                        <div className=' inline-block'>
                            <AuthButton classes={"btn-delete_style inline-block"} textButton={<><img src={ImageContainer.deleteBtn} alt="bin" className=' ml-3' /><span className='text-deleteBtn opacity-70'>حذف</span></>} />

                        </div>
                        <div className=' inline-block mr-5'>
                            <AuthButton textButton={"ثبت درخواست"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
