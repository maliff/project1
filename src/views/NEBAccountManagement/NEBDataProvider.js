import React, { createContext, useState } from "react";

export const NEBDataContext = createContext();

export const NEBDataProvider = ({ children }) => {
  const [dataProviders, setDataProviders] = useState([
    // Example data provider data
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
    // Add more data if necessary
  ]);

  const [latestProducts, setLatestProducts] = useState([
    // Product data
    {
      productId: 1,
      productCategory: "Johor Product",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
    {
      productId: 2,
      productCategory: "Melaka Energy",
      productName: "John deadd",
      productDateCreated: "9/9/9999",
    },
  ]);

  const toggleStatus = (id) => {
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
