import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@heroui/react";
import { Pencil, Trash2, Eye, Plus } from "lucide-react";

const members = [
  {
    id: 1,
    nome: "João Silva Santos",
    dataAniversario: "15/05/1990",
    endereco: "Rua das Flores, 123, São Paulo - SP",
    cpf: "123.456.789-01",
    cargo: "Tesouraria",
  },
  {
    id: 2,
    nome: "Maria Oliveira Costa",
    dataAniversario: "22/11/1992",
    endereco: "Avenida Principal, 456, Rio de Janeiro - RJ",
    cpf: "234.567.890-12",
    cargo: "Mídia",
  },
  {
    id: 3,
    nome: "Carlos Santos Lima",
    dataAniversario: "01/02/1985",
    endereco: "Travessa das Pedras, 789, Belo Horizonte - MG",
    cpf: "345.678.901-23",
    cargo: "Patrimônio",
  },
  {
    id: 4,
    nome: "Ana Costa Pereira",
    dataAniversario: "30/07/2000",
    endereco: "Praça da Matriz, 10, Salvador - BA",
    cpf: "456.789.012-34",
    cargo: "Sonoplastia",
  },
  {
    id: 5,
    nome: "Pedro Almeida Ferreira",
    dataAniversario: "19/09/1988",
    endereco: "Alameda dos Anjos, 22, Curitiba - PR",
    cpf: "567.890.123-45",
    cargo: "Diácono",
  },
  {
    id: 6,
    nome: "Luísa Pereira Souza",
    dataAniversario: "05/03/1995",
    endereco: "Rua da Quitanda, 305, Porto Alegre - RS",
    cpf: "678.901.234-56",
    cargo: "Líder de Célula",
  },
];

const getCargoBadgeStyles = (cargo) => {
  const baseStyle = "px-3 py-1 rounded-full text-xs font-medium";
  switch (cargo) {
    case "Tesouraria":
      return `${baseStyle} bg-green-100 text-green-800`;
    case "Mídia":
      return `${baseStyle} bg-blue-100 text-blue-800`;
    case "Patrimônio":
      return `${baseStyle} bg-orange-100 text-orange-800`;
    case "Sonoplastia":
      return `${baseStyle} bg-purple-100 text-purple-800`;
    case "Diácono":
      return `${baseStyle} bg-yellow-100 text-yellow-800`;
    case "Líder de Célula":
      return `${baseStyle} bg-pink-100 text-pink-800`;
    default:
      return `${baseStyle} bg-gray-100 text-gray-800`;
  }
};

export default function TabelaMembros() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[black]">
          Controle de Membros 2025
        </h2>
        <Button
          color="success"
          variant="solid"
          startContent={<Plus />}
          className="text-white hover:shadow-md transition-all"
        >
          Novo Membro
        </Button>
      </div>

      <Table aria-label="Tabela de membros">
        <TableHeader>
          {/* Colunas reordenadas */}
          <TableColumn>ID</TableColumn>
          <TableColumn>NOME COMPLETO</TableColumn>
          <TableColumn>DATA DE ANIVERSÁRIO</TableColumn>
          <TableColumn>ENDEREÇO</TableColumn>
          <TableColumn>CPF</TableColumn>
          <TableColumn>CARGO</TableColumn>
          <TableColumn>AÇÕES</TableColumn>
        </TableHeader>
        <TableBody>
          {members.map((membro) => (
            <TableRow key={membro.id}>
              {/* Células reordenadas e Cargo estilizado */}
              <TableCell>{membro.id}</TableCell>
              <TableCell>{membro.nome}</TableCell>
              <TableCell>{membro.dataAniversario}</TableCell>
              <TableCell>{membro.endereco}</TableCell>
              <TableCell>{membro.cpf}</TableCell>
              <TableCell>
                <span className={getCargoBadgeStyles(membro.cargo)}>
                  {membro.cargo}
                </span>
              </TableCell>
              <TableCell>
                {/* Ações */}
                <div className="flex gap-2">
                  <Button
                    isIconOnly
                    color="primary"
                    variant="solid"
                    className="text-white"
                  >
                    <Pencil size={18} />
                  </Button>
                  <Button
                    isIconOnly
                    color="danger"
                    variant="solid"
                    className="text-white"
                  >
                    <Trash2 size={18} />
                  </Button>
                  <Button
                    isIconOnly
                    color="success"
                    variant="solid"
                    className="text-white"
                  >
                    <Eye size={18} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}