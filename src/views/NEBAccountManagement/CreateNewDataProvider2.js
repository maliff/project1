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
import { Link } from "react-router-dom";

const CreateNewDataProvider2 = () => {
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
                  Products
                </h2>
                <div style={{ clear: "both" }}></div>{" "}
                <h6>Select product based on your requirement*</h6>
              </div>
              {/* /.card-header */}

              {/* Agency Detail's */}
              <div className="card-body">
                <div className="row">
                  {/* 1 column */}
                  <div className="col-lg-6">
                    {/* <h6>Fill up all details*</h6> */}
                    <div className="form-group">
                      <label htmlFor="energySectorInput">
                        Product Category
                      </label>
                      <select
                        className="form-control select2"
                        style={{ width: "100%" }}
                        id="energySectorInput"
                        name="energySectorInput"
                      >
                        <option selected>Please Select...</option>
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
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Product Name</label>
                      <select
                        className="form-control select2"
                        multiple="multiple"
                        data-placeholder="Select"
                        id="agencyInput"
                        name="agencyInput"
                        style={{ width: "100%" }}
                      >
                        <option>Minor Hydro</option>
                        <option>Major Hydro</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Save and Cancel Buttons */}
            <div className="d-flex justify-content-end mt-3 mb-3">
            <Link to="/CreateNewDataProvider">
              <Button color="link" className="mr-2">
                Back
              </Button>
              </Link>
              <Button color="secondary" className="mr-2">
                Cancel
              </Button>
              <Link to="/createNewDataProvider3">
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

export default CreateNewDataProvider2;
