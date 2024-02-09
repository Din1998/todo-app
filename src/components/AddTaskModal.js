import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

export default function AddTaskModal({handleInputChange,handleSubmit,formData}) {

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

        <div className='todo-form'>
          <div className="mb-4 form-group">
            <label class="mb-2">Todo Title</label>
            <input
              class="form_control"
              required
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4 form-group">
            <select
              className='form_control'
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}

            >
              <option>Open this select menu</option>
              <option value="1">High</option>
              <option value="2">Medium</option>
              <option value="3">Low</option>
            </select>
          </div>
        </div>
        <Modal.Footer>
          <button
            className='btn__base btn-sm'
            onClick={handleSubmit}>
            save
          </button>
        </Modal.Footer>
      </Modal>

    </>
  )
}