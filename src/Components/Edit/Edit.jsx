import React from 'react';
import { Container,Form } from 'react-bootstrap';
class Edit extends React.Component {
    render() {
        return (<Container >
            <Form style={{marginTop:'20px'}}>
            <Form.Control size="lg" type="text" placeholder="Enter Title" />
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Add todo</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form>
        </Container>)
    }
}
export default Edit;