import React, { useState, useEffect } from 'react';
import { Table, Container, Button, Form } from "react-bootstrap"
//icons
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//utils
import { getRequest, getRoles } from '../utils/ApiCalls'


const Tables = () => {
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [role, setRole] = useState(null)
  const [roles, setRoles] = useState([])
  
  useEffect(() => {
    getData()
  }, [role])

  const rolesFormat = (arg) => {
    let roles = new Array({value: 'all', view: 'All'})
    arg.map(r => roles.push({value: r.toLowerCase(), view: r }))
    console.log(roles)
    return roles
  }

  const getData = () => {
    let mounted = true
    getRequest(role)
    .then((resp) => {
      if (mounted) {
        setData(resp) 
      }
    })

    getRoles()
    .then(res => {
      setRoles(rolesFormat(res))
      setIsLoaded(true)
    })
    return () => mounted = false 
  }

  const roleFilter = (e) => {
    e.persist()
    setRole(e.target.value)
  }

  return (
    <React.Fragment>
      <Container>
        <Form.Group controlId="role">
          <Form.Control onChange={roleFilter} as="select">
          { roles.map((r, i) => {
            return <option key={i} value={r.value}> {r.view} </option>
          })}
          </Form.Control>
        </Form.Group>
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
            { isLoaded && data.map((d, i) => {
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
                    <Button href={`/edit-application/${id}`} variant="success" size="sm"><FontAwesomeIcon icon={faEdit} size="xs" /></Button>
                    &nbsp;
                    <Button href={ `/delete-application/${id}` } size="sm"><FontAwesomeIcon icon={faTrash} size="xs" /></Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        { isLoaded && (data.length === 0) && 
          <h3>No Applications To Track</h3>
        }
      </Container>
    </React.Fragment>
  );
};

export default Tables;
