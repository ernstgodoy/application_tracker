import React from 'react';
//shared
import Tables from "../Shared/Tables"
import dummyData from "../Shared/dummy"

const Dashboard = () => {
  return (
    <div className="container">
      <React.Fragment>
        <h1>Dashboard</h1>
        <Tables dummyData= { dummyData } />
      </React.Fragment>
    </div>
  );
};

export default Dashboard;