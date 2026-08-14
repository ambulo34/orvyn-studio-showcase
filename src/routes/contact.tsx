import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink } from "@/components/site/Button";
import { contactPlaceholders } from "@/data/site";

const title = "Contact ORVYN — Start a Project";
const description =
  "Tell ORVYN about your website, online store or custom digital project and we'll get back to you.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you're building."
        copy="Share a few details and we'll come back with next steps, timelines and a clear idea of what your project needs."
      />

      <section className="section-y hairline">
        <div className="container-x grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.55fr)] lg:gap-20">
          <Reveal className="min-w-0">
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <div className="rounded-xl border border-border bg-surface p-8">
              <h2 className="text-2xl font-semibold">Prefer to chat?</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Message us on WhatsApp for a quick conversation about your project.
              </p>
              <ActionLink
                href={contactPlaceholders.whatsappUrl}
                variant="accent"
                className="mt-6 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </ActionLink>

              <dl className="hairline mt-8 space-y-4 pt-8 text-sm">
                <div>
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {contactPlaceholders.email}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Phone / WhatsApp</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {contactPlaceholders.phone}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Based in</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {contactPlaceholders.location}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
