import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllFinancialReports } from '../../../Redux/Action/financialReports';
export default function TableFinancialReports({ title }) {
    // const dispatch=us
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllFinancialReports())
    }, [])

    const {allFinancialData} = useSelector(state=>state.financialState)
    
    return (
        <div>
            <div>
                <div className='flex gap-6 items-center pr-4 mt-3'>
                    <div className='w-[20px] h-[2px] bg-[#001F43] rotate-90 rounded absolute -right-[9px]' />
                    <span className='text-lg'>{title}</span>
                </div>
            </div>
            <div className=' w-[1038px] m-auto'>
                <div className=' w-full  rounded-lg border border-[#D9D9D9] h-[672px] overflow-hidden'>
                    <div className=' my-4 h-full w-full'>
                        <div className=' overflow-hidden h-full'>

                        <div className=' text-sm font-normal flex justify-around flex-row-reverse'>
                            <p className=' w-28 text-center'>عملیات</p>
                            <p className=' w-24 text-center'>وضعیت پرداخت</p>
                            <p className=' w-11 text-center'>مبلغ</p>
                            <p className=' w-[68px] text-center'>تاریخ انقضا</p>
                            <p className=' w-16 text-center'>تاریخ خرید</p>
                            <p className=' w-36 text-center'>نوع اشتراک</p>
                            <p className=' w-20 text-center'>شماره فاکتور</p>
                            <p className=' w-8 text-center'>ردیف</p>
                            <p className=' w-11 text-center'>انتخاب</p>
                        </div>
                        <div className='overflow-scroll h-full text-xs font-normal'>
                        {allFinancialData.map((item,index)=>(
                            <div className={`w-full h-16 border-b border-[#0000000D] text-xs font-normal flex justify-around flex-row-reverse items-center`}>
                                <p className=' w-28 text-center'>{item.type_text}</p>
                                <p className=' w-24 text-center'>{item.payment_status_text}</p>
                                <p className=' w-11 text-center'>{item.total}</p>
                                <p className=' w-[68px] text-center'>{item.updated_at}</p>
                                <p className=' w-16 text-center'>{item.created_at}</p>
                                <p className=' w-36 text-center'>نوع اشتراک</p>
                                <p className=' w-20 text-center'>شماره فاکتور</p>
                                <p className=' w-8 text-center'>ردیف</p>
                                <p className=' w-11 text-center'>انتخاب</p>
                            </div>
                        ))}
                           
                        </div>
                    </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
