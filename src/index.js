import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main"
import Registration from "./components/SignIn/Registration";
import SignIn from "./components/SignIn/SignIn";
import App from "./App";
import PrivateRoute from "./PrivateRoute";

import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="registration" element={<Registration />} />
      <Route path="signIn" element={<SignIn />} />

      <Route path="/app" element={
        <PrivateRoute
          Component={<App />} />
      } />
    </Routes>
  </BrowserRouter>
);