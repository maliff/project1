import React from 'react'
import { Card, Form, Row, Col, Button } from "react-bootstrap";


function CreateNewAgencyProductList() {
  return (
    <>
      <Card>
        <Card.Header className="d-flex flex-column align-items-start">
          <div className="d-flex justify-content-between w-100 mb-3">
            <Card.Title as="h2" className="mb-0">
              <b>Products</b>
              <p>Select Products based on your requirement*</p>
            </Card.Title>
          </div>
        </Card.Header>
        <Card.Body>
          {/* Details */}
          <Form className="mt-3">
            <b>Details</b>
            <Form.Group as={Row} className="mt-3">
              <Col sm={6}>
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
              <Col sm={6}>
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
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-end mt-3">
      <Button variant="light" className="mr-2">
          Back
        </Button>
        <Button variant="link" className="mr-2">
          Cancel
        </Button>
        <Button variant="primary" className="mr-2">
          Save
        </Button>
      </div>
    </>  )
}

export default CreateNewAgencyProductList