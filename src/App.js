import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';




function App() {
  return (
    <div className="registration-page bg-info">
      <div className="m-5">
        <div className="form-box">
          <Container>
            <Row>
              <Col>
                <h1 className="text-info" > User registration</h1>
              </Col>
            </Row>
            <hr/>
            <Row>
            <Col>
              <Form>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your first name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your last name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type="number" placeholder="Enter your phone number" />
                </Form.Group>
                <Form.Group >
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter you email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Company name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your company name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your full address" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your Password" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your confirm Password" />
                </Form.Group><br></br>
                <Button variant="primary" type="submit">
                  Submit
                </Button><br></br>
              </Form>
            </Col>
          </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
