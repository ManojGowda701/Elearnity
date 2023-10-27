import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "../LoginSignup/LoginSignup";
import Header from "../Dashboard/Header";

function RouterComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default RouterComponent;
