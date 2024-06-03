import React from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

function CreateNewAgency1({ handleSave}) {
  return (
    <>
      <Card>
        <Card.Header className="d-flex flex-column align-items-start">
          <div className="d-flex justify-content-between w-100 mb-3">
            <Card.Title as="h2" className="mb-0">
              <b>Create Agency</b>
              <p>Fill up all the details*</p>
            </Card.Title>
          </div>
        </Card.Header>
        <Card.Body>
          {/* Details */}
          <Form className="mt-3">
            <b>Details</b>
            <Form.Group as={Row} className="mt-3">
              <Col sm={4}>
                <Form.Label
                  htmlFor="formSelect1"
                  className="font-weight-normal"
                >
                  Energy Sector *
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
              <Col sm={4}>
                <Form.Label
                  htmlFor="formSelect2"
                  className="font-weight-normal"
                >
                  Agency Name *
                </Form.Label>
                <Form.Control
                  as="select"
                  id="formSelect2"
                  aria-label="Select Option 2"
                >
                  <option>Choose...</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </Form.Control>
              </Col>
              <Col sm={4}>
                <Form.Label
                  htmlFor="formSelect3"
                  className="font-weight-normal"
                >
                  Phone Number *
                </Form.Label>
                <Form.Control
                  type="text"
                  id="phoneNumber"
                  aria-label="Phone Number"
                  placeholder="Enter phone number"
                />
              </Col>
            </Form.Group>
            {/* Address */}
            <Form.Group as={Row} className="mt-3">
              <Col sm={8} className="mt-3">
                <Form.Label
                  htmlFor="formSelect4"
                  className="font-weight-normal"
                >
                  Address *
                </Form.Label>
                <Form.Control
                  type="text"
                  id="address"
                  aria-label="Address"
                  placeholder="Enter Address"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mt-3">
              <Col sm={3}>
                <Form.Control
                  type="text"
                  id="poscode"
                  aria-label="Poscode"
                  placeholder="Enter Poscode"
                />
              </Col>
              <Col sm={3}>
                <Form.Control
                  as="select"
                  id="formSelect5"
                  aria-label="Select Option 5"
                >
                  <option>Choose...</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mt-3">
              <Col sm={3}>
                <Form.Control
                  as="select"
                  id="formSelect5"
                  aria-label="Select Option 5"
                >
                  <option>Choose...</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </Form.Control>
              </Col>
              <Col sm={3}>
                <Form.Control
                  type="text"
                  id="country"
                  aria-label="Country"
                  placeholder="Enter Country"
                />
              </Col>
            </Form.Group>
            <br />
            <b>Contact Person Details</b>
            <Form.Group as={Row} className="mt-3">
              <Col sm={4}>
                <Form.Label
                  htmlFor="formSelect1"
                  className="font-weight-normal"
                >
                  Name *
                </Form.Label>
                <Form.Control
                  type="text"
                  id="CPDname"
                  aria-label="CPD Name"
                  placeholder="Name"
                />
              </Col>
              <Col sm={4}>
                <Form.Label
                  htmlFor="formSelect2"
                  className="font-weight-normal"
                >
                  Email *
                </Form.Label>
                <Form.Control
                  type="text"
                  id="CPDemail"
                  aria-label="CPD Email"
                  placeholder="Email"
                />
              </Col>
              <Col sm={4}>
                <Form.Label
                  htmlFor="formSelect3"
                  className="font-weight-normal"
                >
                  Phone Number *
                </Form.Label>
                <Form.Control
                  type="text"
                  id="CPDphonenumber"
                  aria-label="CPD Phone Number"
                  placeholder="Phone Number"
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
        <Button variant="primary" className="mr-2" onClick={handleSave}>
          Save
        </Button>
      </div>
    </>
  );
}

export default CreateNewAgency1;
