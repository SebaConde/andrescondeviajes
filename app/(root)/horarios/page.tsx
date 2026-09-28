import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import SpeedLines from "@/components/functions/speedLines";
import { Clock, MapPin, ArrowLeft, CalendarClock } from "lucide-react";

const Horarios = () => {
  const HORARIOS_ATENCION = [
    { dia: "Lunes", horario: "16:00 - 19:00" },
    { dia: "Martes", horario: "09:00 – 12:00 | 16:00 - 19:00" },
    { dia: "Miércoles", horario: "13:00 – 16:00" },
    { dia: "Jueves", horario: "09:00 – 12:00 | 16:00 - 19:00" },
    { dia: "Viernes", horario: "16:00 - 19:00"},
    { dia: "Sábado", horario: "09:00 – 12:00" },
    { dia: "Domingos y feriados", horario: "Cerrado" },
  ];

  // TODO: reemplazar con las salidas reales de la empresa.
  const HORARIOS_SALIDAS = [
    { destino: "Montevideo", salida: "07:30", llegada: "12:00" },
    { destino: "Montevideo", salida: "14:30", llegada: "19:00" },
    { destino: "Punta del Este", salida: "08:00", llegada: "11:30" },
    { destino: "Salto", salida: "21:00", llegada: "06:30" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href='/' className="flex items-center">
            <img
              src='/imgs/andrescondeviajeslogo1.jpg'
              alt="Andrés Conde Viajes"
              className="h-10 w-auto sm:h-12"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="pt-6">
        <section className="bg-brand-dark py-10 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SpeedLines className="mb-6" />
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-soft">
              Horarios
            </p>
            <h1 className="font-display text-4xl font-black italic uppercase leading-tight sm:text-5xl">
              Consultá nuestros{" "}
              <span className="text-brand-soft">horarios</span>
            </h1>
            <p className="mt-4 max-w-2xl text-white/80">
              Horarios de atención del local y de salida de nuestros servicios.
              Ante cualquier duda, escribinos o pasate por el local.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </span>
                <h2 className="font-display text-xl font-bold uppercase text-foreground sm:text-2xl">
                  Atención en el local
                </h2>
              </div>
              <ul className="divide-y divide-border">
                {HORARIOS_ATENCION.map((item) => (
                  <li
                    key={item.dia}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="font-medium text-foreground">
                      {item.dia}
                    </span>
                    <span
                      className={`font-display text-sm font-bold uppercase ${
                        item.horario === "Cerrado"
                          ? "text-destructive"
                          : "text-primary"
                      }`}
                    >
                      {item.horario}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Podés comprar pasajes y despachar encomiendas dentro de estos
                horarios.
              </p>
            </div>

            {/* <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <CalendarClock className="h-6 w-6" />
                </span>
                <h2 className="font-display text-xl font-bold uppercase text-foreground sm:text-2xl">
                  Salidas de servicios
                </h2>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-soft/60 text-left font-display text-xs font-bold uppercase tracking-wider text-foreground">
                      <th className="px-4 py-3">Destino</th>
                      <th className="px-4 py-3">Salida</th>
                      <th className="px-4 py-3">Llegada</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {HORARIOS_SALIDAS.map((item, i) => (
                      <tr key={`${item.destino}-${i}`}>
                        <td className="px-4 py-3 font-medium text-foreground">
                          {item.destino}
                        </td>
                        <td className="px-4 py-3 font-semibold text-primary">
                          {item.salida}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {item.llegada}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Se recomienda presentarse 30 minutos antes de la salida.
              </p>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Horarios;
