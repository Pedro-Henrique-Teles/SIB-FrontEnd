
// Valida se uma data no formato dd/mm/aaaa é real (considera meses, dias e ano bissexto)
export function isValidDateBR(dateStr) {
    const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(dateStr || "");
    if (!match) return false;
    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);

    if (month < 1 || month > 12) return false;
    if (day < 1) return false;

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    const daysInMonth = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return day <= daysInMonth[month - 1];
}

export const validateMember = (formData) => {
    const tempErrors = {};
    
    if (!formData.nome) {
        tempErrors.nome = "O nome é obrigatório.";
    }

    if (!formData.dataAniversario) {
        tempErrors.dataAniversario = "A data de aniversário é obrigatória.";
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.dataAniversario)) {
        tempErrors.dataAniversario = "A data deve estar no formato dd/mm/aaaa.";
    } else if (!isValidDateBR(formData.dataAniversario)) {
        tempErrors.dataAniversario = "A data de aniversário é inválida.";
    }
    
    if (!formData.email) {
        tempErrors.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "O formato do e-mail é inválido.";
    }

    if (!formData.telefone) {
        tempErrors.telefone = "O telefone é obrigatório.";
    } else {
        const telefoneLimpo = (formData.telefone || "").replace(/[()\s-]/g, "");
        if (!/^\d{10,11}$/.test(telefoneLimpo)) {
            tempErrors.telefone = "O telefone deve ter 10 ou 11 dígitos (com DDD).";
        }
    }

    if (!formData.cpf) {
        tempErrors.cpf = "O CPF é obrigatório.";
    } else if (!/^\d{11}$/.test((formData.cpf || "").replace(/[.-]/g, ""))) {
        tempErrors.cpf = "O CPF deve conter 11 dígitos.";
    }

    if (!formData.endereco) {
        tempErrors.endereco = "O endereço é obrigatório.";
    }

    return tempErrors;
};
