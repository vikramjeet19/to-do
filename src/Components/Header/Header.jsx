import React from 'react';
import { Navbar, Button } from 'react-bootstrap'
import {withRouter} from 'react-router-dom'


const Header = (props) => {
 const  clickedHandler = () => {
    localStorage.clear();
    props.history.push('/')
  }
  return (<>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand >To-Do App</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
      <Button  variant="warning" onClick={clickedHandler}>Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  </>)
}
export default withRouter(Header);