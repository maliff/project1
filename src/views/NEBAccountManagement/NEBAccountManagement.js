import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import Switch from "react-switch";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { NEBDataContext, NEBDataProvider } from "../NEBAccountManagement/NEBDataProvider";
import DataProviderList from "./DataProviderList";

const NEBAccountManagement = () => {
  const { dataProviders, latestProducts, toggleStatus } = useContext(NEBDataContext);

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

          <span style={{ marginLeft: "10px" }}>
            {row.status ? "Active" : "Deactivate"}
          </span>
        </div>
      ),
    },
  ];

  const productColumns = [
    {
      name: "No",
      selector: (row) => row.productId,
      sortable: true,
    },
    {
      name: "Product Category",
      selector: (row) => row.productCategory,
      sortable: true,
    },
    {
      name: "Product Name",
      selector: (row) => row.productName,
      sortable: true,
    },
    {
      name: "Date Created",
      selector: (row) => row.productDateCreated,
      sortable: true,
    },
  ];

  return (
    <div>
      <DataProviderList>
        {/* Data Provider & Product Management dashboard */}
        <div style={{ marginBottom: "20px" }}>
          <h2>Data Provider & Product Management</h2>
        </div>

        {/* Agency */}
        {/* Add New Agency Button */}
        <div style={{ textAlign: "right", marginBottom: "20px" }}>
          <Link to="/createNewDataProvider">
            <Button color="primary" onClick={() => console.log("Button clicked")}>
              + Add New Agency
            </Button>
          </Link>
        </div>

        {/* Agency DataTable */}
        <div style={{ marginTop: "20px" }}>
          <DataTable
            title={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2 style={{ margin: "0" }}>Latest Agency</h2>
                <Link
                  to={{
                    pathname: "/dataProviderList",
                    state: { dataProviders, toggleStatus },
                  }}
                >
                  <Button
                    color="link"
                    onClick={() => console.log("View All clicked")}
                  >
                    View All
                  </Button>
                </Link>
              </div>
            }
            columns={dataColumns}
            data={dataProviders.slice(0, 5)}
            pagination={false}
            highlightOnHover={true}
          />
        </div>

        {/* Data Provider */}
        {/* Add New Data Provider Button */}
        <div style={{ textAlign: "right", marginBottom: "20px", marginTop: "20px" }}>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2 style={{ margin: "0" }}>Latest Data Provider</h2>
                <Link
                  to={{
                    pathname: "/dataProviderList",
                    state: { dataProviders, toggleStatus },
                  }}
                >
                  <Button
                    color="link"
                    onClick={() => console.log("View All clicked")}
                  >
                    View All
                  </Button>
                </Link>
              </div>
            }
            columns={dataColumns}
            data={dataProviders.slice(0, 5)}
            pagination={false}
            highlightOnHover={true}
          />
        </div>

        {/* Latest Product */}
        <div style={{ textAlign: "right", marginBottom: "20px", marginTop: "20px" }}>
          <Link to="/createNewProduct">
            <Button color="primary" onClick={() => console.log("Button clicked")}>
              + Add New Agency
            </Button>
          </Link>
        </div>

        {/* Latest Product DataTable */}
        <div style={{ marginTop: "20px", marginBottom: "100px" }}>
          <DataTable
            title={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2 style={{ margin: "0" }}>Latest Product</h2>
                <Link to="/productList">
                  <Button
                    color="link"
                    onClick={() => console.log("View All clicked")}
                  >
                    View All
                  </Button>
                </Link>
              </div>
            }
            columns={productColumns}
            data={latestProducts.slice(0, 5)}
            pagination={false}
            highlightOnHover={true}
          />
        </div>
      </DataProviderList>
    </div>
  );
};

const WrappedNEBAccountManagement = () => (
  <NEBDataProvider>
    <NEBAccountManagement />
  </NEBDataProvider>
);

export default WrappedNEBAccountManagement;
