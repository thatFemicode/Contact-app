import React from "react";
import { DashboardStyled } from "./DashboardStyled";
import { Route, useNavigate, Routes, Link } from "react-router-dom";
import New from "../../Components/New/New";
import View from "../../Components/View/View";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <div className="main">
        Dashboard
        <Link to="view">View</Link>
      </div>
      <div className="routes">
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="view" element={<View />} />
        </Routes>
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;
