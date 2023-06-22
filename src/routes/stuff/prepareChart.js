import React from 'react';
import { Pie } from 'react-chartjs-2';

export const prepareChartData = (labels, data) => {
  return {
    labels: labels,
    datasets: [
      {
        label: 'gram   cukru',
        data: data,
        backgroundColor: [
          'rgba(255, 206, 86, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(255, 159, 64, 0.4)',
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
}

export const splitData = (data) => {
  let productsNames = [], productsSugar = []

  data.forEach(item => {
    productsNames.push(item.name)
    productsSugar.push(parseFloat(item.sugar))
  })
  return [productsNames, productsSugar]
}

export function DrawChart({ chartData }) {
  return (
    <>
      <div className="chart-container">
        <h2 className="text-center">Pa ile cukru!</h2>
        <Pie data={chartData}/>
      </div>
    </>
  )
}