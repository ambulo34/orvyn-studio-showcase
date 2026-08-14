import aboutVisual from "@/assets/about-visual.jpg";
import { Reveal } from "./Reveal";
import { ActionLink } from "./Button";

export function AboutSection() {
  return (
    <section id="about" className="section-y hairline">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-20">
        <Reveal className="min-w-0">
          <p className="eyebrow">About</p>
          <h2 className="mt-6 text-[2rem] font-semibold leading-[1.06] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Digital, built with purpose.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            ORVYN is a digital studio focused on helping businesses build better digital
            experiences. We combine design, technology and strategy to create websites and
            digital products that don't just look good — they work.
          </p>
          <ActionLink to="/about" variant="outline" className="mt-9">
            More about ORVYN
          </ActionLink>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <div className="overflow-hidden rounded-xl border border-border">
            <img
              src={aboutVisual}
              alt="Architectural detail with a copper edge of light"
              width={1200}
              height={1504}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
