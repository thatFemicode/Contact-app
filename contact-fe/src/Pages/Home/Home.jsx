import React from "react";
import { HomeStyled } from "./HomeStyled";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <HomeStyled>
      <Link to="/dashboard">DASHBOARD</Link>
    </HomeStyled>
  );
};

export default Home;
