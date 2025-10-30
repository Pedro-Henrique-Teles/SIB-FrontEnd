import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"; // Caminho ajustado
import Dashboard from "../pages/admin/Dashboard";
import TabelaMembros from "../pages/admin/TabelaMembros";
import AdminLayout from "../layouts/AdminLayout"; // Importando o novo layout

// Importe suas outras páginas de admin aqui quando existirem
// import Eventos from "../pages/admin/Eventos";
// import Financeiro from "../pages/admin/Financeiro";
// import Relatorios from "../pages/admin/Relatorios";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rota do Site Principal */}
      <Route path="/" element={<Home />} />

      {/* Rota "Pai" do Admin Layout */}
      <Route path="/admin" element={<AdminLayout />}>
        {/* Rotas "Filhas" que aparecem dentro do layout */}
        <Route index element={<Dashboard />} /> {/* Rota /admin */}
        <Route path="tabela" element={<TabelaMembros />} /> {/* Rota /admin/tabela */}
        
        {/* Descomente suas outras rotas de admin aqui */}
        {/* <Route path="eventos" element={<Eventos />} /> */}
        {/* <Route path="financeiro" element={<Financeiro />} /> */}
        {/* <Route path="relatorios" element={<Relatorios />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;