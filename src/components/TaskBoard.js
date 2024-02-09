import { Row, Col, Container } from 'react-bootstrap'
import TaskCard from './TaskCard';
import { useState, useEffect } from 'react';



export default function TaskBoard() {


  const [todoList, setTodoList] = useState([]);

  // Function to delete a todo item
  const handleDeleteTodo = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
  };

  // Function to edit a todo item
  const handleEditTodo = (index, updatedTodo) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index] = updatedTodo;
    setTodoList(updatedTodoList);
    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
  };



  useEffect(() => {
    console.log('Fetching data from localStorage...');
    const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
    if (storedTodoList) {
      console.log('Stored Todo List:', storedTodoList);
      setTodoList(storedTodoList);
    }
  }, []);



  return (
    <section>
      <Container>
        <Row>
          <Col lg={4}>
            <h6>On Going</h6>
            {todoList.map((data, index) => {
              console.log(data);
              return (
                <div key={index}>
                  <TaskCard
                    title={data.title}
                    priority={data.priority}
                    onDelete={() => handleDeleteTodo(index)}
                    onEdit={(updatedTodo) => handleEditTodo(index, updatedTodo)}
                  />
                </div>
              )
            })}

          </Col>
          <Col lg={4}>
            <h6>In Progress</h6>
          </Col>
          <Col lg={4}>
            <h6>Complete</h6>

          </Col>
        </Row>
      </Container>
    </section>
  )
}