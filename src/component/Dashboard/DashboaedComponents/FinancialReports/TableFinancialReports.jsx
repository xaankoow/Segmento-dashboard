import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AuthButton from '../../../Auth/authButton/AuthButton';
import { getAllFinancialReports } from '../../../Redux/Action/financialReports';
import KeyWordsSearch from '../KeyWordsSearch/KeyWordsSearch';
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { getValue } from '@testing-library/user-event/dist/utils';
// import { RangeDatePicker } from "jalali-react-datepicker";//
export default function TableFinancialReports({ title }) {
    // const dispatch=us
    const dispatch = useDispatch();

    const [copyItem, setCopyItem] = useState([]);
    const [placeholderPadding, setplaceholderPadding] = useState("");

    const [targetFilter, setTargetFilter] = useState("");
    const [numFilter, setNumFilter] = useState(1);


    useEffect(() => {
        dispatch(getAllFinancialReports())
    }, [])


    // const handleCheckingInput = () => {
    //     debugger;

    //     if (copyItem.length > 0) {
    //       setSelectColumnTitle("کپی");
    //     } else {
    //       setSelectColumnTitle("انتخاب");
    //     }
    //   };


    const { allFinancialData } = useSelector(state => state.financialState)
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
                        <KeyWordsSearch usedBySection={"financialReports/search"} inputPlaceHolder={"فیلد جستجو"} />
                    </div>
                    <div className='flex items-center'>
                        <span className=' ml-2'>مرتب سازی بر اساس</span>
                        <div className=' w-48'>
                            <KeyWordsSearch usedBySection={"financialReports/sort"} inputPlaceHolder={"فیلد جستجو"} />
                        </div>
                    </div>
                    <div>
                        {targetFilter == "date" ? (
                            <DatePicker
                                value={new Date()}
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom-right"
                                onChange={e => alert(e)}
                                format="DD MMMM YYYY"
                                render={(value, openCalendar) => <div className='flex justify-start items-center px-3 w-52 h-10 border-[1.5px] border-[#D9D9D9] rounded-sm text-center border-b-[#7D7D7D] hover:border-[#7D7D7D] active:border-b-[#0A65CD]' onClick={openCalendar}><img src='./img/dashboard/financialReports/calendar/file_download.svg' /><span className=' mr-3'>{value}</span></div>}
                            >
                                {/* <AuthButton textButton={"انصراف"}/>
                            <AuthButton textButton={"تایید"}/> */}
                            </DatePicker>
                        ) : (
                            <div className='flex justify-between items-center px-1 w-14 h-10 border-[1.5px] border-[#D9D9D9] rounded-sm text-center border-b-[#7D7D7D] hover:border-[#7D7D7D] active:border-b-[#0A65CD]'>
                                <img src="./img/dashboard/financialReports/numArrow.svg" alt="" />
                                <span className=' text-xs'>{numFilter}</span>
                                <img src="./img/dashboard/financialReports/numArrow.svg" alt="" className=' rotate-180'/>
                            </div>
                        )}

                        {/* <RangeDatePicker /> */}
                    </div>
                    <div className=' inline-block'>
                        <AuthButton textButton={"اعمال"} />
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
                            <div className='overflow-scroll h-full text-xs font-normal'>
                                {allFinancialData.map((item, index) => (
                                    <div className={`w-full h-16 border-b border-[#0000000D] text-xs font-normal flex justify-around flex-row-reverse items-center`}>
                                        <p className=' w-28 text-center'>{item.type_text}</p>
                                        <p className=' w-24 text-center'><span className={`inline-block w-20 py-2 text-center text-[#FFFFFF] rounded-[20px] ${item.payment_status_text=="پرداخت ناموفق"?" bg-[#F35242]":item.payment_status_text=="پرداخت نشده"?"bg-[#FFCE47]":"bg-[#10CCAE]"}`}>{item.payment_status_text}</span></p>
                                        <p className=' w-11 text-center'>{item.total}</p>
                                        <p className=' w-[68px] text-center'>{item.updated_at}</p>
                                        <p className=' w-16 text-center'>{item.created_at}</p>
                                        <p className=' w-36 text-center'>{item.description.substring(31, item.description.length)}</p>
                                        <p className=' w-20 text-center'>{item.order_code}</p>
                                        <p className=' w-8 text-center'>{index + 1}</p>
                                        <p className=' w-11 text-center'>
                                            <div class="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
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
                <div className='w-full text-left mt-7'>
                    <div className=' inline-block'>
                        <AuthButton textButton={<Fragment><img src='./img/dashboard/financialReports/file_download.svg' className=' ml-3' /> خروجی اکسل</Fragment>} />
                    </div>
                </div>
            </div>
        </div>
    )
}
