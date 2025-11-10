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

export default function ModalEditarMembro({ isOpen, onClose, member, onSave }) {
    const [formData, setFormData] = React.useState(member || {});

    // Atualiza os dados do formulário quando o membro selecionado mudar
    React.useEffect(() => {
        setFormData(member || {});
    }, [member]);

    // Atualiza campo por campo conforme o usuário digita
    const handleChange = (campo, valor) => {
        setFormData((anterior) => ({ ...anterior, [campo]: valor }));
    };

    // Ao salvar, envia os dados atualizados e fecha o modal
    const handleSalvar = () => {
        onSave(formData);
        onClose();
    };

    // Evita renderizar o modal se nenhum membro estiver selecionado
    if (!member) return null;

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
                    Editar Informações do Membro
                </ModalHeader>

                <ModalBody className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        label="Nome Completo"
                        value={formData.nome || ""}
                        onValueChange={(val) => handleChange("nome", val)}
                    />
                    <Input
                        label="Data de Nascimento"
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
                </ModalBody>

                <ModalFooter>
                    <Button variant="light" onPress={onClose}>
                        Cancelar
                    </Button>
                    <Button
                        className="text-white bg-[#411616] hover:bg-[#5b2020] transition-colors"
                        onPress={handleSalvar}
                    >
                        Salvar Alterações
                    </Button>

                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
