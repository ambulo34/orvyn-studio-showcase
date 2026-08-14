import { projects } from "@/data/site";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ActionLink } from "./Button";

export function WorkSection({
  limit,
  compact = false,
}: {
  limit?: number;
  compact?: boolean;
}) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section
      id="work"
      className={compact ? "hairline pb-24 pt-14 md:pb-32 md:pt-16" : "section-y hairline"}
    >
      <div className="container-x">
        {compact ? null : (
          <SectionHeading
            eyebrow="Work"
            title="Selected work"
            copy="A look at some of the digital experiences we've designed and built."
            aside={
              limit ? (
                <ActionLink to="/work" variant="outline">
                  View all work
                </ActionLink>
              ) : undefined
            }
          />
        )}
        <div
          className={
            compact
              ? "grid gap-16 md:gap-24"
              : "mt-14 grid gap-16 md:mt-20 md:gap-24"
          }
        >
          {list.map((project, i) => (
            <Reveal key={project.slug} delay={40}>
              <div id={project.slug} className="scroll-mt-28">
                <ProjectCard project={project} index={i} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
