import { useState,useEffect } from 'react';
import { Modal} from 'react-bootstrap';

export default function AddTaskModal() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [formData, setFormData] = useState({
    title: '',
    priority: '1',
  });

  const [todoList, setTodoList] = useState([]);

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = () => {
    const newTodo = { ...formData };
    const updatedTodoList = [...todoList, newTodo]; 
    console.log('Updated Todo List:', updatedTodoList);
    setTodoList(updatedTodoList);
  
    setFormData({
      title: '',
      priority: '1',
    });
  
    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
    console.log('Todo List stored in localStorage:', updatedTodoList);
  };
  



useEffect(() => {
  // Retrieve todo list from local storage when component mounts
  const storedTodoList = localStorage.getItem('todoList');
  console.log(storedTodoList);
  if (storedTodoList) {
    setTodoList(JSON.parse(storedTodoList));
  }
}, []);



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


          <div class="mb-4 form-group">
            <label class="mb-2">Todo Title</label>
            <input
              class="form_control"
              required
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div class="mb-4 form-group">
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