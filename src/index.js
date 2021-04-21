import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./Components/App";
import { location } from "./Data/forecast.json";

ReactDOM.render(
  <React.StrictMode>
    <App location={location} />
  </React.StrictMode>,
  document.getElementById("root")
);
