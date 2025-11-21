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
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import { Pencil, Trash2, Eye, Plus, Search } from "lucide-react";
import ModalEditarMembro from "../../components/ModalEditarMembro";
import ModalAdicionarMembro from "../../components/ModalAdicionarMembro";
import ModalVisualizarMembro from "../../components/ModalVisualizarMembro";
import { useToast } from "../../components/ui/ToastProvider";

const API_BASE_URL = "http://localhost:3008/api/v1/sibApi/user";
const ROWS_PER_PAGE = 10;

const formatApiDateToBR = (dateStr) => {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("T")[0].split("-");
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

const mapFrontToApi = (member) => ({
  name: member.nome,
  email: member.email,
  cpf: member.cpf?.replace(/\D/g, "") || "",
  phone: member.telefone?.replace(/\D/g, "") || "",
  address: member.endereco,
  birthDate: formatBRDateToApi(member.dataAniversario),
  role: member.cargo || "Membro",
  ...(member.sexo && { gender: member.sexo }),
});

export default function TabelaMembros() {
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("");
  const [listaMembros, setListaMembros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [isConfirmEditOpen, setIsConfirmEditOpen] = useState(false);
  const [memberToEdit, setMemberToEdit] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [memberToView, setMemberToView] = useState(null);

  const { showToast } = useToast();

  const getApiErrorMessage = (errorData) => {
    if (Array.isArray(errorData?.message)) return errorData.message[0];
    return errorData?.message || "Erro desconhecido";
  };

  const fetchMembros = useCallback(
    async (filtro = "") => {
      setIsLoading(true);
      setError(null);

      try {
        const url = filtro
          ? `${API_BASE_URL}/search?name=${encodeURIComponent(filtro)}`
          : API_BASE_URL;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Erro ${response.status}: Não foi possível buscar os dados`);
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
    },
    [showToast]
  );

  useEffect(() => {
    fetchMembros();
  }, [fetchMembros]);

  const handleAdicionarMembro = async (novoMembroData) => {
    try {
      const membroParaApi = {
        ...mapFrontToApi(novoMembroData),
        gender: "M",
        password: "Membro12345",
      };

      const response = await fetch(`${API_BASE_URL}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(membroParaApi),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          message: `Erro ${response.status}`,
        }));
        throw new Error(getApiErrorMessage(errorData));
      }

      showToast("Membro adicionado com sucesso!", "success");
      setIsAddModalOpen(false);
      fetchMembros();
    } catch (err) {
      showToast(`Erro ao adicionar membro: ${err.message}`, "error");
    }
  };

  const handleSalvarAlteracoesModal = (membroAtualizado) => {
    setMemberToEdit(membroAtualizado);
    setIsModalOpen(false);
    setTimeout(() => setIsConfirmEditOpen(true), 300);
  };

  const handleConfirmarEdicao = async () => {
    if (!memberToEdit) return;

    try {
      const membroParaApi = mapFrontToApi(memberToEdit);

      const response = await fetch(`${API_BASE_URL}/edit/${memberToEdit.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(membroParaApi),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          message: `Erro ${response.status}`,
        }));
        throw new Error(getApiErrorMessage(errorData));
      }

      showToast("Alterações salvas com sucesso!", "success");
      setIsConfirmEditOpen(false);
      setMemberToEdit(null);
      fetchMembros();
    } catch (err) {
      showToast(`Erro ao salvar alterações: ${err.message}`, "error");
    }
  };

  const handleCancelarEdicao = () => {
    setIsConfirmEditOpen(false);
    setMemberToEdit(null);
  };

  const handleOpenDeleteModal = (membro) => {
    setMemberToDelete(membro);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!memberToDelete) return;

    try {
      const response = await fetch(`${API_BASE_URL}/delete/${memberToDelete.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao desativar membro");
      }

      showToast("Membro desativado com sucesso!", "success");
      setIsDeleteModalOpen(false);
      setMemberToDelete(null);
      fetchMembros();
    } catch (err) {
      showToast(`Erro ao desativar membro: ${err.message}`, "error");
    }
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setMemberToDelete(null);
  };

  const handleEditar = (membro) => {
    setSelectedMember(membro);
    setIsModalOpen(true);
  };

  const handleVisualizar = (membro) => {
    setMemberToView(membro);
    setIsViewModalOpen(true);
  };

  const onSearchChange = useCallback(
    (value) => {
      setFilterValue(value);
      setPage(1);
      fetchMembros(value);
    },
    [fetchMembros]
  );

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
    fetchMembros();
  }, [fetchMembros]);

  const totalPages = Math.ceil(listaMembros.length / ROWS_PER_PAGE);

  const paginatedMembers = useMemo(() => {
    const start = (page - 1) * ROWS_PER_PAGE;
    return listaMembros.slice(start, start + ROWS_PER_PAGE);
  }, [page, listaMembros]);

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4">
        <h2 className="text-2xl font-semibold text-black">Controle de Membros</h2>
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
          classNames={{ inputWrapper: "bg-gray-100" }}
        />
      </div>

      <div className="overflow-x-auto">
        {isLoading && (
          <div className="flex justify-center items-center h-64 gap-3">
            <Spinner size="lg" />
            <p className="text-gray-600">Carregando membros...</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col justify-center items-center h-64 gap-4">
            <p className="text-red-500 text-center">❌ {error}</p>
            <Button className="bg-black text-white" onPress={() => fetchMembros()}>
              Tentar Novamente
            </Button>
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
            <TableBody
              emptyContent="Nenhum membro encontrado. Clique em 'Novo Membro' para cadastrar."
            >
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
                        aria-label="Desativar membro"
                        onPress={() => handleOpenDeleteModal(membro)}
                      >
                        <Trash2 size={18} />
                      </Button>
                      <Button
                        isIconOnly
                        variant="solid"
                        className="text-white bg-blue-500 hover:bg-blue-600 transition-colors"
                        aria-label="Visualizar membro"
                        onPress={() => handleVisualizar(membro)}
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

      {!isLoading && !error && totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <Pagination
            isCompact
            showControls
            total={totalPages}
            page={page}
            onChange={setPage}
            classNames={{
              item: "bg-gray-100",
              next: "bg-gray-100",
              prev: "bg-gray-100",
              cursor: "bg-black text-white",
            }}
          />
        </div>
      )}

      <ModalEditarMembro
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        member={selectedMember}
        onSave={handleSalvarAlteracoesModal}
      />

      <ModalAdicionarMembro
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAdicionarMembro}
      />

      <ModalVisualizarMembro
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        member={memberToView}
      />

      <Modal
        isOpen={isConfirmEditOpen}
        onClose={handleCancelarEdicao}
        placement="center"
        backdrop="opaque"
        classNames={{ backdrop: "backdrop-opac-sm" }}
      >
        <ModalContent>
          <ModalHeader className="text-lg font-semibold">
            Confirmar alterações
          </ModalHeader>
          <ModalBody>
            <p>Deseja confirmar as alterações deste membro?</p>
            <div className="text-sm text-gray-600 space-y-1 mt-3">
              <p><strong>Nome:</strong> {memberToEdit?.nome || "—"}</p>
              <p><strong>E-mail:</strong> {memberToEdit?.email || "—"}</p>
              <p><strong>Telefone:</strong> {memberToEdit?.telefone || "—"}</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={handleCancelarEdicao}>
              Voltar
            </Button>
            <Button
              className="text-white bg-[#411616] hover:bg-[#5b2020] transition-colors"
              onPress={handleConfirmarEdicao}
            >
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={handleCancelDelete}
        placement="center"
        backdrop="opaque"
        classNames={{ backdrop: "backdrop-opac-sm" }}
      >
        <ModalContent>
          <ModalHeader className="text-lg font-semibold">
            Confirmar desativação
          </ModalHeader>
          <ModalBody>
            <p>
              Tem certeza que deseja desativar o membro{" "}
              <strong>"{memberToDelete?.nome}"</strong>?
            </p>
            <p className="text-sm text-gray-600 mt-2">
              O membro será desativado e não aparecerá mais na lista.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={handleCancelDelete}>
              Cancelar
            </Button>
            <Button
              className="text-white bg-[#411616] hover:bg-[#5b2020] transition-colors"
              onPress={handleConfirmDelete}
            >
              Desativar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}