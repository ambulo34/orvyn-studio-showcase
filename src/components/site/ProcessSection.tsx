import { ProcessSteps } from "./ProcessSteps";
import { SectionHeading } from "./SectionHeading";
import { ActionLink } from "./Button";

export function ProcessSection({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="process"
      className={compact ? "hairline pb-24 pt-14 md:pb-32 md:pt-16" : "section-y hairline"}
    >
      <div className="container-x">
        {compact ? null : (
          <SectionHeading
            eyebrow="Process"
            title="From idea to launch."
            copy="A clear, structured way of working — so you always know where your project stands."
            aside={
              <ActionLink to="/process" variant="outline">
                How we work
              </ActionLink>
            }
          />
        )}
        <ProcessSteps />
      </div>
    </section>
  );
}
