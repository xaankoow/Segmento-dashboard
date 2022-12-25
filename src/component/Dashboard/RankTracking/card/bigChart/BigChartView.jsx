import React from 'react'
import { Line } from 'react-chartjs-2'

export default function BigChartView({
    options,
    data
}) {
  // debugger
  return <Line options={options} data={data} />
}
