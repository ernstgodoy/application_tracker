import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import Tables from './application-table/Tables';
import Line from './line-chart/Line';
import Pie from './pie-chart/Pie';

class NewDash extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Container>
            <div className="section">
              <h1>Submitted Applications</h1>
              <Row>
                <Tables />
              </Row>
            </div>
            <div className="section">
              <h1>Statistics</h1>
              <Row className="charts">
                <Col sm={4} className="chart">
                  <Pie/>
                </Col>
                <Col sm={8} className="chart">
                  <Line/>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default NewDash;