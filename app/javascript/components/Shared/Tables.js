import React from 'react';
import { Table } from "react-bootstrap"

const Tables = (props) => {
  const data = props.dummyData.map(d => d)
  return (
    <div className="container">
      <React.Fragment>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Job Title</th>
              <th>Application Status</th>
              <th>Date Applied</th>
              <th>Last Follow Up</th>
            </tr>
          </thead>
          <tbody>
            { data && data.map(d => {
              const {
                company,
                title,
                status,
                date_applied,
                last_follow_up
              } = d
              return(
                <tr>
                  <td>{ company } </td>
                  <td>{ title }</td>
                  <td>{ status }</td>
                  <td>{ date_applied }</td>
                  <td>{ last_follow_up }</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </React.Fragment>
    </div>
  );
};

export default Tables;