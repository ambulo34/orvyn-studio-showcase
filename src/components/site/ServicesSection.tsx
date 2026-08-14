import { services } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="section-y hairline">
      <div className="container-x">
        <SectionHeading
          eyebrow="Services"
          title="What we do"
          copy="From your first digital presence to a complete custom platform, we build solutions around your business."
        />
        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 80} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
