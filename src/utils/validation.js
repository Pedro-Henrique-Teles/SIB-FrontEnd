
export const validateMember = (formData) => {
    const tempErrors = {};
    
    if (!formData.nome) {
        tempErrors.nome = "O nome é obrigatório.";
    }

    if (!formData.dataAniversario) {
        tempErrors.dataAniversario = "A data de aniversário é obrigatória.";
    }
    
    if (!formData.email) {
        tempErrors.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "O formato do e-mail é inválido.";
    }

    if (!formData.telefone) {
        tempErrors.telefone = "O telefone é obrigatório.";
    } else {
        const telefoneLimpo = formData.telefone.replace(/[()\s-]/g, "");
        if (!/^\d{10,11}$/.test(telefoneLimpo)) {
            tempErrors.telefone = "O telefone deve ter 10 ou 11 dígitos (com DDD).";
        }
    }

    if (!formData.cpf) {
        tempErrors.cpf = "O CPF é obrigatório.";
    } else if (!/^\d{11}$/.test(formData.cpf.replace(/[.-]/g, ""))) {
        tempErrors.cpf = "O CPF deve conter 11 dígitos.";
    }

    if (!formData.endereco) {
        tempErrors.endereco = "O endereço é obrigatório.";
    }

    return tempErrors;
};
