import React from 'react';
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap'

const Navigation = (props) => {
  const { 
    logged_in, 
    sign_in_route, 
    sign_out_route 
  } = props
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Application Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/dash">Home</Nav.Link>
            <Nav.Link href="/new">Track New Applicaon</Nav.Link>
          </Nav>
          { logged_in &&
            <Button href={ sign_out_route } variant="warning">
              Sign out 
            </Button>
          }
          { !logged_in &&
            <Button href={ sign_in_route } variant="warning">
              Sign In
            </Button>
          }
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;