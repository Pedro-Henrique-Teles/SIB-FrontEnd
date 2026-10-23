import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ArrowLeft, 
  Calendar, 
  ShieldCheck, 
  FileText, 
  ChevronUp, 
  Printer, 
  Home,
  CheckCircle2,
  Lock
} from "lucide-react";

export const LegalPageLayout = ({
  title,
  subtitle,
  updatedAt = "23 de Outubro de 2026",
  sections = [],
  children,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Rola suavemente para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPath]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col selection:bg-[#7a2c2c] selection:text-white">
      {/* Header Institucional Fixo */}
      <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-neutral-800 transition-all">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#7a2c2c] rounded-lg p-1"
            title="Voltar para a página inicial"
          >
            <img
              src="/img/icons/logoSibBranca.png"
              alt="Logo SIB"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="block text-sm font-semibold text-white tracking-wide">
                Segunda Igreja Batista
              </span>
              <span className="block text-xs text-neutral-400">
                Juiz de Fora - MG
              </span>
            </div>
          </Link>

          {/* Navegação entre Termos e Privacidade */}
          <div className="flex items-center gap-2 sm:gap-3 bg-neutral-900/90 border border-neutral-800 p-1 rounded-xl text-xs sm:text-sm">
            <Link
              to="/termos"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                currentPath === "/termos"
                  ? "bg-[#571f1f] text-white shadow-sm"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800"
              }`}
            >
              <FileText size={15} />
              <span>Termos</span>
            </Link>

            <Link
              to="/privacidade"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                currentPath === "/privacidade"
                  ? "bg-[#571f1f] text-white shadow-sm"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800"
              }`}
            >
              <ShieldCheck size={15} />
              <span>Privacidade</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Imprimir documento"
              title="Imprimir documento"
              className="hidden md:flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded-lg border border-neutral-700 transition"
            >
              <Printer size={14} />
              <span>Imprimir</span>
            </button>

            <Link
              to="/"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-[#571f1f] px-3.5 py-1.5 rounded-lg border border-neutral-700 transition duration-200"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Início</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section do Documento */}
      <section className="bg-gradient-to-b from-black via-neutral-950 to-neutral-900 border-b border-neutral-800 pt-10 pb-12 sm:pt-14 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#571f1f]/60 text-red-200 border border-[#7a2c2c] mb-4">
            <Lock size={13} className="text-red-300" />
            <span>DOCUMENTO INSTITUCIONAL OFICIAL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mb-6 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-400 pt-2 border-t border-neutral-800">
            <div className="flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-lg">
              <Calendar size={15} className="text-neutral-400" />
              <span>
                <strong className="text-neutral-200">Data de atualização:</strong>{" "}
                {updatedAt}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-lg">
              <CheckCircle2 size={15} className="text-emerald-400" />
              <span>Conteúdo alinhado com a liderança SIB-JF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Corpo Principal com Leitura Confortável */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Aviso de Conteúdo Provisório / Homologação */}
        <div className="mb-8 p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></div>
            <p>
              <strong className="text-white">Nota de Homologação:</strong> O texto abaixo
              encontra-se estruturado com seções institucionais oficiais e termos
              provisórios para validação e inserção de redação final pelos líderes da igreja.
            </p>
          </div>
          <span className="shrink-0 text-xs px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-400 border border-neutral-700">
            Versão 1.0 (Draft)
          </span>
        </div>

        {/* Índice Rápido de Seções (Sumário) */}
        {sections.length > 0 && (
          <nav
            aria-label="Índice de seções"
            className="mb-10 p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 shadow-sm"
          >
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-300 mb-3 flex items-center gap-2">
              <FileText size={16} className="text-[#a84444]" />
              <span>Índice do Documento</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {sections.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center gap-2 text-left p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition-colors duration-150"
                >
                  <span className="text-[#a84444] font-semibold">
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                  <span className="truncate">{section.title}</span>
                </button>
              ))}
            </div>
          </nav>
        )}

        {/* Conteúdo Customizado e Artigos */}
        <article className="prose prose-invert max-w-none text-neutral-300 text-sm sm:text-base leading-relaxed space-y-8">
          {children}
        </article>
      </main>

      {/* Rodapé Dedicado para Páginas Institucionais */}
      <footer className="bg-black border-t border-neutral-800 mt-12 py-10 text-neutral-400 text-xs sm:text-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-center md:text-left">
            <img
              src="/img/icons/logoSibBranca.png"
              alt="Logo SIB"
              className="h-8 w-auto object-contain opacity-80"
            />
            <div>
              <p className="font-semibold text-white">
                Segunda Igreja Batista de Juiz de Fora (SIB-JF)
              </p>
              <p className="text-xs text-neutral-400">
                R. Barão de São Marcelino, 426 - Passos, Juiz de Fora - MG
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link to="/" className="hover:text-white transition flex items-center gap-1">
              <Home size={14} />
              <span>Página Inicial</span>
            </Link>
            <span>•</span>
            <Link
              to="/termos"
              className={`hover:text-white transition ${
                currentPath === "/termos" ? "text-white font-semibold underline" : ""
              }`}
            >
              Termos de Serviço
            </Link>
            <span>•</span>
            <Link
              to="/privacidade"
              className={`hover:text-white transition ${
                currentPath === "/privacidade" ? "text-white font-semibold underline" : ""
              }`}
            >
              Política de Privacidade
            </Link>
            <span>•</span>
            <Link to="/admin" className="hover:text-white transition">
              Administração
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 px-3 py-2 rounded-lg hover:bg-neutral-800 transition"
          >
            <span>Voltar ao topo</span>
            <ChevronUp size={16} />
          </button>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-6 border-t border-neutral-900 text-center text-xs text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} SIB-JF. Todos os direitos reservados.
            Em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LegalPageLayout;
