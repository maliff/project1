import React from "react";
import { Card, Form, Row, Col, Button, CardFooter } from "react-bootstrap";

function CreateNewAgencyForm() {
  return (
    <>
      <Card>
        <Card.Header className="d-flex flex-column align-items-start">
          <div className="d-flex justify-content-between w-100 mb-3">
            <Card.Title as="h2" className="mb-0">
              <b>Form</b>
              <p>Select form for Data Provider</p>
            </Card.Title>
          </div>
        </Card.Header>
        <Card.Body>
          <b>Manual Submission</b>
          <Form>
            <Form.Group as={Row}>
              <Col sm={12}>
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    label="Don't Allow"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    className="mr-3"
                  />
                  <Form.Check
                    type="radio"
                    label="Allow"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    className="mr-3"
                  />
                </div>
              </Col>
            </Form.Group>
          </Form>
          <Form className="mt-3">
            <b>Energy, Supply, Production and Generation</b>
            <Form.Group as={Row} className="mt-3">
              <Col sm={6}>
                <Form.Label
                  htmlFor="formSelect1"
                  className="font-weight-normal"
                >
                  F1 : Stock of Energy Products
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
                  F2 : Energy Intake into Plant/Process/Operation
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
              <Col sm={6} className="mt-3">
                <Form.Label
                  htmlFor="formSelect3"
                  className="font-weight-normal"
                >
                  F3 : Energy Own Consumption & Conversion / Operation
                </Form.Label>
                <Form.Control
                  as="select"
                  id="formSelect3"
                  aria-label="Select Option 3"
                >
                  <option>Choose...</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </Form.Control>
              </Col>
              <Col sm={6} className="mt-3">
                <Form.Label
                  htmlFor="formSelect4"
                  className="font-weight-normal"
                >
                  F4 : Sales of Energy Products by Distribution Channels
                </Form.Label>
                <Form.Control
                  as="select"
                  id="formSelect4"
                  aria-label="Select Option 4"
                >
                  <option>Choose...</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </Form.Control>
              </Col>
              <Col sm={6} className="mt-3">
                <Form.Label
                  htmlFor="formSelect5"
                  className="font-weight-normal"
                >
                  F5 : Losses of Energy Products
                </Form.Label>
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
          </Form>
          <Form className="mt-3">
            <b>Energy, Supply, Production and Generation</b>
            <Form.Group as={Row} className="mt-3">
              <Col sm={6}>
                <Form.Label
                  htmlFor="formSelect6"
                  className="font-weight-normal"
                >
                  C1 : Final Energy Consumption Sectors
                </Form.Label>
                <Form.Control
                  as="select"
                  id="formSelect6"
                  aria-label="Select Option 6"
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
        <CardFooter className="border-top">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="formCheck1">Additional Forms</Form.Label>
              <Form.Check
                label="Installed Capacity"
                type="checkbox"
                id="checkbox1"
              />
              <Form.Check
                label="Power Plant performance"
                type="checkbox"
                id="checkbox2"
              />
              <Form.Check
                label="Net Calorific Value"
                type="checkbox"
                id="checkbox3"
              />
            </Form.Group>
          </Form>
        </CardFooter>
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
    </>
  );
}

export default CreateNewAgencyForm;
