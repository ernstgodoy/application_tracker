import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
//utils
import useForm from '../utils/useForm';
import { postRequest, getRequest } from '../utils/ApiCalls'
import { Redirect } from 'react-router-dom';


const NewApplication = (props) => {
  const [success, setSuccess] = useState(null)
  
  const { current_user } = props
  
  const onSubmit = () => {
    postRequest(app)
    setSuccess(true)
  }
  
  const newApp = { user_id: current_user.id, company: '', title: '', status: '', date_applied: '', last_follow_up: '' }
  
  const [app, handleChange, handleSubmit] = useForm(newApp, onSubmit)

  return (
    <React.Fragment>
      <Container>
        <h1>New Application</h1>
        <Form className="add-new-form" onSubmit={ handleSubmit } >
          <Row>
            <Col md={6}>
              <Form.Group controlId="companyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control name="company" type="text" value={ app.company } onChange={ handleChange } placeholder="Enter Company Name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="jobtitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control name="title" type="text" value={ app.title } onChange={ handleChange } placeholder="Job Title" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Group controlId="dateApplied">
                <Form.Label>Date Applied</Form.Label>
                <Form.Control name="date_applied" type="date" value={ app.date_applied } onChange={ handleChange } placeholder="Date Applied"/>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="lastFollowUp">
                <Form.Label>Last Follow Up Date</Form.Label>
                <Form.Control name="last_follow_up" type="date" value={ app.last_follow_up } onChange={ handleChange } placeholder="Last Follow Up" />
                <Form.Text className="text-muted">
                  Enter same value of "Date applied" if you have just applied.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="applicationStatus">
                <Form.Label>Application Status</Form.Label>
                <Form.Control name="status" value={ app.status } onChange={ handleChange } as="select">
                  <option disabled value="">Select</option>
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
        { success && 
          <Redirect to='/dash' />
        }
      </Container>
    </React.Fragment>
  );
};

export default NewApplication;