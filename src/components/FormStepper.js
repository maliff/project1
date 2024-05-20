import React, { useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

const FormStepper = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      // Define your form fields here
      // Example:
      firstName: '',
      lastName: '',
      email: '',
    });
  
    const handleNext = () => {
      setStep(step + 1);
    };
  
    const handlePrev = () => {
      setStep(step - 1);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const renderStep = () => {
      switch (step) {
        case 1:
          return (
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Form.Group>
          );
        case 2:
          return (
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Form.Group>
          );
        case 3:
          return (
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
          );
        default:
          return null;
      }
    };
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            {renderStep()}
            <div className="mt-3">
              {step > 1 && (
                <Button variant="secondary" onClick={handlePrev}>
                  Previous
                </Button>
              )}
              {step < 3 && (
                <Button variant="primary" onClick={handleNext} className="ml-2">
                  Next
                </Button>
              )}
              {step === 3 && (
                <Button variant="success" className="ml-2">
                  Submit
                </Button>
              )}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormStepper