import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { tokens } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "El Equipo",
  description:
    "Experiencia y dedicación al servicio de tu sonrisa. Conoce al equipo de profesionales de Uno Dental en Valladolid.",
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
    <>
      {/* Hero Section */}
      <PageHero
        title="Experiencia y dedicación al servicio de tu sonrisa"
        description="En UNO DENTAL, el equipo comparte un mismo compromiso: ofrecer atención cercana, profesional y personalizada, poniendo siempre tu bienestar en el centro de cada tratamiento. Con 16 años de experiencia, hemos crecido apostando por la excelencia, la innovación y la confianza. La actualización continua en técnicas, tecnología y conocimiento es fundamental para brindar soluciones eficaces y de la máxima calidad, garantizando una atención basada en la experiencia y en el trato humano."
        imageSrc="/images/el-equipo.webp"
        imageAlt="Equipo completo de Uno Dental"
        primaryCta={{
          label: "PIDE TU CITA",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "CONTACTA",
          href: `tel:${tokens.contact.phoneTel}`,
        }}
      />

      {/* Section 1: EQUIPO MÉDICO */}
      <section className="py-16 lg:py-24 border-t border-line">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mb-10">
            EQUIPO MÉDICO
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {medicalTeam.map((member) => (
              <div key={member.name} className="flex flex-col">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-100 border border-line">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg text-zinc-950 mt-4">
                  {member.name}
                </h3>
                <p className="text-sm text-zinc-600 mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: DIRECCIÓN Y ADMINISTRACIÓN */}
      <section className="py-16 lg:py-24 border-t border-line bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mb-10">
            DIRECCIÓN Y ADMINISTRACIÓN
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementTeam.map((member) => (
              <div key={member.name} className="flex flex-col">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-100 border border-line">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg text-zinc-950 mt-4">
                  {member.name}
                </h3>
                <p className="text-sm text-zinc-600 mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: CTA Band */}
      <section className="py-16 lg:py-24 border-t border-line">
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
              variant="secondary"
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
