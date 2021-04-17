import React, { useState, useEffect } from 'react';
import { Table, Button } from "react-bootstrap"
//icons
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ApplicationTable = (props) => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    setData(props.data)
  }, [])

  return (
    <React.Fragment>
      <Table id="table-test" hover responsive>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Role</th>
            <th>Application Status</th>
            <th>Date Applied</th>
            <th>Last Follow Up</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          { data.map((d, i) => {
            const {
              id,
              company,
              role,
              status,
              date_applied,
              last_follow_up
            } = d
            return(
              <tr id="table-row-test" key={i}>
                <td>{ company }</td>
                <td>{ role }</td>
                <td>{ status }</td>
                <td>{ date_applied }</td>
                <td>{ last_follow_up }</td>
                <td>
                  <Button id="edit-button-test" href={`/edit-application/${id}`} variant="success" size="sm"><FontAwesomeIcon icon={faEdit} size="xs" /></Button>
                  &nbsp;
                  <Button id="delete-button-test" href={ `/delete-application/${id}` } size="sm"><FontAwesomeIcon icon={faTrash} size="xs" /></Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      { data.length === 0 && 
        <div className="no-data">
          No Applications To Track
        </div>
      }
    </React.Fragment>
  );
};

export default ApplicationTable;
