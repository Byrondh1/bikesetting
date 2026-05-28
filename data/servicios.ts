// Íconos como nombres clave; el componente Servicios mapea cada clave a un SVG inline.
export type IconoServicio =
  | 'escudo'
  | 'llave'
  | 'estrella'
  | 'engranaje'
  | 'chat'
  | 'ruta';

export interface Servicio {
  icono: IconoServicio;
  nombre: string;
  descripcion: string;
}

export const servicios: Servicio[] = [
  {
    icono: 'escudo',
    nombre: 'Mantenimiento Seguro',
    descripcion:
      'Revisión preventiva de frenos, dirección y puntos críticos para que ruedes con total confianza.',
  },
  {
    icono: 'llave',
    nombre: 'Mantenimiento Esencial',
    descripcion:
      'Ajustes, lubricación y puesta a punto general para mantener tu bicicleta en óptimas condiciones.',
  },
  {
    icono: 'estrella',
    nombre: 'Mantenimiento Superior',
    descripcion:
      'Servicio integral de alto nivel: desarme, limpieza profunda y calibración profesional completa.',
  },
  {
    icono: 'engranaje',
    nombre: 'Repuestos y Accesorios',
    descripcion:
      'Componentes originales, repuestos y accesorios para cada estilo y necesidad de ciclismo.',
  },
  {
    icono: 'chat',
    nombre: 'Asesoramiento Técnico',
    descripcion:
      'Orientación experta para elegir, configurar y mejorar tu bicicleta según tus metas.',
  },
  {
    icono: 'ruta',
    nombre: 'Guianza en Rutas',
    descripcion:
      'Acompañamiento y guía en rutas para que descubras nuevos recorridos con seguridad.',
  },
];
