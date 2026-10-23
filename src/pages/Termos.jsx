import React from "react";
import LegalPageLayout from "../components/ui/LegalPageLayout";
import { Shield, Info, AlertTriangle, Mail, Phone, MapPin } from "lucide-react";

export const Termos = () => {
  const sections = [
    { id: "aceitacao", title: "Aceitação dos Termos de Serviço" },
    { id: "finalidade", title: "Finalidade da Plataforma" },
    { id: "cadastro", title: "Cadastro e Responsabilidade por Credenciais" },
    { id: "conduta", title: "Conduta do Usuário e Uso Adequado" },
    { id: "propriedade", title: "Propriedade Intelectual e Direitos Autorais" },
    { id: "privacidade", title: "Privacidade e Proteção de Dados" },
    { id: "disponibilidade", title: "Disponibilidade e Limitações de Responsabilidade" },
    { id: "alteracoes", title: "Atualizações e Modificações destes Termos" },
    { id: "contato", title: "Canais de Comunicação e Suporte" },
  ];

  return (
    <LegalPageLayout
      title="Termos de Serviço"
      subtitle="Condições gerais de acesso, navegação e utilização do portal institucional e serviços da Segunda Igreja Batista em Juiz de Fora (SIB-JF)."
      updatedAt="23 de Outubro de 2026"
      sections={sections}
    >
      {/* 1. Aceitação dos Termos */}
      <section id="aceitacao" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">01.</span> Aceitação dos Termos de Serviço
        </h2>
        <p>
          Ao acessar, navegar ou utilizar qualquer página, funcionalidade ou sistema web da{" "}
          <strong>Segunda Igreja Batista em Juiz de Fora (SIB-JF)</strong>, o usuário declara ter
          lido, compreendido e concordado integralmente com todos os termos e condições
          aqui estabelecidos.
        </p>
        <p className="text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Caso você não concorde com qualquer disposição deste documento, recomendamos
          interromper imediatamente o acesso aos nossos serviços digitais.
        </p>
      </section>

      {/* 2. Finalidade da Plataforma */}
      <section id="finalidade" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">02.</span> Finalidade da Plataforma
        </h2>
        <p>
          O portal da SIB-JF destina-se a divulgar programações, eventos, ministérios, estudos,
          notícias e facilitar a comunicação institucional com membros, congregados,
          visitantes e a comunidade em geral.
        </p>
        <div className="bg-neutral-950/60 border border-neutral-800 p-4 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <Info size={16} className="text-[#a84444]" />
            <span>Principais Serviços Oferecidos:</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-neutral-400 text-sm pl-2">
            <li>Consulta de horários de cultos, eventos e atividades ministeriais;</li>
            <li>Cadastro voluntário de novos membros e visitantes ("Eu sou novo");</li>
            <li>Acesso a galerias, transmissões e materiais pastorais;</li>
            <li>Canal de contato e localização geográfica da congregação.</li>
          </ul>
        </div>
        <p className="text-neutral-400">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </section>

      {/* 3. Cadastro e Credenciais */}
      <section id="cadastro" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">03.</span> Cadastro e Responsabilidade por Credenciais
        </h2>
        <p>
          Determinadas áreas da plataforma, como a área administrativa da diretoria ou
          módulos de membros, podem requerer login e senha individualizados.
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-neutral-400 pl-2">
          <li>
            O usuário compromete-se a fornecer informações verdadeiras, exatas, atuais e
            completas no momento do preenchimento de qualquer formulário;
          </li>
          <li>
            As credenciais de acesso são de uso pessoal e intransferível, sendo de exclusiva
            responsabilidade do usuário a guarda e confidencialidade de sua senha;
          </li>
          <li>
            Qualquer atividade realizada sob suas credenciais será considerada de sua inteira
            responsabilidade até formal notificação de extravio ou comprometimento.
          </li>
        </ul>
      </section>

      {/* 4. Conduta do Usuário */}
      <section id="conduta" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">04.</span> Conduta do Usuário e Uso Adequado
        </h2>
        <p>
          O usuário concorda em utilizar as plataformas digitais da SIB-JF exclusivamente
          para propósitos lícitos, de acordo com a moral, os bons costumes cristãos e a legislação
          vigente. É estritamente vedado:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="bg-neutral-950/70 border border-neutral-800 p-3.5 rounded-lg">
            <h3 className="font-semibold text-white mb-1">Ações Não Permitidas</h3>
            <p className="text-neutral-400 text-xs">
              Inserir dados falsos, disseminar códigos maliciosos, tentar obter acesso não
              autorizado a servidores, bancos de dados ou painéis restritos.
            </p>
          </div>
          <div className="bg-neutral-950/70 border border-neutral-800 p-3.5 rounded-lg">
            <h3 className="font-semibold text-white mb-1">Respeito e Convivência</h3>
            <p className="text-neutral-400 text-xs">
              Praticar qualquer conduta difamatória, ofensiva, discriminatória ou que viole
              a privacidade e integridade dos membros e colaboradores.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Propriedade Intelectual */}
      <section id="propriedade" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">05.</span> Propriedade Intelectual e Direitos Autorais
        </h2>
        <p>
          Todo o conteúdo presente neste portal — incluindo textos, fotografias, vídeos, logomarcas,
          ícones, designs, softwares e identidade visual — é de titularidade da Segunda Igreja
          Batista de Juiz de Fora ou foi devidamente licenciado para uso institucional.
        </p>
        <p className="text-neutral-400">
          É vedada a reprodução, distribuição, modificação, exibição pública ou exploração
          comercial sem autorização prévia e expressa por escrito da liderança da SIB-JF.
        </p>
      </section>

      {/* 6. Privacidade e Proteção de Dados */}
      <section id="privacidade" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">06.</span> Privacidade e Proteção de Dados (LGPD)
        </h2>
        <p>
          O tratamento dos dados pessoais coletados por meio deste site (como nome, telefone,
          e-mail no formulário de membros) é regido pela nossa{" "}
          <a
            href="/privacidade"
            className="text-red-400 hover:text-red-300 underline underline-offset-4"
          >
            Política de Privacidade
          </a>
          , em total conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).
        </p>
        <div className="bg-[#571f1f]/20 border border-[#7a2c2c]/60 p-4 rounded-xl flex items-start gap-3">
          <Shield size={20} className="text-red-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-neutral-300">
            A SIB-JF preza pela segurança e confidencialidade das informações de cada membro e
            visitante, nunca comercializando nem cedendo dados para terceiros sem base legal.
          </p>
        </div>
      </section>

      {/* 7. Disponibilidade e Limitações */}
      <section id="disponibilidade" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">07.</span> Disponibilidade e Limitações de Responsabilidade
        </h2>
        <p>
          Embora a equipe técnica trabalhe continuamente para assegurar a melhor estabilidade
          e segurança, os serviços são disponibilizados "no estado em que se encontram",
          podendo sofrer interrupções temporárias decorrentes de manutenção ou falhas de provedores.
        </p>
        <div className="bg-neutral-950/60 border border-neutral-800 p-4 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-neutral-400">
          <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
          <p>
            A igreja não se responsabiliza por eventuais danos indiretos decorrentes de
            instabilidades de conexão, softwares de terceiros ou indisponibilidade de links externos.
          </p>
        </div>
      </section>

      {/* 8. Atualizações dos Termos */}
      <section id="alteracoes" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">08.</span> Atualizações e Modificações destes Termos
        </h2>
        <p>
          A SIB-JF reserva-se o direito de revisar, modificar ou atualizar estes Termos de
          Serviço a qualquer momento para refletir melhorias no sistema, mudanças operacionais
          ou exigências normativas.
        </p>
        <p className="text-neutral-400">
          A versão revisada sempre exibirá a data da última atualização no topo desta página.
          O uso continuado dos serviços após qualquer modificação constituirá aceite pleno das
          novas diretrizes.
        </p>
      </section>

      {/* 9. Canais de Contato e Disposições */}
      <section id="contato" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">09.</span> Canais de Comunicação e Suporte
        </h2>
        <p>
          Em caso de dúvidas, esclarecimentos ou sugestões relacionadas a estes Termos de
          Serviço, você pode entrar em contato diretamente com a nossa secretaria e liderança:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center gap-3">
            <Phone size={18} className="text-[#a84444] shrink-0" />
            <div className="text-xs">
              <span className="block text-neutral-400">Telefone</span>
              <strong className="text-white">(32) 3215-9276</strong>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center gap-3">
            <Mail size={18} className="text-[#a84444] shrink-0" />
            <div className="text-xs">
              <span className="block text-neutral-400">E-mail Institucional</span>
              <strong className="text-white">contato@sibjf.org.br</strong>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center gap-3">
            <MapPin size={18} className="text-[#a84444] shrink-0" />
            <div className="text-xs">
              <span className="block text-neutral-400">Localização</span>
              <strong className="text-white">Passos, Juiz de Fora - MG</strong>
            </div>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
};

export default Termos;
