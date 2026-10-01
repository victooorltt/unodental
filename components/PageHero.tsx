import React from "react";
import Button from "./Button";
import { cn } from "@/lib/utils";

export interface PageHeroProps {
  title: React.ReactNode;
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
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({
  title,
  description,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative bg-white", className)}>
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
              {title}
            </h1>

            {description && (
              <div className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl">
                {typeof description === "string" ? (
                  <p>{description}</p>
                ) : (
                  description
                )}
              </div>
            )}

            {(primaryCta || secondaryCta || children) && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {primaryCta && (
                  <Button href={primaryCta.href} variant="primary" size="lg">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="secondary" size="lg">
                    {secondaryCta.label}
                  </Button>
                )}
                {children}
              </div>
            )}
          </div>

          {/* Right Column: Image */}
          <div className="w-full">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 border border-line">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
