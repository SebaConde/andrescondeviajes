import SpeedLines from "../functions/speedLines";
import { Users, Clock, ShieldCheck } from "lucide-react";

function About() {
  return (
    <section id="nosotros" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <SpeedLines className="mb-4 justify-center" />
          <h2 className="font-display text-3xl font-black italic uppercase text-foreground sm:text-4xl">
            ¿Por qué <span className="text-primary">elegirnos</span>?
          </h2>
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/2">
            <img
              src="/assets/atencion-cliente.jpg"
              alt="Atención al cliente en el local de Andrés Conde Viajes"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
              loading="lazy"
              width={1408}
              height={1008}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="font-display text-2xl font-bold uppercase text-foreground sm:text-3xl">
              Atención personalizada, de verdad
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              En Andrés Conde Viajes te atendemos como corresponde: te ayudamos
              a elegir la mejor ruta y el mejor horario, y resolvemos cualquier
              consulta antes, durante y después de tu viaje.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { icon: Clock, text: "Puntualidad en cada salida" },
                { icon: ShieldCheck, text: "Seguridad y unidades al día" },
                { icon: Users, text: "Trato cercano y familiar" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-foreground">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="mt-20 flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/2">
            <h3 className="font-display text-2xl font-bold uppercase text-foreground sm:text-3xl">
              Comodidad a bordo
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nuestras unidades cuentan con butacas reclinables, climatización y
              amplio espacio para tu equipaje, para que llegues descansado a tu
              destino, hagas el viaje que hagas.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Renovamos nuestra flota constantemente para que cada trayecto sea
              tan bueno como el destino.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="/assets/atencion-cliente.jpg"
              alt="Interior de un ómnibus de Andrés Conde Viajes"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
              loading="lazy"
              width={1408}
              height={1008}
            />
          </div>
        </div>   */}
      </div>
    </section>
  );
}
export default About;