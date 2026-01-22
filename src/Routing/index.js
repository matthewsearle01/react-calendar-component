import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../Components/Pages/Home";
import React from "react";

const Routing = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Routing;
