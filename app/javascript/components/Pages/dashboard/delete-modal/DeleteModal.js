import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import { deleteRequest } from '../../../utils/ApiCalls';


const DeleteModal = (props) => {
  const [success, setSuccess] = useState(false)
  const { id, onHide, token } = props

  const handleDelete = () => {
    deleteRequest(id, token)
    .then(res => {
      if (res.ok) {
        setSuccess(true)
        setTimeout(() => {
          onHide()
        }, 1000)
      }
    })
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Application
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        { !success &&
          <p>
            Are you sure you want to delete? 
          </p>
        }
        { success &&
          <p>
            Application Successfully deleted.
          </p>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={ onHide }>Cancel</Button>
        <Button onClick={ () => handleDelete() }>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;