'use client';

import { useState } from 'react';
import { buildWhatsappUrl } from '@/lib/whatsapp';

const enlaces = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-negro/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#inicio" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="text-amarillo">BIKE</span>
          <span className="text-blanco">SETTING</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {enlaces.map((e) => (
            <li key={e.href}>
              <a href={e.href} className="text-blanco/80 transition-colors hover:text-amarillo">
                {e.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#agendar"
              className="rounded-full bg-amarillo px-4 py-2 font-semibold text-negro transition-colors hover:bg-amarillo-dark"
            >
              Agenda tu cita
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
          className="md:hidden"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {abierto ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {abierto && (
        <ul className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 md:hidden">
          {enlaces.map((e) => (
            <li key={e.href}>
              <a
                href={e.href}
                onClick={() => setAbierto(false)}
                className="block rounded px-2 py-2 text-blanco/80 hover:bg-white/5 hover:text-amarillo"
              >
                {e.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={buildWhatsappUrl('Hola Bike Setting, quiero agendar una cita.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setAbierto(false)}
              className="mt-1 block rounded-full bg-amarillo px-4 py-2 text-center font-semibold text-negro"
            >
              Agenda tu cita
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
