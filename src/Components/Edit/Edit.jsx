import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './Edit.css'
class Post extends React.Component {
    state = {
        title: '',
        content: []
    }
    submitHandler = (e) => {
        e.preventDefault();
        let data = [];
        if (this.state.title.length !== 0 && this.state.content.length !== 0) {
            console.log(this.state.content.length )
            if (JSON.parse(localStorage.getItem('UserData')) !== null) {
                data = [...JSON.parse(localStorage.getItem('UserData'))]
                data.push(this.state);
                localStorage.setItem('UserData', JSON.stringify(data));
                this.props.history.push('/list');
            }
            else {
                data.push(this.state);
                localStorage.setItem('UserData', JSON.stringify(data));
                this.props.history.push('/list');
            }

        } else {
            alert('enter data')
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
   
    render() {

        return (
            <Container style={{ marginTop: '50px', width: '80%' }}>
                <Form >
                    <div className="group">
                        <input type="text" onChange={this.changeHandler} id='title' required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Title</label>
                    </div>
                    <Form.Text  className="text-muted">
                        Add Todo
                    </Form.Text>
                    <Form.Group controlId="content">
                        <Form.Control as="textarea" onChange={this.changeHandler} rows="8" />
                    </Form.Group>
                    <Button onClick={this.submitHandler} variant="success">Submit</Button>
                </Form>
            </Container >);
    }
}
export default withRouter(Post);