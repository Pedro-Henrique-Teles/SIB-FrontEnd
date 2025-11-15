// Valida se uma data no formato dd/mm/aaaa é real (considera meses, dias e ano bissexsto)
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

// Valida CPF com dígitos verificadores (Não estamos usando, mas é bom manter)
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


export const validateMember = (formData, isEdit = false) => {
    const tempErrors = {};
    
    if (!formData.nome) {
        tempErrors.nome = "O nome é obrigatório.";
    }

    if (!formData.dataAniversario) {
        tempErrors.dataAniversario = "A data de aniversário é obrigatória.";
    } else if (formData.dataAniversario.length !== 10 || !isValidDateBR(formData.dataAniversario)) {
        tempErrors.dataAniversario = "A data de aniversário é inválida (use dd/mm/aaaa).";
    }
    
    if (!formData.email) {
        tempErrors.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "O formato do e-mail é inválido.";
    }

    // --- CORREÇÃO AQUI ---
    // Validar a quantidade de dígitos NUMÉRICOS
    if (!formData.telefone) {
        tempErrors.telefone = "O telefone é obrigatório.";
    } else {
        const telefoneLimpo = (formData.telefone || "").replace(/\D/g, "");
        if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) { // 10 (fixo) ou 11 (celular)
            tempErrors.telefone = "O telefone é inválido (preencha DD + número).";
        }
    }

    if (!formData.cpf) {
        tempErrors.cpf = "O CPF é obrigatório.";
    } else {
        // CORREÇÃO AQUI: Validar a quantidade de dígitos NUMÉRICOS
        const cpfDigits = (formData.cpf || "").replace(/\D/g, "");
        if (cpfDigits.length !== 11) { //
            tempErrors.cpf = "O CPF é inválido (deve ter 11 dígitos).";
        } 
    }
    // --- FIM DA CORREÇÃO ---

    if (!formData.endereco) {
        tempErrors.endereco = "O endereço é obrigatório.";
    }

    if (!formData.cargo) {
        tempErrors.cargo = "O cargo é obrigatório.";
    }
    
    // Validações de 'sexo' e 'password' REMOVIDAS

    return tempErrors;
};