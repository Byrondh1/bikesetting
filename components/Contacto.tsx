import { contacto } from '@/data/contacto';
import { buildWhatsappUrl } from '@/lib/whatsapp';

export default function Contacto() {
  const items = [
    { label: 'Dirección', valor: contacto.direccion },
    { label: 'Horario', valor: contacto.horario },
    {
      label: 'WhatsApp',
      valor: contacto.whatsapp,
      href: buildWhatsappUrl('Hola Bike Setting, tengo una consulta.'),
    },
    { label: 'Email', valor: contacto.email, href: `mailto:${contacto.email}` },
    { label: 'Instagram', valor: contacto.instagram, href: contacto.instagramUrl },
  ];

  return (
    <section id="contacto" className="bg-negro py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="text-amarillo">Contáctanos</span>
          </h2>
          <p className="mt-4 text-blanco/70">
            Visítanos en El Ángel, Carchi o escríbenos. Estamos para ayudarte.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <ul className="space-y-5">
            {items.map((item) => (
              <li key={item.label} className="border-b border-white/10 pb-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-amarillo">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-blanco/80 transition-colors hover:text-amarillo"
                  >
                    {item.valor}
                  </a>
                ) : (
                  <p className="mt-1 text-blanco/80">{item.valor}</p>
                )}
              </li>
            ))}
          </ul>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Ubicación de Bike Setting en El Ángel, Carchi"
              src={contacto.mapsEmbedUrl}
              className="h-80 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
