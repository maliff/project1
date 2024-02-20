import React from 'react'
import { Row, Col } from 'react-bootstrap';
import '../../App.css';
import DataTableFuelBalance from 'react-data-table-component';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DataTrendAnalysis from './DataTrendAnalysis';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FuelBalanceReport() {

  const columns = [
    {
        name: 'No.',
        selector: row => row.id,
        sortable: true
    },
    {
        name: 'Product',
        selector: row => row.product
    },
    {
        name: 'F1 (Opening Stock)',
        selector: row => row.openingStock
    },
    {
        name: 'F2 (Local Purchase)',
        selector: row => row.localPurchase,
        sortable: true
    },
    {
        name: 'F2 (Foreign Import)',
        selector: action => action.foreignImport,
    }
];

const dataFuel = [
    {
        id: 1,
        product: 'Aviatiaon Gasoline (AV GAS)',
        openingStock: '40,675.637',
        localPurchase: '1,675.637',
        foreignImport: '2,340.890'
    },
    {
        id: 2,
        product: 'Bitumen/Asphalt/Mexphaite',
        openingStock: '2,340.890',
        localPurchase: '2,340.890',
        foreignImport: '11,233.234'
    },
    {
        id: 3,
        product: 'Butane',
        openingStock: '1,675.637',
        localPurchase: '11,233.234',
        foreignImport: '1,675.637'
    },
    {
        id: 4,
        product: 'Diesel',
        openingStock: '11,233.234',
        localPurchase: '1,675.637',
        foreignImport: '2,340.890'
    },
    {
        id: 5,
        product: 'Aviation Gasoline (AV GAS)',
        openingStock: '23,890.798',
        localPurchase: '2,340.890',
        foreignImport: '11,233.234'
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
    <div className='p-3 bg-light'>
      <div className='container-fluid'>
          <h1 className='text-primary'>Fuel Balance Report</h1>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title mb-4">Fuel Balance Report - Q1 2023 <span className="badge bg-warning"><small>Pending for Approval</small></span></h5>
              <br /><br />
              <Row className="mb-2">
                <Col className="fw-bold text-secondary">AGENCY</Col>
                <Col className="fw-bold text-secondary">DATA PROVIDER</Col>
                <Col className="fw-bold text-secondary">SUBMITTED DATE</Col>
                <Col className="fw-bold text-secondary">QUARTER</Col>
                <Col className="fw-bold text-secondary">YEAR</Col>
              </Row>
              <Row className="mb-5">
                <Col>Tenaga Nasional</Col>
                <Col>Julian Cassablancas</Col>
                <Col>30/4/2023</Col>
                <Col>Quarter 1</Col>
                <Col>2023</Col>
              </Row>
              <DataTableFuelBalance columns={columns} data={dataFuel} fixedHeader customStyles={headerStyle}></DataTableFuelBalance>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3 mt-4"
              >
                <Tab eventKey="dataTrendAnalysis" title="Data Trend Analysis">
                  <div className='bg-white'>
                  <DataTrendAnalysis />  
                  </div>
                </Tab>
                <Tab eventKey="plantEfficiency" title="Plant Efficiency">
                  Tab content for Profile
                </Tab>
              </Tabs>
              <div className="mt-4 float-end">
                <Button variant="outline-primary">Request for Amendment</Button>{' '}
                <Button variant="primary">Approve</Button>{' '}
              </div>
            </div>
          </div>
          <div class="card mt-3">
            <div class="card-body">
              <h5 class="card-title mb-4">Remarks</h5>
              <br /><br />
              <Card className='mb-2'>
                <Card.Body className='bg-light'>
                    <div>
                      <Card.Title>
                        <div className="d-flex align-items-center">
                          <img src="./images/profile-image-1.jpg" alt="Profile" className="rounded-circle mr-3" style={{ width: "50px", height: "50px" }} />
                          <div>
                            <h5 className='fw-bold mb-0 p-1'>M Amirul Ezekiel</h5>
                            <small className='text-secondary p-1'>Admin</small>
                          </div>
                        </div>
                      </Card.Title>
                      <Card.Text> 
                      <p className='mt-3 fw-bold text-secondary mb-2'>1 May 2023 09:30am</p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                      make a type specimen book.
                      </Card.Text>
                    </div>
                </Card.Body>
              </Card>
              <Card className='mb-2'>
                <Card.Body className='bg-light'>
                    <div>
                      <Card.Title>
                        <div className="d-flex align-items-center">
                          <img src="./images/profile-image-2.jpg" alt="Profile" className="rounded-circle mr-3" style={{ width: "50px", height: "50px" }} />
                          <div>
                            <h5 className='fw-bold mb-0 p-1'>Julian Cassablancas</h5>
                            <small className='text-secondary p-1'>Data Provider</small>
                          </div>
                        </div>
                      </Card.Title>
                      <Card.Text> 
                      <p className='mt-3 fw-bold text-secondary mb-2'>1 May 2023 10:30am</p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s.
                      </Card.Text>
                    </div>
                </Card.Body>
              </Card>
              <InputGroup>
                <Form.Control className='p-1'
                  placeholder="Type here..."
                />
                <Button variant="primary">Add Remaks</Button>
              </InputGroup>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FuelBalanceReport