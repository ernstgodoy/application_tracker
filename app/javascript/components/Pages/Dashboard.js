import React from 'react';
//shared
import Tables from "../Shared/Tables"
import dummyData from "../Shared/dummy"
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <React.Fragment>
      <Container>
        <h1>Current Pending Applications</h1>
        <Tables dummyData= { dummyData } />
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;