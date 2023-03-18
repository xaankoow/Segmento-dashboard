import React from 'react'

export default function index() {
  return (
    <div className=' px-5 pb-7'>
        <p className='text-title text-sm text-right'>ترتیب لود شدن صفحات</p>
        <div className='flex justify-between mt-5'>
            {[0,1,2,3,4,5,6].map(item=>(
                <div className='border border-border rounded  h-36 w-[100px] inline-block'>

                </div>
            ))}
        </div>
    </div>
  )
}