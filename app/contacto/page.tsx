"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import { tokens } from "@/lib/tokens";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

const treatmentOptions = [
  "Implantología",
  "Ortodoncia",
  "Odontopediatría",
  "Bruxismo",
  "Odontología general",
  "Periodoncia",
  "Estética dental",
  "Endodoncia",
  "Prótesis",
  "Otra consulta",
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tratamiento: "",
    mensaje: "",
    privacidad: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío con confirmación de estado
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      tratamiento: "",
      mensaje: "",
      privacidad: false,
    });
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white">
      {/* Hero compacto con imagen de las instalaciones */}
      <PageHero
        title="Contacto"
        description="Pide tu cita o consúltanos cualquier duda"
        imageSrc="/images/consulta-clinica.webp"
        imageAlt="Instalaciones Uno Dental"
        className="border-b border-line [&>div]:py-10 lg:[&>div]:py-14"
      />

      {/* Sección principal de 2 columnas */}
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Columna 1: Formulario de contacto */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="bg-surface rounded-2xl border border-line p-8 sm:p-12 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-accent/20 flex items-center justify-center text-zinc-900 mb-6">
                    <CheckCircle2 className="w-8 h-8 text-zinc-900" />
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-950 tracking-tight">
                    ¡Gracias por contactar con nosotros!
                  </h2>
                  <p className="mt-3 text-base text-zinc-600 leading-relaxed max-w-md mx-auto">
                    Hemos recibido tu consulta correctamente. Nos pondremos en
                    contacto contigo a la mayor brevedad posible para confirmar tu
                    cita o resolver cualquier duda.
                  </p>
                  <div className="mt-8">
                    <Button
                      variant="outline"
                      size="md"
                      onClick={handleReset}
                    >
                      Enviar otro mensaje
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-line p-6 sm:p-8 shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight mb-2">
                    Formulario de contacto
                  </h2>
                  <p className="text-sm text-zinc-600 mb-8">
                    Rellena este formulario y nos pondremos en contacto contigo para
                    gestionar tu cita.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nombre completo */}
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5"
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={(e) =>
                          setFormData({ ...formData, nombre: e.target.value })
                        }
                        placeholder="Nombre y apellidos"
                        className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email y Teléfono */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5"
                        >
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="tu@email.com"
                          className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="telefono"
                          className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5"
                        >
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          required
                          value={formData.telefono}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              telefono: e.target.value,
                            })
                          }
                          placeholder="Ej. 983 20 07 71"
                          className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Tratamiento de interés */}
                    <div>
                      <label
                        htmlFor="tratamiento"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5"
                      >
                        Tratamiento de interés *
                      </label>
                      <div className="relative">
                        <select
                          id="tratamiento"
                          required
                          value={formData.tratamiento}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              tratamiento: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled>
                            Selecciona una opción...
                          </option>
                          {treatmentOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                          <svg
                            className="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label
                        htmlFor="mensaje"
                        className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        rows={4}
                        value={formData.mensaje}
                        onChange={(e) =>
                          setFormData({ ...formData, mensaje: e.target.value })
                        }
                        placeholder="Cuéntanos brevemente tu caso o consulta..."
                        className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-y min-h-[110px]"
                      />
                    </div>

                    {/* Checkbox aceptación privacidad */}
                    <div className="flex items-start gap-3 pt-1">
                      <input
                        type="checkbox"
                        id="privacidad"
                        required
                        checked={formData.privacidad}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            privacidad: e.target.checked,
                          })
                        }
                        className="mt-1 h-4 w-4 rounded border-line text-zinc-950 focus:ring-accent accent-[#6F979C] cursor-pointer"
                      />
                      <label
                        htmlFor="privacidad"
                        className="text-xs text-zinc-600 leading-relaxed cursor-pointer select-none"
                      >
                        Acepto la política de privacidad y el tratamiento de mis
                        datos para la gestión de mi consulta. *
                      </label>
                    </div>

                    {/* Botón de envío */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full justify-center"
                      >
                        {isSubmitting ? "Enviando mensaje..." : "Enviar mensaje"}
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Columna 2: Datos de contacto & Mapa */}
            <div className="lg:col-span-5 space-y-8">
              {/* Tarjeta de datos de contacto */}
              <div className="bg-surface rounded-2xl border border-line p-6 sm:p-8 space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                  Atención en clínica
                </h2>

                <div className="space-y-5">
                  {/* Teléfono */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white border border-line text-zinc-700 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Teléfono
                      </p>
                      <a
                        href={`tel:${tokens.contact.phoneTel}`}
                        className="text-base font-medium text-zinc-900 hover:text-zinc-700 underline underline-offset-4 transition-colors"
                      >
                        {tokens.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Correo */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white border border-line text-zinc-700 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Correo electrónico
                      </p>
                      <a
                        href={`mailto:${tokens.contact.email}`}
                        className="text-base font-medium text-zinc-900 hover:text-zinc-700 underline underline-offset-4 transition-colors break-all"
                      >
                        {tokens.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Dirección */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white border border-line text-zinc-700 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Dirección
                      </p>
                      <p className="text-base font-medium text-zinc-900">
                        {tokens.contact.address}
                      </p>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start gap-4 pt-3 border-t border-line">
                    <div className="p-2.5 rounded-xl bg-white border border-line text-zinc-700 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                        Horario de consulta
                      </p>
                      <div className="text-zinc-700">
                        <span className="font-medium text-zinc-900">
                          Lunes a Jueves:
                        </span>{" "}
                        9:30 – 13:30 h | 16:00 – 20:00 h
                      </div>
                      <div className="text-zinc-700">
                        <span className="font-medium text-zinc-900">
                          Viernes:
                        </span>{" "}
                        9:30 – 14:00 h
                      </div>
                      <div className="text-xs text-zinc-500 pt-1">
                        Sábados y Domingos: Cerrado
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa embebido */}
              <div>
                <div className="mb-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
                    Ubicación
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {tokens.contact.address}
                  </p>
                </div>
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-line bg-zinc-100 shadow-sm">
                  <iframe
                    src="https://maps.google.com/maps?q=Calle+L%C3%B3pez+G%C3%B3mez+14,+47002+Valladolid,+Spain&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    title="Ubicación de Clínica Uno Dental en Valladolid"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
