export const Sobre = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <p className="text-gray-300 mb-2">Bem vindo</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Somos uma igreja de Jesus.
          </h1>

          <p className="mb-4">
            Em obediência ao Senhor, que tem o nome que está acima de todo nome, 
            reunimo-nos com a finalidade de cumprir a missão de glorificá-lo 
            em adoração, servindo uns aos outros e à comunidade local, 
            discipulando e levando o evangelho até os confins da Terra.
          </p>

          <p className="mb-6">
            A Segunda Igreja Batista (SIB), localizada em Juiz de Fora, MG, 
            é uma família que anseia por
            caminhar unida para fazer o nome de Jesus conhecido e tem como princípio a centralidade
            na Palavra, e por consequência, adoração cristocêntrica.

          </p>
          <p className="mb-6">
            Portanto, venha crescer conosco na graça e no conhecimento e adorar ao Rei dos reis e Senhor dos senhores, dando a Ele toda honra e toda glória.
          </p>

        </div>

        <div className="w-full md:w-1/2">
          <div className="bg-gray-700 rounded w-full aspect-[4/3]">
            <img
              src="/img/igreja.jpg"
              alt="Igreja Toda"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
