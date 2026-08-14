import heroImage from "@/assets/hero-composition.jpg";
import { ActionLink } from "./Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-20%] h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[140px]"
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div className="min-w-0">
          <p className="eyebrow rise" style={{ animationDelay: "60ms" }}>
            Digital Solutions Studio
          </p>
          <h1
            className="rise mt-6 max-w-[15ch] text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]"
            style={{ animationDelay: "140ms" }}
          >
            We build digital experiences that move businesses forward.
          </h1>
          <p
            className="rise mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "260ms" }}
          >
            ORVYN designs and builds modern websites, web applications and digital
            experiences that help businesses stand out and grow.
          </p>
          <div
            className="rise mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "360ms" }}
          >
            <ActionLink to="/contact" size="lg">
              Start a Project
            </ActionLink>
            <ActionLink to="/work" size="lg" variant="outline">
              Explore Our Work
            </ActionLink>
          </div>
        </div>

        <div
          className="rise relative min-w-0"
          style={{ animationDelay: "440ms" }}
          aria-hidden
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <img
              src={heroImage}
              alt="Layered interface panels representing digital products built by ORVYN"
              width={1408}
              height={1408}
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-lg border border-border bg-background/90 px-5 py-4 backdrop-blur-md sm:block">
            <p className="eyebrow">Currently building</p>
            <p className="font-display mt-2 text-sm font-semibold">
              Websites · Web Apps · E-commerce
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
