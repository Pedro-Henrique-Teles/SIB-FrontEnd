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
import { formatDateBR, formatPhoneBR, formatCPFBR } from "../utils/formatters";

export default function ModalEditarMembro({ isOpen, onClose, member, onSave }) {
    const [formData, setFormData] = React.useState(member || {});
    const [errors, setErrors] = React.useState({});
    const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
    
    React.useEffect(() => {
        if (isOpen) {
            const m = member || {};
            setFormData({
                ...m,
                dataAniversario: m.dataAniversario ? formatDateBR(String(m.dataAniversario)) : "",
                telefone: m.telefone ? formatPhoneBR(String(m.telefone)) : "",
                cpf: m.cpf ? formatCPFBR(String(m.cpf)) : "",
            });
            setErrors({}); 
        }
    }, [isOpen, member]);

    const validate = () => {
        const tempErrors = validateMember(formData, true); // 'true' para isEdit
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

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

    // Funções de máscara
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
    };
    const handleCancelarEdicao = () => setIsConfirmOpen(false);

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
                        inputMode="numeric"
                        maxLength={14}
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
                    
                     <Input
                        label="Cargo"
                        placeholder="Ex: Membro, Diácono"
                        value={formData.cargo || ""}
                        onValueChange={(val) => handleChange("cargo", val)}
                        isInvalid={!!errors.cargo}
                        errorMessage={errors.cargo}
                        className="md:col-span-2" // Faz o último campo ocupar a linha inteira
                    />
                    
                    {/* Campos de Sexo e Senha REMOVIDOS do formulário */}

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

        {/* Modal de confirmação (sem alteração) */}
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