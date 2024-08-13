import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customers/components/pages/Homepages/HomePage";
import Cart from "../customers/components/Cart/Cart";
import Product from "../customers/components/Product/Product";
import Navigation from "../customers/components/Navigations/Navigation";
import Prodcutdetails from "../customers/components/ProductDetails/Prodcutdetails";
import Footer from "../customers/components/Footer/Footer";
import OrderDetails from "../customers/components/Order/OrderDetails";
import Order from "../customers/components/Order/Order";
import Checkout from "../customers/components/Checkout/Checkout";
import Profile from "../customers/components/Profile/Profile";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
      <Route path="/login" element={<HomePage />}></Route>
      <Route path="/register" element={<HomePage />}></Route>
                 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/user/profile" element={<Profile />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} ></Route>
        <Route path="/product/:productId" element={<Prodcutdetails />}></Route>
        <Route path="/checkout" element={ <Checkout />}></Route>
        <Route path="/account/order" element={ <Order />}></Route>
        <Route path="/account/order/:orderId" element={ <OrderDetails />} ></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
