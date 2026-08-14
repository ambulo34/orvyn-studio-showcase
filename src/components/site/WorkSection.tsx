import { projects } from "@/data/site";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function WorkSection({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="work" className="section-y hairline">
      <div className="container-x">
        <SectionHeading
          eyebrow="Work"
          title="Selected work"
          copy="A look at some of the digital experiences we've designed and built."
        />
        <div className="mt-14 grid gap-16 md:mt-20 md:gap-24">
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
