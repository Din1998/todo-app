import { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';

export default function AddTaskModal() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <button
        className='btn__base'

        onClick={handleShow}
      >
        + Create Task
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Task</Modal.Title>
        </Modal.Header>
        <form >

          <div class="mb-4 form-group">
            <label class="mb-2">Todo Title</label>
            <input
              class="form_control"
              required=""
              name="username"
            />
          </div>

          <div class="mb-4 form-group">
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>

        </form>

        <Modal.Footer>
          <button
            className='btn__base btn-sm'
            onClick={handleClose}>
            Save
          </button>
        </Modal.Footer>

      </Modal>

    </>
  )
}