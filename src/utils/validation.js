
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

// Valida CPF com dígitos verificadores
export function isValidCPF(cpf) {
    if (!cpf) return false;
    const clean = String(cpf).replace(/\D/g, "");
    if (clean.length !== 11) return false;
    // Rejeita sequências do mesmo dígito (ex.: 00000000000, 11111111111)
    if (/^(\d)\1{10}$/.test(clean)) return false;

    // Primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(clean[i], 10) * (10 - i);
    }
    let remainder = sum % 11;
    const dv1 = remainder < 2 ? 0 : 11 - remainder;
    if (parseInt(clean[9], 10) !== dv1) return false;

    // Segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(clean[i], 10) * (11 - i);
    }
    remainder = sum % 11;
    const dv2 = remainder < 2 ? 0 : 11 - remainder;
    return parseInt(clean[10], 10) === dv2;
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
    } else {
        const cpfDigits = (formData.cpf || "").replace(/\D/g, "");
        if (!/^\d{11}$/.test(cpfDigits)) {
            tempErrors.cpf = "O CPF deve conter 11 dígitos.";
        } else if (!isValidCPF(formData.cpf)) {
            tempErrors.cpf = "CPF inválido.";
        }
    }

    if (!formData.endereco) {
        tempErrors.endereco = "O endereço é obrigatório.";
    }

    return tempErrors;
};
