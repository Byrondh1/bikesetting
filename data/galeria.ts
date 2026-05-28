// ============================================================================
// GALERÍA DE BIKE SETTING
// ----------------------------------------------------------------------------
// Cada card tiene un carrusel interno con varias fotos. Mientras no haya fotos
// reales, cada foto usa un gradiente con los colores de marca como placeholder.
// Cuando tengas las fotos:
//   1. Coloca la imagen en la carpeta /public (ej: /public/galeria/foto1.jpg)
//   2. Agrega el campo `imagen: '/galeria/foto1.jpg'` a la foto correspondiente.
// El componente mostrará la imagen real si `imagen` existe; si no, usa el gradiente.
// ============================================================================

export interface FotoGaleria {
  gradiente: string; // clases de Tailwind para el placeholder
  imagen?: string; // ruta opcional a la foto real
}

export interface CardGaleria {
  titulo: string;
  fotos: FotoGaleria[];
}

// Combinaciones de gradiente con los colores de marca (amarillo, negro, rojo).
const G = {
  amarilloNegroRojo: 'from-amarillo via-negro to-rojo',
  rojoNegroAmarillo: 'from-rojo via-negro to-amarillo',
  negroRojoAmarillo: 'from-negro via-rojo to-amarillo',
  amarilloRojoNegro: 'from-amarillo via-rojo to-negro',
  negroAmarilloRojo: 'from-negro via-amarillo to-rojo',
  rojoAmarilloNegro: 'from-rojo via-amarillo to-negro',
};

export const galeria: CardGaleria[] = [
  {
    titulo: 'Taller Bike Setting',
    fotos: [
      { gradiente: G.amarilloNegroRojo },
      { gradiente: G.rojoNegroAmarillo },
      { gradiente: G.negroAmarilloRojo },
    ],
  },
  {
    titulo: 'Mantenimiento profesional',
    fotos: [
      { gradiente: G.rojoNegroAmarillo },
      { gradiente: G.amarilloRojoNegro },
      { gradiente: G.negroRojoAmarillo },
    ],
  },
  {
    titulo: 'Repuestos y componentes',
    fotos: [
      { gradiente: G.negroRojoAmarillo },
      { gradiente: G.amarilloNegroRojo },
      { gradiente: G.rojoAmarilloNegro },
    ],
  },
  {
    titulo: 'Cicleada nocturna',
    fotos: [
      { gradiente: G.amarilloRojoNegro },
      { gradiente: G.negroAmarilloRojo },
      { gradiente: G.rojoNegroAmarillo },
    ],
  },
  {
    titulo: 'Rutas y aventura',
    fotos: [
      { gradiente: G.negroAmarilloRojo },
      { gradiente: G.rojoAmarilloNegro },
      { gradiente: G.amarilloNegroRojo },
    ],
  },
  {
    titulo: 'Team C&S · Vuelta a Nariño',
    fotos: [
      { gradiente: G.rojoAmarilloNegro },
      { gradiente: G.amarilloRojoNegro },
      { gradiente: G.negroRojoAmarillo },
    ],
  },
];

// Lista plana de todas las fotos (para navegar entre ellas en el lightbox).
export interface FotoPlana extends FotoGaleria {
  titulo: string;
}

export const galeriaPlana: FotoPlana[] = galeria.flatMap((card) =>
  card.fotos.map((foto) => ({ ...foto, titulo: card.titulo })),
);
