import React from "react";
import Home from "./pages/Home";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-bodyFont">
      <Header isNotLoggedIn={true} />
      <Home isNotLoggedIn={true} />
      <Footer isNotLoggedIn={true} />
    </div>
  );
}

export default App;
