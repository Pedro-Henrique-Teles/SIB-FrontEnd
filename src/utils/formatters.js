// Formata uma string qualquer em data BR (dd/mm/aaaa) enquanto o usuário digita
export function formatDateBR(value) {
  if (!value) return "";
  const digits = value.replace(/\D/g, "").slice(0, 8); // ddmmaaaa (até 8 dígitos)
  const len = digits.length;

  if (len <= 2) return digits; // d, dd
  if (len <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`; // dd/m, dd/mm
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`; // dd/mm/aaaa
}

// Formata telefone brasileiro em (DD) 9XXXX-XXXX ou (DD) XXXX-XXXX conforme o tamanho
export function formatPhoneBR(value) {
  if (!value) return "";
  const d = value.replace(/\D/g, "").slice(0, 11);
  const len = d.length;
  if (len <= 2) return `(${d}`;
  if (len <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (len <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`; // 8 dígitos sem 9
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`; // 9 dígitos
}

// Formata CPF como 999.999.999-99
export function formatCPFBR(value) {
  if (!value) return "";
  const d = value.replace(/\D/g, "").slice(0, 11);
  const len = d.length;
  if (len <= 3) return d;
  if (len <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
  if (len <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}
