// NEBDataProvider.js
import React, { createContext, useState } from "react";

export const NEBDataContext = createContext();

export const NEBDataProvider = ({ children }) => {
  const [dataProviders, setDataProviders] = useState([
    // ...data provider data
    {
      id: 1,
      agency: "Sabah Data Provider",
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

  const [latestProducts, setLatestProducts] = useState([
    // Product data
    {
      productId: 1,
      productCatagory: "johor Product",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 2,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 3,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 4,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 5,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 6,
      productCatagory: "Johor Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 7,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 8,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 9,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 10,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 11,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 12,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 13,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 14,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 15,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 16,
      productCatagory: "Johor Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 17,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 18,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 19,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 20,
      productCatagory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
  ]);

  const toggleStatus = (id) => {
    // Implement the logic to toggle the status
    setDataProviders((prevDataProviders) =>
      prevDataProviders.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const contextValue = {
    latestProducts,
    setLatestProducts,
    dataProviders,
    setDataProviders,
    toggleStatus,
  };

  return (
    <NEBDataContext.Provider value={contextValue}>
      {children}
    </NEBDataContext.Provider>
  );
};

//export { NEBDataContext, NEBDataProvider };
