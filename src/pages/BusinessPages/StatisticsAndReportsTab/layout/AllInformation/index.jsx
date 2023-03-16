import React from 'react'
import CompanyInformation from './CompanyInformation'
export default function index() {
  return (
    <div className='rounded-lg w-full overflow-hidden'>
        <div className='text-title text-sm px-4 py-2 bg-white w-full text-right'>
        سرعت صفحه وبسایت
        </div>
        <div className=' mt-7'>
            <CompanyInformation/>
        </div>
    </div>
  )
}
