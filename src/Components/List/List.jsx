import React from 'react';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class List extends React.Component {

    addTodo = () => {
        this.props.history.push('/add')
    }
    edit=()=>{
        console.log('edit')
    }

    delete=()=>{
        console.log('delete')
    }

    addNew=()=>{
        console.log('addNew')
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
                                <FontAwesomeIcon onClick={this.edit} style={{ cursor: 'pointer', marginLeft: '80px' }} icon={faEdit} />
                                <FontAwesomeIcon onClick={this.delete} style={{ cursor: 'pointer', marginLeft: '20px' }} icon={faTrashAlt} />
                                <FontAwesomeIcon onClick={this.addNew} style={{ cursor: 'pointer', marginLeft: '20px' }} icon={faPlusCircle} />
                            </Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item >{key.content}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                      
                </Col>  )) : null}
            </Row></>)
    }
}
export default List;
