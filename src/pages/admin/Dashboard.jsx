// Este arquivo NÃO importa e NÃO renderiza o <Sidebar />
export default function Dashboard() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-semibold text-black mb-4">
        Dashboard
      </h1>
      <p className="text-gray-700">
        Bem-vindo ao painel administrativo da SIB-JF.
      </p>
      <p className="text-gray-700 mt-2">
        Selecione uma das opções ao lado (ou no menu "gaveta", no celular)
        para começar a gerenciar os membros, eventos e mais.
      </p>
    </div>
  );
}