import React, { useEffect, useState } from 'react';
import { Highcharts } from 'react-highcharts'
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';
import HighchartsReact from 'highcharts-react-official'
NoDataToDisplay(Highcharts)

const Pie = (props) => {
  const [options, setOptions] = useState(new Object())

  useEffect(() => {
    let data = props.data
    chartOptions(data)
  }, [])

  const chartOptions = (data) => {
    return setOptions({
      chart: {
        type: 'pie',
      },
    
      title: {
        text: null
      },
    
      credits: {
        enabled: false,
      },

      tooltip: {
        formatter: function() {
          return `<div> ${this.key}: <b>${this.y}</b> </div>`
        }
      },
    
      plotOptions: {
        pie: {
          showInLegend: true,
          dataLabels: {
            enabled: false,
          }
        }
      },

      series: [
        {
          data: seriesData(data)
        }
      ]
    })
  }

  const seriesData = (data) => {
    let arr = new Array()
    Object.keys(data).map(k => {
      arr.push({ name: k, y: data[k]})
    })
    return arr
  }

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}

export default Pie;