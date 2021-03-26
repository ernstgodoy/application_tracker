import React, { Component } from 'react';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './dashboard.scss'

import Tables from './application-table/Tables';
import Pie from './pie-chart/Pie';
import ApplicationMetrics from './application-metrics/ApplicationMetrics'


class NewDash extends Component {
  render() {
    return (
      <div className="dashboard-inner">
        <div className="dash-right">
          <div className="right-content">
            <h4>Status Metrics</h4>
            <ApplicationMetrics />
          </div>
          <div className="right-content">
            <h4>Roles Applied</h4>
            <Pie />
          </div>
        </div>
        <div className="dash-left">
          <div className="left-content">
            <h1>Guy Person, cool boss</h1>
          </div>
          <div className="left-content">
            <div className="header">
            <h4>Current Applications</h4>
              <a href="/new-application"><FontAwesomeIcon icon={faPlusCircle}/></a>
            </div>
            <Tables />
          </div>
        </div>
      </div>
    );
  }
}

export default NewDash;