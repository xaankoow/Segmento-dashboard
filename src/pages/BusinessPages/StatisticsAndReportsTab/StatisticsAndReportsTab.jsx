import React from 'react'
import TitleButton from './layout/TitleButton'
import AllInformation from './layout/AllInformation'

export default function StatisticsAndReportsTab() {
  return (
    <div>
      <div className=' mt-5'>
      <TitleButton/>
      </div>
      <div className=' mt-4'>
        <AllInformation/>
      </div>
    </div>
  )
}
