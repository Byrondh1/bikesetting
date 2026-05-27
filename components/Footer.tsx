import { contacto } from '@/data/contacto';
import { buildWhatsappUrl } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-negro-soft py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <p className="text-xl font-black tracking-tight">
            <span className="text-amarillo">BIKE</span>{' '}
            <span className="text-blanco">SETTING</span>
          </p>
          <p className="mt-2 text-sm text-blanco/60">
            Impulsando tus metas sobre 2 ruedas
          </p>
        </div>

        <div className="text-sm text-blanco/70">
          <p className="font-semibold text-blanco">Bike Setting</p>
          <p className="mt-2">{contacto.ciudad}</p>
          <p>{contacto.horario}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="font-semibold text-blanco">Síguenos</p>
          <a
            href={contacto.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blanco/70 transition-colors hover:text-amarillo"
          >
            Instagram {contacto.instagram}
          </a>
          <a
            href={buildWhatsappUrl('Hola Bike Setting, tengo una consulta.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blanco/70 transition-colors hover:text-amarillo"
          >
            WhatsApp {contacto.whatsapp}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-4 pt-6 text-center text-sm text-blanco/50">
        © {new Date().getFullYear()} Bike Setting. Todos los derechos reservados.
      </div>
    </footer>
  );
}
