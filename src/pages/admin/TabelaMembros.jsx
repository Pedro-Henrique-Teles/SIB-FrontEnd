import { useState, useMemo, useCallback } from "react";
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
} from "@heroui/react";
import { Pencil, Trash2, Eye, Plus, Search } from "lucide-react";

const members = [
  {
    id: 1,
    nome: "João Silva Santos",
    dataAniversario: "15/05/1990",
    sexo: "Masculino",
    telefone: "(11) 98765-4321",
    endereco: "Rua das Flores, 123, São Paulo - SP",
    cpf: "123.456.789-01",
    dataEntrada: "10/01/2015",
    tipoEntrada: "Batismo",
    profissao: "Contador",
    escolaridade: "Ensino Superior Completo",
    cargo: "Tesouraria",
  },
  {
    id: 2,
    nome: "Maria Oliveira Costa",
    dataAniversario: "22/11/1992",
    sexo: "Feminino",
    telefone: "(21) 91234-5678",
    endereco: "Avenida Principal, 456, Rio de Janeiro - RJ",
    cpf: "234.567.890-12",
    dataEntrada: "05/03/2018",
    tipoEntrada: "Transferência",
    profissao: "Designer Gráfica",
    escolaridade: "Ensino Superior Completo",
    cargo: "Mídia",
  },
  {
    id: 3,
    nome: "Carlos Santos Lima",
    dataAniversario: "01/02/1985",
    sexo: "Masculino",
    telefone: "(31) 98888-7777",
    endereco: "Travessa das Pedras, 789, Belo Horizonte - MG",
    cpf: "345.678.901-23",
    dataEntrada: "20/07/2010",
    tipoEntrada: "Aclamação",
    profissao: "Engenheiro Civil",
    escolaridade: "Pós-graduação",
    cargo: "Patrimônio",
  },
  {
    id: 4,
    nome: "Ana Costa Pereira",
    dataAniversario: "30/07/2000",
    sexo: "Feminino",
    telefone: "(71) 99999-1111",
    endereco: "Praça da Matriz, 10, Salvador - BA",
    cpf: "456.789.012-34",
    dataEntrada: "15/02/2020",
    tipoEntrada: "Batismo",
    profissao: "Estudante",
    escolaridade: "Ensino Superior Incompleto",
    cargo: "Sonoplastia",
  },
  {
    id: 5,
    nome: "Pedro Almeida Ferreira",
    dataAniversario: "19/09/1988",
    sexo: "Masculino",
    telefone: "(41) 98765-1234",
    endereco: "Alameda dos Anjos, 22, Curitiba - PR",
    cpf: "567.890.123-45",
    dataEntrada: "01/12/2012",
    tipoEntrada: "Transferência",
    profissao: "Advogado",
    escolaridade: "Mestrado",
    cargo: "Diácono",
  },
  {
    id: 6,
    nome: "Luísa Pereira Souza",
    dataAniversario: "05/03/1995",
    sexo: "Feminino",
    telefone: "(51) 98111-2222",
    endereco: "Rua da Quitanda, 305, Porto Alegre - RS",
    cpf: "678.901.234-56",
    dataEntrada: "10/10/2019",
    tipoEntrada: "Batismo",
    profissao: "Enfermeira",
    escolaridade: "Ensino Superior Completo",
    cargo: "Líder de Célula",
  },
  {
    id: 7,
    nome: "Marcos Ribeiro Alves",
    dataAniversario: "12/08/1993",
    sexo: "Masculino",
    telefone: "(81) 99222-3333",
    endereco: "Rua Sete de Setembro, 707, Recife - PE",
    cpf: "789.012.345-67",
    dataEntrada: "03/03/2017",
    tipoEntrada: "Aclamação",
    profissao: "Técnico de Som",
    escolaridade: "Ensino Médio Completo",
    cargo: "Mídia",
  },
  {
    id: 8,
    nome: "Fernanda Lima Barros",
    dataAniversario: "25/12/1998",
    sexo: "Feminino",
    telefone: "(81) 99333-4444",
    endereco: "Avenida Boa Viagem, 800, Recife - PE",
    cpf: "890.123.456-78",
    dataEntrada: "08/06/2021",
    tipoEntrada: "Transferência",
    profissao: "Arquiteta",
    escolaridade: "Ensino Superior Completo",
    cargo: "Diácono",
  },
  {
    id: 9,
    nome: "Ricardo Gomes Martins",
    dataAniversario: "03/06/1980",
    sexo: "Masculino",
    telefone: "(92) 98444-5555",
    endereco: "Rua da Moeda, 99, Manaus - AM",
    cpf: "901.234.567-89",
    dataEntrada: "19/04/2009",
    tipoEntrada: "Batismo",
    profissao: "Bancário",
    escolaridade: "Pós-graduação",
    cargo: "Tesouraria",
  },
  {
    id: 10,
    nome: "Beatriz Nunes Correia",
    dataAniversario: "14/02/1997",
    sexo: "Feminino",
    telefone: "(92) 98555-6666",
    endereco: "Largo de São Sebastião, 10, Manaus - AM",
    cpf: "012.345.678-90",
    dataEntrada: "11/11/2018",
    tipoEntrada: "Aclamação",
    profissao: "Professora",
    escolaridade: "Ensino Superior Completo",
    cargo: "Patrimônio",
  },
  {
    id: 11,
    nome: "Lucas Mendes Teixeira",
    dataAniversario: "29/04/1991",
    sexo: "Masculino",
    telefone: "(21) 98666-7777",
    endereco: "Rua das Laranjeiras, 111, Rio de Janeiro - RJ",
    cpf: "111.222.333-44",
    dataEntrada: "14/09/2016",
    tipoEntrada: "Batismo",
    profissao: "Músico",
    escolaridade: "Ensino Médio Completo",
    cargo: "Sonoplastia",
  },
  {
    id: 12,
    nome: "Juliana Andrade Pinto",
    dataAniversario: "07/10/2001",
    sexo: "Feminino",
    telefone: "(11) 98777-8888",
    endereco: "Rua Augusta, 222, São Paulo - SP",
    cpf: "222.333.444-55",
    dataEntrada: "30/01/2022",
    tipoEntrada: "Transferência",
    profissao: "Jornalista",
    escolaridade: "Ensino Superior Completo",
    cargo: "Líder de Célula",
  },
];

