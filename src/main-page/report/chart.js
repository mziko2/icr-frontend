
import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Broj kandidata',
        data: [[2016, 33], [2017, 58], [2018, 79], [2019, 113], [2020, 221]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div 
      style={{
        width: '350px',
        height: '300px',
        'marginTop': '40px'
      }}
    >
      <Chart data={data} axes={axes} tooltip  />
    </div>
  )
}

export default MyChart;