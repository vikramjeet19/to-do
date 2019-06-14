import React from 'react';
import { Navbar, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
class Header extends React.Component {

  LoginHandler = () => {
    this.props.history.push('/')
  }
  LogoutHandler = () => {
    localStorage.clear();
    this.props.history.push('/')
  }
  Home = () => {
    this.props.history.push('/list')
  }
  userDetail = () => {
    let value = JSON.parse(localStorage.getItem('currentUser'));
    if (value === null) {
      this.props.history.push('/')
    }
    else { this.props.history.push('/user') }
  }
  render() {
    let value = JSON.parse(localStorage.getItem('currentUser'));
    return (<>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ cursor: 'pointer' }} onClick={this.Home} >To-Do App</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <FontAwesomeIcon
            onClick={this.userDetail}
            style={{ cursor: 'pointer', marginRight: '10px', height: '20px', width: '20px', color: 'white' }}
            icon={faUserTie} />
          {value !== null ? <Button variant="warning" onClick={this.LogoutHandler}>Logout</Button> :
            <Button variant="warning" onClick={this.LoginHandler}>Login</Button>}
        </Navbar.Collapse>
      </Navbar>
    </>)
  }
}
export default withRouter(Header);