const getCargoBadgeStyles = (cargo) => {
  const baseStyle = "px-3 py-1 rounded-full text-xs font-medium";
  switch (cargo) {
    case "Tesouraria":
      return `${baseStyle} bg-slate-200 text-slate-800`;
    case "Mídia":
      return `${baseStyle} bg-zinc-200 text-zinc-800`;
    case "Patrimônio":
      return `${baseStyle} bg-stone-200 text-stone-800`;
    case "Sonoplastia":
      return `${baseStyle} bg-zinc-200 text-zinc-800`;
    case "Diácono":
      return `${baseStyle} bg-gray-200 text-gray-800`;
    case "Líder de Célula":
      return `${baseStyle} bg-slate-200 text-slate-800`;
    default:
      return `${baseStyle} bg-gray-200 text-gray-800`;
  }
};

export default function TabelaMembros() {
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("");
  const rowsPerPage = 10;

  const filteredMembers = useMemo(() => {
    if (!filterValue) return members;

    const lowerCaseFilter = filterValue.toLowerCase();

    return members.filter((member) => {
      return (
        member.id.toString().includes(lowerCaseFilter) ||
        member.nome.toLowerCase().includes(lowerCaseFilter) ||
        member.dataAniversario.toLowerCase().includes(lowerCaseFilter) ||
        member.sexo.toLowerCase().includes(lowerCaseFilter) ||
        member.telefone.toLowerCase().includes(lowerCaseFilter) ||
        member.endereco.toLowerCase().includes(lowerCaseFilter) ||
        member.cpf.toLowerCase().includes(lowerCaseFilter) ||
        member.dataEntrada.toLowerCase().includes(lowerCaseFilter) ||
        member.tipoEntrada.toLowerCase().includes(lowerCaseFilter) ||
        member.profissao.toLowerCase().includes(lowerCaseFilter) ||
        member.escolaridade.toLowerCase().includes(lowerCaseFilter) ||
        member.cargo.toLowerCase().includes(lowerCaseFilter)
      );
    });
  }, [members, filterValue]);

  const pages = Math.ceil(filteredMembers.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredMembers.slice(start, end);
  }, [page, filteredMembers]);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4">
        <h2 className="text-2xl font-semibold text-[black]">
          Controle de Membros 2025
        </h2>
        <Button
          variant="solid"
          startContent={<Plus />}
          className="bg-black text-white hover:bg-gray-800 transition-all w-full md:w-auto"
        >
          Novo Membro
        </Button>
      </div>

      <div className="mb-4">
        <Input
          isClearable
          placeholder="Pesquisar em qualquer campo..."
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
        <Table aria-label="Tabela de membros">
          <TableHeader className="bg-gray-100 text-gray-600 uppercase text-xs">
            <TableColumn>ID</TableColumn>
            <TableColumn>NOME</TableColumn>
            <TableColumn>ANIVERSÁRIO</TableColumn>
            <TableColumn>SEXO</TableColumn>
            <TableColumn>TELEFONE</TableColumn>
            <TableColumn>ENDEREÇO</TableColumn>
            <TableColumn>CPF</TableColumn>
            <TableColumn>ENTRADA</TableColumn>
            <TableColumn>ORIGEM</TableColumn>
            <TableColumn>PROFISSÃO</TableColumn>
            <TableColumn>ESCOLARIDADE</TableColumn>
            <TableColumn>CARGO</TableColumn>
            <TableColumn>AÇÕES</TableColumn>
          </TableHeader>
          <TableBody>
            {items.map((membro) => (
              <TableRow key={membro.id}>
                <TableCell>{membro.id}</TableCell>
                <TableCell>{membro.nome}</TableCell>
                <TableCell>{membro.dataAniversario}</TableCell>
                <TableCell>{membro.sexo}</TableCell>
                <TableCell>{membro.telefone}</TableCell>
                <TableCell>{membro.endereco}</TableCell>
                <TableCell>{membro.cpf}</TableCell>
                <TableCell>{membro.dataEntrada}</TableCell>
                <TableCell>{membro.tipoEntrada}</TableCell>
                <TableCell>{membro.profissao}</TableCell>
                <TableCell>{membro.escolaridade}</TableCell>
                <TableCell>
                  <span className={getCargoBadgeStyles(membro.cargo)}>
                    {membro.cargo}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      isIconOnly
                      variant="solid"
                      className="text-white bg-slate-500 hover:bg-slate-600 transition-colors"
                    >
                      <Pencil size={18} />
                    </Button>
                    <Button
                      isIconOnly
                      variant="solid"
                      className="text-white bg-red-400 hover:bg-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </Button>
                    <Button
                      isIconOnly
                      variant="solid"
                      className="text-white bg-gray-500 hover:bg-gray-600 transition-colors"
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

      <div className="flex justify-center mt-4">
        {pages > 1 && (
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
    </div>
  );
}