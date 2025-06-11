import { Button } from "@heroui/react";

export const PaginaPrincipal = ({scrollToSection, refs}) => {
  return (
    <section className="min-h-screen md:h-96 flex flex-col items-center justify-center bg-gradient-to-r from-[#571f1f] to-black text-white p-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-10">
        Deus é por <br className="md:hidden" /> você,{" "}
        <br className="md:hidden" /> e nós também.
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-10 w-full max-w-4xl">
        <Button className="bg-white text-black font-bold w-full md:w-48 lg:w-60" onPress={() => scrollToSection(refs.programacaoRef)}>
          Cultos
        </Button>
        <Button className="bg-white text-black font-bold w-full md:w-48 lg:w-60" onPress={() => scrollToSection(refs.contatoRef)}>
          Endereço
        </Button>
        <Button className="bg-white text-black font-bold w-full md:w-48 lg:w-60">
          Doação
        </Button>
      </div>
    </section>
  );
};
