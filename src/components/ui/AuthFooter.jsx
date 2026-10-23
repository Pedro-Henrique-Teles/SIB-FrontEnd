import React from "react";
import { Link } from "react-router-dom";
import { Shield, FileText } from "lucide-react";

export const AuthFooter = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full py-6 text-center text-xs text-gray-400 ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-2">
        <Link
          to="/termos"
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
        >
          <FileText size={14} className="text-gray-400" />
          <span>Termos de Serviço</span>
        </Link>

        <span className="text-gray-600 hidden sm:inline">•</span>

        <Link
          to="/privacidade"
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
        >
          <Shield size={14} className="text-gray-400" />
          <span>Política de Privacidade</span>
        </Link>
      </div>

      <p className="text-gray-400">
        &copy; {currentYear} Segunda Igreja Batista em Juiz de Fora (SIB-JF). Todos os direitos reservados.
      </p>
      <p className="text-[11px] text-gray-400 mt-1">
        Ambiente seguro e em conformidade com a LGPD (Lei nº 13.709/2018).
      </p>
    </footer>
  );
};

export default AuthFooter;
