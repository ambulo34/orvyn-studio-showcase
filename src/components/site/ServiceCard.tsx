import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-border bg-surface p-7 transition-colors duration-500 hover:border-accent/50 md:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0 bg-surface-2 transition-all duration-500 group-hover:h-full"
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <span className="font-display text-sm font-semibold tracking-[0.2em] text-accent">
            {service.number}
          </span>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
        </div>
        <h3 className="mt-12 text-2xl font-semibold md:mt-14 md:text-[1.75rem]">
          {service.title}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          {service.description}
        </p>
      </div>
    </article>
  );
}
