import React, {useState} from "react";
import DataTable from "react-data-table-component";
import { Button } from "reactstrap";
import Switch from "react-switch";
import { Link, useLocation } from "react-router-dom";


const DataProviderList = (props) => {

  
  // const location = useLocation();
  const [dataProviders, setDataProviders] = useState([
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
    {
      id: 5,
      agency: "Melaka Energy",
      name: "John deadd",
      dateCreated: "9/9/9999",
      status: false,
    },
    {
      id: 6,
      agency: "Melaka Energy",
      name: "John deadd",
      dateCreated: "9/9/9999",
      status: false,
    },
  ]);
  // const { dataProviders } = location.state || { dataProviders: [] };
  // console.log(dataProviders);

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
            onChange={() => props.toggleStatus(row.id)}
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

  return (
    <div>
      <h2>All Data Providers</h2>
      <DataTable
        title={<h2>All Data Providers</h2>}
        columns={dataColumns}
        data={dataProviders}
        highlightOnHover={true}
      />
    </div>
  );
}

export default DataProviderList