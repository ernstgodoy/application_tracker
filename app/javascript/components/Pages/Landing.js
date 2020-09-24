import React from 'react';
import { Container, Image, Row, Col, Button } from 'react-bootstrap';

const img = require('../../../assets/images/jumbo-img.jpg')

const Landing = (props) => {
  const {
    logged_in,
    sign_up_route
  } = props
  return (
    <React.Fragment>
      <Container>
        <h1>Simplify Tracking Your Job Search</h1>
        <Row className="landing">
          <Col md={ 6 } className="landing-content">
            <Image src={ img } fluid/>
          </Col>
          <Col md={ 6 } className="landing-content">
            <p> Do you find it hard to keep track of your job applications?<br/> Cant remember if you have already applied to that company?<br/> Cant remember the last follow up or the status of your application?<br/> Is keeping track of your job search on a journal or on an excel sheet unorganized?<br/> Sign up for AppTrack to facilitate tracking your job search.</p>
            { !logged_in && 
              <Button href={ sign_up_route } variant="warning">Sign Up</Button>
            }
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Landing;