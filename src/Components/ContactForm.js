import React, { Component } from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';
import ComponentsNavbar from './ComponentsNavbar';
import Footer from './Footer';
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStyle: {
        marginTop: " 1em",
        marginBottom: "2em",
        textAlign: "center",

      },

    }
  }

  render() {
    return (
      <div>
        <ComponentsNavbar />

        <div className="container topSpace contactContainer " >
          <h1 className="contactTitle">Contact Form</h1>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName" >
              <Form.Label className="contactLabel" column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control required type="text" className="contactInput mx-auto" placeholder="Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label className="contactLabel" column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control required type="email" className="contactInput mx-auto" placeholder="Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhoneNumber">
              <Form.Label className="contactLabel" column sm="2">
                Phone Number
              </Form.Label>
              <Col sm="10">
                <Form.Control required type="number" className="contactInput mx-auto" placeholder="Phone Number" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="floatingTextarea">
              <Form.Label className="contactLabel" column sm="2">Message</Form.Label>
              <Col sm="10">
                <Form.Control required as="textarea" className="contactInput mx-auto" placeholder="Message" rows={3} />
              </Col>
            </Form.Group>
            <div style={this.state.buttonStyle}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <Footer position="sticky" bottom="0px" left="0px" right="0px" />
      </div>
    );
  }
}
export default ContactForm;