import React from 'react'
import TechnicalAnalysis from './layout/TechnicalAnalysis'
import ChartKeyWordRank from './layout/ChartKeywordRank'

export default function StatisticsAndReportsTab() {
  return (
    <div>
      <TechnicalAnalysis/>
      <div className=' mt-7'>
      <ChartKeyWordRank/>
      </div>
    </div>
  )
}
