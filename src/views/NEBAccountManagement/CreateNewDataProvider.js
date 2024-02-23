import React from "react";
import {
  faArrowUp,
  faBars,
  faChartPie,
  faCloudDownloadAlt,
  faCog,
  faComments,
  faDownload,
  faMinus,
  faRedo,
  faShoppingBasket,
  faShoppingCart,
  faTag,
  faThumbsUp,
  faTimes,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Table,
  Label,
} from "reactstrap";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { Link } from 'react-router-dom';

const CreateNewDataProvider = () => {
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
                  Create Profile
                </h2>
                <div style={{ clear: "both" }}></div>{" "}
                <h6>Fill up all details*</h6>
              </div>
              {/* /.card-header */}

              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <h6>Data Provider's details</h6>
                  </div>
                  <div className="col-lg-6">
                    <h6>Contact Person details</h6>
                  </div>
                </div>
                <div className="row">
                  {/* 1 column */}
                  <div className="col-lg-3">
                    {/* <h6>Fill up all details*</h6> */}
                    <div className="form-group">
                      <label htmlFor="firstNameInput">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstNameInput"
                        placeholder="Enter First Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="userNameInput">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userNameInput"
                        placeholder="Enter Username"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="emailInput">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="emailInput"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>

                  {/* 2 Column */}
                  <div className="col-lg-3">
                    <div className="form-group">
                      <label htmlFor="lastNameInput">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastNameInput"
                        placeholder="Enter Last Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumberInput">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumberInput"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Division</label>
                      <input
                        type="text"
                        className="form-control"
                        id="divisionInput"
                        placeholder="Enter Division"
                      />
                    </div>
                  </div>

                  {/* 3 Column */}
                  <div className="col-lg-3">
                    <div className="form-group">
                      <label htmlFor="firstNameInput2">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstNameInput2"
                        placeholder="Enter First Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="emailInput2">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="emailInput2"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>

                  {/* 4 Column */}
                  <div className="col-lg-3">
                    <div className="form-group">
                      <label htmlFor="lastNameInput2">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastNameInput2"
                        placeholder="Enter Last Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumberInput2">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumberInput2"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Agency Detail's */}
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <h6>Agency Detail's</h6>
                  </div>
                </div>
                <div className="row">
                  {/* 1 column */}
                  <div className="col-lg-4">
                    {/* <h6>Fill up all details*</h6> */}
                    <div className="form-group">
                      <label htmlFor="energySectorInput">Energy Sector</label>
                      <select
                        className="form-control select2"
                        style={{ width: "100%" }}
                        id="energySectorInput"
                        name="energySectorInput"
                      >
                        <option selected>Please Select...</option>
                        <option value="electricity">Electricity</option>
                        <option value="coal">Coal</option>
                        <option value="fuel">Fuel</option>
                        <option value="bio-diesel">Bio-diesel</option>
                        <option value="solar">Solar</option>
                        <option value="petrol">Petrol</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="addressInput">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="addressInput1"
                        placeholder="Enter Address 1"
                      />
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        id="addressInput2"
                        placeholder="Enter Address 2"
                      />
                    </div>
                  </div>

                  {/* 2 Column */}
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label htmlFor="agencyInput">Agency</label>
                      <select
                        className="form-control select2"
                        style={{ width: "100%" }}
                        id="agencyInput"
                        name="agencyInput"
                      >
                        <option selected>Please Select...</option>
                        <option value="TNB">Tenaga Nasional Berhad</option>
                        <option value="petronas">Petronas</option>
                        <option value="shell">Shell</option>
                        <option value="tesla">Tesla</option>
                      </select>
                    </div>
                  </div>

                  {/* 3 Column */}
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label htmlFor="phoneNumberInput3">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumberInput3"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Save and Cancel Buttons */}
            <div className="d-flex justify-content-end mt-3 mb-3">
              <Button color="secondary" className="mr-2">
                Cancel
              </Button>
              <Link to="/CreateNewDataProvider2">
                <Button color="primary">Save</Button>
              </Link>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </LteContent>
    </>
  );
};

export default CreateNewDataProvider;
