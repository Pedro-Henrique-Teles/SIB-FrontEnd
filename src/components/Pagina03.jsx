import React from 'react';
import Card from './Card';
import iconeVisao from "../assets/iconeVisao.png";
import iconeMissao from "../assets/iconeMissao.png";




export const Pagina03 = () => {
  return (
   
    <>
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
    </>
  );
};


