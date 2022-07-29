import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main"

import { BrowserRouter as Router, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
