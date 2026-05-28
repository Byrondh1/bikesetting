import Reveal from './Reveal';

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-negro-soft py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal variante="left">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Sobre <span className="text-amarillo">nosotros</span>
            </h2>
            <p className="mt-6 text-blanco/70">
              Bike Setting nació en El Ángel, Carchi, con una meta clara: ofrecer a cada
              ciclista un servicio técnico de verdad, profesional y cercano. Somos el único
              taller especializado de la ciudad y acompañamos a personas y empresas en
              cada kilómetro.
            </p>
            <p className="mt-4 text-blanco/70">
              <span className="font-semibold text-blanco">Nuestra misión</span> es que tu
              bicicleta esté siempre lista para impulsar tus metas, con mantenimientos
              confiables, repuestos de calidad y asesoramiento honesto.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Reveal
                variante="pop"
                delay={150}
                as="span"
                className="inline-flex items-center gap-2 rounded-lg border border-amarillo/40 bg-amarillo/10 px-4 py-2 text-sm font-semibold text-amarillo"
              >
                Mecánico certificado Shimano
              </Reveal>
              <Reveal
                variante="pop"
                delay={300}
                as="span"
                className="inline-flex items-center gap-2 rounded-lg border border-rojo/40 bg-rojo/10 px-4 py-2 text-sm font-semibold text-rojo"
              >
                Experiencia en la Vuelta a Nariño
              </Reveal>
            </div>
          </Reveal>

          <Reveal variante="right" className="space-y-6">
            <ul className="space-y-4">
              {[
                'Únicos en la ciudad: servicio especializado que no encuentras en otro lado.',
                'Certificación oficial como Mecánico Shimano.',
                'Experiencia real como mecánico en la Vuelta a Nariño con el Team C&S.',
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-white/10 bg-negro p-4">
                  <span className="mt-0.5 text-amarillo" aria-hidden="true">
                    ✦
                  </span>
                  <span className="text-blanco/80">{item}</span>
                </li>
              ))}
            </ul>

            <blockquote className="rounded-xl border-l-4 border-amarillo bg-negro p-6">
              <p className="text-lg italic text-blanco/90">
                &ldquo;Con el Team C&S logramos la Vuelta a Nariño, estuve como
                mecánico.&rdquo;
              </p>
              <footer className="mt-3 text-sm font-semibold text-amarillo">
                — Mecánico certificado Shimano
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
