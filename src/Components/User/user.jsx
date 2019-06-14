import React from 'react';
import { Container ,Table} from 'react-bootstrap';
const user = () => {

    let value = JSON.parse(localStorage.getItem('currentUser'));
    return (<Container>
        
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th> Name</th>
      <th>Email</th>
      <th>Password</th>
    </tr>
  </thead>
  <tbody>
      { <tr>
      
      <td>{value.name}</td>
      <td>{value.username}</td>
      <td>{value.password}</td>
    </tr>}
  
   
  </tbody>
</Table>
      
    </Container>)
}
export default user;