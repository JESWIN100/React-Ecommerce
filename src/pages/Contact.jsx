import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import "./Contact.css";

function Contact() {
  const [contactFormData, setContactFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      fullname: '',
      email: '',
      phone: '',
      message: ''
    };

    if (!contactFormData.fullname.trim()) {
      newErrors.fullname = "Fullname is required";
      valid = false;
    } else if (contactFormData.fullname.length < 3) {
      newErrors.fullname = "Fullname should contain a minimum of 3 letters";
      valid = false;
    }

    if (!contactFormData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(contactFormData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!contactFormData.phone.trim()) {
      newErrors.phone = "Please enter a phone number";
      valid = false;
    } else if (!/^\d{10}$/.test(contactFormData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      valid = false;
    }

    if (!contactFormData.message.trim()) {
      newErrors.message = "Please enter a message";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is submitted", contactFormData);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={6}>
          <div className='form-container shadow bg-white p-4 m-4'>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="fullname">
                <Form.Label>Fullname</Form.Label>
                <Form.Control
                  type="text"
                  name='fullname'
                  placeholder='Please enter fullname'
                  onChange={onChangeHandler}
                  isInvalid={!!errors.fullname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fullname}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name='email'
                  placeholder='Please enter email'
                  onChange={onChangeHandler}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name='phone'
                  placeholder='Please enter phone'
                  onChange={onChangeHandler}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder='Please enter message'
                  onChange={onChangeHandler}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" variant="primary" className='mt-3'>
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
