import React, { Component } from 'react';
import { Highcharts } from 'react-highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
    type: 'pie',
  },

  title: {
    text: null
  },

  credits: {
    enabled: false,
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
      data: [1 ,3, 2, 4, 7, 6, 9]
    }
  ]
}

class Pie extends Component {

  render() {
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    );
  }
}

export default Pie;