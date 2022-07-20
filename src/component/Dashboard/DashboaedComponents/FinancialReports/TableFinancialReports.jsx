import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AuthButton from '../../../Auth/authButton/AuthButton';
import { filterFinancialReports, getAllFinancialReports } from '../../../Redux/Action/financialReports';
import KeyWordsSearch from '../KeyWordsSearch/KeyWordsSearch';
import DatePicker, { DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { getValue } from '@testing-library/user-event/dist/utils';
import { exportExcel } from '../../../Utils/excel/exportExcel';
import ReactExport from "react-export-excel";
// import { exportExcel } from '../../../Utils/excel/exportExcel';
// import { RangeDatePicker } from "jalali-react-datepicker";//
export default function TableFinancialReports({ title }) {
    // const dispatch=us
    const dispatch = useDispatch();

    const [copyItem, setCopyItem] = useState([]);
    const [placeholderPadding, setplaceholderPadding] = useState("");

    const [targetSortFilter, setTargetSortFilter] = useState("تاریخ خرید");
    const [searchFilterOption, setSearchFilterOption] = useState("");
    const [numFilter, setNumFilter] = useState(1);

    const [searchFilterText, setSearchFilterText] = useState("");

    const [datePickerValues, setDatePickerValues] = useState([
        new DateObject().subtract(4, "days"),
        new DateObject().add(4, "days")
    ])

    const datePickerRef = useRef()

    useEffect(() => {
        dispatch(getAllFinancialReports())
    }, [])

    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


    // const handleCheckingInput = () => {
    //     debugger;

    //     if (copyItem.length > 0) {
    //       setSelectColumnTitle("کپی");
    //     } else {
    //       setSelectColumnTitle("انتخاب");
    //     }
    //   };

    const dataSet1 = [
        {
            name: "Johson",
            amount: 30000,
            sex: 'M',
            is_married: true
        },
        {
            name: "Monika",
            amount: 355000,
            sex: 'F',
            is_married: false
        },
        {
            name: "John",
            amount: 250000,
            sex: 'M',
            is_married: false
        },
        {
            name: "Josef",
            amount: 450500,
            sex: 'M',
            is_married: true
        }
    ];

    const { financialDataTable } = useSelector(state => state.financialState)
    console.log(copyItem)
    if (copyItem.length>0) {
        
        console.log(copyItem[0].description +"hhi")
    }
    return (
        <div>
            <div>
                <div className='flex gap-6 items-center pr-4 mt-3'>
                    <div className='w-[20px] h-[2px] bg-[#001F43] rotate-90 rounded absolute -right-[9px]' />
                    <span className='text-lg'>{title}</span>
                </div>
            </div>
            {/* <div className=' w-[1038px] m-auto'> */}
            <div className=' w-full px-10 m-auto'>
                <header className='flex items-center justify-between h-10 w-full mb-7 mt-10'>
                    {/* <input
                        id="keyWordSearchBoxFilter"
                        type="text"
                        style={{
                            paddingRight:
                                placeholderPadding >= 19
                                    ? "127px"
                                    : placeholderPadding >= 13
                                        ? "98px"
                                        : "90px",
                        }}
                        className={
                            !radioText
                                ? "pr-2 w-[290px] h-11 border-2 border-[#D9D9D9] border-b-[#7D7D7D] placeholder-[#D9D9D9]"
                                : NothingSearch
                                    ? "disableInput placeholder-[#7D7D7D] w-[290px] h-11"
                                    : `w-[290px] h-11  border-2 border-[#D9D9D9] border-b-[#7D7D7D] placeholder-[#D9D9D9]`
                        }
                        // disabled={NothingSearch ? true : false}
                        placeholder="جستجو کلمه کلیدی"
                        // onChange={(e) => secoundSearch(e)}
                        // onClick={() => {
                        //     setInputClick(true);
                        //     setButtonClick(true);
                        // }}
                        // onBlur={() => setInputClick(!inputClick)}
                    /> */}
                    <div className='w-80'>
                        <KeyWordsSearch usedBySection={"financialReports/search"} secoundSearch={e => setSearchFilterText(e.target.value)} inputPlaceHolder={"فیلد جستجو"} getRadioValue={setSearchFilterOption} />
                    </div>
                    <div className='flex items-center'>
                        <span className=' ml-2'>مرتب سازی بر اساس</span>
                        <div className=' w-48'>
                            <KeyWordsSearch usedBySection={"financialReports/sort"} inputPlaceHolder={targetSortFilter} getRadioValue={setTargetSortFilter} />
                        </div>
                    </div>
                    <div>
                        {targetSortFilter == "تاریخ خرید" ? (
                            <DatePicker
                                range
                                value={datePickerValues}
                                // ref={datePickerRef}
                                // onOpen={true}
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom-right"
                                onChange={setDatePickerValues}
                                format="DD MMMM YYYY - "
                                render={(value, openCalendar) => <div className='flex justify-start items-center px-3 w-52 h-10 border-[1.5px] border-[#D9D9D9] rounded-sm text-center border-b-[#7D7D7D] hover:border-[#7D7D7D] active:border-b-[#0A65CD]' onClick={openCalendar}><img src='./img/dashboard/financialReports/calendar/file_download.svg' /><span className='text-xs mr-3'>{value}</span></div>}
                            >
                                {/* <div className='w-full flex justify-between p-4'>
                                    <AuthButton textButton={"تایید"} handlerClick={datePickerRef.current.closeCalendar()} />
                                    <AuthButton textButton={"انصراف"} classes=" bg-[#F2F5F7] text-[#488CDA]" />
                                </div> */}
                            </DatePicker>
                        ) : (
                            <div className='flex justify-between items-center px-1 w-14 h-10 border-[1.5px] border-[#D9D9D9] rounded-sm text-center border-b-[#7D7D7D] hover:border-[#7D7D7D] active:border-b-[#0A65CD]'>
                                <img src="./img/dashboard/financialReports/numArrow.svg" alt="" onClick={() => numFilter > 1 && setNumFilter(numFilter - 1)} className='  cursor-pointer' />
                                <span className='text-xs cursor-default'>{numFilter}</span>
                                <img src="./img/dashboard/financialReports/numArrow.svg" alt="" onClick={() => setNumFilter(numFilter + 1)} className='cursor-pointer rotate-180' />
                            </div>
                        )}

                        {/* <RangeDatePicker /> */}
                    </div>
                    <div className=' inline-block'>
                        {/* <AuthButton textButton={"اعمال"} reduxHandleClick={filterFinancialReports} setOnclickValue={[searchFilterOption,searchFilterText,targetSortFilter,datePickerValues]}/> */}
                        <AuthButton textButton={"اعمال"} reduxHandleClick={filterFinancialReports} setOnclickValue={{ textTarget: searchFilterOption, textValue: searchFilterText, sortTarget: targetSortFilter, sortValue: targetSortFilter == "تاریخ خرید" ? datePickerValues : numFilter }} />
                    </div>
                </header>
                <div className=' w-full  rounded-lg border border-[#D9D9D9] h-[672px] overflow-hidden'>
                    <div className=' mb-4 h-full w-full'>
                        <div className=' overflow-hidden h-full'>

                            <div className=' h-14 text-sm font-normal flex items-center justify-around flex-row-reverse bg-[#FCFCFB]'>
                                <p className=' w-28 text-center'>عملیات</p>
                                <p className=' w-24 text-center'>وضعیت پرداخت</p>
                                <p className=' w-11 text-center'>مبلغ</p>
                                <p className=' w-[68px] text-center'>تاریخ انقضا</p>
                                <p className=' w-16 text-center'>تاریخ خرید</p>
                                <p className=' w-36 text-center'>نوع اشتراک</p>
                                <p className=' w-20 text-center'>شماره فاکتور</p>
                                <p className=' w-8 text-center'>ردیف</p>
                                <p className=' w-11 text-center'>{copyItem.length > 0 ? "کپی" : "انتخاب"}</p>
                            </div>
                            <div className='overflow-scroll h-[94%] text-xs font-normal'>
                                {financialDataTable.map((item, index) => (
                                    <div className={`w-full h-16 border-b border-[#0000000D] text-xs font-normal flex justify-around flex-row-reverse items-center`}>
                                        <p className=' w-28 text-center'>{item.type_text}</p>
                                        <p className=' w-24 text-center'><span className={`inline-block w-20 py-2 text-center text-[#FFFFFF] rounded-[20px] ${item.payment_status_text == "پرداخت ناموفق" ? " bg-[#F35242]" : item.payment_status_text == "پرداخت نشده" ? "bg-[#FFCE47]" : "bg-[#10CCAE]"}`}>{item.payment_status_text}</span></p>
                                        <p className=' w-11 text-center'>{item.sub_total}</p>
                                        <p className=' w-[68px] text-center'>{item.updated_at}</p>
                                        <p className=' w-16 text-center'>{item.created_at}</p>
                                        <p className=' w-36 text-center'>{item.description.substring(31, item.description.length)}</p>
                                        <p className=' w-20 text-center'>{item.order_code}</p>
                                        <p className=' w-8 text-center'>{index + 1}</p>
                                        <p className=' w-11 text-center'>
                                            <div className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                                                <input
                                                    type={"checkbox"}
                                                    className="checkbox rounded border border-[#D9D9D9] bg-[#FCFCFB] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border"
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCopyItem([...copyItem, item]);
                                                            console.log(copyItem);
                                                            console.log(e.target.checked);
                                                        } else {
                                                            setCopyItem(
                                                                copyItem.filter((copyItems) => copyItems != item)
                                                            );
                                                            console.log(copyItem);
                                                        }

                                                        // handleCheckingInput(e.target.checked, item);
                                                    }}
                                                />
                                            </div>
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
                {/* <exportExcel /> */}
                <div className='w-full text-left mt-7'>
                    <div className=' inline-block'>
                            {copyItem.length > 0 ? (
                                <Fragment>
                                    <ExcelFile element={<AuthButton handlerClick={""} setOnclickValue={copyItem} textButton={<Fragment><img src='./img/dashboard/financialReports/file_download.svg' className=' ml-3' /> خروجی اکسل</Fragment>} />}>
                                    <ExcelSheet data={copyItem} name="Employees">
                                        <ExcelColumn label="شماره فاکتور" value={"order_code"} />
                                        <ExcelColumn label="نوع اشتراک" value={"description"} />
                                        <ExcelColumn label="تاریخ خرید" value={"created_at"} />
                                        <ExcelColumn label="تاریخ انقضا" value={"updated_at"} />
                                        <ExcelColumn label="مبلغ" value={"sub_total"} />
                                        <ExcelColumn label="وضعیت پرداخت" value={"payment_status_text"} />
                                        <ExcelColumn label="عملیات" value={"type_text"} />
                                    </ExcelSheet>
                            </ExcelFile>
                                </Fragment>
                            ) : null}

                            {/* <ExcelSheet data={dataSet1} name="Employees">
                                <ExcelColumn label="Name" value="name" />
                                <ExcelColumn label="Wallet Money" value="amount" />
                                <ExcelColumn label="Gender" value="sex" />
                            </ExcelSheet> */}
                            {/* <ExcelSheet data={copyItem} name="Employees">
                            <ExcelColumn label="شماره فاکتور" value={"order"} />
                                <ExcelColumn label="نوع اشتراک" value={"type eshterak"} />
                                <ExcelColumn label="تاریخ خرید" value={"date"} />
                                <ExcelColumn label="تاریخ انقضا" value={"date ex"} />
                                <ExcelColumn label="مبلغ" value={"price"} />
                                <ExcelColumn label="وضعیت پرداخت" value={"state"} />
                                <ExcelColumn label="عملیات" value={"handle"} />
                            </ExcelSheet> */}

                    </div>
                </div>
            </div>
        </div>
    )
}
