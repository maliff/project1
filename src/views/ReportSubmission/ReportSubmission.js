import React, { useEffect, useState } from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function ReportSubmission() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://mydata-d89e.onrender.com/listOfSubmission")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const notSubmittedId = data.find(
    (entry) => entry.status === "Not Submitted"
  )?.id;

  const [goToSubmitNewReport, setGoToSubmitNewReport] = React.useState(false);

  if (goToSubmitNewReport) {
    return <Navigate to="/submitNewReport" />;
  }
  return (
    <>
      <LteContentHeader title="Report Submission" />
      <LteContent>
        <div className="main-search mb-3 mr-4">
          <div>
            <label htmlFor="year" className="mr-1">
              Year{" "}
            </label>
            <select id="year">
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          <div>
            {notSubmittedId && (
              <Link
                to={`/submitNewReport/${notSubmittedId}`}
                className="btn btn-primary"
              >
                + Submit New Report
              </Link>
            )}
          </div>
        </div>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-header">
            <h2 className="card-title mb-3 mt-2">
              <b>List of Submission</b>
            </h2>
          </div>
          {/* /.card-header */}
          <div className="card-body p-0" style={{ overflowX: "auto" }}>
            <table className="table table-sm">
              <thead className="bg-secondary">
                <tr>
                  <th>Quarter</th>
                  <th>Status</th>
                  <th>Approver</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>
                      <span
                        className={`badge ${
                          d.status === "Approved"
                            ? "bg-success"
                            : d.status === "Pending for Approval"
                            ? "bg-warning"
                            : d.status === "Pending for Amendment"
                            ? "bg-danger"
                            : "bg-secondary"
                        }`}
                      >
                        {d.status}
                      </span>
                    </td>
                    <td>{d.approver}</td>
                    <td>
                      <div>
                        <div className="btn-group mr-2">
                          {d.status !== "Not Submitted" && (
                            <Link
                              to={`/fuelBalanceReportDP/${d.id}`}
                              className="btn bg-gradient-primary"
                              style={{ width: "80px" }}
                            >
                              View
                            </Link>
                          )}
                        </div>
                        <div className="btn-group">
                          {d.status !== "Not Submitted" && (
                            <button
                              type="button"
                              className="btn bg-gradient-primary"
                              style={{ width: "100px" }}
                            >
                              Download
                            </button>
                          )}
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

export default ReportSubmission;
