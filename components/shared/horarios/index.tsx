import Link from "next/link";
import SpeedLines from "@/components/functions/speedLines";
import { CalendarClock } from "lucide-react";

const Horarios = () => {
  return (
    <section className="bg-brand-dark py-16 text-white sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <div>
          <SpeedLines className="mb-4 lg:justify-start" />
          <h2 className="font-display text-3xl font-black italic uppercase leading-tight sm:text-4xl">
            Consultá nuestros <span className="text-brand-soft">horarios</span>
          </h2>
          <p className="mt-3 max-w-xl text-white/80">
            Mirá los horarios de atención del local y las salidas de nuestros
            servicios antes de viajar.
          </p>
        </div>
        <Link href='/horarios' className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          <CalendarClock className="h-5 w-5" />
          Ver horarios completos
        </Link>
      </div>
    </section>
  );
};

export default Horarios;
