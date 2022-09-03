import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import UsersTable from "./components/UsersTable";
import CheckoutComponet from "./components/CheckoutComponet";
import LoginComponent from "./components/LoginComponent";

const App = () => {
  const [data, setData]: any = useState([]);
  const [products, setProducts]: any = useState([]);
  const [users, setUsers]: any = useState("");
  const [userInfo, setUserInfo]: any = useState(localStorage.getItem("user"));

  useEffect(() => {
    axios.get("http://localhost:3001/farma").then((res) => {
      setData(res.data);
    });

    axios.get("http://localhost:3001/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  console.log(userInfo);

  return (
    <>
      {userInfo !== null ? (
        <>
          <Navbar data={data} setProducts={setProducts} products={products} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Table
                    setData={setData}
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
                  <UsersTable users={users} />
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  <CheckoutComponet
                    setProducts={setProducts}
                    products={products}
                  />
                </>
              }
            />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LoginComponent setUserInfo={setUserInfo} />
                </>
              }
            />
            <Route
              path="/:id"
              element={
                <>
                  <LoginComponent setUserInfo={setUserInfo} />
                </>
              }
            />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
