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
      dataLoaded: false,
      fullName: "",
      jobTitle: ""
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    getMetrics().then(res => {
      this.setState({
        pieData: res.roles_count,
        tableData: res.jobs,
        metricsData: res.status_count,
        fullName: `${this.props.current_user.first_name} ${this.props.current_user.last_name}`,
        jobTitle: `${this.props.current_user.job_title}`,
        dataLoaded: true,
      })
    })
  }

  render() {
    const { 
      dataLoaded, 
      pieData, 
      tableData, 
      metricsData,
      jobTitle,
      fullName
    } = this.state

    const {
      csrf_token
    } = this.props

    return (
      <div className="dashboard">
        {/* <h1>{fullName}, {jobTitle}</h1> */}
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
                <ApplicationTable csrf_token={ csrf_token } data={ tableData } />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewDash;