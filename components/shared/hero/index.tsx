/* eslint-disable @next/next/no-img-element */
import { Ticket, MapPin } from "lucide-react";

function SpeedLines({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-1.5 ${className}`}
      aria-hidden="true"
    >
      <span className="block h-1 w-8 -skew-x-45 rounded-full bg-primary" />
      <span className="block h-1 w-12 -skew-x-45 rounded-full bg-primary" />
      <span className="block h-1 w-16 -skew-x-45 rounded-full bg-primary" />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden"
    >
        
      <img
        src='/assets/hero-bus.jpg'
        alt="Ómnibus de Andrés Conde Viajes en ruta"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1088}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/75 to-brand-dark/30" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-32 pb-20 sm:px-6">
        <SpeedLines className="mb-6" />
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-soft">
          Empresa de ómnibus
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-black italic uppercase leading-tight text-white sm:text-6xl lg:text-7xl">
          {/* Viajá seguro,
          <br /> */}
          <span className="text-brand-soft">Andrés Conde Viajes</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Pasajes, encomiendas y viajes turísticos con la puntualidad y la
          comodidad que te merecés. Décadas conectando destinos.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            <Ticket className="h-4 w-4" />
            Conocé nuestros servicios
          </a>
          <a
            href="#ubicacion"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
          >
            <MapPin className="h-4 w-4" />
            Dónde estamos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
