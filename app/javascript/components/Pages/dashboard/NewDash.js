import React, { Component } from 'react';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ApplicationTable from './application-table/ApplicationTable';
import Pie from './pie-chart/Pie';
import ApplicationMetrics from './application-metrics/ApplicationMetrics'
import DeleteModal from './delete-modal/DeleteModal'

import { getDashboardData } from '../../utils/ApiCalls';


class NewDash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pieData: [],
      tableData: [],
      metricsData: [],
      dataLoaded: false,
      fullName: `${this.props.current_user.first_name} ${this.props.current_user.last_name}`,
      jobTitle: `${this.props.current_user.job_title}`,
      current_page: undefined,
      total_pages: undefined,
      modalShow: false,
      tempId: undefined,
    }
  }

  componentDidMount() {
    this.getData(this.state.current_page)
  }

  getData = (page) => {
    getDashboardData(page).then(res => {
      const { jobs, roles_count, status_count } = res
      this.setState({
        pieData: roles_count,
        tableData: jobs.jobs,
        metricsData: status_count,
        current_page: jobs.current_page,
        total_pages: jobs.total_pages
      })

      if (!this.state.dataLoaded) {
        this.setState({
          dataLoaded: true
        })
      }
    })
  }

  paginate = (page) => {
    this.setState({
      current_page: page
    })
    
    this.getData(page)
  }

  openModal = (id) => {
    this.setState({
      modalShow: true,
      tempId: id
    })
  }

  onDelete = () => {
    this.setState({
      modalShow: false,
      tempId: undefined,
    })
    this.getData()
  }

  render() {
    const { 
      dataLoaded, 
      pieData, 
      tableData, 
      metricsData,
      tempId,
      modalShow,
      current_page,
      total_pages,
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
                <ApplicationTable 
                  openModal={ (id) => this.openModal(id) } 
                  data={ tableData } 
                  current_page={ current_page }
                  total_pages={ total_pages }
                  paginate={(page) => this.paginate(page)}
                />
              }
            </div>
          </div>
          <DeleteModal 
            tempId={ tempId } 
            token={ csrf_token } 
            show={ modalShow } 
            closeModal={ () => this.setState({ modalShow: false }) } 
            onDelete={ () => this.onDelete() } 
          />
        </div>
      </div>
    );
  }
}

export default NewDash;