import React from 'react';
import { Table, Container, Button } from "react-bootstrap"
//icons
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tables = (props) => {
  const data = props.data.map(d => d)

  return (
    <React.Fragment>
      <Container>
        <Table hover responsive>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Job Title</th>
              <th>Application Status</th>
              <th>Date Applied</th>
              <th>Last Follow Up</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            { data && data.map((d, i) => {
              const {
                id,
                company,
                title,
                status,
                date_applied,
                last_follow_up
              } = d
              return(
                <tr key={i}>
                  <td>{ company }</td>
                  <td>{ title }</td>
                  <td>{ status }</td>
                  <td>{ date_applied }</td>
                  <td>{ last_follow_up }</td>
                  <td>
                    <Button href={`/edit/${id}`} variant="success" size="sm"><FontAwesomeIcon icon={faEdit} size="xs" /></Button>
                    &nbsp;
                    <Button href={ `/delete/${id}` } size="sm"><FontAwesomeIcon icon={faTrash} size="xs" /></Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
};

export default Tables;
