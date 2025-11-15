import { useState, useMemo, useCallback, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Input,
  Pagination,
  Spinner, 
} from "@heroui/react";
import { Pencil, Trash2, Eye, Plus, Search } from "lucide-react";
import ModalEditarMembro from "../../components/ModalEditarMembro";
import ModalAdicionarMembro from "../../components/ModalAdicionarMembro";
import { useToast } from "../../components/ui/ToastProvider";

// --- CONFIGURAÇÃO DA API ---
// CORREÇÃO: Porta atualizada para 3008
const API_BASE_URL = "http://localhost:3008/api/v1/sibApi/user"; 

// --- FUNÇÕES HELPER DE FORMATAÇÃO E MAPEAMENTO ---
// (Estas funções ficam AQUI FORA, antes do 'export default function')

const formatApiDateToBR = (dateStr) => {
  if (!dateStr) return "";
  const dateOnly = dateStr.split("T")[0]; 
  const [year, month, day] = dateOnly.split("-");
  return `${day}/${month}/${year}`;
};

const formatBRDateToApi = (dateStr) => {
  if (!dateStr) return "";
  const [day, month, year] = dateStr.split("/");
  return `${year}-${month}-${day}`;
};

const mapApiToFront = (user) => ({
  id: user.id,
  nome: user.name,
  dataAniversario: formatApiDateToBR(user.birthDate), 
  sexo: user.gender, 
  telefone: user.phone,
  endereco: user.address,
  cpf: user.cpf,
  email: user.email,
  cargo: user.role,
});

const mapFrontToApi = (member) => {
  const payload = {
    name: member.nome,
    email: member.email,
    cpf: (member.cpf || "").replace(/\D/g, ""), 
    phone: (member.telefone || "").replace(/\D/g, ""),
    address: member.endereco,
    
    // --- CORREÇÃO DO ERRO DE EDIÇÃO ---
    // A API espera 'birthDate' com "D" maiúsculo
    birthDate: formatBRDateToApi(member.dataAniversario),
    // --- FIM DA CORREÇÃO ---
    
    role: member.cargo,
  };
  
  return payload;
};

