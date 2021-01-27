import React from 'react';
import { Container, Image, Row, Col, Button } from 'react-bootstrap';
import svg from '../../../assets/images/working.svg'

const Landing = (props) => {
  const {
    logged_in,
    sign_up_route
  } = props
  return (
    <React.Fragment>
      <div className="landing-page">
        <Container className="landing-inner">
          <Row className="landing-content">
            <Col sm={6}>
              <Image src={svg} fluid/>
            </Col>
            <Col sm={6} >
              <h1> Simplify your job search.</h1>
              <h5>Ditch the excel sheets and create your free account to begin tracking your job applications.</h5>
              {!logged_in && 
                <Button href={ sign_up_route } variant="warning">Sign Up</Button>
              }
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Landing;