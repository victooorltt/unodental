import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import { tokens } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Tratamientos y Servicios",
  description: "Cuidado experto para tu salud dental. Disfruta de la última tecnología dental en manos de odontólogos expertos.",
};

interface Treatment {
  title: string;
  image: string;
  alt: string;
  text: string[];
}

const treatments: Treatment[] = [
  {
    title: "IMPLANTOLOGÍA",
    image: "/images/implantologia.webp",
    alt: "Implantología dental en Uno Dental",
    text: [
      "Los implantes dentales son una alternativa eficaz para reemplazar piezas perdidas y devolver tanto la funcionalidad como la armonía de tu sonrisa. Apostamos por técnicas avanzadas, ofreciendo una implantología de precisión para un resultado cómodo y un tratamiento tranquilo.",
      "Gracias al uso de tecnología de diagnóstico de última generación, analizamos cada caso de forma personalizada para planificar el tratamiento más adecuado, logrando resultados duraderos y contribuyendo a una mejor salud bucodental a largo plazo.",
    ],
  },
  {
    title: "ORTODONCIA",
    image: "/images/ortodoncia.webp",
    alt: "Ortodoncia en Uno Dental",
    text: [
      "Trabajamos para ayudarte a conseguir una sonrisa alineada y una mejor salud bucodental. Combinamos experiencia y tecnología de vanguardia para ofrecer tratamientos personalizados, eficaces y cómodos, adaptados a las necesidades de cada paciente.",
      "Nuestro objetivo es encontrar la solución más adecuada para cada paciente, promoviendo un crecimiento dental sano y una sonrisa equilibrada desde la infancia hasta la adolescencia.",
    ],
  },
  {
    title: "ODONTOPEDIATRÍA",
    image: "/images/odontopediatria.webp",
    alt: "Odontopediatría en Uno Dental",
    text: [
      "Nos enfocamos en cuidar la salud bucodental de los más pequeños desde sus primeros años de vida. Ofrecemos una atención cercana y personalizada, creando un ambiente de confianza para que cada visita sea una experiencia positiva.",
      "Ayudamos a prevenir los problemas dentales desde edades tempranas, con el fomento de buenos hábitos de higiene y revisiones periódicas. Contamos con dentistas experimentados en el tratamiento de pacientes pediátricos, adaptando cada consulta a sus necesidades y ritmo.",
    ],
  },
  {
    title: "BRUXISMO",
    image: "/images/bruxismo.webp",
    alt: "Tratamiento del bruxismo en Uno Dental",
    text: [
      "El bruxismo consiste en apretar o rechinar los dientes de forma involuntaria, una acción que suele producirse mientras dormimos, aunque también puede aparecer en casos diurnos. Con el tiempo, este hábito puede desarrollar desgaste dental, dolores de cabeza, tensión en la mandíbula, molestias cervicales y alteraciones en la articulación temporomandibular (ATM).",
      "Detectarlo y tratarlo a tiempo es fundamental para evitar daños mayores y prevenir complicaciones que pueden afectar tanto a la salud bucodental como al bienestar diario.",
    ],
  },
  {
    title: "ODONTOLOGÍA GENERAL",
    image: "/images/odontologia-general.webp",
    alt: "Odontología general en Uno Dental",
    text: [
      "Mantener una buena salud bucodental es fundamental para disfrutar de una mejor calidad de vida. Ofrecemos un enfoque integral centrado en la prevención, el diagnóstico y el tratamiento de las principales patologías dentales, adaptando cada atención a las necesidades específicas de cada paciente.",
      "Disponemos de una amplia gama de tratamientos orientados a conservar y mejorar la salud de dientes y encías, apostando por soluciones eficaces que ayudan a prevenir problemas futuros y a mantener una sonrisa sana y funcional a largo plazo.",
    ],
  },
  {
    title: "PERIODONCIA",
    image: "/images/periodoncia.webp",
    alt: "Periodoncia y salud gingival en Uno Dental",
    text: [
      "Nos dedicamos a cuidar la salud de tus encías y a preservar la estabilidad de tus dientes mediante tratamientos personalizados y técnicas avanzadas.",
      "Abordamos la prevención, el diagnóstico y el tratamiento de las enfermedades periodontales con un enfoque integral, ayudando a mantener unas encías sanas, proteger las estructuras de soporte del diente y favorecer una salud bucodental duradera.",
    ],
  },
  {
    title: "ESTÉTICA DENTAL",
    image: "/images/estetica-dental.webp",
    alt: "Estética dental en Uno Dental",
    text: [
      "La estética dental reúne diferentes tratamientos destinados a mejorar la apariencia de la sonrisa, corrigiendo aspectos como el color, la forma, el tamaño o la alineación de los dientes. Cada procedimiento se adapta a las necesidades de cada paciente para lograr un resultado armónico y natural.",
      "Ponemos a tu disposición una amplia variedad de tratamientos, desde el blanqueamiento dental hasta las carillas estéticas, con el objetivo de realzar tu sonrisa y ayudarte a sentirte más seguro en tu día a día.",
    ],
  },
  {
    title: "ENDODONCIA",
    image: "/images/endodoncia.webp",
    alt: "Endodoncia y conservación dental en Uno Dental",
    text: [
      "También conocida como tratamiento de conductos, es un procedimiento que permite eliminar la pulpa dental dañada o infectada con el objetivo de conservar la pieza dental y evitar su extracción. Este tratamiento es necesario en casos de dolor intenso y persistente, sensibilidad prolongada al frío o al calor, caries profundas, traumatismos dentales o la presencia de inflamación o abscesos en la encía.",
      "Contar con una clínica especializada en endodoncia es clave para garantizar un tratamiento preciso, eficaz y cómodo, asegurando los mejores resultados para la salud de tu diente.",
    ],
  },
  {
    title: "PRÓTESIS",
    image: "/images/protesis.webp",
    alt: "Prótesis dentales en Uno Dental",
    text: [
      "Si has perdido una o varias piezas dentales, en nuestra clínica te ofrecemos soluciones personalizadas para que recuperes la funcionalidad y la estética de tu sonrisa con total confianza.",
      "Contamos con un equipo de profesionales cualificados y tecnología que nos permite obtener resultados naturales, cómodos y duraderos. Sabemos que elegir el tratamiento adecuado es una decisión importante, por eso te ofrecemos un acompañamiento integral basado en la calidad, la cercanía y la atención personalizada.",
    ],
  },
];

