import React from "react";
import "./index.css";
import CrudOp from "./components/CrudOp";
import Maincomp from "./components/Maincomp";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="min-h-screen bg-blue-200">
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/add" element={<CrudOp />} />
      </Routes>
    </div>
  );
};

export default App;
