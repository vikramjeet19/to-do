import React from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault();
        if (this.props.username === this.state.email && this.props.password === this.state.password){
            let userdetails=this.state;
            localStorage.setItem('data',JSON.stringify(userdetails))
            this.props.history.push('/table')
        }
    else {alert('wrong username and password')}

    }
    render() {
        return (<div className='block'>
            <form >
                <label>Email </label>
                <input className='a' type="text" id='email' placeholder='Enter email id'
                    onChange={this.changeHandler} />
                <label>Password </label>
                <input className='a' type="password" id='password' placeholder='Password'
                    onChange={this.changeHandler} />
                <Button onClick={this.submitHandler} style={{ margin: '20px', color: '#ccc' }}
                    variant="outline-info">Login</Button>
            </form>
        </div>)
    }
}

export default Login;
