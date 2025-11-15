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

// Estado inicial do formulário (sem sexo e senha)
const initialFormData = {
    nome: "",
    dataAniversario: "",
    telefone: "",
    endereco: "",
    cpf: "",
    email: "", 
    cargo: "",
};

export default function ModalAdicionarMembro({ isOpen, onClose, onSave }) {
    const [formData, setFormData] = React.useState(initialFormData);
    const [errors, setErrors] = React.useState({});
    
    const validate = () => {
        const tempErrors = validateMember(formData); 
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    React.useEffect(() => {
        if (isOpen) {
            setFormData(initialFormData);
            setErrors({}); 
        }
    }, [isOpen]);

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
            onSave(formData);
            onClose(); 
        } else {
            console.log("Falha na validação.");
        }
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
                    Adicionar Novo Membro
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
                        label="Data de Aniversário"
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
                        maxLength={14} // 123.456.789-00
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
                        Adicionar Membro
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}