export const Historia = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-[25%] bg-black flex items-center justify-center p-4 md:p-8">
        <img
          src="../img/icons/logoSibBranca.png"
          alt="Logo da Igreja"
          className="h-32 md:h-48"
        />
      </div>

      <div className="w-full md:w-[75%] bg-gradient-to-r from-[#571f1f] via-[#2b0717] to-black flex items-center justify-center p-4 md:p-8">
        <div className="text-white text-center md:text-left text-base sm:text-xl md:text-2xl lg:text-3xl space-y-4 px-4 sm:px-8 md:px-12 lg:px-16 py-6">
          <p className="mb-4">
            A Igreja Batista Sul começou com um grupo de irmãos se reunindo na
            casa do Pr. David Pereira. O desafio era plantar uma igreja no
            bairro Cascatinha.
          </p>

          <p className="mb-4">
            O bairro foi escolhido por ser uma localidade populosa da cidade de
            Juiz de Fora – MG, em crescimento vertical, com localização
            estratégica no município, mas com apenas outras duas igrejas
            evangélicas.
          </p>

          <p className="mb-4">
            No início de 2013, o grupo abriu as atividades ao público, alugando
            um pequeno espaço na avenida principal do bairro.
          </p>

          <p>
            A Missão Batista Sul era uma congregação da Igreja Batista da
            Vitória, na época liderada pelo Pr. Ubiratan Panizzi.
          </p>
        </div>
      </div>
    </div>
  );
};
