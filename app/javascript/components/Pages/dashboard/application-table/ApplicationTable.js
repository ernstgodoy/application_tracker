import React from 'react';
import { Table, Button, Pagination } from "react-bootstrap"
//icons
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./application-table.scss"

const ApplicationTable = (props) => {

  const { 
    data, 
    openModal, 
    current_page, 
    total_pages,
    paginate
  } = props

  const paginationDisable = (dir) => {
    switch (dir) {
      case "prev":
        return current_page === 1 ? true : false
        break;
      case "next":
        return current_page === total_pages ? true : false
        break;
    }
  }

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
                  <Button id="edit-button-test" href={`/edit-application/${id}`} variant="success" size="sm"><FontAwesomeIcon icon={ faEdit } size="xs" /></Button>
                  &nbsp;
                  <Button id="delete-button-test" onClick={ () => openModal(id) } size="sm"><FontAwesomeIcon icon={ faTrash } size="xs" /></Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Pagination className="paginator">
        <div className="pages">
          Page: { current_page } of { total_pages }
        </div>
        <Pagination.Prev onClick={ () => paginate(current_page - 1) } disabled={ paginationDisable("prev") } />
        <Pagination.Next onClick={ () => paginate(current_page + 1) } disabled={ paginationDisable("next") } />
      </Pagination>
      { data.length === 0 && 
        <div className="no-data">
          No Applications To Track
        </div>
      }
    </React.Fragment>
  );
};

export default ApplicationTable;
