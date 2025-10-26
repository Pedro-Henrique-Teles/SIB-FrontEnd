import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Dashboard from "../pages/admin/Dashboard";
import TabelaMembros from "../pages/admin/TabelaMembros";

const AppRoutes = () => {
  return (
    <Routes>
 
      <Route path="/" element={<Home />} />

      <Route path="/admin" element={<Dashboard />}>
        <Route path="tabela" element={<TabelaMembros />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
