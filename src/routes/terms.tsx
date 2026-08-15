import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

const title = "Terms of Service — ORVYN";
const description = "Terms of Service for ORVYN's website and digital services.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="15 August 2026">
      <p>
        These Terms of Service govern your access to and use of the ORVYN website
        and any services provided by ORVYN. Please read them carefully.
      </p>

      <h2>1. Acceptance of terms</h2>
      <p>
        By accessing this website or engaging ORVYN for services, you agree to be
        bound by these terms. If you do not agree, please do not use the site or
        services.
      </p>

      <h2>2. Services</h2>
      <p>
        ORVYN provides digital design and development services, including but not
        limited to website design, web application development, e-commerce solutions,
        UI/UX design, and branding. Specific deliverables, timelines, and fees are
        defined in a separate project agreement or statement of work.
      </p>

      <h2>3. Intellectual property</h2>
      <p>
        All content on this website — including text, images, code, logos, and
        designs — is the property of ORVYN or its licensors and is protected by
        applicable intellectual property laws.
      </p>
      <p>
        Upon full payment and project completion, ownership of agreed final
        deliverables transfers to the client as specified in the project agreement.
        ORVYN retains the right to display completed work in its portfolio unless
        otherwise agreed in writing.
      </p>

      <h2>4. Use of the website</h2>
      <p>
        You may use this website for lawful purposes only. You agree not to:
      </p>
      <ul>
        <li>Attempt to gain unauthorized access to any part of the site or server;</li>
        <li>Use the site to distribute malware, spam, or harmful content;</li>
        <li>Copy, scrape, or reproduce content without permission;</li>
        <li>Interfere with the security or proper functioning of the site.</li>
      </ul>

      <h2>5. Project agreements</h2>
      <p>
        Custom services are governed by individual project agreements. These
        agreements take precedence over these general terms where there is a
        conflict. Project-specific terms will cover payment, revisions, timelines,
        scope changes, and deliverable ownership.
      </p>

      <h2>6. Payments</h2>
      <p>
        Fees and payment schedules are set out in the project agreement. Unless
        otherwise agreed, ORVYN invoices according to project milestones. Late
        payments may result in project delays or suspension of work.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        ORVYN is not liable for any indirect, incidental, special, or consequential
        damages arising from the use of this website or our services. Our total
        liability is limited to the amount paid by the client for the specific
        services giving rise to the claim.
      </p>

      <h2>8. Confidentiality</h2>
      <p>
        ORVYN treats client information, business details, and project materials as
        confidential. We do not disclose confidential information to third parties
        without consent, except as required by law.
      </p>

      <h2>9. Termination</h2>
      <p>
        Either party may terminate a project agreement according to the terms set out
        in that agreement. Upon termination, the client is responsible for payment of
        all work completed up to the termination date.
      </p>

      <h2>10. Changes to these terms</h2>
      <p>
        ORVYN may update these Terms of Service from time to time. The updated
        version will be posted on this page with a revised "Last updated" date.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These terms are governed by the laws of [jurisdiction – to be added]. Any
        disputes will be resolved in the courts of [jurisdiction – to be added].
      </p>

      <h2>12. Contact</h2>
      <p>
        For questions about these Terms of Service, please contact ORVYN at{" "}
        [email address – to be added].
      </p>
    </LegalLayout>
  );
}
