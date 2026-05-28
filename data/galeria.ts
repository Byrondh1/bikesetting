// ============================================================================
// GALERÍA DE BIKE SETTING
// ----------------------------------------------------------------------------
// Mientras no haya fotos reales, cada item usa un gradiente con los colores de
// marca como placeholder. Cuando tengas las fotos:
//   1. Coloca la imagen en la carpeta /public (ej: /public/galeria/foto1.jpg)
//   2. Agrega el campo `imagen: '/galeria/foto1.jpg'` al item correspondiente.
// El componente mostrará la imagen real si `imagen` existe; si no, usa el gradiente.
// ============================================================================

export interface ItemGaleria {
  titulo: string;
  gradiente: string; // clases de Tailwind para el placeholder
  imagen?: string; // ruta opcional a la foto real
}

export const galeria: ItemGaleria[] = [
  { titulo: 'Taller Bike Setting', gradiente: 'from-amarillo via-negro to-rojo' },
  { titulo: 'Mantenimiento profesional', gradiente: 'from-rojo via-negro to-amarillo' },
  { titulo: 'Repuestos y componentes', gradiente: 'from-negro via-rojo to-amarillo' },
  { titulo: 'Cicleada nocturna', gradiente: 'from-amarillo via-rojo to-negro' },
  { titulo: 'Rutas y aventura', gradiente: 'from-negro via-amarillo to-rojo' },
  { titulo: 'Team C&S · Vuelta a Nariño', gradiente: 'from-rojo via-amarillo to-negro' },
];
