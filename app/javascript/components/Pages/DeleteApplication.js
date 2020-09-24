import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
//utils
import { getByIdRequest, deleteRequest } from '../utils/ApiCalls'


const DeleteApplication = (props) => {
  const id = props.match.params.id
  const [data, setData] = useState({})
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    getByIdRequest(id)
    .then(resp => setData(resp))
  }, [])

  const handleDelete = () => {
    deleteRequest(id)
    setSuccess(true)
  }

  return (
    <React.Fragment>
      <Container>
        <h1>Are You Sure You Want To Delete?</h1>
        { data &&
        <>
        <Table >
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
            <tr>
              <td>{ data.company }</td>
              <td>{ data.title }</td>
              <td>{ data.status }</td>
              <td>{ data.date_applied }</td>
              <td>{ data.last_follow_up }</td>
            </tr>
          </tbody>
        </Table>
        <Button onClick={ handleDelete }>Yes</Button>
        &nbsp;
        <Button href={ `/dash` }>Cancel</Button>
        </>
        }
        { success &&
          <Redirect to={ `/dash` } />
        }
      </Container>
    </React.Fragment>

  );
};

export default DeleteApplication;
