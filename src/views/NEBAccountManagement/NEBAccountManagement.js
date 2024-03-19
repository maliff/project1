import React from 'react';
import DataTable from 'react-data-table-component';
import '../../App.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

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
    {/* Account Management Section */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>Account Management</h2>
      <Link to="/createNewDataProvider">
      <Button color="primary" onClick={() => console.log('Button clicked')}>
        + Add New Data Provider
      </Button>
      </Link>
    </div>

    {/* Account Management DataTable */}
    <div style={{ marginTop: '20px' }}>
      <DataTable
        className='table'
        title="Latest Data Provider" 
        columns={columns}
        data={data}
        pagination={true}
        highlightOnHover={true}
      />
    </div>

    {/* Latest Product Section */}
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '20px' }}>
    <Link to="/createNewProduct">
      <Button color="primary" onClick={() => console.log('Button clicked')}>
      + Add New Product
      </Button>
    </Link>
    </div>

    {/* Latest Product DataTable */}
    <div style={{ marginTop: '20px'}}>
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
