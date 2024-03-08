import React, { useEffect, useState } from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function NebVerificationModule() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
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
          <div className="card-body p-0" style={{ overflowX: "auto" }}>
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
                {data.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.Agency}</td>
                    <td>
                      <span
                        className={`badge ${
                          d.Status === "Approved"
                            ? "bg-success"
                            : d.Status === "Pending for Approval"
                            ? "bg-warning"
                            : d.Status === "Pending for Amendment"
                            ? "bg-danger"
                            : "bg-secondary"
                        }`}
                      >
                        {d.Status}
                      </span>
                    </td>
                    <td>{d.Approver}</td>
                    <td>
                      <div>
                        <div className="btn-group mr-2">
                          <Link to={`/fuelBalanceReport/${d.id}`}
                            className="btn bg-gradient-primary"
                            style={{ width: "80px" }}
                          >
                            View
                          </Link>
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
                ))}
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
