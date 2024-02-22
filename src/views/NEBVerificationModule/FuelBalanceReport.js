import React from "react";
import { Row, Col } from "react-bootstrap";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DataTrendAnalysis from "./DataTrendAnalysis";
import PlantEfficiency from "./PlantEfficiency";
import Card from "react-bootstrap/Card";

function FuelBalanceReport() {
  return (
    <>
      <LteContentHeader title="Fuel Balance Report" />
      <LteContent>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">
              Fuel Balance Report - Q1 2023{" "}
              <span className="badge bg-warning">
                <small>Pending for Approval</small>
              </span>
            </h5>
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
              <Col>Tenaga Nasional</Col>
              <Col>Julian Cassablancas</Col>
              <Col>30/4/2023</Col>
              <Col>Quarter 1</Col>
              <Col>2023</Col>
            </Row>
            <div className="card" style={{ borderRadius: "20px" }}>
              {/* /.card-header */}
              <div className="card-body p-0">
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
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3 mt-4"
            >
              <Tab eventKey="dataTrendAnalysis" title="Data Trend Analysis">
                <div className="bg-white">
                  <DataTrendAnalysis />
                </div>
              </Tab>
              <Tab eventKey="plantEfficiency" title="Plant Efficiency">
              <PlantEfficiency />
              </Tab>
            </Tabs>
            <div class="text-center mt-5 mb-3 d-flex justify-content-end">
              <a href="#" class="btn btn-outline-primary mr-1">
                Request for Amendment
              </a>
              <a href="#" class="btn btn-primary">
                Approve
              </a>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Remarks</h5>
            <br />
            <br />
            <Card className="mb-2">
              <Card.Body className="bg-light">
                <div>
                  <Card.Title>
                    <div className="d-flex align-items-center">
                      <img
                        src="./images/profile-image-1.jpg"
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
                        src="./images/profile-image-2.jpg"
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
                    <input className="form-control form-control-lg" placeholder="Type here..." />
                    <button type="submit" className="btn btn-primary ml-2">Send</button>
                </div>
            </form>
          </div>
        </div>
      </LteContent>
    </>
  );
}

export default FuelBalanceReport;
