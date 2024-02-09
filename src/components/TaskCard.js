
import { useState } from 'react';
import { Modal } from 'react-bootstrap';


export default function TaskCard({ title, priority, onDelete, onEdit }) {

  const [editedTitle, setEditedTitle] = useState(title);
  const [editedPriority, setEditedPriority] = useState(priority);

  // Function to handle editing the task
  const handleEditTask = () => {
    const updatedTodo = {
      title: editedTitle,
      priority: editedPriority,
    };
    onEdit(updatedTodo);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="task-card">
      <div className="text-content">
        <h6>{title}</h6>
        <h6>{priority}</h6>
      </div>
      <div className="user-cta">
        <button onClick={handleShow}><i className="fa-regular fa-pen-to-square"></i></button>
        <button onClick={onDelete}><i className="fa-solid fa-trash"></i></button>

      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Task</Modal.Title>
        </Modal.Header>


        <div class="mb-4 form-group">
          <label class="mb-2">Todo Title</label>
          <input
            class="form_control"
            required
            name="title"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        </div>

        <div class="mb-4 form-group">
          <select
            className='form_control'
            name="priority"
            value={editedPriority}
            onChange={(e) => setEditedPriority(e.target.value)}

          >
            <option>Open this select menu</option>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>
        </div>





        <Modal.Footer>
          <button
            className='btn__base btn-sm'
            onClick={handleEditTask}
          >
            save
          </button>
        </Modal.Footer>

      </Modal>

    </div>
  )
}