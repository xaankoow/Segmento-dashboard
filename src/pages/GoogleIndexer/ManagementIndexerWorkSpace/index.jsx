import React, { useState, useEffect, useMemo } from 'react'
import { ImageContainer } from '../../../assets/img/IMG'
import AuthButton from '../../../component/Auth/authButton/AuthButton'
import AuthInput from '../../../component/Auth/authInput/AuthInput'
import HorizontalLineInBeforText from '../../../component/shared/Text/HorizontalLineInBeforText'
import HorizontalBeforeText from '../../../component/shared/Text/HorizontalBeforeText'
import DataTable from '../../../component/shared/DataTable'
import FilterComponent from './filter'

import { defaultBoxStyleIndexer, parentHorizontalLineInBeforTextStyleIndexer } from '../../../variables/indexer'

/* load a icon svg */
import eye_icon from "../../../assets/img/visibility.svg";

export default function AutoSection({ disableSection }) {

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);


    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    const data = [
        {
            id: 1,
            name: 'ایندکسر خودکار',
            address: '۲۰ آدرس',
            date: '1401/02/02',
            time: '1401/02/02',
            state: 'درحال بروزرسانی',
        },
    ]
    const columns = [
        {
            id: 'id',
            selector: "id",
            width: "60px",
            name: 'ردیف',
        },
        {
            id: 'name',
            selector: "name",
            name: 'نوع ایندکسر',
        },
        {
            id: 'address',
            selector: "address",
            name: 'صفحات آدرس',
        },
        {
            id: 'date',
            selector: "date",
            name: 'تاریخ و ساعت ایجاد',
        },
        {
            id: 'time',
            selector: "time",
            name: 'تاریخ و آخرین بروزرسانی',
        },
        {
            id: 'state',
            selector: "state",
            name: 'وضعیت',
            cell: (row) => (<div className='text-white bg-yellow-400 focus:outline-none  font-medium rounded-full text-sm px-2 py-2 text-center ' id={row.id}>{row.state}</div>)
        }
    ]

    return (
        <div className={`mt-10 relative`}>
            {disableSection ? <div className='w-full h-full float-right top-0 bg-sectionDisable opacity-40 absolute bg- z-40'></div> : null}
            <div className='flex justify-between items-center'>
                <div className={parentHorizontalLineInBeforTextStyleIndexer}>
                    <HorizontalLineInBeforText text={"آپلود سایت مپ"} />
                </div>
                <div className=' w-full'>
                    <div className=' relative'>
                        <AuthInput classes={"w-full"} wrapperClass="pl-5" />
                        <span className=' absolute right-3 top-14 text-s'>پسوند مجاز برای آپلود سایت مپ: XML</span>
                    </div>
                </div>
                <button type="button" className="text-[#488CDA] bg-[#F2F5F7]  hover:bg-[#0A65CD]/90  rounded-lg focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-0 mb-0">
                    تایید</button>
            </div>
            <div className='pt-10 pr-4'>
                <hr className='border-border' />
            </div>
            <div className='flex justify-between mt-7'>
                <div className={parentHorizontalLineInBeforTextStyleIndexer}>
                    <div className=' -mb-2'>
                        <HorizontalLineInBeforText text={`تنظیم تناوب ارسال `} />
                    </div>
                    <span className='text-gray pr-4 -mt-1 text-sm'>( ارسال خودکار )</span>
                </div>
                <div className='w-full'>
                    <div className=' border basis-full border-border py-1 px-1 rounded-lg'>
                        <div className='flex justify-around'>
                            <span className=' text-xs py-4 text-gray'>
                                اضافه شده:
                                <span className='text-title pr-2'>
                                    {5} لینک
                                </span>
                            </span>
                            <div className='  border border-border inline-block'></div>
                            <span className=' text-xs py-4'>
                                باقی مانده مجاز روزانه:
                                <span className='text-title pr-2'>
                                    {5} آدرس
                                </span>
                            </span>
                            <div className=' border border-border inline-block'></div>
                            <span className=' text-xs py-4'>
                                باقی مانده اشتراک:
                                <span className='text-title pr-2'>
                                    {5} لینک
                                </span>
                            </span>
                        </div>
                        <hr className='border-border my-1' />
                        <div className='flex justify-around'>
                            <span className=' text-xs py-4 text-gray'>
                                اضافه شده:
                                <span className='text-title pr-2'>
                                    {5} لینک
                                </span>
                            </span>
                            <div className='  border border-border inline-block'></div>
                            <span className=' text-xs py-4'>
                                باقی مانده مجاز روزانه:
                                <span className='text-title pr-2'>
                                    {5} آدرس
                                </span>
                            </span>
                            <div className=' border border-border inline-block'></div>
                            <span className=' text-xs py-4'>
                                باقی مانده اشتراک:
                                <span className='text-title pr-2'>
                                    {5} لینک
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className='mt-5 bg-[#0A65CD]/5 rounded-lg border-2 border-blue-500 border-dashed border-primary bg-secondary py-1 px-4'>
                        <ul className='mt-2'>
                            <li className='flex mt-4 mb-4'>
                                <svg className='ml-1 mt-1' width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="4" fill="#0A65CD" />
                                </svg>
                                <span className='text-sm mr-3  inline-block'>اشتراک الماسی: 100 آدرس در هر درخواست ( قابلیت تنظیم تناوب : هر روز 2 بار، هر روز 1 بار، هر 2 روز یکبار، هر 3 روز یکبار، هر 7 روز یکبار، هر 10 روز یکبار )</span>
                            </li>
                            <li className='flex mb-4'>
                                <svg className='ml-1 mt-1' width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="4" fill="#0A65CD" />
                                </svg>
                                <span className='text-sm mr-3  inline-block'>اشتراک طلایی: 50 آدرس در هر درخواست ( قابلیت تنظیم تناوب : هر روز 1 بار، هر 2 روز یکبار، هر 3 روز یکبار، هر 7 روز یکبار، هر 10 روز یکبار )</span>
                            </li>
                            <li className='flex mb-4'>
                                <svg className='ml-1 mt-1' width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="4" fill="#0A65CD" />
                                </svg>
                                <span className='text-sm mr-3  inline-block'>اشتراک نقره‌ای: 20 آدرس در هر درخواست ( قابلیت تنظیم تناوب : هر 2 روز یکبار، هر 3 روز یکبار، هر 7 روز یکبار، هر 10 روز یکبار )</span>
                            </li>
                            <li className='flex mb-4'>
                                <svg className='ml-1 mt-1' width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="4" fill="#0A65CD" />
                                </svg>
                                <span className='text-sm mr-3  inline-block'>اشتراک برنزی: 10 آدرس در هر درخواست ( قابلیت تنظیم تناوب : هر 3 روز یکبار، هر 7 روز یکبار، هر 10 روز یکبار )</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='pt-10 pr-4'>
                <hr className='border-border' />
            </div>

            <DataTable
                headerComponent={subHeaderComponentMemo}
                cells={columns} pagination rows={data} />

        </div>
    )
}
