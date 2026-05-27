// Número de WhatsApp de Bike Setting en formato internacional (Ecuador +593,
// sin el 0 inicial del número local 0963197715).
export const WHATSAPP_NUMERO = '593963197715';

export function buildWhatsappUrl(mensaje: string, numero: string = WHATSAPP_NUMERO): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
