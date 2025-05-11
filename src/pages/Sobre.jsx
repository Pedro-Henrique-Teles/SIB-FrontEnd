export const Sobre = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <p className="text-gray-300 mb-2">Bem vindo</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nós somos uma igreja de Jesus.
          </h1>

          <p className="mb-4">
            Vivemos isso em nossas 4 palavras-chave de visão, Encontro,
            Discípulo, Servir e Impacto. Queremos que nossa igreja encontre a
            Deus vivo, seja um lugar de discipulado, seja a comunidade local e a
            mesma criando impacto por meio de Jesus Cristo.
          </p>

          <p className="mb-6">
            Sib, localizada em Juiz de Fora, MG, é composta por um grupo diverso
            de indivíduos e famílias de todas as esferas da vida. Juntos,
            formamos uma família de igreja que anseia se tornar mais como Jesus.
            Caminhamos pela vida juntos por meio de Pequenos Grupos e grandes
            encontros aos domingos e eventos especiais.
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
