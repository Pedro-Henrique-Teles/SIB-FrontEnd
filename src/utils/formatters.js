// Formata uma string qualquer em data BR (dd/mm/aaaa) enquanto o usuário digita
export function formatDateBR(value) {
  if (!value) return "";
  const digits = value.replace(/\D/g, "").slice(0, 8); // ddmmaaaa (até 8 dígitos)
  const len = digits.length;

  if (len <= 2) return digits; // d, dd
  if (len <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`; // dd/m, dd/mm
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`; // dd/mm/aaaa
}
