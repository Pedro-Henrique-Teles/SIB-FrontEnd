export default function HistoriaIgreja() {
    return (
      <div className="flex h-screen">
        <div className="w-[25%] bg-black flex items-center justify-center p-8">
          <img src="./cabecalhoImgs/logoSibBranca.png" alt="Logo da Igreja" className="h-48" />
        </div>
        <div className="w-[75%] bg-gradient-to-r from-[#571f1f] via-[#2b0717] to-black flex items-center justify-center p-8">
            <p className="text-white text-center text-3xl leading-relaxed space-y-4 w-full px-16">
                <span>
                    A Igreja Batista Sul começou com um grupo de irmãos se reunindo na casa do Pr. David Pereira. 
                    O desafio era plantar uma igreja no bairro Cascatinha.
                </span>

                <span>
                    O bairro foi escolhido por ser uma localidade populosa da cidade de Juiz de Fora – MG, em crescimento vertical, 
                    com localização estratégica no município, mas com apenas outras duas igrejas evangélicas.
                </span>

                <span>
                    No início de 2013, o grupo abriu as atividades ao público, alugando um pequeno espaço na avenida principal do bairro.<br />
                </span>

                <span>
                     A Missão Batista Sul era uma congregação da Igreja Batista da Vitória, na época liderada pelo Pr. Ubiratan Panizzi.
                </span>
            </p>
        </div>
      </div>
    );
}