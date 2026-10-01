import React from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { tokens } from "@/lib/tokens";

interface ContactCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function ContactCTA({
  title = "PIDE TU CITA",
  description = "Disfruta de la última tecnología dental en manos de odontólogos expertos. Todo lo que ofrecemos para tu salud bucal, diseñado para brindarte comodidad, confianza y bienestar.",
  buttonText = "Contactar",
}: ContactCTAProps) {
  return (
    <section className="bg-[#E4EFF1] border-y border-[#C5DFE2] py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-950">
          {title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-700 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 bg-[#1E3639] hover:bg-[#152729] text-white font-semibold px-8 py-3.5 text-base rounded-xl shadow-sm transition-all hover:shadow-md w-full sm:w-auto cursor-pointer"
          >
            <span>{buttonText}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <a
            href={`tel:${tokens.contact.phoneTel}`}
            className="inline-flex items-center justify-center gap-2 bg-white border border-[#C5DFE2] hover:border-[#1E3639] text-zinc-900 font-medium px-6 py-3.5 text-base rounded-xl transition-colors w-full sm:w-auto shadow-xs"
          >
            <Phone className="h-4 w-4 text-[#235055]" />
            <span>{tokens.contact.phone}</span>
          </a>

          <a
            href={`mailto:${tokens.contact.email}`}
            className="inline-flex items-center justify-center gap-2 bg-white border border-[#C5DFE2] hover:border-[#1E3639] text-zinc-900 font-medium px-6 py-3.5 text-base rounded-xl transition-colors w-full sm:w-auto shadow-xs"
          >
            <Mail className="h-4 w-4 text-[#235055]" />
            <span className="text-xs uppercase font-medium">{tokens.contact.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
