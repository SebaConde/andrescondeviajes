import { MapPin } from "lucide-react";
import SpeedLines from "@/components/functions/speedLines";

const Mapa = () => {
  const MAP_QUERY = "Calle Agraciada 1019, Salto, Uruguay";
  return (
    
    <section id="ubicacion" className="bg-brand-soft/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <SpeedLines className="mb-4 justify-center" />
          <h2 className="font-display text-3xl font-black italic uppercase text-foreground sm:text-4xl">
            ¿Dónde <span className="text-primary">encontrarnos</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Visitá nuestro local: te esperamos para pasajes, encomiendas y
            consultas.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
          <div className="grid lg:grid-cols-3">
            <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:col-span-1">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-foreground">
                    Nuestro local
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {MAP_QUERY}
                  </p>
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105"
              >
                <MapPin className="h-4 w-4" />
                Abrir en Google Maps
              </a>
            </div>
            <div className="h-80 lg:col-span-2 lg:h-auto">
              <iframe
                title="Mapa de ubicación de Andrés Conde Viajes"
                src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=13&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mapa;
