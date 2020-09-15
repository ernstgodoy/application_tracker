import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const NewApplication = () => {
  return (
    <React.Fragment>
      <Container>
        <h1>New Application</h1>
        <Form className="add-new-form">
          <Row>
            <Col md={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="email" placeholder="Enter Company Name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="password" placeholder="Job Title" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Date Applied</Form.Label>
                <Form.Control type="email" placeholder="Date Applied"/>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Last Follow Up Date</Form.Label>
                <Form.Control type="password" placeholder="Last Follow Up" />
                <Form.Text className="text-muted">
                  Enter same value of "Date applied" if you have just applied.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Application Status</Form.Label>
                <Form.Control as="select">
                  <option>Just Applied</option>
                  <option>Assessment</option>
                  <option>Phase 1</option>
                  <option>Phase 2</option>
                  <option>Phase 3</option>
                  <option>Initial Phone Screening</option>
                  <option>Phone Interview</option>
                  <option>Onsite</option>
                  <option>Not Hired</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
            <Button variant="warning" type="submit">
              Submit
            </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default NewApplication;