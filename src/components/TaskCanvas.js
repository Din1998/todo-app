import { Row, Col, Container } from 'react-bootstrap'
import AddTaskModal from './AddTaskModal'
import TaskBoard from './TaskBoard'

import bgImg from '../assets/bg.png'
import { useState, useEffect } from 'react';

export default function TaskCanvas() {



  const [formData, setFormData] = useState({
    title: '',
    priority: '1',
  });

  const [todoList, setTodoList] = useState([]);


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
    setTodoList(updatedTodoList);
    setFormData({
      title: '',
      priority: '1',
    });

    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));

  };




  useEffect(() => {
    const storedTodoList = localStorage.getItem('todoList');
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);







  return (
    <section className='todo-main py-100 bg--img' style={{ backgroundImage: `url(${bgImg})` }}>
      <Container>
        <Row className='justify-content-between'>
          <Col className='d-flex justify-content-start'>
            <h3 className='title'>Board View</h3>
          </Col>
          <Col className='d-flex justify-content-end'>
            <AddTaskModal 
            
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            formData={formData}
            />
          </Col>
        </Row>
        <Row>
          <TaskBoard 
            todoListFromParent={todoList}
          
          />
        </Row>
      </Container>
    </section>
  )
}