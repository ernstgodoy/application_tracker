import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
//shared
import Tables from "../Shared/Tables"
import getRequest from "../Shared/ApiCalls"

const Dashboard = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getRequest(setData)
  }, [])
  return (
    <React.Fragment>
      <Container>
        <h1>Current Pending Applications</h1>
        <Tables data={ data } />
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;