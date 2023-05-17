import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Announce from "./pages/Announce";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import AdminDashboard from "./pages/AdminDashboard";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/announce" element={<Announce />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
