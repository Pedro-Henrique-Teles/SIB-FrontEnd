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
        text="Queremos ser uma igreja centrada na Escritura, composta por uma 
      liderança biblicamente qualificada e por uma membresia saudável 
      envolvida na expansão do Reino de Deus."
        background="GradianteVinho"
      />
      <Card
        title="Missão"
        icon={iconeMissao}
        text="Existimos para agradar a Deus sendo uma comunidade de discípulos 
      de Cristo que vive a Escritura e compartilha o Evangelho."
        background="black"
      />
    </div>
  );
};
