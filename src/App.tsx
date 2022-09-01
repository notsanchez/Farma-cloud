import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import UsersTable from "./components/UsersTable";

const App = () => {
  const [data, setData]: any = useState([]);
  const [products, setProducts]: any = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/farma").then((res) => {
      setData(res.data);
    });
  }, []);

  console.log(products);

  return (
    <>
      <Navbar data={data} setProducts={setProducts} products={products} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Table
                data={data}
                setProducts={setProducts}
                products={products}
              />
            </>
          }
        />
        <Route
          path="/create"
          element={
            <>
              <AddProduct />
            </>
          }
        />
        <Route
          path="/users"
          element={
            <>
              <UsersTable />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
