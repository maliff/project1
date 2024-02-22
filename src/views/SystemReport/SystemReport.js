import React from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { Navigate } from "react-router-dom";

function SystemReport() {
  const [goToProductListing, setGoToProductListing] = React.useState(false);

  if (goToProductListing) {
    return <Navigate to="/productListing" />;
  }
  return (
    <>
      <LteContentHeader title="System Report" />
      <LteContent>
        <div className="row">
          <div className="col-lg-4 col-6">
            {/* small box */}
            <div className="small-box bg-info" style={{ borderRadius: "20px" }}>
              <div className="inner">
                <h3>2</h3>
                <p>Open Ticket</p>
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
              className="small-box bg-secondary"
              style={{ borderRadius: "20px" }}
            >
              <div className="inner">
                <h3>1</h3>
                <p>Close Ticket</p>
              </div>
              <div className="icon">
                <i className="ion ion-android-cancel" />
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
                <h3>2</h3>
                <p>Resolved Ticket</p>
              </div>
              <div className="icon">
                <i className="ion ion-android-checkmark-circle" />
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-header">
            <h2 className="card-title mb-3 mt-2">
              <b>All Tickets</b>
            </h2>
          </div>
          {/* /.card-header */}
          <div className="card-body p-0">
            <table className="table table-sm">
              <thead className="bg-secondary">
                <tr>
                  <th>Ticket ID</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Date Created</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#00123</td>
                  <td>Product Listing</td>
                  <td>
                    <span className="badge bg-info">Open</span>
                  </td>
                  <td>12 Dec 2023</td>
                  <td>
                    <button
                      onClick={() => setGoToProductListing(true)}
                      type="button"
                      class="btn btn-block bg-gradient-primary btn-sm"
                      style={{ width: "80px" }}
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>#00124</td>
                  <td>Others</td>
                  <td>
                    <span className="badge bg-info">Open</span>
                  </td>
                  <td>10 Dec 2023</td>
                  <td>
                    <button
                      onClick={() => setGoToProductListing(true)}
                      type="button"
                      class="btn btn-block bg-gradient-primary btn-sm"
                      style={{ width: "80px" }}
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>#00125</td>
                  <td>Others</td>
                  <td>
                    <span className="badge bg-secondary">Close</span>
                  </td>
                  <td>11 Nov 2023</td>
                  <td>
                    <button
                      onClick={() => setGoToProductListing(true)}
                      type="button"
                      class="btn btn-block bg-gradient-primary btn-sm"
                      style={{ width: "80px" }}
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>#00126</td>
                  <td>Inquiry</td>
                  <td>
                    <span className="badge bg-success">Resolved</span>
                  </td>
                  <td>9 Nov 2023</td>
                  <td>
                    <button
                      onClick={() => setGoToProductListing(true)}
                      type="button"
                      class="btn btn-block bg-gradient-primary btn-sm"
                      style={{ width: "80px" }}
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>#00127</td>
                  <td>Product Listing</td>
                  <td>
                    <span className="badge bg-success">Resolved</span>
                  </td>
                  <td>13 Oct 2023</td>
                  <td>
                    <button
                      onClick={() => setGoToProductListing(true)}
                      type="button"
                      class="btn btn-block bg-gradient-primary btn-sm"
                      style={{ width: "80px" }}
                    >
                      View
                    </button>
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

export default SystemReport;
