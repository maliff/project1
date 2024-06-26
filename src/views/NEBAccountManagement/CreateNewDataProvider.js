import React from 'react';
import { Card, Form, Row, Col, Button } from "react-bootstrap";

import LteContentHeader from "../../components/LteContentHeader";
import LteContent from "../../components/LteContent";

function CreateNewDataProvider() {
  return (
    <>
    <LteContentHeader title="Create New Data Provider" />;
    <LteContent>
    <Card>
        <Card.Header className="d-flex flex-column align-items-start">
          <div className="d-flex justify-content-between w-100 mb-3">
            <Card.Title as="h2" className="mb-0">
              <b>Create Profile</b>
              <p>Fill up all the details*</p>
            </Card.Title>
          </div>
        </Card.Header>
        <Card.Body>
          {/* Details */}
          <Form className="mt-3">
            <b>Details</b>
            <Form.Group as={Row} className="mt-3">
              <Col sm={3}>
                <Form.Label
                  htmlFor="formSelect1"
                  className="font-weight-normal"
                >
                  Agency *
                </Form.Label>
                <Form.Control
                  as="select"
                  id="formSelect1"
                  aria-label="Select Option 1"
                >
                  <option>Choose...</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </Form.Control>
              </Col>
              <Col sm={3}>
                <Form.Label
                  htmlFor="formSelect2"
                  className="font-weight-normal"
                >
                 Name *
                </Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  aria-label="Name"
                  placeholder="Type...."
                />
              </Col>
              <Col sm={3}>
                <Form.Label
                  htmlFor="formSelect3"
                  className="font-weight-normal"
                >
                  Email *
                </Form.Label>
                <Form.Control
                  type="text"
                  id="email"
                  aria-label="Email"
                  placeholder="Type"
                />
              </Col>
              <Col sm={3}>
                <Form.Label
                  htmlFor="formSelect4"
                  className="font-weight-normal"
                >
                  Phone Number *
                </Form.Label>
                <Form.Control
                  type="text"
                  id="phoneNumber"
                  aria-label="Phone Number"
                  placeholder="Type"
                />
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-end mt-3">
        <Button variant="link" className="mr-2">
          Cancel
        </Button>
        <Button variant="primary" className="mr-2">
          Save
        </Button>
      </div>
    </LteContent>
    </>
);
}

export default CreateNewDataProvider