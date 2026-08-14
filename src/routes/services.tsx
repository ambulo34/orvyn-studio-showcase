import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { CTASection } from "@/components/site/CTASection";

const title = "Services — Websites, Web Apps & E-commerce | ORVYN";
const description =
  "Websites, web applications, e-commerce stores and brand design — built by ORVYN around the way your business actually works.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything your business needs to exist properly online."
        copy="We take on a small number of projects at a time so each one gets real design and engineering attention."
      />
      <ServicesSection compact />
      <ProcessSection />
      <CTASection />
    </>
  );
}
