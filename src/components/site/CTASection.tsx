import { MessageCircle } from "lucide-react";
import { ActionLink } from "./Button";
import { Reveal } from "./Reveal";
import { contactPlaceholders } from "@/data/site";

export function CTASection() {
  return (
    <section className="section-y bg-bone text-ink">
      <div className="container-x">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-ink/60">Let's talk</p>
          <h2 className="mt-6 text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
            Have an idea? Let's build it.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
            Whether you need a website, an online store or a custom digital solution,
            let's talk about what you're building.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ActionLink
              to="/contact"
              size="lg"
              className="bg-ink text-bone hover:bg-accent hover:text-accent-foreground"
            >
              Start a Project
            </ActionLink>
            <ActionLink
              href={contactPlaceholders.whatsappUrl}
              size="lg"
              variant="outline"
              className="border-ink/25 text-ink hover:border-ink/60 hover:bg-ink/5"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </ActionLink>
          </div>
          <p className="mt-6 text-xs text-ink/50">
            WhatsApp link pending — add the official ORVYN number to activate.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
