"use client";

import React, { useState, useEffect, useRef } from "react";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import { tokens } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <>
      {/* Block 1: Hero */}
      <PageHero
        title="Desde 2010 en boca de todos"
        description="Disfruta de la última tecnología dental en manos de odontólogos expertos"
        imageSrc="/images/hero-inicio.webp"
        imageAlt="Clínica Uno Dental Valladolid"
        primaryCta={{
          label: "PIDE CITA",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "CONTACTA",
          href: `tel:${tokens.contact.phoneTel}`,
        }}
      />

      {/* Block 2: Carrusel de tratamientos y servicios */}
      <section className="bg-surface border-t border-line py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header with Title, Subtitle, Description and Carousel Navigation */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                Tratamientos y Servicios
              </h2>
              <p className="mt-3 text-lg font-semibold text-zinc-800">
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
                className="w-10 h-10 rounded-full border border-line bg-white flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                disabled={currentIndex >= maxIndex}
                aria-label="Ver siguientes tratamientos"
                className="w-10 h-10 rounded-full border border-line bg-white flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
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
                  <div className="bg-white rounded-2xl border border-line overflow-hidden flex flex-col h-full shadow-sm hover:border-zinc-300 transition-colors">
                    <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-base font-bold tracking-tight text-zinc-950 uppercase">
                        {treatment.title}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-600 leading-relaxed flex-1">
                        {treatment.description}
                      </p>
                    </div>
                  </div>
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
                    ? "w-8 bg-zinc-900"
                    : "w-2 bg-zinc-300 hover:bg-zinc-400"
                )}
              />
            ))}
          </div>

          {/* Action button below carousel */}
          <div className="mt-10 text-center">
            <Button
              href="/tratamientos-y-servicios"
              variant="secondary"
              size="lg"
            >
              VER MÁS
            </Button>
          </div>
        </div>
      </section>

      {/* Block 3: El Equipo */}
      <section className="bg-white border-t border-line py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
                Somos UNO DENTAL
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl">
                Experiencia y atención humana para que te sientas en las mejores manos
              </p>
              <div className="mt-8">
                <Button href="/el-equipo" variant="primary" size="lg">
                  CONÓCENOS
                </Button>
              </div>
            </div>

            <div className="w-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 border border-line">
                <img
                  src="/images/el-equipo.webp"
                  alt="Equipo de profesionales Uno Dental"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: La Clínica */}
      <section className="bg-surface border-t border-line py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            <div className="order-2 lg:order-1 w-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 border border-line">
                <img
                  src="/images/consulta-clinica.webp"
                  alt="Instalaciones Uno Dental"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
                Tu bienestar empieza desde que entras
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl">
                Un ambiente tranquilo y cuidado al detalle para que tu visita sea lo más agradable posible
              </p>
              <div className="mt-8">
                <Button href="/contacto" variant="primary" size="lg">
                  DESCUBRE EL ESPACIO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 5: CTA Band */}
      <section className="bg-white border-t border-line py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            PIDE TU CITA
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contacto" variant="primary" size="lg">
              CONTACTA
            </Button>
            <Button
              href={`mailto:${tokens.contact.email}`}
              variant="outline"
              size="lg"
            >
              {tokens.contact.email}
            </Button>
            <Button
              href={`tel:${tokens.contact.phoneTel}`}
              variant="outline"
              size="lg"
            >
              {tokens.contact.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
