import React from 'react'

import ChartCard from '../components/Chart/ChartCard'
import { Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import {
  lineOptions,
  lineLegends,
} from '../utils/demo/chartsData'

function Charts() {
  return (
    <>
      <PageTitle>Таблицы</PageTitle>
      
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Lines">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div>
    </>
  )
}

export default Charts
