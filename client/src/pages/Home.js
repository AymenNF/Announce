import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  document.body.style.backgroundImage = "none";
  return (
    <div className="py-10 px-4 grid grid-cols-4 gap-10">
      <Link to="/details">
        <Card />
      </Link>
      <Link to="/details">
        <Card />
      </Link>
      <Link to="/details">
        <Card />
      </Link>
      <Link to="/details">
        <Card />
      </Link>
      <Link to="/details">
        <Card />
      </Link>
      <Link to="/details">
        <Card />
      </Link>
      <Link to="/details">
        <Card />
      </Link>
      <Link to="/details">
        <Card />
      </Link>
    </div>
  );
};

export default Home;