export default function TratamientosPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        title="Cuidado experto para tu salud dental"
        description="Disfruta de la última tecnología dental en manos de odontólogos expertos"
        primaryCta={{
          label: "PIDE CITA",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "CONTACTA",
          href: `tel:${tokens.contact.phoneTel}`,
        }}
        imageSrc="/images/hero-tratamientos.webp"
        imageAlt="Tratamientos y servicios Uno Dental"
      />

      {/* 2. Treatments List Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              TRATAMIENTOS Y SERVICIOS
            </h2>
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-zinc-800">
              Todo lo que ofrecemos para tu salud bucal
            </p>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Cada tratamiento está diseñado para brindarte comodidad, confianza y bienestar
            </p>
          </div>

          {/* 3. Alternating Treatments list */}
          <div className="divide-y divide-line">
            {treatments.map((treatment, index) => {
              const isEven = index % 2 === 0;

              return (
                <article
                  key={treatment.title}
                  className="py-12 lg:py-16 first:pt-0 last:pb-0"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mb-4 sm:mb-6">
                        {treatment.title}
                      </h3>
                      <div className="space-y-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
                        {treatment.text.map((paragraph, pIdx) => (
                          <p key={pIdx}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-100 border border-line">
                        <img
                          src={treatment.image}
                          alt={treatment.alt}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA Band */}
      <section className="bg-surface border-t border-line py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-8">
            PIDE TU CITA
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
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
              variant="secondary"
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
