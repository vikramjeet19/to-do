import React from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }
    componentDidMount() {
        const data = [
            { username: 'vicky1singh9@gmail.com', password: 'vicky@@19', name: 'Vicky' },
            { username: 'singh_vicky83@yahoo.com', password: 'vicky@@19', name: 'Gagan' },
            { username: 'vicky@gmail.com', password: 'vicky@@19', name: 'Rohit' }]
        localStorage.setItem('data', JSON.stringify(data))
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault();
        let value = JSON.parse(localStorage.getItem('data'));
        for (let i = 0; i < value.length; i++) {
            if (value[i].username === this.state.email && value[i].password === this.state.password) {
                return this.props.history.push('/list');
            }
        }
        return alert('error')
    }
    render() {
        return (<div className='block'>
            <form >
                <label style={{position: 'static'}}>Email </label>
                <input className='a' type="text" id='email' placeholder='Enter email id'
                    onChange={this.changeHandler} />
                <label style={{position: 'static'}}>Password </label>
                <input className='a' type="password" id='password' placeholder='Password'
                    onChange={this.changeHandler} />
                <Button onClick={this.submitHandler} style={{ margin: '20px', color: '#ccc' }}
                    variant="outline-info">Login</Button>
            </form>
        </div>)
    }
}

export default Login;
