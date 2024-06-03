import React, { useState } from "react";
import {
  Card,
  Table,
  Badge,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomPagination from "../../components/CustomPagination";

// Data
const data = [
  {
    id: "1",
    productcategory: "TNB Jimah East",
    productname: "Utility & IPP",
    date_created: "25.02.2024",
  },
  {
    id: "2",
    productcategory: "TNB Jimah East",
    productname: "Utility & IPP",
    date_created: "25.02.2024",
  },
  {
    id: "3",
    productcategory: "TNB Jimah East",
    productname: "Utility & IPP",
    date_created: "25.02.2024",
  },
  {
    id: "4",
    productcategory: "TNB Jimah East",
    productname: "Utility & IPP",
    date_created: "25.02.2024",
  },
  // Add more data as needed
];

const ITEMS_PER_PAGE = 4; // Adjust this number as needed

function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the data to be displayed on the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  // Calculate the number of items currently displayed
  const numberOfItemsDisplayed = currentData.length;
  const totalItems = data.length;

  return (
    <>
      <style>
        {`
          .custom-pagination-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px; /* Adjust the gap as needed */
          }
        `}
      </style>
      <Card className="mb-3" style={{ borderRadius: "20px" }}>
        <Card.Header className="d-flex flex-column align-items-start">
          <div className="d-flex justify-content-between w-100 mb-3">
            <Card.Title as="h2" className="mb-0">
              <b>Product List</b>
            </Card.Title>
            <Link to="/createProduct">
              <Button variant="primary" className="mb-2 mb-md-0">
                + Add New Product
              </Button>
            </Link>
          </div>
          <div className="d-flex justify-content-between w-100">
            <Row className="w-100">
              <Col md={6}>
                <InputGroup>
                  <FormControl
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                </InputGroup>
              </Col>
            </Row>
          </div>
        </Card.Header>
        <Card.Body className="p-3" style={{ overflowX: "auto" }}>
          <Table striped bordered hover size="sm">
            <thead className="bg-secondary text-white">
              <tr>
                <th>No</th>
                <th>Product Category</th>
                <th>Product Name</th>
                <th>Date Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.productcategory}</td>
                  <td>{d.productname}</td>
                  <td>{d.date_created}</td>
                  <td>
                    <Link
                      to={`/fuelBalanceReportDP/${d.id}`}
                      className="btn btn-link"
                      style={{ width: "80px" }}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="custom-pagination-container">
            <span>
              Showing {numberOfItemsDisplayed} out of {totalItems}
            </span>
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductList;
