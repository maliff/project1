import React, { useState } from "react";
import {
  faChartBar,
  faComment,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
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
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import SubmittedFormByQuarter from "./SubmittedFormByQuarter";
import PostAnnouncement from "../Announcement/PostAnnouncement";
import PastAnnouncement from "../Announcement/PastAnnouncement";
import DataTrendAnalysis from "../NEBVerificationModule/DataTrendAnalysis";

export default function Dashboard() {
  const [graphType, setGraphType] = useState("bar");

  const handleTabChange = (type) => {
    setGraphType(type);
  };
  return (
    <>
      <LteContentHeader title="Dashboard" />
      <LteContent>
        <Container fluid>
          <Row className="mb-2">
            <Col sm="6">
              <h5>
                <b>Form Status</b>
              </h5>
            </Col>
            <Col sm="6">
              <div className="main-search mb-3">
                <div>
                  <label htmlFor="year" className="mr-2">
                    Year{" "}
                  </label>
                  <select id="year">
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quarter" className="mr-2">
                    Region{" "}
                  </label>
                  <select id="quarter">
                    <option value="pm">Peninsular Malaysia</option>
                    <option value="sbh">Sabah</option>
                    <option value="srwk">Sarawak</option>
                  </select>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="row">
          <div className="col-lg-4 col-6">
            {/* small box */}
            <div className="small-box bg-info" style={{ borderRadius: "20px" }}>
              <div className="inner">
                <h3>50</h3>
                <p>Pending for Approval</p>
              </div>
              <div className="icon">
                <i className="ion ion-android-person-add" />
              </div>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-4 col-6">
            {/* small box */}
            <div
              className="small-box bg-danger"
              style={{ borderRadius: "20px" }}
            >
              <div className="inner">
                <h3>5</h3>
                <p>Pending for Amendment</p>
              </div>
              <div className="icon">
                <i className="ion ion-android-alert" />
              </div>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-4 col-6">
            {/* small box */}
            <div
              className="small-box bg-success"
              style={{ borderRadius: "20px" }}
            >
              <div className="inner">
                <h3>15</h3>
                <p>Approved </p>
              </div>
              <div className="icon">
                <i className="ion ion-android-checkmark-circle" />
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <SubmittedFormByQuarter />
              </div>
              <div className="col-lg-6">
                <div
                  className="card"
                  style={{ overflow: "auto", height: "500px" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Post Announcement</b>
                    </h5>
                    <br />
                    <br />
                    <PostAnnouncement />
                    <PastAnnouncement />
                  </div>
                </div>
              </div>
              {/* /.col-md-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Primary Energy Supply</b>
                    </h5>
                    <br />
                    <br />
                    <div className="main-search mb-3">
                      <div>
                        <label htmlFor="yearFrom" className="mr-2">
                          From{" "}
                        </label>
                        <select id="yearFrom">
                          <option value="2010">2010</option>
                          <option value="2011">2011</option>
                          <option value="2012">2012</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="yearTo" className="mr-2">
                          To{" "}
                        </label>
                        <select id="yearTo">
                          <option value="2010">2010</option>
                          <option value="2011">2011</option>
                          <option value="2012">2012</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="quarter" className="mr-2">
                          Quarter{" "}
                        </label>
                        <select id="quarter" defaultValue="4">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                      <div>
                        <select id="type">
                          <option value="primaryEnergySupply">
                            Primary Energy Supply
                          </option>
                          <option value="finalEnergyConsumption">
                            Final Energy Consumption
                          </option>
                          <option value="outputOfRefinery">
                            Output Of Refinery
                          </option>
                          <option value="outputOfGasPlant">
                            Output Of Gas Plant
                          </option>
                          <option value="electricityGeneration">
                            Electricity Generation
                          </option>
                          <option value="fuelConsumeInPowerPlant">
                            Fuel Consume In Power Plant
                          </option>
                        </select>
                      </div>
                      <div>
                        <select id="products">
                          <option value="products">Products</option>
                        </select>
                      </div>
                      <div>
                        <select id="agency">
                          <option value="agency">Agency</option>
                        </select>
                      </div>
                    </div>
                    <Tab.Container id="graph-tabs" defaultActiveKey="line">
                      <Nav variant="tabs" className="mb-3">
                        <Nav.Item>
                          <Nav.Link
                            eventKey="line"
                            onClick={() => handleTabChange("line")}
                          >
                            Line Graph
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="bar"
                            onClick={() => handleTabChange("bar")}
                          >
                            Bar Graph
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="area"
                            onClick={() => handleTabChange("area")}
                          >
                            Area Graph
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="line">
                          {/* Content for Line Graph */}
                          <DataTrendAnalysis type="line" />
                        </Tab.Pane>
                        <Tab.Pane eventKey="bar">
                          {/* Content for Bar Graph */}
                          <DataTrendAnalysis type="bar" />
                        </Tab.Pane>
                        <Tab.Pane eventKey="area">
                          {/* Content for Area Graph */}
                          <DataTrendAnalysis type="area" />
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LteContent>
    </>
  );
}
