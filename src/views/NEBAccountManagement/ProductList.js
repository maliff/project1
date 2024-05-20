import React, { useState, useContext } from "react";
import DataTable from "react-data-table-component";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

import LteContent from "../../components/LteContent";
import LteContentHeader from "../../components/LteContentHeader";
import { NEBDataContext } from "../NEBAccountManagement/NEBDataProvider";

const ProductList = () => {
  const { latestProducts } = useContext(NEBDataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const productColumns = [
    {
      name: "No",
      selector: (row) => row.productId,
      sortable: true,
    },
    {
      name: "Product Category",
      selector: (row) => row.productCatagory,
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

  // Calculate the range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = latestProducts.slice(startIndex, endIndex);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle the change in the number of items per page
  const handleChangeRowsPerPage = (newPerPage, currentPage) => {
    setItemsPerPage(newPerPage);
    setCurrentPage(currentPage);
  };

  return (
    <>
      <LteContentHeader title="Product Management" />
      <LteContent>
        <div>
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
              <Button
                color="primary"
                onClick={() => console.log("Button clicked")}
              >
                + Add New Product
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
                  <h2 style={{ margin: "0" }}>Product List</h2>
                </div>
              }
              columns={productColumns}
              data={currentItems}
              pagination
              paginationServer
              paginationPerPage={itemsPerPage}
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
              paginationTotalRows={latestProducts.length}
              onChangePage={handlePageChange}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              paginationDefaultPage={currentPage}
              highlightOnHover={true}
            />
          </div>
        </div>
      </LteContent>
    </>
  );
};

export default ProductList;
