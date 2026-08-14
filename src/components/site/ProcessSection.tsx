import { ProcessSteps } from "./ProcessSteps";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section id="process" className="section-y hairline">
      <div className="container-x">
        <SectionHeading
          eyebrow="Process"
          title="From idea to launch."
          copy="A clear, structured way of working — so you always know where your project stands."
        />
        <ProcessSteps />
      </div>
    </section>
  );
}
