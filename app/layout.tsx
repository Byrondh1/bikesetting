import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Bike Setting — Impulsando tus metas sobre 2 ruedas',
  description:
    'Taller de bicicletas en El Ángel, Carchi. Mantenimiento preventivo y correctivo, repuestos, accesorios, asesoramiento técnico y guianza en rutas. Mecánico certificado Shimano.',
  keywords: [
    'taller de bicicletas',
    'El Ángel',
    'Carchi',
    'Ecuador',
    'mantenimiento bicicletas',
    'Shimano',
    'ciclismo',
  ],
  openGraph: {
    title: 'Bike Setting — Impulsando tus metas sobre 2 ruedas',
    description:
      'Taller de bicicletas en El Ángel, Carchi. Mantenimiento, repuestos, asesoramiento y rutas.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
