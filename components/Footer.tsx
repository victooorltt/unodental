import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { tokens } from "@/lib/tokens";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Tratamientos y Servicios", href: "/tratamientos-y-servicios" },
  { label: "El Equipo", href: "/el-equipo" },
  { label: "Contacto", href: "/contacto" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-line text-zinc-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/Logo.svg"
                alt="UNO DENTAL"
                className="h-6 md:h-7 w-auto"
              />
            </Link>
            <p className="text-zinc-900 font-medium pt-1">
              Desde {tokens.contact.sinceYear} en boca de todos
            </p>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
              Odontología honesta, cercana y de vanguardia para toda la familia en el centro de Valladolid.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-950 mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 hover:text-zinc-950 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-950 mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                <span className="text-zinc-700">{tokens.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-500 shrink-0" />
                <a
                  href={`tel:${tokens.contact.phoneTel}`}
                  className="text-zinc-700 hover:text-zinc-950 transition-colors"
                >
                  {tokens.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
                <a
                  href={`mailto:${tokens.contact.email}`}
                  className="text-zinc-700 hover:text-zinc-950 transition-colors text-xs uppercase"
                >
                  {tokens.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Clinic Hours Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-950 mb-4">
              Horario de Consulta
            </h3>
            <div className="space-y-2 text-xs text-zinc-600 leading-relaxed">
              <div>
                <p className="font-medium text-zinc-800">Lunes a Jueves</p>
                <p>9:30 – 13:30 h | 16:00 – 20:00 h</p>
              </div>
              <div className="pt-1">
                <p className="font-medium text-zinc-800">Viernes</p>
                <p>9:30 – 14:00 h</p>
              </div>
              <div className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center text-xs font-medium text-zinc-900 hover:text-zinc-700 underline underline-offset-4"
                >
                  Pedir cita previa
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>
            © {currentYear} Uno Dental. Todos los derechos reservados.
          </p>
          <p>
            Valladolid, España
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
