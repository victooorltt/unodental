import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { tokens } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Tratamientos y Servicios | Uno Dental Valladolid",
  description:
    "Cuidado experto para tu salud dental. Disfruta de la última tecnología dental en manos de odontólogos expertos en el centro de Valladolid.",
};

interface Treatment {
  id: string;
  number: string;
  title: string;
  image: string;
  alt: string;
  highlight: string;
  text: string[];
}

const treatments: Treatment[] = [
  {
    id: "implantologia",
    number: "01",
    title: "IMPLANTOLOGÍA",
    image: "/images/implantologia.webp",
    alt: "Implantología dental en Uno Dental",
    highlight: "Ponle un diez a tu sonrisa para siempre, con salud y comodidad.",
    text: [
      "Los implantes dentales son una alternativa eficaz para reemplazar piezas perdidas y devolver tanto la funcionalidad como la armonía de tu sonrisa. Apostamos por técnicas avanzadas, ofreciendo una implantología de precisión para un resultado cómodo y un tratamiento tranquilo.",
      "Gracias al uso de tecnología de diagnóstico de última generación, analizamos cada caso de forma personalizada para planificar el tratamiento más adecuado, logrando resultados duraderos y contribuyendo a una mejor salud bucodental a largo plazo.",
    ],
  },
  {
    id: "ortodoncia",
    number: "02",
    title: "ORTODONCIA",
    image: "/images/ortodoncia.webp",
    alt: "Ortodoncia en Uno Dental",
    highlight: "Mejoramos la alineación de tus dientes y la funcionalidad de tu mordida.",
    text: [
      "Trabajamos para ayudarte a conseguir una sonrisa alineada y una mejor salud bucodental. Combinamos experiencia y tecnología de vanguardia para ofrecer tratamientos personalizados, eficaces y cómodos, adaptados a las necesidades de cada paciente.",
      "Nuestro objetivo es encontrar la solución más adecuada para cada paciente, promoviendo un crecimiento dental sano y una sonrisa equilibrada desde la infancia hasta la adolescencia.",
    ],
  },
  {
    id: "odontopediatria",
    number: "03",
    title: "ODONTOPEDIATRÍA",
    image: "/images/odontopediatria.webp",
    alt: "Odontopediatría en Uno Dental",
    highlight: "Salud dental infantil desde el principio, porque los pequeños problemas también crecen.",
    text: [
      "Nos enfocamos en cuidar la salud bucodental de los más pequeños desde sus primeros años de vida. Ofrecemos una atención cercana y personalizada, creando un ambiente de confianza para que cada visita sea una experiencia positiva.",
      "Ayudamos a prevenir los problemas dentales desde edades tempranas, con el fomento de buenos hábitos de higiene y revisiones periódicas. Contamos con dentistas experimentados en el tratamiento de pacientes pediátricos, adaptando cada consulta a sus necesidades y ritmo.",
    ],
  },
  {
    id: "bruxismo",
    number: "04",
    title: "BRUXISMO",
    image: "/images/bruxismo.webp",
    alt: "Tratamiento del bruxismo en Uno Dental",
    highlight: "Protegemos tus dientes del desgaste y mejoramos la función de tu mordida.",
    text: [
      "El bruxismo consiste en apretar o rechinar los dientes de forma involuntaria, una acción que suele producirse mientras dormimos, aunque también puede aparecer en casos diurnos. Con el tiempo, este hábito puede desarrollar desgaste dental, dolores de cabeza, tensión en la mandíbula, molestias cervicales y alteraciones en la articulación temporomandibular (ATM).",
      "Detectarlo y tratarlo a tiempo es fundamental para evitar daños mayores y prevenir complicaciones que pueden afectar tanto a la salud bucodental como al bienestar diario.",
    ],
  },
  {
    id: "odontologia-general",
    number: "05",
    title: "ODONTOLOGÍA GENERAL",
    image: "/images/odontologia-general.webp",
    alt: "Odontología general en Uno Dental",
    highlight: "Cuidamos la salud de tu boca con tratamientos integrales que mantienen tus dientes sanos.",
    text: [
      "Mantener una buena salud bucodental es fundamental para disfrutar de una mejor calidad de vida. Ofrecemos un enfoque integral centrado en la prevención, el diagnóstico y el tratamiento de las principales patologías dentales, adaptando cada atención a las necesidades específicas de cada paciente.",
      "Disponemos de una amplia gama de tratamientos orientados a conservar y mejorar la salud de dientes y encías, apostando por soluciones eficaces que ayudan a prevenir problemas futuros y a mantener una sonrisa sana y funcional a largo plazo.",
    ],
  },
  {
    id: "periodoncia",
    number: "06",
    title: "PERIODONCIA",
    image: "/images/periodoncia.webp",
    alt: "Periodoncia y salud gingival en Uno Dental",
    highlight: "Mantenemos tus encías sanas y fuertes, protegiendo el soporte de tus dientes.",
    text: [
      "Nos dedicamos a cuidar la salud de tus encías y a preservar la estabilidad de tus dientes mediante tratamientos personalizados y técnicas avanzadas.",
      "Abordamos la prevención, el diagnóstico y el tratamiento de las enfermedades periodontales con un enfoque integral, ayudando a mantener unas encías sanas, proteger las estructuras de soporte del diente y favorecer una salud bucodental duradera.",
    ],
  },
  {
    id: "estetica-dental",
    number: "07",
    title: "ESTÉTICA DENTAL",
    image: "/images/estetica-dental.webp",
    alt: "Estética dental en Uno Dental",
    highlight: "Mejoramos la armonía y el aspecto de tu sonrisa para que luzca luminosa y natural.",
    text: [
      "La estética dental reúne diferentes tratamientos destinados a mejorar la apariencia de la sonrisa, corrigiendo aspectos como el color, la forma, el tamaño o la alineación de los dientes. Cada procedimiento se adapta a las necesidades de cada paciente para lograr un resultado armónico y natural.",
      "Ponemos a tu disposición una amplia variedad de tratamientos, desde el blanqueamiento dental hasta las carillas estéticas, con el objetivo de realzar tu sonrisa y ayudarte a sentirte más seguro en tu día a día.",
    ],
  },
  {
    id: "endodoncia",
    number: "08",
    title: "ENDODONCIA",
    image: "/images/endodoncia.webp",
    alt: "Endodoncia y conservación dental en Uno Dental",
    highlight: "Conservamos tus piezas naturales eliminando el dolor y recuperando la funcionalidad.",
    text: [
      "También conocida como tratamiento de conductos, es un procedimiento que permite eliminar la pulpa dental dañada o infectada con el objetivo de conservar la pieza dental y evitar su extracción. Este tratamiento es necesario en casos de dolor intenso y persistente, sensibilidad prolongada al frío o al calor, caries profundas, traumatismos dentales o la presencia de inflamación o abscesos en la encía.",
      "Contar con una clínica especializada en endodoncia es clave para garantizar un tratamiento preciso, eficaz y cómodo, asegurando los mejores resultados para la salud de tu diente.",
    ],
  },
  {
    id: "protesis",
    number: "09",
    title: "PRÓTESIS",
    image: "/images/protesis.webp",
    alt: "Prótesis dentales en Uno Dental",
    highlight: "Restauramos la forma, función y estética de tu sonrisa con soluciones personalizadas.",
    text: [
      "Si has perdido una o varias piezas dentales, en nuestra clínica te ofrecemos soluciones personalizadas para que recuperes la funcionalidad y la estética de tu sonrisa con total confianza.",
      "Contamos con un equipo de profesionales cualificados y tecnología que nos permite obtener resultados naturales, cómodos y duraderos. Sabemos que elegir el tratamiento adecuado es una decisión importante, por eso te ofrecemos un acompañamiento integral basado en la calidad, la cercanía y la atención personalizada.",
    ],
  },
];

