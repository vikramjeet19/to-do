import React from 'react';
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class List extends React.Component {

    addTodo = () => {
        console.log('hit');
        this.props.history.push('/add')
    }
    render() {

        return (<Container>
            <Row>
                <Col>
                    <FontAwesomeIcon onClick={this.addTodo}
                        style={{ cursor: 'pointer', height: '50px', width: '50px', marginTop: '20px' }}
                         icon={faPlusCircle} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem', marginTop: '50px' }}>
                        <Card.Header>Title</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>

            </Row>

        </Container>)
    }
}
export default List;