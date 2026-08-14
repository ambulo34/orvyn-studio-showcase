import { services } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ActionLink } from "./Button";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="services"
      className={compact ? "hairline pb-24 pt-14 md:pb-32 md:pt-16" : "section-y hairline"}
    >
      <div className="container-x">
        {compact ? null : (
          <SectionHeading
            eyebrow="Services"
            title="What we do"
            copy="From your first digital presence to a complete custom platform, we build solutions around your business."
            aside={
              <ActionLink to="/services" variant="outline">
                All services
              </ActionLink>
            }
          />
        )}
        <div className={compact ? "grid gap-4 md:grid-cols-2" : "mt-14 grid gap-4 md:mt-20 md:grid-cols-2"}>
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
