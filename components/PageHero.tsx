import React from "react";
import Button from "./Button";
import { cn } from "@/lib/utils";
import { Sparkles, ShieldCheck, MapPin, Users } from "lucide-react";

export interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  showCredentials?: boolean;
  align?: "center" | "left";
  overlayOpacity?: "default" | "high" | "none" | number;
  minHeight?: string;
  imagePosition?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
  showCredentials = false,
  align = "center",
  overlayOpacity = "default",
  minHeight = "min-h-[520px] lg:min-h-[600px]",
  imagePosition = "object-center",
  children,
  className,
}: PageHeroProps) {
  const heroDescription = subtitle || description;
  const isLeft = align === "left";

  // Determinar la opacidad del overlay blanco:
  // - "high" (Nosotros): 0.70 para que la foto del equipo se aprecie más pero el texto siga nítido
  // - "default" (Inicio y Contacto): 0.58 para que la foto se vea un poco más (un poco solo)
  // - "none" (Tratamientos): sin overlay (la foto queda al 100% natural)
  let overlayColor: string | null = null;
  if (typeof overlayOpacity === "number") {
    overlayColor = `rgba(255, 255, 255, ${overlayOpacity})`;
  } else if (overlayOpacity === "high") {
    overlayColor = "rgba(255, 255, 255, 0.70)";
  } else if (overlayOpacity === "default") {
    overlayColor = "rgba(255, 255, 255, 0.58)";
  }

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-white flex items-center border-b border-zinc-200/80",
        isLeft ? "justify-start" : "justify-center",
        minHeight,
        className
      )}
    >
      {/* Full-width background photo across the entire hero — no containers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={cn("h-full w-full object-cover", imagePosition)}
          fetchPriority="high"
          loading="eager"
        />

        {/* Overlay de opacidad según los ajustes solicitados */}
        {overlayColor && (
          <div
            className="absolute inset-0"
            style={{ backgroundColor: overlayColor }}
          />
        )}
      </div>

      {/* Content container */}
      <div
        className={cn(
          "relative z-10 mx-auto max-w-6xl px-6 py-16 lg:py-24 w-full",
          isLeft ? "text-left" : "text-center"
        )}
      >
        <div className={cn(isLeft ? "max-w-2xl text-left" : "max-w-3xl mx-auto")}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-950 leading-[1.14]">
            {title}
          </h1>

          {heroDescription && (
            <div
              className={cn(
                "mt-5 text-lg sm:text-xl text-zinc-700 leading-relaxed font-normal",
                isLeft ? "max-w-xl" : "max-w-2xl mx-auto"
              )}
            >
              {typeof heroDescription === "string" ? (
                <p>{heroDescription}</p>
              ) : (
                heroDescription
              )}
            </div>
          )}

          {(primaryCta || secondaryCta || children) && (
            <div
              className={cn(
                "mt-8 flex flex-wrap items-center gap-4",
                isLeft ? "justify-start" : "justify-center"
              )}
            >
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
              {children}
            </div>
          )}
        </div>

        {/* Credentials row beneath buttons — SOLO en Inicio y en UNA SOLA LÍNEA (sin salto) */}
        {showCredentials && (
          <div className="mt-12 pt-6 border-t border-zinc-300/60 max-w-4xl mx-auto overflow-hidden">
            <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 text-[11px] sm:text-xs md:text-sm font-medium text-zinc-800 whitespace-nowrap overflow-x-auto no-scrollbar">
              <div className="inline-flex items-center gap-1 sm:gap-1.5 shrink-0">
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#235055] shrink-0" />
                <span>Desde 2010</span>
              </div>
              <span className="text-zinc-300 shrink-0 font-normal">·</span>
              <div className="inline-flex items-center gap-1 sm:gap-1.5 shrink-0">
                <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#235055] shrink-0" />
                <span>Última tecnología dental</span>
              </div>
              <span className="text-zinc-300 shrink-0 font-normal">·</span>
              <div className="inline-flex items-center gap-1 sm:gap-1.5 shrink-0">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#235055] shrink-0" />
                <span>Valladolid centro</span>
              </div>
              <span className="text-zinc-300 shrink-0 font-normal">·</span>
              <div className="inline-flex items-center gap-1 sm:gap-1.5 shrink-0">
                <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#235055] shrink-0" />
                <span>Odontólogos expertos</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PageHero;