export default function TratamientosPage() {
  return (
    <div>
      {/* 1. Hero: Full Photographic Background */}
      <PageHero
        title={
          <>
            Cuidado experto para{" "}
            <span className="text-[#235055]">tu salud dental</span>
          </>
        }
        subtitle="Disfruta de la última tecnología dental en manos de odontólogos expertos"
        imageSrc="/images/hero-tratamientos.webp"
        imageAlt="Tratamientos y servicios Uno Dental"
        imagePosition="object-center"
        align="left"
        showCredentials={false}
        primaryCta={{
          label: "PIDE CITA",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "CONTACTA",
          href: `tel:${tokens.contact.phoneTel}`,
        }}
      />

      {/* 2. Intro Section */}
      <section className="bg-white py-16 lg:py-20 border-b border-zinc-200/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#235055] bg-[#EBF3F4] px-3.5 py-1.5 rounded-full inline-block mb-4">
            Especialidades Médicas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950">
            TRATAMIENTOS Y SERVICIOS
          </h2>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-zinc-800">
            Todo lo que ofrecemos para tu salud bucal
          </p>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Cada tratamiento está diseñado para brindarte comodidad, confianza y bienestar con el respaldo de tecnología avanzada y atención personalizada.
          </p>
        </div>
      </section>

      {/* 3. Alternating Treatments List (with alternating backgrounds for rhythm) */}
      <div>
        {treatments.map((treatment, index) => {
          const isEven = index % 2 === 0;
          const bgClass = isEven ? "bg-white" : "bg-[#F0F6F7] border-y border-[#D6E6E8]";

          return (
            <article
              key={treatment.id}
              id={treatment.id}
              className={`${bgClass} py-16 lg:py-24 scroll-mt-24`}
            >
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Text Column */}
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold text-[#235055] bg-[#EBF3F4] border border-[#C8DFE2] px-3 py-1 rounded-full">
                        {treatment.number}
                      </span>
                      <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                        Especialidad Odontológica
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 mb-4">
                      {treatment.title}
                    </h3>

                    <p className="text-base sm:text-lg font-semibold text-[#235055] mb-6 leading-snug">
                      {treatment.highlight}
                    </p>

                    <div className="space-y-4 text-base text-zinc-700 leading-relaxed">
                      {treatment.text.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-zinc-200/80 flex items-center gap-4">
                      <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 bg-[#1E3639] hover:bg-[#152729] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-xs transition-all hover:shadow-md cursor-pointer"
                      >
                        <span>Pedir cita para {treatment.title.toLowerCase()}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200/90 shadow-lg transition-transform duration-300 hover:scale-[1.01]">
                      <img
                        src={treatment.image}
                        alt={treatment.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* 4. Bottom Contact CTA */}
      <ContactCTA
        title="¿Dudas sobre qué tratamiento necesitas?"
        description="Analizamos tu caso de forma individualizada con tecnología de última generación para recomendarte la solución más adecuada."
        buttonText="Pedir cita previa"
      />
    </div>
  );
}
