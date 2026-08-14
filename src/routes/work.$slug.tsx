import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, projects } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink } from "@/components/site/Button";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found | ORVYN" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — ${project.category} | ORVYN`;
    const description = project.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <section className="section-y pt-40">
      <div className="container-x">
        <h1 className="text-4xl font-semibold sm:text-5xl">Project not found</h1>
        <p className="mt-5 max-w-md text-muted-foreground">
          This project may have moved or is not published yet.
        </p>
        <ActionLink to="/work" className="mt-8" variant="outline">
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </ActionLink>
      </div>
    </section>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length] ?? project;

  return (
    <article>
      {/* Header */}
      <section className="pt-32 pb-10 md:pt-44 md:pb-14">
        <div className="container-x">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <p className="eyebrow">{project.category}</p>
            <span className="text-xs text-muted-foreground">{project.year}</span>
            {project.placeholder ? (
              <span className="rounded-full border border-border px-2 py-0.5 text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                Placeholder
              </span>
            ) : null}
          </div>

          <h1 className="rise mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1] sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p
            className="rise mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {project.overview}
          </p>
        </div>
      </section>

      {/* Cover */}
      <section className="pb-14 md:pb-20">
        <div className="container-x">
          <Reveal className="overflow-hidden rounded-xl border border-border bg-surface">
            <img
              src={project.image}
              alt={project.imageAlt}
              width={1600}
              height={1200}
              decoding="async"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Facts + narrative */}
      <section className="section-y hairline">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <dl className="grid grid-cols-2 gap-8 lg:grid-cols-1 lg:gap-7">
              {project.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="eyebrow">{fact.label}</dt>
                  <dd className="mt-2 text-base font-medium">{fact.value}</dd>
                </div>
              ))}
              <div>
                <dt className="eyebrow">Scope</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {project.scope.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>

          <div className="grid gap-10 md:gap-12">
            {[
              { title: "The challenge", body: project.challenge },
              { title: "Our approach", body: project.approach },
              { title: "The outcome", body: project.outcome },
            ].map((block, i) => (
              <Reveal key={block.title} delay={i * 80}>
                <h2 className="text-2xl font-semibold md:text-3xl">{block.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {block.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-y hairline">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl font-semibold sm:text-4xl">Gallery</h2>
          </Reveal>
          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-12">
            {project.gallery.map((item, i) => (
              <Reveal
                key={`${item.src}-${i}`}
                delay={40}
                {...(i === 0 ? { className: "md:col-span-2" } : {})}
              >
                <figure className="group">
                  <div className="overflow-hidden rounded-xl border border-border bg-surface">
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={1600}
                      height={1200}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-4 text-sm text-muted-foreground">
                    {item.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="section-y hairline">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Next project</p>
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="group mt-5 flex flex-wrap items-end justify-between gap-6"
            >
              <h2 className="text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl">
                {next.title}
              </h2>
              <span className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:text-accent">
                View Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </article>
  );
}
