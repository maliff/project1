import React, { useState } from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import {
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const CreateNewProductSummary = () => {
  return (
    <>
      <LteContentHeader title="Create New Product" />
      <LteContent>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="card card-default">
              <div className="card-header">
                <h2
                  className="card-title"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  New Product
                </h2>
              </div>
              {/* /.card-header */}

              {/* Form*/}
              <div className="card-body">
                {/* Row 1 */}
                <h5 className="text-primary font-weight-bold">
                Product details
                </h5>
                <Row className="fw-bold text-secondary mb-2">
                  <Col md={2}>
                    <h5>PRODUCT CATEGORY</h5>
                  </Col>
                  <Col md={2}>
                    <h5>PRODUCT NAME</h5>
                  </Col>
                  <Col md={2}>
                    <h5>UNIT</h5>
                  </Col>
                </Row>
                {/* Row 2 */}
                <Row>
                  <Col md={2}>
                    <h5>Electricity Thermal</h5>
                  </Col>
                  <Col md={2}>
                    <h5>Diesel</h5>
                  </Col>
                  <Col md={2}>
                    <h5>ktoe</h5>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </LteContent>
    </>  );
};

export default CreateNewProductSummary