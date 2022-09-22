import React from "react";
// import {BrowserRouter as Route, Router, Routes } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<ProductListing />}></Route>
        <Route path="/product/:productId" element={<ProductDetail />}></Route>
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
};

export default App;
