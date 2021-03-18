import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import Tables from './application-table/Tables';
import Line from './line-chart/Line';
import Pie from './pie-chart/Pie';

class NewDash extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="chart-container">
            <Col className="chart" sm={12}>
              <Tables />
            </Col>
          </Row>
          <Row className="chart-container">
            <Col className="chart" md={3}>
              <Pie />
            </Col>
            <Col className="chart ml-5" md={8}>
              <Line />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default NewDash;