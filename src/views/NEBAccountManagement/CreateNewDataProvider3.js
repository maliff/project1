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

const CreateNewDataProvider3 = () => {
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
                  Forms
                </h2>
                <div style={{ clear: "both" }}></div>{" "}
                <h6>Select form based on your requirement*</h6>
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
                        Energy,Supply,Production and Generation
                      </label>
                      <br />
                      <br />
                      {/* Checkbox 1 */}
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input custom-control-input-danger"
                          type="checkbox"
                          id="customCheckbox1"
                          defaultChecked
                        />
                        <label
                          htmlFor="customCheckbox1"
                          className="custom-control-label"
                        >
                          F1: Stock of Energy Products (Opening Stock & Closing Stock)
                        </label>
                      </div>
                      {/* Checkbox 2 */}
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input custom-control-input-danger"
                          type="checkbox"
                          id="customCheckbox2"
                          defaultChecked
                        />
                        <label
                          htmlFor="customCheckbox2"
                          className="custom-control-label"
                        >
                          F2: Energy Intake into Plant/Process/Operation
                        </label>
                      </div>
                      {/* Checkbox 3 */}
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input custom-control-input-danger"
                          type="checkbox"
                          id="customCheckbox3"
                          defaultChecked
                        />
                        <label
                          htmlFor="customCheckbox3"
                          className="custom-control-label"
                        >
                          F3: Energy Own Consumption & Conversion / Operation
                        </label>
                      </div>
                      {/* Checkbox 4 */}
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input custom-control-input-danger"
                          type="checkbox"
                          id="customCheckbox4"
                          defaultChecked
                        />
                        <label
                          htmlFor="customCheckbox4"
                          className="custom-control-label"
                        >
                          F4: Sales of Energy Products by Distribution Channels
                        </label>
                      </div>
                      {/* Checkbox 5 */}
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input custom-control-input-danger"
                          type="checkbox"
                          id="customCheckbox5"
                          defaultChecked
                        />
                        <label
                          htmlFor="customCheckbox5"
                          className="custom-control-label"
                        >
                          F5: Losses of Energy Products
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Save and Cancel Buttons */}
            <div className="d-flex justify-content-end mt-3 mb-3">
              <Link to="/CreateNewDataProvider2">
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

export default CreateNewDataProvider3;
