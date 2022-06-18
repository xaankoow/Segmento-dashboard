import React from 'react'

export default function Table({data}) {

return (
<div class="w-[97%] flex flex-col border border-[#D9D9D9] p-0  mt-5 mx-11">

    <div class="min-w-full">
        <div className='flex items-center justify-between bg-[#FCFCFB] w-full px-2'>
            <div className='flex gap-5'>
                <div className="text-sm font-medium text-gray-900 pr-2  text-right text-[#D9D9D9]">
                    انتخاب
                </div>
                <div className="text-sm font-medium text-gray-900 pr-2  text-right">
                    ردیف
                </div>
                <div className="text-sm font-medium text-gray-900 pr-2  text-right">
                    ایده های پیشنهادی
                </div>
            </div>
            <div className='flex gap-4'>
                <div class="text-sm font-medium text-gray-900 pr-2 py-4 text-right">
                    <button className='btn-style'><img src='./img/dashboard/table/bookmark.svg' alt='bookmark'
                            className='ml-3' /> ذخیره پیشنهادات</button>
                </div>
                <div class="text-sm font-medium text-gray-900 pr-2 py-4 text-right">
                    <button className='rounded-[9px] py-[8px] px-5 text-[#488CDA] bg-[#F2F5F7] flex items-center'> <img
                            src='./img/dashboard/table/content_copy.svg' alt='content_copy.svg' className='ml-3' />کپی
                        همه </button>
                </div>
            </div>
        </div>
        <div className="bg-white text-right w-full overflow-y-scroll max-h-[401px]" id='table'>
            {data.map((item,index)=>{
            return <tr key={index} className={index < data.length-1 ?'border-b border-[#D9D9D9] flex gap-5 mx-2 items-center' :"border-0 flex gap-5 mx-2 items-center"}>
                <td class="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                    <input type={"checkbox"} className="checkbox rounded border border-[#D9D9D9] bg-[#FCFCFB] w-[18px] h-[18px]" />
                </td>
                <td class="text-sm text-gray-900 font-light pr-4 py-4 whitespace-nowrap"> {item.row} </td>
                <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">{item.content} </td>
            </tr>
            })}
        </div>
    </div>

</div>
)
}