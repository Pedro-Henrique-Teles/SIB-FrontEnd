import React, { useState } from 'react';
import Card from './Card';

import iconeValores from "../assets/iconeValores.png";
import segundofotoofc from "/segundofotoofc.jpg";
import primeirafotoofc from "/primeirafotoofc.jpg";
import terceirafotoofc from "/terceirafotoofc.jpg";


export const Pagina04 = () => {
  const fotos = [
    segundofotoofc,
    primeirafotoofc,
    terceirafotoofc
  ];

  const imagensVisiveis = 2;
  const totalPaginas = Math.ceil(fotos.length / imagensVisiveis);
  const [paginaAtual, setPaginaAtual] = useState(0);

  const fotosVisiveis = fotos.slice(
    paginaAtual * imagensVisiveis,
    paginaAtual * imagensVisiveis + imagensVisiveis
  );

  const nextPage = () => {
    if (paginaAtual < totalPaginas - 1) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const prevPage = () => {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  return (
    <>
      <Card
        title="Valores"
        icon={iconeValores}
        text={'• Liderança Crível – Igreja Expositiva\n• Membresia Saudável – Igreja Missional'}
        background="white"
      />

      <div className="bg-gradient-to-r from-[#571F1F] to-[#2B0717] py-10 px-6">
        <div className="max-w-7xl mx-auto relative overflow-hidden">
          <button
            onClick={prevPage}
            disabled={paginaAtual === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10
              ${paginaAtual === 0 ? 'cursor-not-allowed' : 'bg-black bg-opacity-50 text-white'}`}
          >
            &#10094;
          </button> 
          <div className="flex justify-center gap-8 transition-all duration-500">
            {fotosVisiveis.map((foto, index) => (
              <img
                key={index}
                src={foto}
                alt={`Foto ${paginaAtual * imagensVisiveis + index + 1}`}
                className="w-[350px] aspect-[10/15] object-contain rounded-lg shadow-md bg-black"
              />
            ))}
          </div>
          <button
            onClick={nextPage}
            disabled={paginaAtual >= totalPaginas - 1}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10
              ${paginaAtual >= totalPaginas - 1 ? 'cursor-not-allowed' : 'bg-black bg-opacity-50 text-white'}`}
          >
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
};