// --- COMPONENTE PRINCIPAL ---
// (O componente começa AQUI)
export default function TabelaMembros() {
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("");
  const rowsPerPage = 10;
  
  const [listaMembros, setListaMembros] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  const { showToast } = useToast();

  const fetchMembros = useCallback(async (filtro = "") => {
    setIsLoading(true);
    setError(null);
    try {
      let url = API_BASE_URL; 
      if (filtro) {
        url = `${API_BASE_URL}/search?name=${filtro}`;
      }
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText || "Erro ao buscar dados"}`);
      }
      const data = await response.json();
      setListaMembros(data.map(mapApiToFront)); 
      
    } catch (err) {
      setError(err.message);
      showToast(`Erro ao buscar membros: ${err.message}`, "error");
      setListaMembros([]); 
    } finally {
      setIsLoading(false);
    }
  }, [showToast]); 

  useEffect(() => {
    fetchMembros();
  }, [fetchMembros]);

  const getApiErrorMessage = (errorData) => {
    if (Array.isArray(errorData.message)) {
      return errorData.message[0]; 
    }
    return errorData.message || "Erro desconhecido";
  };

  // CREATE (POST)
  const handleAdicionarMembro = async (novoMembroData) => {
    try {
      const membroParaApi = mapFrontToApi(novoMembroData);
      
      membroParaApi.gender = 'M'; 
      membroParaApi.password = 'Membro12345'; 

      const response = await fetch(`${API_BASE_URL}/create`, { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(membroParaApi),
      }); 

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: `HTTP ${response.status}` }));
        throw new Error(getApiErrorMessage(errorData));
      }

      showToast("Membro adicionado com sucesso!", "success");
      setIsAddModalOpen(false);
      fetchMembros(); 
    } catch (err) {
      setError(err.message);
      showToast(`Erro ao adicionar membro: ${err.message}`, "error");
    }
  };

  // UPDATE (PATCH)
  const handleSalvarAlteracoes = async (membroAtualizado) => {
    try {
      const membroParaApi = mapFrontToApi(membroAtualizado); 
      membroParaApi.gender = membroAtualizado.sexo; 
      
      const response = await fetch(`${API_BASE_URL}/edit/${membroAtualizado.id}`, { 
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(membroParaApi),
      }); 

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: `HTTP ${response.status}` }));
        throw new Error(getApiErrorMessage(errorData));
      }
      
      showToast("Alterações salvas com sucesso!", "success");
      setIsModalOpen(false);
      fetchMembros(); 
    } catch (err) {
      setError(err.message);
      showToast(`Erro ao salvar alterações: ${err.message}`, "error");
    }
  };

  // --- LIXEIRA (Estado "antes de implementar") ---
  const handleDeletar = async (id) => {
    alert("Função de Deletar ainda não implementada no back-end (API).");
  };
  // --- FIM DA LIXEIRA ---
  
  const handleEditar = (membro) => {
    setSelectedMember(membro);
    setIsModalOpen(true);
  };

  const onSearchChange = useCallback((value) => {
    setFilterValue(value);
    setPage(1); 
    fetchMembros(value); 
  }, [fetchMembros]); 

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
    fetchMembros(); 
  }, [fetchMembros]);

  const pages = Math.ceil(listaMembros.length / rowsPerPage);

  const paginatedMembers = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return listaMembros.slice(start, end); 
  }, [page, listaMembros]);

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4">
        <h2 className="text-2xl font-semibold text-[black]">
          Controle de Membros
        </h2>
        <Button
          variant="solid"
          startContent={<Plus />}
          className="bg-black text-white hover:bg-gray-800 transition-all w-full md:w-auto"
          onPress={() => setIsAddModalOpen(true)}
        >
          Novo Membro
        </Button>
      </div>

      <div className="mb-4">
        <Input
          isClearable
          placeholder="Pesquisar por nome..."
          startContent={<Search size={18} className="text-gray-400" />}
          value={filterValue}
          onValueChange={onSearchChange}
          onClear={onClear}
          className="w-full"
          classNames={{
            inputWrapper: "bg-gray-100",
          }}
        />
      </div>

      <div className="overflow-x-auto">
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <Spinner size="lg" />
          </div>
        )}
        
        {error && (
           <div className="flex justify-center items-center h-64 text-red-500">
             <p>Erro ao carregar dados: {error}</p>
           </div>
        )}

        {!isLoading && !error && (
          <Table aria-label="Tabela de membros">
            <TableHeader className="bg-gray-100 text-gray-600 uppercase text-xs">
              <TableColumn>ID</TableColumn>
              <TableColumn>NOME</TableColumn>
              <TableColumn>ANIVERSÁRIO</TableColumn>
              <TableColumn>TELEFONE</TableColumn>
              <TableColumn>ENDEREÇO</TableColumn>
              <TableColumn>CPF</TableColumn>
              <TableColumn>CARGO</TableColumn>
              <TableColumn>AÇÕES</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"Nenhum membro encontrado. Clique em 'Novo Membro' para cadastrar."}>
              {paginatedMembers.map((membro) => (
                <TableRow key={membro.id}>
                  <TableCell>{membro.id}</TableCell>
                  <TableCell>{membro.nome}</TableCell>
                  <TableCell>{membro.dataAniversario}</TableCell>
                  <TableCell>{membro.telefone}</TableCell>
                  <TableCell>{membro.endereco}</TableCell>
                  <TableCell>{membro.cpf}</TableCell>
                  <TableCell>{membro.cargo}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        isIconOnly
                        variant="solid"
                        className="text-white bg-slate-500 hover:bg-slate-600 transition-colors"
                        aria-label="Editar membro"
                        onPress={() => handleEditar(membro)}
                      >
                        <Pencil size={18} />
                      </Button>
                      <Button
                        isIconOnly
                        variant="solid"
                        className="text-white bg-red-400 hover:bg-red-500 transition-colors"
                        aria-label="Excluir membro"
                        onPress={() => handleDeletar(membro.id)} 
                      >
                        <Trash2 size={18} />
                      </Button>
                      <Button
                        isIconOnly
                        variant="solid"
                        className="text-white bg-gray-500 hover:bg-gray-600 transition-colors"
                        aria-label="Visualizar membro"
                      >
                        <Eye size={18} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <div className="flex justify-center mt-4">
        {!isLoading && !error && pages > 1 && (
          <Pagination
            isCompact
            showControls
            total={pages}
            page={page}
            onChange={setPage}
            classNames={{
              item: "bg-gray-100",
              next: "bg-gray-100",
              prev: "bg-gray-100",
              cursor: "bg-black text-white",
            }}
          />
        )}
      </div>
      
      <ModalEditarMembro
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        member={selectedMember}
        onSave={handleSalvarAlteracoes} 
      />
      <ModalAdicionarMembro
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAdicionarMembro} 
      />
    </div>
  );
}