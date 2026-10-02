"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";
import Button from "@/components/Button";
import { tokens } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface TreatmentItem {
  title: string;
  description: string;
  image: string;
}

const treatments: TreatmentItem[] = [
  {
    title: "IMPLANTOLOGÍA",
    description:
      "Ponle un diez a tu sonrisa para siempre, con salud y comodidad",
    image: "/images/implantologia.webp",
  },
  {
    title: "ORTODONCIA",
    description:
      "Mejoramos la alineación de tus dientes y la funcionalidad de tu mordida",
    image: "/images/ortodoncia.webp",
  },
  {
    title: "ODONTOPEDIATRÍA",
    description:
      "Salud dental infantil desde el principio, porque los pequeños problemas también crecen",
    image: "/images/odontopediatria.webp",
  },
  {
    title: "BRUXISMO",
    description:
      "Protegemos tus dientes del desgaste y mejoramos la función de tu mordida para una mayor comodidad diaria",
    image: "/images/bruxismo.webp",
  },
  {
    title: "ODONTOLOGÍA GENERAL",
    description:
      "Cuidamos la salud de tu boca con tratamientos completos que mantienen tus dientes sanos y tu sonrisa en equilibrio",
    image: "/images/odontologia-general.webp",
  },
  {
    title: "PERIODONCIA",
    description:
      "Mantenemos tus encías sanas y fuertes, protegiendo el soporte de tus dientes y tu salud bucodental",
    image: "/images/periodoncia.webp",
  },
  {
    title: "ESTÉTICA DENTAL",
    description:
      "Mejoramos la armonía y el aspecto de tu sonrisa para que luzca más luminosa, natural y equilibrada",
    image: "/images/estetica-dental.webp",
  },
  {
    title: "ENDODONCIA",
    description:
      "Conservamos tus dientes naturales eliminando el dolor y tratando el interior de la pieza para mantener su funcionalidad",
    image: "/images/endodoncia.webp",
  },
  {
    title: "PRÓTESIS",
    description:
      "Restauramos la forma, función y estética de tu sonrisa con soluciones personalizadas que devuelven la comodidad al masticar",
    image: "/images/protesis.webp",
  },
];

