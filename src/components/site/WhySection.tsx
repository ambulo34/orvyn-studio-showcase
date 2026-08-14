import { pillars } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function WhySection() {
  return (
    <section className="section-y hairline bg-surface/40">
      <div className="container-x">
        <SectionHeading eyebrow="Why ORVYN" title="Built around your business." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:mt-20 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="bg-background p-8 md:p-12">
              <h3 className="text-xl font-semibold md:text-2xl">{p.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                {p.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
