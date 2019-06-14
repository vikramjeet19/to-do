import React from 'react';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class List extends React.Component {
    state = {
        todoData: []
    }
    addTodo = () => {
        this.props.history.push('/add')
    }
    edit = () => {
        console.log('edit')
    }
    delete = (key) => {
        let data = [...JSON.parse(localStorage.getItem('UserData'))]
        data.map(id => {
            if (id.title === key) {
                data.splice(id.title, 1);
                localStorage.setItem('UserData', JSON.stringify(data));
                this.setState({ todoData: data })
            }
            return;
        })
    }
    addNew = () => {
        let newTodo = prompt('enter new todo')
        console.log(newTodo);

    }

    render() {
        let userdata = JSON.parse(localStorage.getItem('UserData'));
        return (<>
            <Row style={{ marginLeft: '10px' }}>
                <Col>
                    <FontAwesomeIcon onClick={this.addTodo}
                        style={{ cursor: 'pointer', height: '50px', width: '50px', marginTop: '20px' }}
                        icon={faPlusCircle} />
                </Col>
            </Row>
            <Row style={{ marginLeft: '10px' }}>
                {userdata ? userdata.map(key => (
                    <Col>
                        <Card style={{ width: '18rem', marginTop: '50px' }}>
                            <Card.Header style={{ fontWeight: 'bold' }}>{key.title}
                                <FontAwesomeIcon onClick={() => this.delete(key.title)}
                                    style={{ cursor: 'pointer', marginLeft: '140px' }}
                                    icon={faTrashAlt} />
                                <FontAwesomeIcon onClick={this.addNew}
                                    style={{ cursor: 'pointer', marginLeft: '20px' }}
                                    icon={faPlusCircle} />
                            </Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item >{key.content}
                                    <FontAwesomeIcon onClick={this.edit}
                                        style={{ cursor: 'pointer', marginLeft: '140px' }}
                                        icon={faEdit} />
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>)) : null}
            </Row></>)
    }
}
export default List;