export default function HomePage() {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      let perPage = 3;
      if (window.innerWidth < 640) {
        perPage = 1;
      } else if (window.innerWidth < 1024) {
        perPage = 2;
      }
      setItemsPerPage(perPage);
      setCurrentIndex((curr) =>
        Math.min(curr, Math.max(0, treatments.length - perPage))
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, treatments.length - itemsPerPage);
  const totalPages = Math.ceil(treatments.length / itemsPerPage);

  const prev = () => {
    setCurrentIndex((curr) => Math.max(0, curr - itemsPerPage));
  };

  const next = () => {
    setCurrentIndex((curr) => Math.min(maxIndex, curr + itemsPerPage));
  };

  const goToPage = (pageIndex: number) => {
    const targetIndex = Math.min(pageIndex * itemsPerPage, maxIndex);
    setCurrentIndex(targetIndex);
  };

  const activePageIndex = Math.min(
    Math.round(currentIndex / itemsPerPage),
    totalPages - 1
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (diffX > 50) {
      next();
    } else if (diffX < -50) {
      prev();
    }
    touchStartX.current = null;
  };

  return (
    <div>
      {/* 1. Hero: Full-Screen Background Photo with centered content, credentials & subtle overlay */}
      <PageHero
        title={
          <>
            Desde 2010 en<br />
            <span className="text-[#235055]">boca de todos</span>
          </>
        }
        subtitle="Disfruta de la última tecnología dental en manos de odontólogos expertos"
        imageSrc="/images/hero-inicio.webp"
        imageAlt="Clínica Uno Dental en Valladolid"
        imagePosition="object-[center_30%]"
        primaryCta={{
          label: "PIDE CITA",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "CONTACTA",
          href: `tel:${tokens.contact.phoneTel}`,
        }}
        showCredentials={true}
      />

      {/* 2. Carrusel de tratamientos y servicios */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header with Title, Subtitle, Description and Carousel Navigation */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#235055] bg-[#EBF3F4] px-3 py-1 rounded-full inline-block mb-3">
                Especialidades
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                Tratamientos y Servicios
              </h2>
              <p className="mt-2 text-lg font-semibold text-zinc-800">
                Todo lo que ofrecemos para tu salud bucal
              </p>
              <p className="mt-2 text-base text-zinc-600">
                Cada tratamiento está diseñado para brindarte comodidad, confianza y bienestar
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={prev}
                disabled={currentIndex === 0}
                aria-label="Ver tratamientos anteriores"
                className="w-11 h-11 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 hover:border-zinc-300 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                disabled={currentIndex >= maxIndex}
                aria-label="Ver siguientes tratamientos"
                className="w-11 h-11 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 hover:border-zinc-300 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out -mx-3"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {treatments.map((treatment) => (
                <div
                  key={treatment.title}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <Link
                    href="/tratamientos-y-servicios"
                    className="group flex flex-col h-full bg-white rounded-2xl border border-zinc-200/90 overflow-hidden shadow-xs hover:border-[#A4C4C8] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="text-base font-bold tracking-tight text-zinc-950 uppercase group-hover:text-[#235055] transition-colors">
                          {treatment.title}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                          {treatment.description}
                        </p>
                      </div>
                      <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center gap-1.5 text-xs font-semibold text-[#235055]">
                        <span>Ver tratamiento</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToPage(index)}
                aria-label={`Ir a la página ${index + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  activePageIndex === index
                    ? "w-8 bg-[#1E3639]"
                    : "w-2 bg-zinc-300 hover:bg-zinc-400"
                )}
              />
            ))}
          </div>

          {/* Action button below carousel */}
          <div className="mt-10 text-center">
            <Link
              href="/tratamientos-y-servicios"
              className="inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold px-8 py-3.5 text-base rounded-xl shadow-sm transition-all hover:shadow-md"
            >
              <span>VER MÁS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. El Equipo — Somos UNO DENTAL (Soft Tinted Section) */}
      <section className="bg-[#F0F6F7] border-y border-[#D6E6E8] py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 whitespace-nowrap leading-tight">
                Somos UNO DENTAL
              </h2>
              <p className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-zinc-900 leading-snug">
                Experiencia y atención humana para que te sientas en las mejores manos
              </p>

              <div className="mt-4 space-y-3 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                <p>
                  En UNO DENTAL, el equipo comparte un mismo compromiso: ofrecer atención cercana, profesional y personalizada, poniendo siempre tu bienestar en el centro de cada tratamiento.
                </p>
                <p>
                  Con 16 años de experiencia en Valladolid, apostamos por la excelencia, la tecnología avanzada y un trato humano y cercano para cuidar de tu sonrisa.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/el-equipo"
                  className="inline-flex items-center justify-center gap-2 bg-[#1E3639] hover:bg-[#152729] text-white font-medium px-8 py-3.5 text-base rounded-xl shadow-sm transition-all hover:shadow-md cursor-pointer"
                >
                  <span>CONÓCENOS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 w-full">
              <div
                className="relative overflow-hidden rounded-2xl bg-white border border-zinc-200/80 shadow-xl"
                style={{ aspectRatio: "1950 / 970" }}
              >
                <img
                  src="/images/el-equipo.webp"
                  alt="Equipo completo de profesionales Uno Dental"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. La Clínica — Tu bienestar empieza desde que entras (Deep Petrol Contrast Section) */}
      <section className="bg-[#1E3639] text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            <div className="order-2 lg:order-1 w-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-2xl">
                <img
                  src="/images/consulta-clinica.webp"
                  alt="Instalaciones Uno Dental"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A4C4C8] bg-white/10 border border-white/20 px-3 py-1 rounded-full inline-block w-fit mb-4">
                La Clínica
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Tu bienestar empieza desde que entras
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-emerald-50/90 leading-relaxed max-w-xl">
                Un ambiente tranquilo y cuidado al detalle para que tu visita sea lo más agradable posible
              </p>

              <div className="mt-6 space-y-3 text-sm text-emerald-50/90">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#A4C4C8]" />
                  </div>
                  <span>Espacio relajante concebido para eliminar el estrés dental</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[#A4C4C8]" />
                  </div>
                  <span>Equipamiento de última generación y máxima higiene</span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-[#A4C4C8] hover:bg-[#8eb6bb] text-zinc-950 font-semibold px-8 py-3.5 text-base rounded-xl shadow-md transition-all hover:shadow-lg cursor-pointer"
                >
                  <span>DESCUBRE EL ESPACIO</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <ContactCTA />
    </div>
  );
}
