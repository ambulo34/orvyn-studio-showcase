import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ProcessSection } from "@/components/site/ProcessSection";
import { WhySection } from "@/components/site/WhySection";
import { CTASection } from "@/components/site/CTASection";

const title = "Our Process — From Idea to Launch | ORVYN";
const description =
  "Discover, design, build, launch. How ORVYN takes a business idea and turns it into a working digital product.";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="A clear path from first conversation to launch day."
        copy="No mystery, no jargon — you always know what stage your project is in and what happens next."
      />
      <ProcessSection compact />
      <WhySection />
      <CTASection />
    </>
  );
}
