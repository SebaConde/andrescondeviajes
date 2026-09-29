import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const MAP_QUERY = "Agraciada 1019, Salto, Uruguay";

const Footer = () => {
  const NAV_LINKS = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Horarios", href: "/horarios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Ubicación", href: "#ubicacion" },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <footer id="contacto" className="bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="inline-block rounded-2xl bg-white p-3">
              <img
                src="/assets/logo-andres-conde.png "
                alt="Andrés Conde Viajes"
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Empresa de ómnibus: pasajes, encomiendas y viajes turísticos con
              la seguridad y puntualidad que nos caracterizan.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-brand-soft">
              Secciones
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-brand-soft">
              Contacto
            </h3>
            <p className="flex items-center gap-2.5 text-sm text-white/75">
              <MapPin className="h-4 w-4 shrink-0 text-brand-soft" />
              {MAP_QUERY}
            </p>
            <p className="flex items-center gap-2.5 text-sm text-white/75">
              <Phone className="h-4 w-4 shrink-0 text-brand-soft" />
              +598 98 189 198
            </p>
            <p className="flex items-center gap-2.5 text-sm text-white/75">
              <Mail className="h-4 w-4 shrink-0 text-brand-soft" />
              empresaconde08@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Andrés Conde Viajes. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-white/60 mt-2">
            Sitio web desarrollado por{" "}
            <a className="hover:text-green-400">
              <Link href="https://www.linkedin.com/in/scondevillalba">
                Sebastián Conde
              </Link>
            </a>{" "}
            |{" "}
            <a className="hover:text-green-400">
              <Link href="/">Pharos</Link>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
