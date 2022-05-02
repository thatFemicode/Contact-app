import React, { useState } from "react";
import { HomeStyled } from "./HomeStyled";
import { Link } from "react-router-dom";

const Home = () => {
  const [files, setFiles] = useState([]);
  return (
    <HomeStyled>
      <Link to="/dashboard">DASHBOARD</Link>
    </HomeStyled>
  );
};

export default Home;
