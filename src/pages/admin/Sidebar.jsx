import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  Users,
  Calendar,
  DollarSign,
  BarChart2,
  LogOut,
  Home,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const menus = [
    { name: "Membros", icon: <Users size={20} />, path: "/admin/tabela" },
    { name: "Eventos", icon: <Calendar size={20} />, path: "/admin/eventos" },
    {
      name: "Financeiro",
      icon: <DollarSign size={20} />,
      path: "/admin/financeiro",
    },
    {
      name: "Relatórios",
      icon: <BarChart2 size={20} />,
      path: "/admin/relatorios",
    },
  ];

  return (
    <div
      className={`bg-[#3f1616] text-white h-screen flex flex-col justify-between transition-all duration-300 ${
        open ? "w-64" : "w-20"
      }`}
    >
      <div>
        <div
          className={`flex items-center p-4 border-b border-[#552121] ${
            open ? "justify-between" : "justify-center"
          }`}
        >
          <h1 className={`text-lg font-bold ${!open && "hidden"}`}>
            Diretoria Sib-JF
          </h1>
          <button
            onClick={() => setOpen(!open)}
            className="hover:opacity-80 transition"
          >
            <Menu />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-2">
          {menus.map((menu, i) => (
            <Link
              key={i}
              to={menu.path}
              className={`flex items-center gap-3 p-2 rounded-md transition-all hover:bg-[#552121] ${
                location.pathname === menu.path && "bg-[#5f2323]"
              } ${!open && "justify-center"}`}
            >
              {menu.icon}
              {open && <span>{menu.name}</span>}
            </Link>
          ))}

          <Link
            to="/"
            className={`flex items-center gap-3 p-2 rounded-md transition-all hover:bg-[#552121] mt-4 border-t border-[#552121] pt-4 ${
              !open && "justify-center"
            }`}
          >
            <Home size={20} />
            {open && <span>Voltar ao Site</span>}
          </Link>
        </nav>
      </div>

      <div className="p-4 border-t border-[#552121]">
        <div
          className={`text-xs text-gray-400 mb-4 transition-all ${
            !open && "hidden"
          }`}
        >
          <p>&copy; {new Date().getFullYear()} SIB-JF.</p>
          <p>Todos os direitos reservados.</p>
          <p className="mt-2 font-semibold">
            Ambiente em conformidade com a LGPD.
          </p>
        </div>

        <button
          className={`flex items-center gap-3 w-full p-2 rounded-md hover:bg-[#552121] transition-all ${
            !open && "justify-center"
          }`}
        >
          <LogOut size={20} />
          {open && <span>Sair</span>}
        </button>
      </div>
    </div>
  );
}