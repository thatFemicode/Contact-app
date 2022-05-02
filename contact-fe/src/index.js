import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./Styling/Layout/GlobalStyles";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <CustomCursor />
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
