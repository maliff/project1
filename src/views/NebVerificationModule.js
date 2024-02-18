import React from 'react';
import DataTable from 'react-data-table-component';
import '../App.css';

function NebVerificationModule() {
    const columns = [
        {
            name: 'No.',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Agency',
            selector: row => row.agency
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
            cell: row => (
                <div style={{
                    backgroundColor: row.status === 'Approved' ? '#DFF9EA' : 
                    row.status === 'Pending for Approval' ? '#FBF0CA' : 
                    row.status === 'Not Submitted' ? '#E7E7E7' : '#FEE2E3',
                    color: row.status === 'Approved' ? '#7EB797' : 
                    row.status === 'Pending for Approval' ? '#CE7411' : 
                    row.status === 'Not Submitted' ? '#7E7E7E' : '#BE272C',
                    borderRadius: '5px',
                    padding: '8px'
                }}>
                    {row.status}
                </div>
            )
        },
        {
            name: 'Approver',
            selector: row => row.approver,
            sortable: true
        },
        {
            name: 'Action',
            selector: row => row.action
        }
    ];

    const data = [
        {
            id: 1,
            agency: 'Tenaga Nasional',
            status: 'Not Submitted',
            approver: 'N/A',
            action: 'View Form | Download'
        },
        {
            id: 2,
            agency: 'Sabah Energy',
            status: 'Pending for Amendment',
            approver: 'N/A',
            action: 'View Form | Download'
        },
        {
            id: 3,
            agency: 'Sarawak Energy',
            status: 'Pending for Approval',
            approver: 'N/A',
            action: 'View Form | Download'
        },
        {
            id: 4,
            agency: 'Tenaga Nasional',
            status: 'Pending for Approval',
            approver: 'N/A',
            action: 'View Form | Download'
        },
        {
            id: 5,
            agency: 'Sabah Energy',
            status: 'Approved',
            approver: 'N/A',
            action: 'View Form | Download'
        },
    ];

    const headerStyle = {
        headRow: {
            style: {
                backgroundColor: '#EEF7FF',
                color: '#333DCF',
                fontWeight: 'bold',
            }
        },
    };

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h1>NEB Verification Module</h1>
            </div>
            <div className="main-search">
                <div>
                    <label htmlFor="year">Year </label>
                    <select id="year">
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="quarter">Quarter </label>
                    <select id="quarter">
                        <option value="q1">Q1</option>
                        <option value="q2">Q2</option>
                        <option value="q3">Q3</option>
                        <option value="q4">Q4</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="region">Region </label>
                    <select id="region">
                        <option value="all">All</option>
                    </select>
                </div>
            </div>
            <div className='main-card'>
                <div className='main-title-card'>
                    <h3>Quarter 1</h3>
                </div>
                <div>
                    <DataTable columns={columns} data={data} fixedHeader pagination customStyles={headerStyle}></DataTable>
                </div>
            </div>
        </main>
    )
}

export default NebVerificationModule;
