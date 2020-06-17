import React from 'react';
// import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';

export default class ContactMe extends React.Component {
    render(){
        return(
            <div>
            <Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
  <Form.Group controlId="formBasicEmail">
    <Form.Label></Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
</Form>
</div>
        )
    }
}