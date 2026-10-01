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
  showCredentials = true,
  minHeight = "min-h-[520px] lg:min-h-[600px]",
  imagePosition = "object-center",
  children,
  className,
}: PageHeroProps) {
  const heroDescription = subtitle || description;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-white flex items-center justify-center border-b border-zinc-200/80",
        minHeight,
        className
      )}
    >
      {/* Full-width background photo across the entire hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={cn("h-full w-full object-cover", imagePosition)}
          fetchPriority="high"
          loading="eager"
        />
        {/* Subtle translucent white overlay to ensure flawless readability while preserving image beauty */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/82 via-white/60 to-white/78" />
      </div>

      {/* Centered content container directly over image */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 lg:py-24 text-center w-full">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-950 leading-[1.14]">
            {title}
          </h1>

          {heroDescription && (
            <div className="mt-5 text-lg sm:text-xl text-zinc-700 leading-relaxed font-normal max-w-2xl mx-auto">
              {typeof heroDescription === "string" ? (
                <p>{heroDescription}</p>
              ) : (
                heroDescription
              )}
            </div>
          )}

          {(primaryCta || secondaryCta || children) && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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

        {/* Credentials row beneath buttons */}
        {showCredentials && (
          <div className="mt-12 pt-6 border-t border-zinc-300/60 max-w-2xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 text-xs sm:text-sm font-medium text-zinc-800">
              <div className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#235055] shrink-0" />
                <span>Desde 2010</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#235055] shrink-0" />
                <span>Última tecnología dental</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#235055] shrink-0" />
                <span>Valladolid centro</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-[#235055] shrink-0" />
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
