import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Switch from "react-switch";
import "../../App.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const NEBAccountManagement = () => {
  const [data, setData] = useState([
    {
      id: 1,
      agency: "Sabah Energy",
      name: "John Doe",
      dateCreated: "12/12/1212",
      status: true,
    },
    {
      id: 2,
      agency: "Sarawak Energy",
      name: "Ace fillip",
      dateCreated: "11/11/1111",
      status: true,
    },
    {
      id: 3,
      agency: "Johor Energy",
      name: "John Allive",
      dateCreated: "10/10/1010",
      status: false,
    },
    {
      id: 4,
      agency: "Melaka Energy",
      name: "John deadd",
      dateCreated: "9/9/9999",
      status: false,
    },
  ]);

  const dataColumns = [
    {
      name: "No",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Agency",
      selector: (row) => row.agency,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Date Created",
      selector: (row) => row.dateCreated,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Switch
            checked={row.status}
            onChange={() => toggleStatus(row.id)}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={24}
            uncheckedIcon={false}
            checkedIcon={false}
            height={12}
            width={40}
          />
          <span style={{ marginLeft: "10px" }}>{row.status ? "Active" : "Inactive"}</span>
        </div>
      ),
    },
  ];

  const productColumns = [
    {
      name: "No",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Agency",
      selector: (row) => row.agency,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Date Created",
      selector: (row) => row.dateCreated,
      sortable: true,
    },
  ];

  const toggleStatus = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  return (
    <div>
      {/* Account Management Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Account Management</h2>
      </div>

      {/* Add New Data Provider Button */}
      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <Link to="/createNewDataProvider">
          <Button color="primary" onClick={() => console.log("Button clicked")}>
            + Add New Data Provider
          </Button>
        </Link>
      </div>

      {/* Account Management DataTable */}
      <div style={{ marginTop: "20px" }}>
        <DataTable
          title={
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ margin: "0" }}>Latest Data Provider</h2>
              <Link to="/dataProviderList">
                <Button color="link" onClick={() => console.log("View All clicked")}>
                  View All
                </Button>
              </Link>
            </div>
          }
          columns={dataColumns}
          data={data}
          pagination={false}
          highlightOnHover={true}
        />
      </div>

      {/* Latest Product Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <Link to="/createNewProduct">
          <Button color="primary" onClick={() => console.log("Button clicked")}>
            + Add New Product
          </Button>
        </Link>
      </div>

      {/* Latest Product DataTable */}
      <div style={{ marginTop: "20px", marginBottom: "100px" }}>
        <DataTable
          title={
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ margin: "0" }}>Latest Product</h2>
              <Link to="/productList">
                <Button color="link" onClick={() => console.log("View All clicked")}>
                  View All
                </Button>
              </Link>
            </div>
          }
          columns={productColumns}
          data={data}
          pagination={false}
          highlightOnHover={true}
        />
      </div>
    </div>
  );
};

export default NEBAccountManagement;
