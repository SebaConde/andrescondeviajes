import { Bus, Ticket, Package, Users } from "lucide-react";
import SpeedLines from "../functions/speedLines";

const Services = () => {
  const SERVICES = [
    {
      icon: Bus,
      title: "Viajes de larga distancia",
      description:
        "Rutas regulares en ómnibus cómodos y puntuales, con conductores experimentados.",
    },
    {
      icon: Ticket,
      title: "Venta de pasajes",
      description:
        "Comprá tu pasaje en nuestro local de forma rápida y con la mejor tarifa.",
    },
    {
      icon: Package,
      title: "Encomiendas",
      description:
        "Enviamos tus paquetes y encomiendas a destino de manera segura y confiable.",
    },
    {
      icon: Users,
      title: "Turismo y grupos",
      description:
        "Organizamos viajes turísticos y fletes para grupos, escuelas y empresas.",
    },
  ];
  return (
    <section id="servicios" className="bg-brand-soft/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <SpeedLines className="mb-4 justify-center" />
          <h2 className="font-display text-3xl font-black italic uppercase text-foreground sm:text-4xl">
            Nuestros <span className="text-primary">servicios</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Todo lo que necesitás para moverte, enviar y viajar, en un solo
            lugar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold uppercase text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
