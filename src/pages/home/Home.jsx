import { Historia } from "../Historia";
import { PaginaPrincipal } from "../PaginaPrincipal";
import { Cabecalho } from "../../components/ui/Cabecalho";
import { Sobre } from "../Sobre";
import { FormularioMembros } from "../FormularioMembros";
import { MapaIgreja } from "../MapaIgreja";
import { Programacao } from "../Programacao";
import { useRef } from "react";
import { Galeria } from "../Galeria";
function Home() {
  const irParaOTopo = () => window.scrollTo(0, 0);

  const programacaoRef = useRef(null);
  const sobreRef = useRef(null);
  const visaoRef = useRef(null);
  const galeriaRef = useRef(null);
  const valoresRef = useRef(null);
  const historiaRef = useRef(null);
  const formRef = useRef(null);
  const contatoRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Cabecalho
        irParaOTopo={irParaOTopo}
        scrollToSection={scrollToSection}
        refs={{
          programacaoRef,
          sobreRef,
          visaoRef,
          galeriaRef,
          valoresRef,
          historiaRef,
          formRef,
          contatoRef,
        }}
      />

      <PaginaPrincipal 
        irParaOTopo={irParaOTopo}
        scrollToSection={scrollToSection}
        refs={{
          programacaoRef,
          sobreRef,
          visaoRef,
          galeriaRef,
          valoresRef,
          historiaRef,
          formRef,
          contatoRef,
        }}
      />
      <div ref={programacaoRef}>
        <Programacao />
      </div>
      <div ref={sobreRef}>
        <Sobre />
      </div>
      <div ref={galeriaRef}>
        <Galeria />
      </div>
      <div ref={historiaRef}>
        <Historia />
      </div>
      <div ref={formRef}>
        <FormularioMembros />
      </div>
      <div ref={contatoRef}>
      <MapaIgreja />
      </div>
    </div>
  );
}
export default Home;
