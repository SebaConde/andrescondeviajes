"use client";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { useState } from "react";
import { MapPin, Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const NAV_LINKS = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Horarios", href: "/horarios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Ubicación", href: "#ubicacion" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center">
          <img
            src="/imgs/AC2.png"
            alt="Andrés Conde Viajes"
            className="h-10 w-auto sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#ubicacion"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-105"
          >
            <MapPin className="h-4 w-4" />
            Visitarnos
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-brand-soft hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#ubicacion"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MapPin className="h-4 w-4" />
              Visitarnos
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
