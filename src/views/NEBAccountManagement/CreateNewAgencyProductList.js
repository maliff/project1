import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CreateNewAgencyProductList({handleSave, handleBack}) {
  const [formCount, setFormCount] = useState(1);

  const addForm = () => {
    setFormCount(formCount + 1);
  };

  const renderForms = () => {
    let forms = [];
    for (let i = 0; i < formCount; i++) {
      forms.push(
        <Form key={i} className="mt-3">
          <Form.Group as={Row} className="mt-3">
            <Col sm={6}>
              <Form.Label htmlFor={`formSelect1-${i}`} className="font-weight-normal">
                Product Category *
              </Form.Label>
              <Form.Control
                as="select"
                id={`formSelect1-${i}`}
                aria-label={`Select Option ${i + 1}`}
              >
                <option>Choose...</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </Form.Control>
            </Col>
            <Col sm={6}>
              <Form.Label htmlFor={`formSelect2-${i}`} className="font-weight-normal">
                Product Name *
              </Form.Label>
              <Form.Control
                as="select"
                id={`formSelect2-${i}`}
                aria-label={`Select Option ${i + 1}`}
              >
                <option>Choose...</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
      );
    }
    return forms;
  };

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
          {renderForms()}
          <div style={{ textAlign: "left", marginTop: "20px" }}>
            {/* Wrapped the text inside a div */}
            <div
              style={{ color: "blue", cursor: "pointer" }}
              onClick={addForm}
            >
              + Add more product
            </div>
          </div>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-end mt-3">
        <Button variant="light" className="mr-2" onClick={handleBack }>
          Back
        </Button>
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

export default CreateNewAgencyProductList;
