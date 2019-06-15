import React from 'react';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class List extends React.Component {
    state = {
        todoData: [],
    }

    addTodo = () => {
        this.props.history.push('/add')
    }
    edit = (Data, i) => {
        this.props.history.push({ pathname: '/add', data: { Data, i: i } })
    }

    delete = (key) => {
        let data = [...JSON.parse(localStorage.getItem('UserData'))]
        data.map((id, index) => {
            if (id.title === key) {
                data.splice(index, 1);
                localStorage.setItem('UserData', JSON.stringify(data));
                this.setState({ todoData: data })
            }
            return (console.log('deleted'));
        })
    }
    addNew = (id) => {

        let todo = prompt('enter data');
        const allTodos = JSON.parse(localStorage.getItem('UserData'));
        const index = allTodos.findIndex(todo => todo.title === id);
        if (index > -1) {
            allTodos[index].content.push(todo);
            localStorage.setItem('UserData', JSON.stringify(allTodos));
            alert("Content added successfully.")
        } else {
            alert("No Todo Exist")
        }
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
                                    style={{ cursor: 'pointer', marginLeft: '100px' }}
                                    icon={faTrashAlt} />
                                <FontAwesomeIcon onClick={() => this.addNew(key.title)}
                                    style={{ cursor: 'pointer', marginLeft: '20px' }}
                                    icon={faPlusCircle} />
                            </Card.Header>
                            <ListGroup variant="flush">
                                {key.content.length >= 1 ? key.content.map((i, index) => (
                                    <ListGroup.Item >{i}
                                        <FontAwesomeIcon onClick={() => this.edit(key, index)}
                                            style={{ cursor: 'pointer', marginLeft: '100px' }}
                                            icon={faEdit} />
                                    </ListGroup.Item>
                                )) :
                                    <ListGroup.Item >{key.content}
                                        <FontAwesomeIcon onClick={() => this.edit(key.title)}
                                            style={{ cursor: 'pointer', marginLeft: '100px' }}
                                            icon={faEdit} />
                                    </ListGroup.Item>}
                            </ListGroup>
                        </Card>
                    </Col>)) : null}
            </Row></>)
    }
}
export default List;
