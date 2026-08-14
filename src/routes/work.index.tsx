import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { WorkSection } from "@/components/site/WorkSection";
import { CTASection } from "@/components/site/CTASection";

const title = "Selected Work — Digital Projects | ORVYN";
const description =
  "A look at some of the digital experiences ORVYN has designed and built, including Elgon Star Motors.";

export const Route = createFileRoute("/work/")({
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
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="The work speaks first."
        copy="Our portfolio is growing. Placeholder concepts show how we structure projects until each new build goes live."
      />
      <WorkSection compact />
      <CTASection />
    </>
  );
}
