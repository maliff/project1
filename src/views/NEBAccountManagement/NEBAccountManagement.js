import React from 'react';
import DataTable from 'react-data-table-component';
import '../../App.css';
import { Button } from 'reactstrap';
// import { Row } from 'reactstrap';
// import { Navigate } from "react-router-dom";

const NEBAccountManagement = () => {
    const data = [
         { 
            id: 1,
            agency: 'Sabah Energy',
            name: 'John Doe', 
            dateCreated: '12/12/1212',
            status:'active',
        },
        { 
            id: 2,
            agency: 'Sarawak Energy',
            name: 'Ace fillip', 
            dateCreated: '11/11/1111',
            status:'active',
        },
        { 
            id: 3,
            agency: 'Johor Energy',
            name: 'John Allive', 
            dateCreated: '10/10/1010',
            status:'active',
        },
        { 
            id: 4,
            agency: 'Melaka Energy',
            name: 'John deadd', 
            dateCreated: '9/9/9999',
            status:'active',
        },
        
    ];

  const columns = [
    {
      name: 'No',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Agency',
      selector: row => row.agency,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
        name: 'Date Created',
        selector: row => row.dateCreated,
        sortable: true,
      },
      {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
      },
  ];

  return (
    <div>
      {/* Latest data provider */}
      <h2>Account Management</h2>

      <Button color="primary" onClick={() => console.log('Button clicked')}>
        Your Button
      </Button>

      <div style={{ marginTop: '20px' }}>
        <DataTable
          title="Latest Data Provider"
          columns={columns}
          data={data}
          pagination={true}
          highlightOnHover={true}
        />
      </div>

      {/* Latest product */}

      <Button color="primary" onClick={() => console.log('Button clicked')}>
        Your Button
      </Button>

      <div style={{ marginTop: '20px' }}>
        <DataTable
          title="Latest Product"
          columns={columns}
          data={data}
          pagination={true}
          highlightOnHover={true}
        />
      </div>
    </div>
  );
};

export default NEBAccountManagement;
