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

const CreateNewDataProviderSummary = () => {
  const [showCreateAcc, setShowCreateAcc] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(true);

  const handleCreateAccount = () => {
    setShowCreateAcc(true);
    setButtonsVisible(false);
  };

  const handleCloseAccount = () => {
    setShowCreateAcc(false);
  };
  return (
    <>
      <LteContentHeader title="Create New Data Provider" />
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
                  Data Provider summary
                </h2>
                <div style={{ clear: "both" }}></div>{" "}
                <h6>
                  Check all the details before creating data provider's account
                </h6>
              </div>
              {/* /.card-header */}

              {/* Form*/}
              <div className="card-body">
                {/* Row 1 */}
                <h5 className="text-primary font-weight-bold">
                  Data Provider's Details
                </h5>
                <Row className="fw-bold text-secondary mb-2">
                  <Col md={2}>
                    <h5>FIRST NAME</h5>
                  </Col>
                  <Col md={2}>
                    <h5>LAST NAME</h5>
                  </Col>
                  <Col md={2}>
                    <h5>USERNAME</h5>
                  </Col>
                  <Col md={2}>
                    <h5>EMAIL</h5>
                  </Col>
                  <Col md={2}>
                    <h5>PHONE NUMBER</h5>
                  </Col>
                  <Col md={2}>
                    <h5>DIVISION</h5>
                  </Col>
                </Row>
                {/* Row 2 */}
                <Row>
                  <Col md={2}>
                    <h5>Julian</h5>
                  </Col>
                  <Col md={2}>
                    <h5>Casablancas</h5>
                  </Col>
                  <Col md={2}>
                    <h5>Julian C.</h5>
                  </Col>
                  <Col md={2}>
                    <h5>julianassablancas@tnb.com</h5>
                  </Col>
                  <Col md={2}>
                    <h5>012375974877</h5>
                  </Col>
                  <Col md={2}>
                    <h5>Power Supply</h5>
                  </Col>
                </Row>
                {/* Row 3 */}
                <h5 className="text-primary font-weight-bold">
                  Contact Person Details
                </h5>
                <Row className="fw-bold text-secondary mb-2">
                  <Col md={2}>
                    <h5>FIRST NAME</h5>
                  </Col>
                  <Col md={2}>
                    <h5>LAST NAME</h5>
                  </Col>
                  <Col md={2}>
                    <h5>EMAIL</h5>
                  </Col>
                  <Col md={2}>
                    <h5>PHONE NUMBER</h5>
                  </Col>
                </Row>
                {/* Row 4 */}
                <Row>
                  <Col md={2}>
                    <h5>Paul</h5>
                  </Col>
                  <Col md={2}>
                    <h5>Banks</h5>
                  </Col>
                  <Col md={2}>
                    <h5>paulbanks@tnb.com</h5>
                  </Col>
                  <Col md={2}>
                    <h5>01378475748</h5>
                  </Col>
                </Row>
                {/* Row 5 */}
                <h5 className="text-primary font-weight-bold">
                  Agency's Details
                </h5>
                <Row className="fw-bold text-secondary mb-2">
                  <Col md={2}>
                    <h5>ENERGY SECTOR</h5>
                  </Col>
                  <Col md={2}>
                    <h5>AGENCY</h5>
                  </Col>
                  <Col md={2}>
                    <h5>EMAIL</h5>
                  </Col>
                  <Col md={2}>
                    <h5>PHONE NUMBER</h5>
                  </Col>
                  <Col md={2}>
                    <h5>ADDRESS</h5>
                  </Col>
                </Row>
                {/* Row 6 */}
                <Row>
                  <Col md={2}>
                    <h5>Electricity</h5>
                  </Col>
                  <Col md={2}>
                    <h5>Tenaga Nasional Berhad</h5>
                  </Col>
                  <Col md={2}>
                    <h5>electric.tnb@tnb.com</h5>
                  </Col>
                  <Col md={2}>
                    <h5>0325468795</h5>
                  </Col>
                  <Col md={4}>
                    <h5>
                      TNB Platinum, NO 3, Jalan Bukit Pantai Bangsar ,59100,
                      Kuala Lumpur
                    </h5>
                  </Col>
                </Row>
                {/* Row 7 */}
                <h5 className="text-primary font-weight-bold">Product List</h5>
                <Row>
                  <Col md={2}>
                    <h5>Major Hydro</h5>
                  </Col>
                </Row>
                {/* Row 8 */}
                <Row>
                  <Col md={2}>
                    <h5>MInor Hydro</h5>
                  </Col>
                </Row>
                {/* Row 9 */}
                <h5 className="text-primary font-weight-bold">Form List</h5>
                <Row>
                  <Col md={6}>
                    <h5>
                      F1: Stock of Energy Products (Opening Stock & Closing
                      Stock)
                    </h5>
                  </Col>
                </Row>
                {/* Row 10 */}
                <Row>
                  <Col md={6}>
                    <h5>F3: Energy Own Consumption & Conversion / Operation</h5>
                  </Col>
                </Row>
                {/* Row 11 */}
                <Row>
                  <Col md={6}>
                    <h5>
                      F4: Sales of Energy Products by Distribution Channels
                    </h5>
                  </Col>
                </Row>
                {/* Row 12 */}
                <Row>
                  <Col md={6}>
                    <h5>F5: Losses of Energy Products</h5>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}

        {/* For Popup Modal */}
        <Modal isOpen={showCreateAcc} toggle={handleCloseAccount}>
          <ModalHeader toggle={handleCloseAccount}>Account Created</ModalHeader>
          <ModalBody>
            <p>Your account has been successfully created!</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleCloseAccount}>
              Close
            </Button>
          </ModalFooter>
        </Modal>

        {/* Save and Cancel Buttons */}
        {buttonsVisible && (
          <div className="d-flex justify-content-end mt-3 mb-3">
            <Link to="/CreateNewDataProvider2">
              <Button color="link" className="mr-2">
                Back
              </Button>
            </Link>
            <Button color="secondary" className="mr-2">
              Cancel
            </Button>
            <Button color="primary" onClick={handleCreateAccount}>
              Create Account
            </Button>
          </div>
        )}
      </LteContent>
    </>
  );
};

export default CreateNewDataProviderSummary;
