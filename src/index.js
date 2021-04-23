import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./Components/App";
import { location, forecasts } from "./Data/forecast.json";

ReactDOM.render(
  <React.StrictMode>
    <App location={location} forecasts={forecasts} />
  </React.StrictMode>,
  document.getElementById("root")
);
