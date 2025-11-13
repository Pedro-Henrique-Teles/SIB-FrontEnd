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
    const [errors, setErrors] = React.useState({});
    const { showToast } = useToast();

    // 2. Função de validação
    const validate = () => {
        const tempErrors = validateMember(formData);
        setErrors(tempErrors);
        // Retorna true se não houver erros (objeto de erros está vazio)
        return Object.keys(tempErrors).length === 0;
    };

    // Limpa o formulário E OS ERROS quando o modal é aberto
    React.useEffect(() => {
        if (isOpen) {
            setFormData(initialFormData);
            setErrors({}); // Limpa os erros ao abrir
        }
    }, [isOpen]);

    // Atualiza o estado e limpa o erro do campo específico ao digitar
    const handleChange = (campo, valor) => {
        setFormData((anterior) => ({ ...anterior, [campo]: valor }));
        
        // Limpa o erro do campo que está sendo editado
        if (errors[campo]) {
            setErrors((prevErrors) => {
                const newErrors = { ...prevErrors };
                delete newErrors[campo]; // Remove a chave do erro
                return newErrors;
            });
        }    
    };

    // Ao salvar, primeiro valida
    const handleSalvar = () => {
        if (validate()) {
            onSave(formData);
            showToast("Membro adicionado com sucesso!", "success");
            // O useEffect já vai limpar o form ao fechar/abrir
            onClose(); 
        } else {
            // Se não passar, a função validate() já atualizou o estado 'errors',
            // e os inputs exibirão as mensagens automaticamente.
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
                    Adicionar Novo Membro {/* Título alterado */}
                </ModalHeader>

                <ModalBody>
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
                        onValueChange={(val) => handleChange("dataAniversario", val)}
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
                        onValueChange={(val) => handleChange("telefone", val)}
                        isInvalid={!!errors.telefone}
                        errorMessage={errors.telefone}
                    />
                    <Input
                        label="CPF"
                        value={formData.cpf || ""}
                        onValueChange={(val) => handleChange("cpf", val)}
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