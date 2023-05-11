import React from "react";
import Card from "../components/Card";

const Home = (props) => {
  return props.isNotLoggedIn ? (
    <div></div>
  ) : (
    <div className="py-10 px-4 grid grid-cols-4 gap-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Home;
