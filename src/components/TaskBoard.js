import { Row, Col, Container } from 'react-bootstrap';
import TaskCard from './TaskCard';
import { useState, useEffect } from 'react';

export default function TaskBoard({ todoListFromParent }) {
  const [todoList, setTodoList] = useState([]);

  const handleDeleteTodo = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
  };

  const handleEditTodo = (index, updatedTodo) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index] = updatedTodo;
    setTodoList(updatedTodoList);
    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
  };

  useEffect(() => {
    // Set todoList when todoListFromParent changes
    setTodoList(todoListFromParent);
  }, [todoListFromParent]);

  useEffect(() => {
    // Load todoList from localStorage on component mount
    const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);



  return (
    <section>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={6}>
            {todoList.length === 0 ? (
              <h6 className='title'>No Task Available</h6>
            ) : (
              <h6 className='title'>All Task</h6>
            )}
            {todoList.map((data, index) => {
              return (
                <div key={index}>
                  {data && ( // Add a conditional check to ensure data exists
                    <TaskCard
                      title={data.title}
                      priority={data.priority}
                      onDelete={() => handleDeleteTodo(index)}
                      onEdit={(updatedTodo) => handleEditTodo(index, updatedTodo)}
                    />
                  )}
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
