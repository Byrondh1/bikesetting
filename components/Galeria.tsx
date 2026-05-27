'use client';

import { useState } from 'react';
import { galeria } from '@/data/galeria';
import Lightbox from './Lightbox';

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

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {galeria.map((item, i) => (
            <button
              key={item.titulo}
              type="button"
              onClick={() => setActivo(i)}
              aria-label={`Ver imagen: ${item.titulo}`}
              className="group relative aspect-square overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amarillo"
            >
              {item.imagen ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div
                  className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${item.gradiente} transition-transform duration-300 group-hover:scale-105`}
                >
                  <span className="px-3 text-center text-sm font-bold text-blanco drop-shadow">
                    {item.titulo}
                  </span>
                </div>
              )}
              <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </button>
          ))}
        </div>
      </div>

      {activo !== null && (
        <Lightbox indice={activo} onClose={() => setActivo(null)} onCambiar={setActivo} />
      )}
    </section>
  );
}
