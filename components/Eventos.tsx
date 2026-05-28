import { eventos, type TipoEvento } from '@/data/eventos';
import Reveal from './Reveal';

const estiloTipo: Record<TipoEvento, { label: string; clase: string }> = {
  cicleada: { label: 'Cicleada nocturna', clase: 'bg-amarillo/15 text-amarillo' },
  ciclopaseo: { label: 'Ciclopaseo', clase: 'bg-blanco/10 text-blanco' },
  carrera: { label: 'Carrera', clase: 'bg-rojo/15 text-rojo' },
};

export default function Eventos() {
  return (
    <section id="eventos" className="bg-negro-soft py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Próximos <span className="text-amarillo">eventos</span>
          </h2>
          <p className="mt-4 text-blanco/70">
            Cicleadas nocturnas, ciclopaseos y carreras. Únete a la comunidad ciclista de
            El Ángel.
          </p>
        </Reveal>

        {eventos.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-white/20 bg-negro p-12 text-center">
            <p className="text-lg font-semibold text-blanco">Próximamente</p>
            <p className="mt-2 text-blanco/60">
              Estamos organizando los próximos eventos. ¡Síguenos en Instagram para
              enterarte primero!
            </p>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventos.map((ev, i) => {
              const tipo = estiloTipo[ev.tipo];
              return (
                <Reveal key={`${ev.titulo}-${i}`} delay={i * 120} className="h-full">
                  <article className="borde-anim flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-negro p-6 transition-colors duration-300 hover:border-amarillo/40">
                    <span
                      className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${tipo.clase}`}
                    >
                      {tipo.label}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-blanco">{ev.titulo}</h3>
                    <p className="mt-1 text-sm font-medium text-amarillo">{ev.fecha}</p>
                    <p className="mt-1 text-sm text-blanco/60">{ev.lugar}</p>
                    <p className="mt-3 text-sm text-blanco/70">{ev.descripcion}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
