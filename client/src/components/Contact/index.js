import React from "react";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const styles = {
    container: {
        marginTop: '65px',
        display: 'flex',
    },
    left: {
        border: '1px solid black',
        overflow: 'hidden',
        textAlign: 'center',
    },
    right: {
        minWidth: '75%',
        marginTop: '60px',
        paddingRight: '50px',
    }
}


const Contact = () => {
    const [response, setResponse] = useState(false);
    const [validated, setValidated] = useState(false);


    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        setResponse(true);
    }

    return (
        <div>
            <Container fluid>
                <Row style={styles.container}>
                    <Col><div style={styles.left}><h1>contact</h1></div></Col>
                    <Col style={styles.right}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="sm-12">
                                <Form.Group as={Col} sm="10" controlId="validationCustom01">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Name"
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        Please provide a valid name.    
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="sm-12">
                                <Form.Group as={Col} sm="10" controlId="validationCustom03">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="sm-12">
                                <Form.Group as={Col} sm="10" controlId="validationCustom04">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="message here"
                                        required />
                                    <Form.Control.Feedback type="invalid">
                                        Please leave a message.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Button type="submit" variant="outline-secondary">Submit form</Button>
                        </Form>
                        <div>
                            {response && <span>Please note, this has not been connected to a backend. :)</span>}
                        </div>


                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;

// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address