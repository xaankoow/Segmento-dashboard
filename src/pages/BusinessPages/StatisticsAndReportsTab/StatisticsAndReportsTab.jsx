import React from 'react'
import TechnicalAnalysis from './layout/TechnicalAnalysis'
import ChartKeyWordRank from './layout/ChartKeywordRank'
import FilterTabel from './layout/FIlterTabel'

export default function StatisticsAndReportsTab() {
  return (
    <div className="px-7">
      <TechnicalAnalysis/>
      <div className=' mt-7 py-7 px-3 border border-border rounded-lg shadow-[0px_4px_8px_0px_rgb(0,0,0,0.14)]'>
        <FilterTabel/>
      </div>
      <div className=' mt-7'>
      <ChartKeyWordRank/>
      </div>
    </div>
  )
}
