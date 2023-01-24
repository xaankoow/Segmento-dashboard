import React from 'react'
import { Bar, Line } from 'react-chartjs-2'

export default function BigChartView({
  chartType="Line",
    options,
    data
}) {

  const label=["","","","","","",""]

  const dataBare = {
    labels:label,
    datasets: [
      {
        label: 'Dataset 2',
        data: [-70,-50,-20,-40,-80,-10,-15],
        backgroundColor: "#F35242",
      },
      {
        label: 'Dataset 3',
        data: [25,65,42,32,44,80,46,55,28,],
        backgroundColor: "#10CCAE",
      },
    ]
  };


  const config = {
    type: 'bar',
    data: dataBare,
    options: {
      plugins: {
        title: {
          display: false,
          text: 'Chart.js Bar Chart - Stacked'
        },legend: {
          display: false,
          position: "top",
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }
  };



  const ChartSelecting=()=>{
    switch (chartType) {
      case "Line":
        return <Line data={data} options={options}/>
        case "Bar":
          return <Bar data={data} options={options}/>
      default:
        break;
    }
  }
  return (
    <>
         <Bar data={dataBare} options={{plugins: {
        title: {
          display: false,
          text: 'Chart.js Bar Chart - Stacked'
        },
        legend: {
          display: false,
          position: "top",
        }
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }}}/>

    {/* {ChartSelecting()} */}
    </>
  )
}
