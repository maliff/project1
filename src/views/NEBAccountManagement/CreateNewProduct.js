import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

function CreateNewProduct() {
  const [showCreateAcc, setShowCreateAcc] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    setShowCreateAcc(true);
    setButtonsVisible(false);
  };

  const handleCloseAccount = () => {
    setShowCreateAcc(false);
    navigate("/CreateNewProductSummary");
  };
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
                  Create Products
                </h2>
                <div style={{ clear: "both" }}></div>{" "}
                <h6>Fill up all details*</h6>
              </div>
              {/* /.card-header */}

              {/* Agency Detail's */}
              <div className="card-body">
                <label htmlFor="energySectorInput" style={{ color: "blue" }}>
                  Product Details
                </label>
                <div className="row">
                  {/* 1 column */}
                  <div className="col-lg-4">
                    {/* <h6>Fill up all details*</h6> */}
                    <div className="form-group">
                      <label htmlFor="CpProductCategory">
                        Product Category
                      </label>
                      <select
                        className="form-control select2"
                        style={{ width: "100%" }}
                        id="CpProductCategory"
                        name="CpProductCategory"
                      >
                        <option selected>Select Item...</option>
                        <option value="electricity">Opening Stock</option>
                        <option value="coal">Electricity Co-Generation</option>
                        <option value="fuel">Electricity Hydro</option>
                        <option value="bio-diesel">
                          Electricity Self-Generation
                        </option>
                        <option value="solar">Electricity thermal</option>
                        <option value="petrol">Fuel Oil</option>
                        <option value="electricity">Kerosene</option>
                        <option value="coal">LPG</option>
                        <option value="fuel">Natural Gas</option>
                        <option value="bio-diesel">Petrol</option>
                        <option value="solar">Refinery Gas</option>
                        <option value="petrol">Renewable </option>
                      </select>
                    </div>
                  </div>

                  {/* 2 Column */}
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Product Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="CpProductName"
                        placeholder="Enter Type..."
                      />
                    </div>
                  </div>

                  {/* 3 Column */}
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Unit</label>
                      <input
                        type="text"
                        className="form-control"
                        id="CpUnit"
                        placeholder="Enter Type..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Save and Cancel Buttons */}
            {/* For Popup Modal */}
            <Modal isOpen={showCreateAcc} toggle={handleCloseAccount}>
              <ModalHeader toggle={handleCloseAccount}>
                Product Created
              </ModalHeader>
              <ModalBody>
                <p>Your Product has been successfully created!</p>
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
                <Link to="/NEBAccountManagement">
                <Button color="link" className="mr-2 btn btn-outline-primary">
                  Cancel
                </Button>
                </Link>
                <Button
                  color="primary"
                  className="ml-2"
                  onClick={handleCreateAccount}
                >
                  Save
                </Button>
              </div>
            )}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </LteContent>
    </>
  );
}

export default CreateNewProduct;
