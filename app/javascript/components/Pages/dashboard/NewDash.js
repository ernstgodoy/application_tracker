import React, { Component } from 'react';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ApplicationTable from './application-table/ApplicationTable';
import Pie from './pie-chart/Pie';
import ApplicationMetrics from './application-metrics/ApplicationMetrics'
import { getMetrics } from '../../utils/ApiCalls';


class NewDash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pieData: [],
      tableData: [],
      metricsData: [],
      dataLoaded: false
    }
  }

  // componentDidMount() {
  //   this.getData()
  // }

  hi = () => {
    return "hi"
  }

  getData = () => {
    getMetrics().then(res => {
      this.setState({
        pieData: res.roles_count,
        tableData: res.jobs,
        metricsData: res.status_count,
        dataLoaded: true
      })
    })
  }

  render() {
    const { 
      dataLoaded, 
      pieData, 
      tableData, 
      metricsData 
    } = this.state

    return (
      <div className="dashboard">
        {/* <h1>Guy Person, cool boss</h1> */}
        <div className="dashboard-inner">
          <div className="dash-right">
            <div className="right-content">
              <div className="header">
                <h5>Status Metrics</h5>
              </div>
              { dataLoaded && 
                <ApplicationMetrics data={ metricsData} />
              }
            </div>
            <div className="right-content">
              <div className="header">
                <h5>Roles Applied</h5>
              </div>
              { dataLoaded && 
                <Pie data={ pieData } />
              }
            </div>
          </div>
          <div className="dash-left">
            <div className="left-content">
              <div className="header">
                <h5>Current Applications</h5>
                <a href="/new-application"><FontAwesomeIcon icon={faPlusCircle}/></a>
              </div>
              { dataLoaded && 
                <ApplicationTable data={ tableData } />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewDash;