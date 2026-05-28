import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Nosotros from '@/components/Nosotros';
import Servicios from '@/components/Servicios';
import Eventos from '@/components/Eventos';
import Galeria from '@/components/Galeria';
import AgendarCita from '@/components/AgendarCita';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Eventos />
        <Galeria />
        <AgendarCita />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
