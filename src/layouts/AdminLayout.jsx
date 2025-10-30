import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../pages/admin/Sidebar"; 
import { Menu } from "lucide-react";

export default function AdminLayout() {
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* --- SIDEBAR DESKTOP (Fixa) --- */}
      <div 
        className={`hidden md:flex transition-all duration-300`}
        onMouseOver={() => setIsDesktopOpen(true)}
        onMouseLeave={() => setIsDesktopOpen(false)}
      >
        <Sidebar open={isDesktopOpen} setOpen={setIsDesktopOpen} />
      </div>

      {/* --- SIDEBAR MOBILE (Gaveta) --- */}
      {isMobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileOpen(false)}
          ></div>
          
          <div className="fixed top-0 left-0 z-50 md:hidden">
            {/* MUDANÇA AQUI: Adicionamos a prop 'isMobile={true}' */}
            <Sidebar open={true} setOpen={() => setIsMobileOpen(false)} isMobile={true} />
          </div>
        </>
      )}

      {/* --- CONTEÚDO PRINCIPAL (Onde a Tabela entra) --- */}
      <main className="flex-1 overflow-x-auto">
        
        {/* Cabeçalho do Conteúdo (Corrigido para o vinho) */}
        <header className="flex items-center justify-between p-4 bg-[#3f1616] text-white shadow-md md:hidden sticky top-0 z-30">
          <Link to="/" className="text-lg font-bold">
            Diretoria Sib-JF
          </Link>
          <button onClick={() => setIsMobileOpen(true)}>
            <Menu />
          </button>
        </header>

        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}