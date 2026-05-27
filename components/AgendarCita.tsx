'use client';

import { useState, type FormEvent } from 'react';
import { servicios } from '@/data/servicios';
import { buildWhatsappUrl } from '@/lib/whatsapp';

export default function AgendarCita() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    fecha: '',
    mensaje: '',
  });

  function actualizar(campo: keyof typeof form, valor: string) {
    setForm((f) => ({ ...f, [campo]: valor }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const texto = [
      '¡Hola Bike Setting! Quiero agendar una cita.',
      '',
      `*Nombre:* ${form.nombre}`,
      `*Teléfono:* ${form.telefono}`,
      `*Servicio:* ${form.servicio || 'Por definir'}`,
      `*Fecha preferida:* ${form.fecha || 'Por definir'}`,
      form.mensaje ? `*Mensaje:* ${form.mensaje}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(buildWhatsappUrl(texto), '_blank', 'noopener,noreferrer');
  }

  const inputClase =
    'w-full rounded-lg border border-white/15 bg-negro px-4 py-3 text-blanco placeholder-white/40 focus:border-amarillo focus:outline-none';

  return (
    <section id="agendar" className="bg-negro-soft py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Agenda tu <span className="text-amarillo">cita</span>
          </h2>
          <p className="mt-4 text-blanco/70">
            Completa el formulario y te contactaremos por WhatsApp para confirmar tu cita.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-blanco/80">
              Nombre *
            </label>
            <input
              id="nombre"
              type="text"
              required
              value={form.nombre}
              onChange={(e) => actualizar('nombre', e.target.value)}
              className={inputClase}
              placeholder="Tu nombre completo"
            />
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="telefono" className="mb-2 block text-sm font-medium text-blanco/80">
              Teléfono *
            </label>
            <input
              id="telefono"
              type="tel"
              required
              value={form.telefono}
              onChange={(e) => actualizar('telefono', e.target.value)}
              className={inputClase}
              placeholder="09xxxxxxxx"
            />
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="servicio" className="mb-2 block text-sm font-medium text-blanco/80">
              Servicio
            </label>
            <select
              id="servicio"
              value={form.servicio}
              onChange={(e) => actualizar('servicio', e.target.value)}
              className={inputClase}
            >
              <option value="">Selecciona un servicio</option>
              {servicios.map((s) => (
                <option key={s.nombre} value={s.nombre}>
                  {s.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="fecha" className="mb-2 block text-sm font-medium text-blanco/80">
              Fecha preferida
            </label>
            <input
              id="fecha"
              type="date"
              value={form.fecha}
              onChange={(e) => actualizar('fecha', e.target.value)}
              className={inputClase}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-blanco/80">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              rows={4}
              value={form.mensaje}
              onChange={(e) => actualizar('mensaje', e.target.value)}
              className={inputClase}
              placeholder="Cuéntanos qué necesita tu bicicleta"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amarillo px-7 py-3 font-bold text-negro transition-colors hover:bg-amarillo-dark sm:w-auto"
            >
              Enviar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
