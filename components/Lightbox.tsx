'use client';

import { useEffect, useCallback } from 'react';
import type { FotoPlana } from '@/data/galeria';

interface LightboxProps {
  items: FotoPlana[];
  indice: number;
  onClose: () => void;
  onCambiar: (nuevoIndice: number) => void;
}

export default function Lightbox({ items, indice, onClose, onCambiar }: LightboxProps) {
  const total = items.length;
  const item = items[indice];

  const anterior = useCallback(() => onCambiar((indice - 1 + total) % total), [indice, total, onCambiar]);
  const siguiente = useCallback(() => onCambiar((indice + 1) % total), [indice, total, onCambiar]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') anterior();
      if (e.key === 'ArrowRight') siguiente();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, anterior, siguiente]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.titulo}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-blanco hover:bg-white/20"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Anterior"
        onClick={(e) => {
          e.stopPropagation();
          anterior();
        }}
        className="absolute left-4 rounded-full bg-white/10 p-3 text-blanco hover:bg-white/20"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <figure className="max-w-3xl" onClick={(e) => e.stopPropagation()}>
        {item.imagen ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.imagen} alt={item.titulo} className="max-h-[75vh] rounded-xl object-contain" />
        ) : (
          <div
            className={`flex aspect-video w-[80vw] max-w-3xl items-center justify-center rounded-xl bg-gradient-to-br ${item.gradiente}`}
          >
            <span className="text-2xl font-bold text-blanco drop-shadow">{item.titulo}</span>
          </div>
        )}
        <figcaption className="mt-4 text-center text-blanco/80">
          {item.titulo} · {indice + 1} / {total}
        </figcaption>
      </figure>

      <button
        type="button"
        aria-label="Siguiente"
        onClick={(e) => {
          e.stopPropagation();
          siguiente();
        }}
        className="absolute right-4 rounded-full bg-white/10 p-3 text-blanco hover:bg-white/20 sm:right-16"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
