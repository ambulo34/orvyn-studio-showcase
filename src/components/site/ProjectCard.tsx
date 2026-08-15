import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/site";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group">
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        aria-label={`View project: ${project.title}`}
        className="block overflow-hidden rounded-xl border border-border bg-surface"
      >
        <div className="aspect-4/3 overflow-hidden sm:aspect-16/10">
          <img
            src={project.image}
            srcSet={project.imageSrcSet}
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt={project.imageAlt}
            width={1600}
            height={1200}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        </div>
      </Link>

      <div className="mt-6 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow">{project.category}</p>
            <span className="text-xs text-muted-foreground">{project.year}</span>
            {project.placeholder ? (
              <span className="rounded-full border border-border px-2 py-0.5 text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                Placeholder
              </span>
            ) : null}
          </div>
          <h3 className="mt-3 text-2xl font-semibold md:text-3xl">{project.title}</h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.description}
          </p>
        </div>

        <Link
          to="/work/$slug"
          params={{ slug: project.slug }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
        >
          View Project
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
