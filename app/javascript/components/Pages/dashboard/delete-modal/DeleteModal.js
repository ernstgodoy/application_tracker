import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import { deleteRequest } from '../../../utils/ApiCalls';


const DeleteModal = (props) => {
  const [success, setSuccess] = useState(false)
  const { tempId, onDelete, token, closeModal, show } = props

  const handleDelete = () => {
    deleteRequest(tempId, token)
    .then(res => {
      if (res.ok) {
        setSuccess(true)
        setTimeout(() => {
          onDelete()
        }, 1000)
      }
    })
  }

  return (
    <Modal
      show={ show }
      size="sm"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
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
            Application successfully deleted.
          </p>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button id="cancel-test" variant="warning" onClick={ () => closeModal() }>Cancel</Button>
        <Button id="delete-test" onClick={ () => handleDelete() }>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;