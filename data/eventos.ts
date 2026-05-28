// ============================================================================
// EVENTOS DE BIKE SETTING
// ----------------------------------------------------------------------------
// Para agregar un evento, copia un bloque { ... } dentro del array `eventos`
// y edita sus campos. El orden en que aparezcan aquí es el orden en que se
// mostrarán en la web. Si dejas el array vacío ([]), la sección mostrará
// automáticamente un mensaje de "Próximamente".
//
// tipo:  'cicleada' | 'ciclopaseo' | 'carrera'   (define el color de la etiqueta)
// fecha: texto libre, ej. '15 de junio, 2026 · 19h00'
// ============================================================================

export type TipoEvento = 'cicleada' | 'ciclopaseo' | 'carrera';

export interface Evento {
  tipo: TipoEvento;
  titulo: string;
  fecha: string;
  lugar: string;
  descripcion: string;
}

export const eventos: Evento[] = [
  {
    tipo: 'cicleada',
    titulo: 'Cicleada Nocturna',
    fecha: 'Por confirmar',
    lugar: 'El Ángel, Carchi',
    descripcion:
      'Rodada nocturna por la ciudad. Trae tu bicicleta con luces y vive el ciclismo en comunidad.',
  },
  {
    tipo: 'ciclopaseo',
    titulo: 'Ciclopaseo Familiar',
    fecha: 'Por confirmar',
    lugar: 'El Ángel, Carchi',
    descripcion:
      'Recorrido relajado para toda la familia. Ideal para disfrutar del aire libre sobre dos ruedas.',
  },
  {
    tipo: 'carrera',
    titulo: 'Carrera Bike Setting',
    fecha: 'Por confirmar',
    lugar: 'El Ángel, Carchi',
    descripcion:
      'Competencia para ciclistas que buscan poner a prueba su rendimiento y velocidad.',
  },
];
