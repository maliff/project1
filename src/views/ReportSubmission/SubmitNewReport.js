import React, { useEffect, useState } from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

function SubmitNewReport() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3030/listOfSubmission/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [showAmendmentDialog, setShowAmendmentDialog] = useState(false);
  const [showApproveDialog, setShowApproveDialog] = useState(false);
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
      <LteContentHeader title="Submit New Report" />
      <LteContent>
        <div class="card">
          <div class="card-body">
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
            {/* /.card-body */}
            <div class="text-center mt-5 mb-3 d-flex justify-content-end">
              <div className="btn-group mr-2">
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
