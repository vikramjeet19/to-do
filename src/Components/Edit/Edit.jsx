import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './Edit.css'
class Post extends React.Component {
    state = {
        title: '',
        content: [],
        flag: false
    }
    componentDidMount(){
        if (this.props.history.location.data) {
            let i=this.props.history.location.data.i;
            this.setState({
                title: this.props.history.location.data.Data.title,
                content: this.props.history.location.data.Data.content[i],
                flag: true
            })
        }
        return;
    }
    submitHandler = (e) => {
        e.preventDefault();

        let data = [];
        if (this.state.flag === true) {
            data = [...JSON.parse(localStorage.getItem('UserData'))];
        }
        if (this.state.title.length !== 0 && this.state.content.length !== 0) {
            if (JSON.parse(localStorage.getItem('UserData')) !== null ) {              
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
    editHandler = (title) => {
        let data = [...JSON.parse(localStorage.getItem('UserData'))];

        data.map((id,index) => {
            if (id.title === title) {
               data[index].content[this.props.history.location.data.i]=this.state.content;
               localStorage.setItem('UserData', JSON.stringify(data));
                       this.setState({flag:false})
                       this.props.history.push('/list');
            }
        })
    }
     
    changeHandler = (event) => {

        if(event.target.id==='content'){
this.setState({[event.target.id]:[event.target.value]})
        }else{
            this.setState({
                [event.target.id]: event.target.value
            })
        } 
    }
    render() {
        return (
            <Container style={{ marginTop: '50px', width: '80%' }}>
                <Form >
                    <div className="group">
                       {this.state.flag===true? <input type="text" id='title' value={this.state.title}
                            onChange={this.changeHandler}  required disabled/>:
                             <input type="text" id='title' value={this.state.title}
                            onChange={this.changeHandler}  required
                            />}
                        <span className="highlight"></span>
                        <span className="bar"></span>
                    </div>
                    <Form.Text className="text-muted">
                        Add Todo
                    </Form.Text>
                    <Form.Group controlId="content">
                        <Form.Control as="textarea"  value={this.state.content}
                            onChange={this.changeHandler} rows="2" />
                    </Form.Group>
                    {this.state.flag === true ? <Button onClick={() => this.editHandler(this.state.title,this.state.content)} variant="success">Submit</Button> :
                        <Button onClick={this.submitHandler} variant="success">Submit</Button>}

                </Form>
            </Container >);
    }
}
export default withRouter(Post);