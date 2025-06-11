import React from "react";
import Card from "../components/Card";
import iconeVisao from "../../public/img/icons/iconeVisao.png";
import iconeMissao from "../../public/img/icons/iconeMissao.png";

export const Objetivos = () => {
  return (
<div className="grid grid-cols-1 md:grid-cols-2">
<Card
        title="Visão"
        icon={iconeVisao}
        text="Texto Pendente"
        background="GradianteVinho"
      />
      <Card
        title="Missão"
        icon={iconeMissao}
        text="Texto Pendente"
        background="black"
      />
    </div>
  );
};
