import React from "react";
import Card from "../components/Card";
// REMOVA ESSES IMPORTS:
// import iconeVisao from "../../public/img/icons/iconeVisao.png";
// import iconeMissao from "../../public/img/icons/iconeMissao.png";

export const Objetivos = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Card
        title="Visão"
        // CORREÇÃO: Use a string do caminho
        icon={"/img/icons/iconeVisao.png"}
        text="Texto Pendente"
        background="GradianteVinho"
      />
      <Card
        title="Missão"
        // CORREÇÃO: Use a string do caminho
        icon={"/img/icons/iconeMissao.png"}
        text="Texto Pendente"
        background="black"
      />
    </div>
  );
};