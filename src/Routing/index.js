import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../Components/Pages/Home";
import React, { useEffect, useState } from "react";
import DatePicker from "../Components/Form Components/DatePicker";

const Routing = () => {
  const [input, setInput] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Routing;
