import React, { useEffect, useState } from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import axios from "axios";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {
  DataTrendAnalysisDP,
  PlantEfficiency,
} from "../NEBVerificationModule/Charts";
import PlantPerformanceDP from "./PlantPerformanceDP";
import InstalledCapacityDP from "./InstalledCapacityDP";
import NetCalorificDP from "./NetCalorificDP";
import { Link } from "react-router-dom";

function FuelBalanceReportDP() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://mydata-d89e.onrender.com/listOfSubmission/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [showApproveDialog, setShowApproveDialog] = useState(false);
  const [graphType, setGraphType] = useState("bar");
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeTabGeneral, setActiveTabGeneral] = useState(
    "tabFuelBalanceReport"
  );
  const [chartKey, setChartKey] = useState(0);

  const handleSelectTab = (tabKey) => {
    setActiveTab(tabKey);
    // Increment the chart key to force a refresh
    setChartKey((prevKey) => prevKey + 1);
  };

  const handleSelectTabGeneral = (tabKey) => {
    setActiveTabGeneral(tabKey);
  };

  const ApproveClick = () => {
    setShowApproveDialog(true);
  };
  return (
    <>
      <LteContentHeader title="Fuel Balance Report" />
      <LteContent>
        <div class="card">
          <div class="card-body">
            <Tabs
              activeKey={activeTabGeneral}
              onSelect={handleSelectTabGeneral}
              id="tabs"
            >
              <Tab
                eventKey="tabFuelBalanceReport"
                title={
                  <span
                    style={{
                      textDecoration:
                        activeTabGeneral === "tabFuelBalanceReport"
                          ? "underline"
                          : "none",
                      color:
                        activeTabGeneral === "tabFuelBalanceReport"
                          ? "blue"
                          : "inherit",
                    }}
                  >
                    Fuel Balance
                  </span>
                }
              >
                <h5 class="card-title mb-4">
                  Fuel Balance Report - Q{data.id} 2023{" "}
                  <span
                    className={`badge ${
                      data.status === "Approved"
                        ? "bg-success"
                        : data.status === "Pending for Approval"
                        ? "bg-warning"
                        : data.status === "Pending for Amendment"
                        ? "bg-danger"
                        : "bg-secondary"
                    }`}
                  >
                    <small>{data.status}</small>
                  </span>
                </h5>
                <br />
                <br />
                <br />
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
                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={40675.637}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "40,675.637"
                            )}
                          </td>
                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={1675.637}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "1,675.637"
                            )}
                          </td>

                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={2340.890}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "2,340.890"
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Bitumen/Asphalt/Mexphaite</td>
                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={2340.890}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "2,340.890"
                            )}
                          </td>

                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={2340.890}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "2,340.890"
                            )}
                          </td>

                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={11233.234}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "11,233.234"
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Butane</td>
                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={16675.637}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "1,675.637"
                            )}
                          </td>

                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={11233.234}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "11,233.234"
                            )}
                          </td>

                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={1675.637}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "1,675.637"
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Diesel</td>
                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={11233.234}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "11,233.234"
                            )}
                          </td>

                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={1675.637}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "1,675.637"
                            )}
                          </td>

                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={2340.890}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "2,340.890"
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Aviation Gasoline (AV GAS)</td>
                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={23890.798}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "23,890.798"
                            )}
                          </td>

                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={2340.890}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "2,340.890"
                            )}
                          </td>

                          <td>
                            {data.status === "Pending for Amendment" ? (
                              <div>
                                <input
                                  type="number"
                                  value={11233.234}
                                  style={{
                                    width: "70%",
                                    height: "30px",
                                    marginRight: "5px",
                                    borderRadius: "5px",
                                  }}
                                />
                                <select
                                  style={{
                                    width: "25%",
                                    height: "30px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <option value="MT">MT</option>
                                  <option value="Kj">Kj</option>
                                </select>
                              </div>
                            ) : (
                              "11,233.234"
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* /.card-body */}
                <Tabs
                  activeKey={activeTab}
                  onSelect={handleSelectTab}
                  id="tabs"
                >
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
                        key={`column-chart-${chartKey}`}
                        highcharts={Highcharts}
                        options={DataTrendAnalysisDP}
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
              </Tab>
              <Tab
                eventKey="tabPlantPerformance"
                title={
                  <span
                    style={{
                      textDecoration:
                        activeTabGeneral === "tabPlantPerformance"
                          ? "underline"
                          : "none",
                      color:
                        activeTabGeneral === "tabPlantPerformance"
                          ? "blue"
                          : "inherit",
                    }}
                  >
                    Plant Performance
                  </span>
                }
              >
                <PlantPerformanceDP />
              </Tab>
              <Tab
                eventKey="tabInstalledCapacity"
                title={
                  <span
                    style={{
                      textDecoration:
                        activeTabGeneral === "tabInstalledCapacity"
                          ? "underline"
                          : "none",
                      color:
                        activeTabGeneral === "tabInstalledCapacity"
                          ? "blue"
                          : "inherit",
                    }}
                  >
                    Installed Capacity
                  </span>
                }
              >
                <InstalledCapacityDP />
              </Tab>
              <Tab
                eventKey="tabNetCalorific"
                title={
                  <span
                    style={{
                      textDecoration:
                        activeTabGeneral === "tabNetCalorific"
                          ? "underline"
                          : "none",
                      color:
                        activeTabGeneral === "tabNetCalorific"
                          ? "blue"
                          : "inherit",
                    }}
                  >
                    Net Calorific
                  </span>
                }
              >
                <NetCalorificDP />
              </Tab>
            </Tabs>
            {data.status === "Pending for Amendment" ? (
              <div class="text-center mt-5 mb-3 d-flex justify-content-end">
                <div className="btn-group">
                  <Link
                    to={`/reportSubmission`}
                    className="btn btn-outline-secondary mr-1"
                  >
                    Cancel
                  </Link>
                </div>
                <button
                  onClick={ApproveClick}
                  class="btn btn-outline-primary mr-1"
                >
                  Save As Draft
                </button>
                <button onClick={ApproveClick} class="btn btn-primary mr-1">
                  Submit
                </button>
              </div>
            ) : (
              <></>
            )}
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
      </LteContent>
    </>
  );
}

export default FuelBalanceReportDP;