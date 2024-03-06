import React, { useEffect, useState } from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { useParams } from "react-router";
import axios from "axios";

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
                    ? "bg-primary"
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
            <div class="text-center mt-5 mb-3 d-flex justify-content-end">
              <button
                onClick={requestForAmendmentClick}
                class="btn btn-outline-secondary mr-1"
              >
                Cancel
              </button>
              <button onClick={ApproveClick} class="btn btn-outline-primary mr-1">
                Save As Draft
              </button>
              <button onClick={ApproveClick} class="btn btn-primary mr-1">
                Submit
              </button>
            </div>
          </div>
        </div>
      </LteContent>
    </>
  );
}

export default SubmitNewReport;
