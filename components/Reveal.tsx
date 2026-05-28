'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type Variante = 'up' | 'left' | 'right' | 'pop';

const claseVariante: Record<Variante, string> = {
  up: 'reveal',
  left: 'reveal reveal-left',
  right: 'reveal reveal-right',
  pop: 'reveal reveal-pop',
};

interface RevealProps {
  children: ReactNode;
  variante?: Variante;
  delay?: number; // ms
  className?: string;
  as?: ElementType;
}

export default function Reveal({
  children,
  variante = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${claseVariante[variante]} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
