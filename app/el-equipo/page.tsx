import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";
import { tokens } from "@/lib/tokens";
import { Award, HeartHandshake, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "El Equipo | Uno Dental Valladolid",
  description:
    "Experiencia y dedicación al servicio de tu sonrisa. Conoce al equipo de odontólogos y profesionales de Uno Dental en Valladolid.",
};

const medicalTeam = [
  {
    name: "Sofía Álvarez Garrote",
    role: "Odontología general, estética y prótesis",
    image: "/images/team-sofia.webp",
  },
  {
    name: "Rodrigo Sanz Pollo",
    role: "Odontología general, endodoncia y prótesis",
    image: "/images/team-rodrigo.webp",
  },
  {
    name: "Gonzalo Sanz Hernando",
    role: "Implantología y prótesis",
    image: "/images/team-gonzalo.webp",
  },
  {
    name: "Rubén Herrero Sánchez",
    role: "Cirugía e implantes",
    image: "/images/team-ruben.webp",
  },
  {
    name: "Lucía Gonzalez Estévez",
    role: "Odontología general, odontopediatría y periodoncia",
    image: "/images/team-lucia.webp",
  },
  {
    name: "Marta Asensio Pascual",
    role: "Ortodoncia invisible y convencional",
    image: "/images/team-marta.webp",
  },
  {
    name: "Paloma Alonso Armada",
    role: "Ortodoncia invisible y convencional",
    image: "/images/team-paloma.webp",
  },
  {
    name: "Patricia Fernández Rodríguez",
    role: "Odontología general, odontopediatría y periodoncia",
    image: "/images/team-patricia.webp",
  },
  {
    name: "Diana Suarez Agudelo",
    role: "Auxiliar de clínica",
    image: "/images/team-diana.webp",
  },
  {
    name: "María García Mateos",
    role: "Higienista dental",
    image: "/images/team-maria-garcia.webp",
  },
  {
    name: "Cristina García Álvarez",
    role: "Higienista dental",
    image: "/images/team-cristina.webp",
  },
  {
    name: "Samantha Abreu Mateo",
    role: "Higienista dental",
    image: "/images/team-samantha.webp",
  },
];

const managementTeam = [
  {
    name: "Alicia María Méndez",
    role: "Asesora de tratamientos",
    image: "/images/team-alicia.webp",
  },
  {
    name: "Elena Míguez Sánchez",
    role: "Recepción",
    image: "/images/team-elena.webp",
  },
  {
    name: "María Ramos Villullas",
    role: "Recepción",
    image: "/images/team-maria-ramos.webp",
  },
  {
    name: "Jorge Herrera Galán",
    role: "Director",
    image: "/images/team-jorge.webp",
  },
];

export default function ElEquipoPage() {
  return (
    <div>
      {/* 1. Hero Section: Full Photographic Background with Whole Team Photo */}
      <PageHero
        title={
          <>
            Experiencia y dedicación al servicio de{" "}
            <span className="text-[#235055]">tu sonrisa</span>
          </>
        }
        subtitle="En UNO DENTAL, el equipo comparte un mismo compromiso: ofrecer atención cercana, profesional y personalizada, poniendo siempre tu bienestar en el centro de cada tratamiento."
        imageSrc="/images/el-equipo.webp"
        imageAlt="Equipo completo de Uno Dental en Valladolid"
        imagePosition="object-[center_35%]"
        primaryCta={{
          label: "PIDE TU CITA",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "CONTACTA",
          href: `tel:${tokens.contact.phoneTel}`,
        }}
        showCredentials={true}
      />

      {/* 2. Narrative / Vision (Deep Petrol Contrast Section, inspired by Bostak) */}
      <section className="bg-[#1E3639] text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A4C4C8] bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full inline-block">
                Nuestra Filosofía
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-snug">
                16 años apostando por la excelencia, la innovación y la confianza.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-emerald-50/90 leading-relaxed font-normal">
                <p>
                  En UNO DENTAL, el equipo comparte un mismo compromiso: ofrecer atención cercana, profesional y personalizada, poniendo siempre tu bienestar en el centro de cada tratamiento.
                </p>
                <p>
                  Con 16 años de experiencia, hemos crecido apostando por la excelencia, la innovación y la confianza. La actualización continua en técnicas, tecnología y conocimiento es fundamental para brindar soluciones eficaces y de la máxima calidad, garantizando una atención basada en la experiencia y en el trato humano.
                </p>
              </div>
            </div>

            {/* 3 Highlight Cards */}
            <div className="space-y-4">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-[#A4C4C8]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">16 Años de Experiencia</h3>
                  <p className="text-sm text-emerald-50/85 mt-1 leading-relaxed">
                    Trayectoria consolidada cuidando la salud bucodental de generaciones de familias en Valladolid.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-[#A4C4C8]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Tecnología de Vanguardia</h3>
                  <p className="text-sm text-emerald-50/85 mt-1 leading-relaxed">
                    Actualización continua en técnicas digitales, diagnóstico de precisión e instrumental de última generación.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-6 h-6 text-[#A4C4C8]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Trato Humano y Cercano</h3>
                  <p className="text-sm text-emerald-50/85 mt-1 leading-relaxed">
                    Atención personalizada sin prisas, con tiempo y dedicación para que te sientas en las mejores manos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 1: EQUIPO MÉDICO */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#235055] bg-[#EBF3F4] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Especialistas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              EQUIPO MÉDICO
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600">
              Odontólogos y profesionales colegiados especializados en cada área de la odontología.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {medicalTeam.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col bg-white rounded-2xl border border-zinc-200/90 overflow-hidden shadow-xs hover:border-[#A4C4C8] hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden bg-zinc-100 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <h3 className="font-bold text-base text-zinc-950 group-hover:text-[#235055] transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-medium text-[#235055] bg-[#EBF3F4] border border-[#C8DFE2] px-2.5 py-1 rounded-md mt-2.5 w-fit leading-tight">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Section 2: DIRECCIÓN Y ADMINISTRACIÓN (Soft Tinted Section) */}
      <section className="bg-[#F0F6F7] border-t border-[#D6E6E8] py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#235055] bg-white border border-[#D6E6E8] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Gestión y Atención
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              DIRECCIÓN Y ADMINISTRACIÓN
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600">
              Las personas que te reciben con una sonrisa y coordinan cada detalle de tu visita.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {managementTeam.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col bg-white rounded-2xl border border-zinc-200/90 overflow-hidden shadow-xs hover:border-[#A4C4C8] hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden bg-zinc-100 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <h3 className="font-bold text-base text-zinc-950 group-hover:text-[#235055] transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-medium text-zinc-700 bg-zinc-100 border border-zinc-200 px-2.5 py-1 rounded-md mt-2.5 w-fit leading-tight">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Contact CTA */}
      <ContactCTA
        title="PIDE TU CITA CON NUESTRO EQUIPO"
        description="Estamos en el centro de Valladolid para atenderte con la máxima profesionalidad y cercanía."
        buttonText="Pedir cita previa"
      />
    </div>
  );
}
