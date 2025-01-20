import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Config/redux/store.js";

import App from "./App";
import Search from "./Components2/Search.jsx";
import Body from "./Components2/Body.jsx";
import Cart from "./Components2/Cart.jsx";
import Login from "./Components2/Login.jsx";
import Register from "./Components2/Register.jsx";
import NotFound from "./Components2/NotFound.jsx";
import ProtectedRoute from "./Config/ProtectedRoute.jsx";
import Product from "./Components2/Product.jsx";
function Head() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<ProtectedRoute component={<App />} ></ProtectedRoute>}>
            <Route index element={<Body />} />
            <Route path="search" element={<Search />} />
            <Route path="cart" element={<Cart />} />
            <Route path="Product/:id" element={<Product />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Head;
