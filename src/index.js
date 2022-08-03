import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignInForm from "./components/SignIn/SignInForm";
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
      <Route path="/" element={<SignInForm />} />
      <Route path="/app" element={
        <PrivateRoute
          Component={<App />} />
      } />
    </Routes>
  </BrowserRouter>
);