import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Button,
} from "@heroui/react";

// Estado inicial do formulário para um novo membro
const initialFormData = {
    nome: "",
    dataAniversario: "",
    sexo: "",
    telefone: "",
    endereco: "",
    cpf: "",
    email: "", // Adicionado com base nos Inputs do ModalEditarMembro
    // Adicione outros campos necessários aqui
};

// O componente 'member' será desnecessário, mas mantemos 'onSave'
export default function ModalAdicionarMembro({ isOpen, onClose, onSave }) {
    // Começa com o estado inicial vazio
    const [formData, setFormData] = React.useState(initialFormData);

    // Limpa o formulário quando o modal é aberto ou fechado
    // Este useEffect é importante para resetar o form ao fechar.
    React.useEffect(() => {
        if (isOpen) {
            setFormData(initialFormData);
        }
    }, [isOpen]);

    // Atualiza campo por campo conforme o usuário digita
    const handleChange = (campo, valor) => {
        setFormData((anterior) => ({ ...anterior, [campo]: valor }));
    };

    // Ao salvar, envia os dados e fecha o modal
    const handleSalvar = () => {
        // Você pode querer adicionar validação aqui antes de salvar
        onSave(formData);
        // Reseta o estado local do formulário após salvar e fechar
        setFormData(initialFormData); 
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="lg"
            placement="center"
            backdrop="opaque"
            classNames={{
                backdrop: "backdrop-opac-sm"
            }}
        >

            <ModalContent>
                <ModalHeader className="text-lg font-semibold">
                    Adicionar Novo Membro {/* Título alterado */}
                </ModalHeader>

                <ModalBody>
                    <Input
                        label="Nome Completo"
                        value={formData.nome || ""}
                        onValueChange={(val) => handleChange("nome", val)}
                    />
                    <Input
                        label="Data de Aniversário"
                        value={formData.dataAniversario || ""}
                        onValueChange={(val) => handleChange("dataAniversario", val)}
                    />
                    <Input
                        label="E-mail"
                        value={formData.email || ""}
                        onValueChange={(val) => handleChange("email", val)}
                    />
                    <Input
                        label="Telefone"
                        value={formData.telefone || ""}
                        onValueChange={(val) => handleChange("telefone", val)}
                    />
                    <Input
                        label="CPF"
                        value={formData.cpf || ""}
                        onValueChange={(val) => handleChange("cpf", val)}
                    />
                    <Input
                        label="Endereço"
                        value={formData.endereco || ""}
                        onValueChange={(val) => handleChange("endereco", val)}
                    />
                    {/* Inclua outros Inputs conforme necessário */}
                </ModalBody>

                <ModalFooter>
                    <Button variant="light" onPress={onClose}>
                        Cancelar
                    </Button>
                    <Button
                        className="text-white bg-[#411616] hover:bg-[#5b2020] transition-colors"
                        onPress={handleSalvar}
                    >
                        Adicionar Membro {/* Texto do botão alterado */}
                    </Button>

                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}