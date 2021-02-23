import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
//utils
import { getByIdRequest, putRequest } from '../utils/ApiCalls'

const EditApplication = (props) => {
  const id = props.match.params.id
  const { csrf_token } = props
  const [data, setData] = useState({})
  const [cancel, isCanceled] = useState(null)
  const [success, setSuccess] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    getByIdRequest(id)
    .then(data =>  {
      setData(data)
      setIsLoaded(true)
    })
  }

  const onEdit = (e) => {
    e.preventDefault()
    putRequest(id, data, csrf_token)
    .then(res => {
      if (res.ok) {
        setSuccess(true)
      }
    })
  }

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return (
    <React.Fragment>
      <Container>
        <h1>Edit Application</h1>
        { isLoaded && 
          <Form className="add-new-form" onSubmit={ onEdit } >
            <Row>
              <Col md={6}>
                <Form.Group controlId="companyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control name="company" type="text" value={ data.company || "" } onChange={ handleChange } placeholder="Enter Company Name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="jobtitle">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control name="title" type="text" value={ data.title || "" } onChange={ handleChange } placeholder="Job Title" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group controlId="dateApplied">
                  <Form.Label>Date Applied</Form.Label>
                  <Form.Control name="date_applied" type="date" value={ data.date_applied || "" } onChange={ handleChange } placeholder="Date Applied" disabled/>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="lastFollowUp">
                  <Form.Label>Last Follow Up Date</Form.Label>
                  <Form.Control name="last_follow_up" type="date" value={ data.last_follow_up || "" } onChange={ handleChange } placeholder="Last Follow Up" />
                  <Form.Text className="text-muted">
                    Enter same value of "Date applied" if you have just applied.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="applicationStatus">
                  <Form.Label>Application Status</Form.Label>
                  <Form.Control name="status" value={ data.status || "" } onChange={ handleChange } as="select">
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
              <Button variant="warning" onClick={ () => isCanceled(true) }>
                Cancel
              </Button>
              &nbsp;
              <Button variant="warning" type="submit">
                Apply Edits
              </Button>
          </Form>
        }
        { (success || cancel) && 
          <Redirect to='/dashboard' />
        }
      </Container>
    </React.Fragment>
  );
};

export default EditApplication;