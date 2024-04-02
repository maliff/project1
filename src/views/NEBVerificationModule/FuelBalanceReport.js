import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import axios from "axios";
import Switch from "react-switch";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { DataTrendAnalysis, PlantEfficiency } from "./Charts";

const Switches = () => {
  const [checked, setChecked] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("MT");

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    setSelectedLabel(nextChecked ? "Pj" : "MT");
  };

  return (
    <div className="example">
      <div style={{ display: "flex", alignItems: "center" }}>
        <label
          className={
            selectedLabel === "MT" ? "mr-2 text-success" : "mr-2 text-secondary"
          }
          onClick={() => setSelectedLabel("MT")}
        >
          MT
        </label>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#007bff"
          offColor="#007bff"
        />
        <label
          className={
            selectedLabel === "Pj" ? "ml-2 text-success" : "ml-2 text-secondary"
          }
          onClick={() => setSelectedLabel("Pj")}
        >
          Pj
        </label>
      </div>
    </div>
  );
};

function FuelBalanceReport() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://mydata-d89e.onrender.com/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [showAmendmentDialog, setShowAmendmentDialog] = useState(false);
  const [showApproveDialog, setShowApproveDialog] = useState(false);
  const [graphType, setGraphType] = useState("bar");
  const [activeTab, setActiveTab] = useState("tab1");
  const [chartKey, setChartKey] = useState(0);

  const handleTabChange = (type) => {
    setGraphType(type);
  };

  const handleSelectTab = (tabKey) => {
    setActiveTab(tabKey);
    // Increment the chart key to force a refresh
    setChartKey((prevKey) => prevKey + 1);
  };

  const requestForAmendmentClick = () => {
    setShowAmendmentDialog(true);
  };

  const handleCloseAmendmentDialog = () => {
    setShowAmendmentDialog(false);
  };

  const ApproveClick = () => {
    setShowApproveDialog(true);
  };

  const handleCloseApproveDialog = () => {
    setShowApproveDialog(false);
  };
  return (
    <>
      <LteContentHeader title="Fuel Balance Report" />
      <LteContent>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">
              Fuel Balance Report - Q1 2023{" "}
              <span
                className={`badge ${
                  data.Status === "Approved"
                    ? "bg-success"
                    : data.Status === "Pending for Approval"
                    ? "bg-warning"
                    : data.Status === "Pending for Amendment"
                    ? "bg-danger"
                    : "bg-secondary"
                }`}
              >
                <small>{data.Status}</small>
              </span>
            </h5>
            <br />
            <br />
            <br />
            <Row className="mb-2">
              <Col className="fw-bold text-secondary">AGENCY</Col>
              <Col className="fw-bold text-secondary">DATA PROVIDER</Col>
              <Col className="fw-bold text-secondary">SUBMITTED DATE</Col>
              <Col className="fw-bold text-secondary">QUARTER</Col>
              <Col className="fw-bold text-secondary">YEAR</Col>
            </Row>
            <Row className="mb-5">
              <Col>{data.Agency}</Col>
              <Col>Julian Cassablancas</Col>
              <Col>30/4/2023</Col>
              <Col>Quarter 1</Col>
              <Col>2023</Col>
            </Row>
            <div className="text-center mt-5 mb-3 d-flex justify-content-end">
              <Switches />
            </div>
            <div className="card" style={{ borderRadius: "20px" }}>
              {/* /.card-header */}
              <div className="card-body p-0" style={{ overflowX: "auto" }}>
                <table className="table table-sm">
                  <thead className="bg-secondary">
                    <tr>
                      <th>No.</th>
                      <th>Product</th>
                      <th>F1 (Opening Stock)</th>
                      <th>F2 (Local Purchase)</th>
                      <th>F2 (Foreign Import)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Aviatiaon Gasoline (AV GAS)</td>
                      <td>40,675.637</td>
                      <td>1,675.637</td>
                      <td>2,340.890</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Bitumen/Asphalt/Mexphaite</td>
                      <td>2,340.890</td>
                      <td>2,340.890</td>
                      <td>11,233.234</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Butane</td>
                      <td>1,675.637</td>
                      <td>11,233.234</td>
                      <td>1,675.637</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Diesel</td>
                      <td>11,233.234</td>
                      <td>1,675.637</td>
                      <td>2,340.890</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Aviation Gasoline (AV GAS)</td>
                      <td>23,890.798</td>
                      <td>2,340.890</td>
                      <td>11,233.234</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* /.card-body */}
            <Tabs activeKey={activeTab} onSelect={handleSelectTab} id="tabs">
              <Tab
                eventKey="tab1"
                title={
                  <span
                    style={{
                      textDecoration:
                        activeTab === "tab1" ? "underline" : "none",
                      color: activeTab === "tab1" ? "blue" : "inherit",
                    }}
                  >
                    Data Trend Analysis
                  </span>
                }
              >
                {/* Use key prop to force refresh */}
                <div className="mt-4 p-2">
                  <HighchartsReact
                    key={`bar-chart-${chartKey}`}
                    highcharts={Highcharts}
                    options={DataTrendAnalysis}
                  />
                </div>
              </Tab>
              <Tab
                eventKey="tab2"
                title={
                  <span
                    style={{
                      textDecoration:
                        activeTab === "tab2" ? "underline" : "none",
                      color: activeTab === "tab2" ? "blue" : "inherit",
                    }}
                  >
                    Plant Efficiency
                  </span>
                }
              >
                {/* Use key prop to force refresh */}
                <div className="mt-4 p-2">
                  <HighchartsReact
                    key={`line-chart-${chartKey}`}
                    highcharts={Highcharts}
                    options={PlantEfficiency}
                  />
                </div>
              </Tab>
            </Tabs>
            <div class="text-center mt-5 mb-3 d-flex justify-content-end">
              <button
                onClick={requestForAmendmentClick}
                class="btn btn-outline-primary mr-1"
              >
                Request for Amendment
              </button>
              <button onClick={ApproveClick} class="btn btn-primary">
                Approve
              </button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Remarks</h5>
            <br />
            <br />
            <br />
            <Card className="mb-2">
              <Card.Body className="bg-light">
                <div>
                  <Card.Title>
                    <div className="d-flex align-items-center">
                      <img
                        src="../images/profile-image-1.jpg"
                        alt="Profile"
                        className="rounded-circle mr-3"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div>
                        <h5 className="fw-bold mb-0 p-1">M Amirul Ezekiel</h5>
                        <small className="text-secondary p-1">Admin</small>
                      </div>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    <p className="mt-3 fw-bold text-secondary mb-2">
                      1 May 2023 09:30am
                    </p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card className="mb-2">
              <Card.Body className="bg-light">
                <div>
                  <Card.Title>
                    <div className="d-flex align-items-center">
                      <img
                        src="../images/profile-image-2.jpg"
                        alt="Profile"
                        className="rounded-circle mr-3"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div>
                        <h5 className="fw-bold mb-0 p-1">
                          Julian Cassablancas
                        </h5>
                        <small className="text-secondary p-1">
                          Data Provider
                        </small>
                      </div>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    <p className="mt-3 fw-bold text-secondary mb-2">
                      1 May 2023 10:30am
                    </p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <form className="form-horizontal mt-3">
              <div className="input-group input-group-lg mb-2">
                <input
                  className="form-control form-control-lg"
                  placeholder="Type here..."
                />
                <button type="submit" className="btn btn-primary ml-2">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <Modal show={showAmendmentDialog} onHide={handleCloseAmendmentDialog}>
          <Modal.Header closeButton>
            <Modal.Title>Request for Amendment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Remarks *
            <form className="form-horizontal">
              <div className="input-group input-group-lg mb-2">
                <input
                  className="form-control form-control-lg"
                  placeholder="Type here..."
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={handleCloseAmendmentDialog}
            >
              Cancel
            </button>
            <button className="btn btn-primary">Request for Amendment</button>
          </Modal.Footer>
        </Modal>
        <Modal show={showApproveDialog} onHide={handleCloseApproveDialog}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Approval</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>You are approving Tenaga Nasional Fuel Balance Report Q1 2023</p>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={handleCloseApproveDialog}
            >
              Cancel
            </button>
            <button className="btn btn-primary">Approve</button>
          </Modal.Footer>
        </Modal>
      </LteContent>
    </>
  );
}

export default FuelBalanceReport;
