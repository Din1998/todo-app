import { Row, Col, Container } from 'react-bootstrap'
import AddTaskModal from './AddTaskModal'


export default function TaskCanvas() {



  return (
    <section className='py-100'>
      <Container>
        <Row className='justify-content-between'>
          <Col className='d-flex justify-content-start'>
            <h3>Board View</h3>
          </Col>
          <Col className='d-flex justify-content-end'>
            <AddTaskModal />
          </Col>
        </Row>
      </Container>
    </section>
  )
}