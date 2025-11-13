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
import { validateMember } from "../utils/validation";
import { useToast } from "./ui/ToastProvider";
import { formatDateBR, formatPhoneBR, formatCPFBR } from "../utils/formatters";

export default function ModalEditarMembro({ isOpen, onClose, member, onSave }) {
    const [formData, setFormData] = React.useState(member || {});
    const [errors, setErrors] = React.useState({});
    const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
    const { showToast } = useToast();

    // Atualiza os dados do formulário e limpa os erros quando o membro muda
    React.useEffect(() => {
        if (isOpen) {
            setFormData(member || {});
            setErrors({}); // Limpa os erros ao abrir ou trocar de membro
        }
    }, [isOpen, member]);

    // Função de validação
    const validate = () => {
        const tempErrors = validateMember(formData);
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // Atualiza o campo e limpa o erro específico
    const handleChange = (campo, valor) => {
        setFormData((anterior) => ({ ...anterior, [campo]: valor }));
        if (errors[campo]) {
            setErrors((prevErrors) => {
                const newErrors = { ...prevErrors };
                delete newErrors[campo];
                return newErrors;
            });
        }
    };

    // Formata automaticamente a data no formato dd/mm/aaaa
    const handleChangeData = (valor) => {
        const masked = formatDateBR(valor);
        handleChange("dataAniversario", masked);
    };

    const handleChangeTelefone = (valor) => {
        const masked = formatPhoneBR(valor);
        handleChange("telefone", masked);
    };

    const handleChangeCPF = (valor) => {
        const masked = formatCPFBR(valor);
        handleChange("cpf", masked);
    };

    // Ao salvar, primeiro valida os dados
    const handleSalvar = () => {
        if (validate()) {
            setIsConfirmOpen(true);
        } else {
            console.log("Falha na validação ao editar.");
        }
    };

    const handleConfirmarEdicao = () => {
        onSave(formData);
        setIsConfirmOpen(false);
        onClose();
        showToast("Alterações salvas com sucesso!", "success");
    };
    const handleCancelarEdicao = () => setIsConfirmOpen(false);

    // Evita renderizar o modal se nenhum membro estiver selecionado
    if (!member) return null;

    return (
        <>
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
                        isInvalid={!!errors.nome}
                        errorMessage={errors.nome}
                    />
                    <Input
                        label="Data de Nascimento"
                        value={formData.dataAniversario || ""}
                        onValueChange={handleChangeData}
                        isInvalid={!!errors.dataAniversario}
                        errorMessage={errors.dataAniversario}
                    />
                    <Input
                        label="E-mail"
                        value={formData.email || ""}
                        onValueChange={(val) => handleChange("email", val)}
                        isInvalid={!!errors.email}
                        errorMessage={errors.email}
                    />
                    <Input
                        label="Telefone"
                        value={formData.telefone || ""}
                        onValueChange={handleChangeTelefone}
                        isInvalid={!!errors.telefone}
                        errorMessage={errors.telefone}
                    />
                    <Input
                        label="CPF"
                        value={formData.cpf || ""}
                        onValueChange={handleChangeCPF}
                        isInvalid={!!errors.cpf}
                        errorMessage={errors.cpf}
                    />
                    <Input
                        label="Endereço"
                        value={formData.endereco || ""}
                        onValueChange={(val) => handleChange("endereco", val)}
                        isInvalid={!!errors.endereco}
                        errorMessage={errors.endereco}
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

        {/* Modal de confirmação de edição */}
        <Modal
            isOpen={isConfirmOpen}
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
                    <div className="text-sm text-gray-600 space-y-1">
                        <p><strong>Nome:</strong> {formData.nome || "—"}</p>
                        <p><strong>E-mail:</strong> {formData.email || "—"}</p>
                        <p><strong>Telefone:</strong> {formData.telefone || "—"}</p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button variant="light" onPress={handleCancelarEdicao}>
                        Voltar
                    </Button>
                    <Button className="text-white bg-[#411616] hover:bg-[#5b2020] transition-colors" onPress={handleConfirmarEdicao}>
                        Confirmar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    );
}
