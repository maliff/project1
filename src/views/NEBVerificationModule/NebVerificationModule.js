import React from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { Navigate } from "react-router-dom";

function NebVerificationModule() {
  const [goToFuelBalanceReport, setGoToFuelBalanceReport] =
    React.useState(false);

  if (goToFuelBalanceReport) {
    return <Navigate to="/fuelBalanceReport" />;
  }
  return (
    <>
      <LteContentHeader title="NEB Verification Module" />
      <LteContent>
        <div className="main-search mb-3">
          <div>
            <label htmlFor="year">Year </label>
            <select id="year">
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          <div>
            <label htmlFor="quarter">Quarter </label>
            <select id="quarter">
              <option value="q1">Q1</option>
              <option value="q2">Q2</option>
              <option value="q3">Q3</option>
              <option value="q4">Q4</option>
            </select>
          </div>
          <div>
            <label htmlFor="region">Region </label>
            <select id="region">
              <option value="all">All</option>
            </select>
          </div>
        </div>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-header">
            <h2 className="card-title mb-3 mt-2">
              <b>Quarter 1</b>
            </h2>
          </div>
          {/* /.card-header */}
          <div className="card-body p-0">
            <table className="table table-sm">
              <thead className="bg-secondary">
                <tr>
                  <th style={{ width: "20px" }}>No.</th>
                  <th>Agency</th>
                  <th>Status</th>
                  <th>Approver</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Tenaga Nasional</td>
                  <td>
                    <span className="badge bg-secondary">Not Submitted</span>
                  </td>
                  <td>N/A</td>
                  <td>
                    <div>
                      <div className="btn-group mr-2">
                        <button
                          onClick={() => setGoToFuelBalanceReport(true)}
                          type="button"
                          className="btn bg-gradient-primary"
                          style={{ width: "80px" }}
                        >
                          View
                        </button>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn bg-gradient-primary"
                          style={{ width: "100px" }}
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Sabah Energy</td>
                  <td>
                    <span className="badge bg-danger">
                      Pending for Amendment
                    </span>
                  </td>
                  <td>N/A</td>
                  <td>
                    <div>
                      <div className="btn-group mr-2">
                        <button
                          onClick={() => setGoToFuelBalanceReport(true)}
                          type="button"
                          className="btn bg-gradient-primary"
                          style={{ width: "80px" }}
                        >
                          View
                        </button>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn bg-gradient-primary"
                          style={{ width: "100px" }}
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sarawak Energy</td>
                  <td>
                    <span className="badge bg-warning">
                      Pending for Approval
                    </span>
                  </td>
                  <td>N/A</td>
                  <td>
                    <div>
                      <div className="btn-group mr-2">
                        <button
                          onClick={() => setGoToFuelBalanceReport(true)}
                          type="button"
                          className="btn bg-gradient-primary"
                          style={{ width: "80px" }}
                        >
                          View
                        </button>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn bg-gradient-primary"
                          style={{ width: "100px" }}
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Tenaga Nasional</td>
                  <td>
                    <span className="badge bg-warning">
                      Pending for Approval
                    </span>
                  </td>
                  <td>N/A</td>
                  <td>
                    <div>
                      <div className="btn-group mr-2">
                        <button
                          onClick={() => setGoToFuelBalanceReport(true)}
                          type="button"
                          className="btn bg-gradient-primary"
                          style={{ width: "80px" }}
                        >
                          View
                        </button>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn bg-gradient-primary"
                          style={{ width: "100px" }}
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Sabah Energy</td>
                  <td>
                    <span className="badge bg-success">Approved</span>
                  </td>
                  <td>N/A</td>
                  <td>
                    <div>
                      <div className="btn-group mr-2">
                        <button
                          onClick={() => setGoToFuelBalanceReport(true)}
                          type="button"
                          className="btn bg-gradient-primary"
                          style={{ width: "80px" }}
                        >
                          View
                        </button>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn bg-gradient-primary"
                          style={{ width: "100px" }}
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /.card-body */}
        </div>
      </LteContent>
    </>
  );
}

export default NebVerificationModule;
