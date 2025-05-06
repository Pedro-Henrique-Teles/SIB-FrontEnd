import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import { Pagina03 } from "../components/Pagina03";
import { Pagina04 } from "../components/Pagina04";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/p3" element={<Pagina03 />} />
      <Route path="/p4" element={<Pagina04 />} />
    </Routes>

  );
};

export default AppRoutes;

