import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { AboutSection } from "@/components/site/AboutSection";
import { WhySection } from "@/components/site/WhySection";
import { CTASection } from "@/components/site/CTASection";

const title = "About ORVYN — Digital, Built With Purpose";
const description =
  "ORVYN is a digital studio combining design, technology and strategy to build digital products that work.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A studio built for businesses that want to be taken seriously online."
        copy="We're building our portfolio deliberately — a small number of projects, each one made to a standard we're happy to put our name on."
      />
      <AboutSection compact />
      <WhySection />
      <CTASection />
    </>
  );
}
