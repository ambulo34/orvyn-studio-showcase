import { processSteps } from "@/data/site";
import { Reveal } from "./Reveal";

export function ProcessSteps() {
  return (
    <ol className="mt-14 md:mt-20">
      {processSteps.map((step, i) => (
        <Reveal as="li" key={step.number} delay={i * 90} className="hairline group">
          <div className="grid gap-4 py-8 md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,1.2fr)] md:items-baseline md:gap-8 md:py-12">
            <span className="font-display text-sm font-semibold tracking-[0.2em] text-accent">
              {step.number}
            </span>
            <h3 className="text-3xl font-semibold transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {step.description}
            </p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
