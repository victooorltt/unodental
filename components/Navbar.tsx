"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { tokens } from "@/lib/tokens";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Tratamientos", href: "/tratamientos-y-servicios" },
  { label: "Nosotros", href: "/el-equipo" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <img
              src="/Logo.svg"
              alt="UNO DENTAL"
              className="h-6 md:h-7 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors ${
                    isActive
                      ? "text-zinc-950 font-semibold"
                      : "text-zinc-600 hover:text-zinc-950 font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${tokens.contact.phoneTel}`}
              className="text-xs text-zinc-600 hover:text-zinc-950 flex items-center gap-1.5 transition-colors"
              title="Llamar a Uno Dental"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-500" />
              <span>{tokens.contact.phone}</span>
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-accent text-zinc-950 hover:bg-accent-hover rounded-lg transition-colors"
            >
              PIDE CITA
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 text-zinc-700 hover:text-zinc-950 focus:outline-none"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-line px-4 pt-3 pb-6 shadow-sm">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-3 py-2.5 rounded-lg text-base ${
                    isActive
                      ? "bg-surface text-zinc-950 font-semibold"
                      : "text-zinc-700 hover:bg-surface hover:text-zinc-950 font-medium"
                  } transition-colors`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-line flex flex-col space-y-3">
              <a
                href={`tel:${tokens.contact.phoneTel}`}
                className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-700 hover:text-zinc-950"
              >
                <Phone className="w-4 h-4 text-zinc-500" />
                <span>{tokens.contact.phone}</span>
              </a>
              <Link
                href="/contacto"
                onClick={closeMenu}
                className="w-full text-center py-2.5 text-sm font-semibold uppercase tracking-wider bg-accent text-zinc-950 hover:bg-accent-hover rounded-lg transition-colors"
              >
                PIDE CITA
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
