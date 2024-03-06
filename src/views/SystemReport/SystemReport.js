import React, { useEffect, useState } from "react";
import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

function SystemReport() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/tickets")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [goToProductListing, setGoToProductListing] = React.useState(false);

   // Filter the data array to count tickets
   const openTicketsCount = data.filter((ticket) => ticket.status === "Open").length;
   const closeTicketsCount = data.filter((ticket) => ticket.status === "Close").length;
   const resolvedTicketsCount = data.filter((ticket) => ticket.status === "Resolved").length;

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
                <h3>{openTicketsCount}</h3>
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
                <h3>{closeTicketsCount}</h3>
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
                <h3>{resolvedTicketsCount}</h3>
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
                {data.map((d, i) => (
                  <tr key={i}>
                    <td>{d.ticketId}</td>
                    <td>{d.category}</td>
                    <td>
                      <span
                        className={`badge ${
                          d.status === "Resolved"
                            ? "bg-success"
                            : d.status === "Open"
                            ? "bg-info"
                            : "bg-secondary"
                        }`}
                      >
                        {d.status}
                      </span>
                    </td>
                    <td>{d.dateCreated}</td>
                    <td>
                      <div>
                        <div className="btn-group mr-2">
                          <Link to={`/productListing/${d.id}`}
                            className="btn bg-gradient-primary"
                            style={{ width: "80px" }}
                          >
                            View
                          </Link>
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

export default SystemReport;
