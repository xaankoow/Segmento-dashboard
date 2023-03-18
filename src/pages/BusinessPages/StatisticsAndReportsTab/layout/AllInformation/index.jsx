import React from 'react'
import CompanyInformation from './CompanyInformation'
import CompanyDetails from './CompanyDetails'
import SpeedInformation from './SpeedInformation'
import ChartsData from './ChartsData'
import PagesLoading from './PagesLoading'
export default function index() {
  return (
    <div className='rounded-lg w-full border border-border overflow-hidden'>
        <div className='text-title text-sm px-4 py-2  bg-white w-full text-right'>
        سرعت صفحه وبسایت
        </div>
        <div className=' mt-7'>
            <CompanyInformation/>
        </div>
        <div className=' mt-10'>
          <CompanyDetails/>
        </div>
        <div>
          <SpeedInformation/>
        </div>
        <div className=' mt-14'>
        <ChartsData/>
        </div>
        <div className=' mt-14'>
          <PagesLoading/>
        </div>
    </div>
  )
}
