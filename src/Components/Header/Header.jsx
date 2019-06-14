import React from 'react';
import { Navbar, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {
  const clickedHandler = () => {
    localStorage.clear();
    props.history.push('/')
  }
  const Home = () => {
    props.history.push('/list')
  }
  const userDetail=()=>{
    props.history.push('/user')
  }
  let value = JSON.parse(localStorage.getItem('currentUser'));
  return (<>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand style={{ cursor: 'pointer' }} onClick={Home} >To-Do App</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <FontAwesomeIcon
        onClick={userDetail} 
          style={{ cursor: 'pointer',marginRight:'10px', height:'20px',width:'20px', color:'white'}}
          icon={faUserTie} /><span style={{color:'white',marginRight:'10px'}}>{value.name}</span>
        <Button variant="warning" onClick={clickedHandler}>Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  </>)
}
export default withRouter(Header);