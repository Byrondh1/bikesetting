import { servicios, type IconoServicio } from '@/data/servicios';
import Reveal from './Reveal';

function Icono({ tipo }: { tipo: IconoServicio }) {
  const common = {
    width: 32,
    height: 32,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (tipo) {
    case 'escudo':
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'llave':
      return (
        <svg {...common}>
          <path d="M15 7a4 4 0 10-3.5 3.95L4 18v2h2l1-1h2v-2h2v-2l1.05-1.05A4 4 0 0015 7z" />
        </svg>
      );
    case 'estrella':
      return (
        <svg {...common}>
          <path d="M12 3l2.6 5.3 5.9.9-4.3 4.2 1 5.9-5.2-2.8L6.8 19.3l1-5.9L3.5 9.2l5.9-.9L12 3z" />
        </svg>
      );
    case 'engranaje':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        </svg>
      );
    case 'chat':
      return (
        <svg {...common}>
          <path d="M4 5h16v11H8l-4 4V5z" />
          <path d="M8 9h8M8 12h5" />
        </svg>
      );
    case 'ruta':
      return (
        <svg {...common}>
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <path d="M8.5 18H14a3 3 0 000-6H9a3 3 0 010-6h6.5" />
        </svg>
      );
  }
}

export default function Servicios() {
  return (
    <section id="servicios" className="bg-negro py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Nuestros <span className="text-amarillo">servicios</span>
          </h2>
          <p className="mt-4 text-blanco/70">
            Soluciones completas para tu bicicleta, desde el mantenimiento preventivo
            hasta el acompañamiento en ruta.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, i) => (
            <Reveal key={s.nombre} delay={i * 120} className="h-full">
              <article className="group h-full rounded-2xl border border-white/10 bg-negro-soft p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amarillo/60 hover:shadow-[0_0_30px_-5px_rgba(255,203,5,0.35)]">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-amarillo/10 text-amarillo transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-amarillo group-hover:text-negro">
                  <Icono tipo={s.icono} />
                </div>
                <h3 className="text-xl font-semibold text-blanco">{s.nombre}</h3>
                <p className="mt-2 text-sm text-blanco/70">{s.descripcion}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
