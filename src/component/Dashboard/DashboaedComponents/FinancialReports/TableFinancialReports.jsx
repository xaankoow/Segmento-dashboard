import React from 'react'

export default function TableFinancialReports({title}) {
    return (
        <div>
            <div className='flex gap-6 items-center pr-4 mt-3'>
                <div className='w-[20px] h-[2px] bg-[#001F43] rotate-90 rounded absolute -right-[9px]' />
                <span className='text-lg'>{title}</span>
            </div>
        </div>
    )
}
