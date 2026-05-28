'use client';

import { useState } from 'react';
import { galeria, galeriaPlana, type CardGaleria } from '@/data/galeria';
import Lightbox from './Lightbox';

function CardCarrusel({
  card,
  indiceBase,
  onAbrir,
}: {
  card: CardGaleria;
  indiceBase: number;
  onAbrir: (indiceGlobal: number) => void;
}) {
  const [actual, setActual] = useState(0);
  const total = card.fotos.length;
  const foto = card.fotos[actual];

  const ir = (i: number) => setActual((i + total) % total);

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-negro-soft">
      <div className="relative aspect-video">
        <button
          type="button"
          onClick={() => onAbrir(indiceBase + actual)}
          aria-label={`Ampliar foto: ${card.titulo} (${actual + 1} de ${total})`}
          className="group block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-amarillo"
        >
          {foto.imagen ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={foto.imagen}
              alt={`${card.titulo} ${actual + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${foto.gradiente} transition-transform duration-300 group-hover:scale-105`}
            >
              <span className="px-3 text-center text-lg font-bold text-blanco drop-shadow">
                {card.titulo}
              </span>
            </div>
          )}
          <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
        </button>

        {/* Flechas de navegación del carrusel */}
        <button
          type="button"
          aria-label="Foto anterior"
          onClick={() => ir(actual - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-blanco transition-colors hover:bg-black/70"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Foto siguiente"
          onClick={() => ir(actual + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-blanco transition-colors hover:bg-black/70"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <p className="text-sm font-semibold text-blanco">{card.titulo}</p>
        {/* Indicadores (dots) */}
        <div className="flex gap-1.5">
          {card.fotos.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir a la foto ${i + 1}`}
              aria-current={i === actual}
              onClick={() => ir(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === actual ? 'bg-amarillo' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Galeria() {
  const [activo, setActivo] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-negro py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Nuestra <span className="text-amarillo">galería</span>
          </h2>
          <p className="mt-4 text-blanco/70">
            Un vistazo a nuestro taller, servicios y eventos. (Imágenes de muestra hasta
            subir las fotos reales.)
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galeria.map((card, i) => {
            const indiceBase = galeria
              .slice(0, i)
              .reduce((acc, c) => acc + c.fotos.length, 0);
            return (
              <CardCarrusel
                key={card.titulo}
                card={card}
                indiceBase={indiceBase}
                onAbrir={setActivo}
              />
            );
          })}
        </div>
      </div>

      {activo !== null && (
        <Lightbox
          items={galeriaPlana}
          indice={activo}
          onClose={() => setActivo(null)}
          onCambiar={setActivo}
        />
      )}
    </section>
  );
}
