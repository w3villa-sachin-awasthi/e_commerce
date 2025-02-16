import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Config/redux/store.js";
import Search from "./Components2/Search.jsx";
import Body from "./Components2/Body.jsx";
import Cart from "./Components2/Cart.jsx";
import Login from "./Components2/Login.jsx";
import Register from "./Components2/Register.jsx";
import NotFound from "./Components2/NotFound.jsx";
import ProtectedRoute from "./Config/ProtectedRoute.jsx";
import Product from "./Components2/Product.jsx";
import App from "./App";
function Head() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Login />}  />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<ProtectedRoute component={<App />} ></ProtectedRoute>}>
            <Route path="" element={<Body />} />
            <Route path="search" element={<Search />} />
            <Route path="cart" element={<Cart />} />
            <Route path="Product/:id" element={<Product />} />
          </Route>
       
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Head;
