import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
//utils
import useForm from '../../utils/useForm';
import { postRequest } from '../../utils/ApiCalls'
import { Redirect } from 'react-router-dom';


const NewApplication = (props) => {
  const [success, setSuccess] = useState(null)
  const { 
    current_user,
    csrf_token
  } = props
  const newApp = { user_id: current_user.id, company: '', role: '', status: '', date_applied: '', last_follow_up: '' }
  
  const onSubmit = () => {
    postRequest(app, csrf_token)
      .then(res => {
        if (res.ok) {
          setSuccess(true)
        }
      })
  }
  
  const [app, handleChange, handleSubmit] = useForm(newApp, onSubmit)

  return (
    <React.Fragment>
      <Container>
        <div className="header">
          <h1>New Application</h1>
        </div>
        <Form className="add-new-form" onSubmit={ handleSubmit } >
          <Row>
            <Col md={6}>
              <Form.Group controlId="companyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control name="company" type="text" value={ app.company } onChange={ handleChange } placeholder="Enter Company Name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control name="role" type="text" value={ app.role } onChange={ handleChange } placeholder="Role" />
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
                  <option value="initial submission">Initial Submission</option>
                  <option value="phone screen">Phone Screen</option>
                  <option value="take home project">Take Home Project</option>
                  <option value="onsite">Onsite</option>
                  <option value="offer">Offer</option>
                  <option value="not hired">Not Hired</option>
                  <option value="hired">Hired</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
            <Button variant="warning" type="submit">
              Submit
            </Button>
        </Form>
        { success && 
          <Redirect to='/dashboard' />
        }
      </Container>
    </React.Fragment>
  );
};

export default NewApplication;