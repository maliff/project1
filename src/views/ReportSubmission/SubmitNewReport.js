import React, { useEffect, useState } from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {
  DataTrendAnalysisDP,
  PlantEfficiency,
} from "../NEBVerificationModule/Charts";
import PlantPerformanceDP from "./PlantPerformanceDP";
import InstalledCapacityDP from "./InstalledCapacityDP";
import NetCalorificDP from "./NetCalorificDP";

function SubmitNewReport() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://mydata-d89e.onrender.com/listOfSubmission/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [showAmendmentDialog, setShowAmendmentDialog] = useState(false);
  const [showApproveDialog, setShowApproveDialog] = useState(false);
  const [graphType, setGraphType] = useState("bar");
  const [activeTabChart, setActiveTabChart] = useState("tab1");
  const [activeTab, setActiveTab] = useState("tabFuelBalanceReport");
  const [chartKey, setChartKey] = useState(0);

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

  const handleSelectTabChart = (tabKey) => {
    setActiveTabChart(tabKey);
    // Increment the chart key to force a refresh
    setChartKey((prevKey) => prevKey + 1);
  };

  const handleSelectTab = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <>
      <LteContentHeader title="Submit New Report" />
      <LteContent>
        <div class="card">
          <div class="card-body">
            <Tabs activeKey={activeTab} onSelect={handleSelectTab} id="tabs">
              <Tab
                eventKey="tabFuelBalanceReport"
                title={
                  <span
                    style={{
                      textDecoration:
                        activeTab === "tabFuelBalanceReport"
                          ? "underline"
                          : "none",
                      color:
                        activeTab === "tabFuelBalanceReport"
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
                            <input
                              type="number"
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
                          </td>
                          <td>
                            <input
                              type="number"
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
                          </td>
                          <td>
                            <input
                              type="number"
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
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Bitumen/Asphalt/Mexphaite</td>
                          <td>
                            <input
                              type="number"
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
                          </td>
                          <td>
                            <input
                              type="number"
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
                          </td>
                          <td>
                            <input
                              type="number"
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
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Butane</td>
                          <td>
                            <input
                              type="number"
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
                          </td>
                          <td>
                            <input
                              type="number"
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
                          </td>
                          <td>
                            <input
                              type="number"
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
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Diesel</td>
                          <td>
                            <input
                              type="number"
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
                          </td>
                          <td>
                            <input
                              type="number"
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
                          </td>
                          <td>
                            <input
                              type="number"
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
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Aviation Gasoline (AV GAS)</td>
                          <td>
                            <input
                              type="number"
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
                          </td>
                          <td>
                            <input
                              type="number"
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
                          </td>
                          <td>
                            <input
                              type="number"
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
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <Tabs
                  activeKey={activeTabChart}
                  onSelect={handleSelectTabChart}
                  id="tabs"
                >
                  <Tab
                    eventKey="tab1"
                    title={
                      <span
                        style={{
                          textDecoration:
                            activeTabChart === "tab1" ? "underline" : "none",
                          color: activeTabChart === "tab1" ? "blue" : "inherit",
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
                        activeTab === "tabPlantPerformance"
                          ? "underline"
                          : "none",
                      color:
                        activeTab === "tabPlantPerformance"
                          ? "blue"
                          : "inherit",
                    }}
                  >
                    Installed Capacity
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
                        activeTab === "tabInstalledCapacity"
                          ? "underline"
                          : "none",
                      color:
                        activeTab === "tabInstalledCapacity"
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
                        activeTab === "tabNetCalorific" ? "underline" : "none",
                      color:
                        activeTab === "tabNetCalorific" ? "blue" : "inherit",
                    }}
                  >
                    Installed Capacity
                  </span>
                }
              >
                <NetCalorificDP />
              </Tab>
            </Tabs>
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
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Remarks</h5>
            <br />
            <br />
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

export default SubmitNewReport;
