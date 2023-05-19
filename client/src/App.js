import React from "react";
import Home from "./pages/Home";
import "./App.css";
import Landing from "./pages/Landing";
import ProductDetails from "./pages/ProductDetails";
import StarRating from "./components/StarRating";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <div className="font-bodyFont w-screen overflow-hidden">
      <Landing />
    </div>
  );
}

export default App;
