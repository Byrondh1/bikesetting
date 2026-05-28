import { buildWhatsappUrl } from '@/lib/whatsapp';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-negro pt-20"
    >
      {/* Acentos de fondo sutiles en colores de marca */}
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-amarillo/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-rojo/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amarillo/40 px-4 py-1 text-sm font-medium text-amarillo">
            <span className="h-2 w-2 rounded-full bg-amarillo" />
            Taller de bicicletas · El Ángel, Carchi
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-blanco">BIKE</span>{' '}
            <span className="text-amarillo">SETTING</span>
          </h1>

          <p className="mt-4 text-2xl font-semibold text-blanco/90 sm:text-3xl">
            Impulsando tus metas sobre 2 ruedas
          </p>

          <p className="mt-6 max-w-2xl text-lg text-blanco/70">
            Mantenimiento preventivo y correctivo, repuestos, accesorios, asesoramiento
            técnico y guianza en rutas. El único taller especializado de la ciudad, con
            certificación oficial Shimano.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={buildWhatsappUrl('Hola Bike Setting, quiero agendar una cita.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amarillo px-7 py-3 font-bold text-negro transition-colors hover:bg-amarillo-dark"
            >
              Agenda tu cita
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-blanco/30 px-7 py-3 font-semibold text-blanco transition-colors hover:border-amarillo hover:text-amarillo"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
