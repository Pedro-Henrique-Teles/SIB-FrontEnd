import React, { useEffect, useState } from "react";
import galeria1 from "../../public/img/galeria1.jpg";
import galeria2 from "../../public/img/galeria2.jpg";
import galeria3 from "../../public/img/galeria3.jpg";
import galeria4 from "../../public/img/galeria4.jpg";
import galeria5 from "../../public/img/galeria5.jpg";
import galeria6 from "../../public/img/galeria6.jpg";

export const Galeria = () => {
  const fotos = [galeria1, galeria2, galeria3, galeria4, galeria5, galeria6];

  const [imagensVisiveis, setImagensVisiveis] = useState(1);
  const [paginaAtual, setPaginaAtual] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setImagensVisiveis(2);
      } else {
        setImagensVisiveis(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPaginas = Math.ceil(fotos.length / imagensVisiveis);

  useEffect(() => {
    if (paginaAtual >= totalPaginas) {
      setPaginaAtual(Math.max(0, totalPaginas - 1));
    }
  }, [imagensVisiveis, totalPaginas, paginaAtual]);

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

  const goToPage = (index) => {
    setPaginaAtual(index);
  };

  return (
    <div className="bg-gradient-to-r from-[#571F1F] to-[#2B0717] py-8 md:py-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto relative">
        <button
          onClick={prevPage}
          disabled={paginaAtual === 0}
          className={`absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 
              transition-opacity duration-300 ${
                paginaAtual === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-70 hover:opacity-100 bg-black bg-opacity-50 text-white"
              }`}
          aria-label="Foto anterior"
        >
          <span className="text-xl md:text-2xl">&#10094;</span>
        </button>

        <div className="flex justify-center items-center min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden">
          <div className="flex justify-center gap-4 md:gap-8 transition-all duration-500 w-full">
            {fotosVisiveis.map((foto, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-auto">
                <img
                  src={foto}
                  alt={`Foto ${paginaAtual * imagensVisiveis + index + 1}`}
                  className="w-full h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextPage}
          disabled={paginaAtual >= totalPaginas - 1}
          className={`absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 
              transition-opacity duration-300 ${
                paginaAtual >= totalPaginas - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-70 hover:opacity-100 bg-black bg-opacity-50 text-white"
              }`}
          aria-label="Próxima foto"
        >
          <span className="text-xl md:text-2xl">&#10095;</span>
        </button>

        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalPaginas }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === paginaAtual
                  ? "bg-white scale-110"
                  : "bg-gray-400 bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Ir para página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
