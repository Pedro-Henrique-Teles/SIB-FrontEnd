import React from "react";
import LegalPageLayout from "../components/ui/LegalPageLayout";
import { ShieldCheck, Lock, UserCheck, Eye, Database, Mail, Phone, MapPin } from "lucide-react";

export const Privacidade = () => {
  const sections = [
    { id: "introducao", title: "Compromisso Institucional e LGPD" },
    { id: "dados-coletados", title: "Quais Dados Pessoais Coletamos" },
    { id: "finalidade", title: "Finalidades do Tratamento de Dados" },
    { id: "compartilhamento", title: "Compartilhamento de Dados com Terceiros" },
    { id: "seguranca", title: "Medidas de Segurança da Informação" },
    { id: "direitos", title: "Seus Direitos como Titular de Dados" },
    { id: "cookies", title: "Cookies e Tecnologias de Navegação" },
    { id: "retencao", title: "Tempo de Retenção e Descarte Seguro" },
    { id: "contato-dpo", title: "Canal do Encarregado de Proteção de Dados (DPO)" },
  ];

  return (
    <LegalPageLayout
      title="Política de Privacidade"
      subtitle="Saiba como a Segunda Igreja Batista de Juiz de Fora (SIB-JF) coleta, utiliza, armazena e protege os seus dados pessoais em estrita conformidade com a LGPD."
      updatedAt="23 de Outubro de 2026"
      sections={sections}
    >
      {/* 1. Introdução e LGPD */}
      <section id="introducao" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">01.</span> Compromisso Institucional e LGPD
        </h2>
        <p>
          A <strong>Segunda Igreja Batista em Juiz de Fora (SIB-JF)</strong> reconhece a
          importância da privacidade e da proteção de dados pessoais de todos os seus membros,
          frequentadores, visitantes e colaboradores.
        </p>
        <p className="text-neutral-400">
          Esta Política de Privacidade foi elaborada em estrita conformidade com a{" "}
          <strong>Lei Geral de Proteção de Dados Pessoais (Lei Federal nº 13.709/2018 - LGPD)</strong>,
          visando a transparência no tratamento de dados e garantindo a você o controle sobre
          as suas informações pessoais em qualquer canal ou serviço da nossa congregação.
        </p>
        <div className="bg-[#571f1f]/20 border border-[#7a2c2c]/60 p-4 rounded-xl flex items-start gap-3">
          <ShieldCheck size={22} className="text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-neutral-300">
            A SIB-JF não comercializa, não aluga e não compartilha seus dados pessoais para
            fins mercadológicos ou de publicidade com terceiros sob nenhuma circunstância.
          </p>
        </div>
      </section>

      {/* 2. Dados Coletados */}
      <section id="dados-coletados" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">02.</span> Quais Dados Pessoais Coletamos
        </h2>
        <p>
          A coleta de informações restringe-se aos dados estritamente necessários para o
          desempenho das atividades pastorais, acolhimento e gestão administrativa da igreja:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="bg-neutral-950/70 border border-neutral-800 p-4 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <UserCheck size={18} className="text-[#a84444]" />
              <span>Dados Fornecidos Voluntariamente</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-neutral-400">
              <li>Nome completo e dados de contato (telefone, e-mail);</li>
              <li>Data de nascimento e endereço residencial;</li>
              <li>Informações inseridas no formulário "Eu sou novo";</li>
              <li>Dados cadastrais de membros para a secretaria e diretoria.</li>
            </ul>
          </div>

          <div className="bg-neutral-950/70 border border-neutral-800 p-4 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Eye size={18} className="text-[#a84444]" />
              <span>Dados de Navegação Técnica</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-neutral-400">
              <li>Endereço IP e registros de data e hora de acesso;</li>
              <li>Tipo de dispositivo, navegador e resolução de tela;</li>
              <li>Preferências de sessão e interações com a página.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Finalidades do Tratamento */}
      <section id="finalidade" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">03.</span> Finalidades do Tratamento de Dados
        </h2>
        <p>
          Os dados coletados são tratados com base nos princípios legais de finalidade,
          adequação, necessidade e transparência, para os seguintes propósitos:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-neutral-400 pl-2">
          <li>
            <strong>Acolhimento e Integração:</strong> Retornar contatos e dar as boas-vindas a
            novos visitantes que solicitaram aproximação através do portal;
          </li>
          <li>
            <strong>Comunicação Pastoral:</strong> Envio de avisos de cultos, orações, eventos
            especiais e comunicados institucionais da congregação;
          </li>
          <li>
            <strong>Gestão Eclesiástica e Administrativa:</strong> Manutenção do rol de membros
            e atendimento às rotinas internas da secretaria da igreja;
          </li>
          <li>
            <strong>Segurança Digital e Cumprimento Legal:</strong> Registro de acessos conforme
            determina o Marco Civil da Internet (Lei nº 12.965/2014).
          </li>
        </ul>
      </section>

      {/* 4. Compartilhamento */}
      <section id="compartilhamento" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">04.</span> Compartilhamento de Dados com Terceiros
        </h2>
        <p>
          O acesso aos dados pessoais é restrito à equipe pastoral, funcionários da secretaria
          e membros autorizados da diretoria, devidamente orientados sobre dever de sigilo.
        </p>
        <p className="text-neutral-400">
          Poderá ocorrer o compartilhamento estritamente operacional com provedores de infraestrutura
          em nuvem, bancos de dados e ferramentas de envio de e-mails institucionais contratados
          pela SIB-JF, todos submetidos a rigorosos padrões de segurança cibernética e contratos
          de conformidade com a LGPD.
        </p>
      </section>

      {/* 5. Segurança da Informação */}
      <section id="seguranca" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">05.</span> Medidas de Segurança da Informação
        </h2>
        <p>
          Adotamos salvaguardas técnicas, administrativas e organizacionais para proteger os
          dados pessoais contra perdas, extravios, acessos não autorizados, modificações ou
          destruição indevida.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-center">
            <Lock size={20} className="text-emerald-400 mx-auto mb-1.5" />
            <strong className="text-white block">Criptografia em Trânsito</strong>
            <span className="text-neutral-400">Comunicação protegida via HTTPS/TLS</span>
          </div>

          <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-center">
            <Database size={20} className="text-blue-400 mx-auto mb-1.5" />
            <strong className="text-white block">Acesso Controlado</strong>
            <span className="text-neutral-400">Permissões baseadas em necessidade e cargo</span>
          </div>

          <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-center">
            <ShieldCheck size={20} className="text-red-400 mx-auto mb-1.5" />
            <strong className="text-white block">Monitoramento Contínuo</strong>
            <span className="text-neutral-400">Proteção contra ataques e vulnerabilidades</span>
          </div>
        </div>
      </section>

      {/* 6. Direitos do Titular */}
      <section id="direitos" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">06.</span> Seus Direitos como Titular de Dados
        </h2>
        <p>
          Conforme o artigo 18 da LGPD, você tem o direito de solicitar a qualquer tempo e de
          forma facilitada e gratuita à SIB-JF:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-neutral-400 pl-2">
          <li>Confirmação da existência de tratamento dos seus dados;</li>
          <li>Acesso aos dados pessoais que possuímos sobre você;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
          <li>Revogação do consentimento previamente concedido para comunicações;</li>
          <li>Informações sobre com quais entidades os dados foram eventualmente compartilhados.</li>
        </ul>
      </section>

      {/* 7. Cookies */}
      <section id="cookies" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">07.</span> Cookies e Tecnologias de Navegação
        </h2>
        <p>
          Utilizamos cookies essenciais apenas para possibilitar o funcionamento estável do site,
          autenticação de usuários administrativos e memorização de preferências de acessibilidade.
        </p>
        <p className="text-neutral-400">
          Você pode configurar seu navegador para recusar cookies ou alertá-lo quando eles forem
          enviados. No entanto, algumas áreas do site podem não funcionar adequadamente sem os
          cookies funcionais.
        </p>
      </section>

      {/* 8. Retenção e Descarte */}
      <section id="retencao" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">08.</span> Tempo de Retenção e Descarte Seguro
        </h2>
        <p>
          Os dados pessoais serão conservados pelo período necessário para atender às finalidades
          para as quais foram coletados ou para o cumprimento de obrigações legais, eclesiásticas
          ou regulatórias.
        </p>
        <p className="text-neutral-400">
          Findo o período de retenção, as informações serão eliminadas de forma segura e
          definitiva ou anonimizadas para fins exclusivamente estatísticos institucionais.
        </p>
      </section>

      {/* 9. Encarregado de Dados (DPO) */}
      <section id="contato-dpo" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-2">
          <span className="text-[#a84444]">09.</span> Canal do Encarregado de Proteção de Dados (DPO)
        </h2>
        <p>
          Para exercer quaisquer de seus direitos de titular previstos na LGPD ou esclarecer
          dúvidas sobre como tratamos seus dados, entre em contato com nosso Encarregado pelo
          Tratamento de Dados Pessoais (DPO):
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center gap-3">
            <Mail size={18} className="text-[#a84444] shrink-0" />
            <div className="text-xs">
              <span className="block text-neutral-400">E-mail LGPD / DPO</span>
              <strong className="text-white">privacidade@sibjf.org.br</strong>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center gap-3">
            <Phone size={18} className="text-[#a84444] shrink-0" />
            <div className="text-xs">
              <span className="block text-neutral-400">Secretaria Geral</span>
              <strong className="text-white">(32) 3215-9276</strong>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center gap-3">
            <MapPin size={18} className="text-[#a84444] shrink-0" />
            <div className="text-xs">
              <span className="block text-neutral-400">Atendimento Presencial</span>
              <strong className="text-white">R. Barão de São Marcelino, 426</strong>
            </div>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
};

export default Privacidade;
