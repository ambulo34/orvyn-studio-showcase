import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

const title = "Privacy Policy — ORVYN";
const description = "Privacy Policy explaining how ORVYN handles personal information.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="15 August 2026">
      <p>
        ORVYN respects your privacy. This Privacy Policy explains what personal
        information we collect, how we use it, and the choices you have.
      </p>

      <h2>1. Information we collect</h2>
      <p>
        We collect information that you provide directly to us, such as when you fill
        out a contact form, request a project quote, or communicate with us. This may
        include:
      </p>
      <ul>
        <li>Your name;</li>
        <li>Business name;</li>
        <li>Email address;</li>
        <li>Phone or WhatsApp number;</li>
        <li>Project details and requirements.</li>
      </ul>

      <h2>2. How we use your information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your inquiries;</li>
        <li>Provide and manage our services;</li>
        <li>Communicate about projects, proposals, and updates;</li>
        <li>Improve our website and services;</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2>3. Legal basis for processing</h2>
      <p>
        We process personal information based on your consent, our legitimate
        interest in operating our business, or where necessary to fulfill a contract
        with you.
      </p>

      <h2>4. Information sharing</h2>
      <p>
        ORVYN does not sell personal information. We only share information with
        trusted third parties when necessary to provide our services — for example,
        hosting providers, analytics services, or payment processors. These parties
        are contractually required to protect your information.
      </p>

      <h2>5. Data retention</h2>
      <p>
        We retain personal information for as long as needed to fulfill the purposes
        described in this policy, comply with legal obligations, resolve disputes, and
        enforce agreements.
      </p>

      <h2>6. Your rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct,
        delete, or restrict the processing of your personal information. To exercise
        these rights, contact us at [email address – to be added].
      </p>

      <h2>7. Cookies and tracking</h2>
      <p>
        Our website may use cookies and similar technologies to understand how
        visitors use the site. For more details, please see our{" "}
        <a href="/cookies">Cookie Policy</a>.
      </p>

      <h2>8. Security</h2>
      <p>
        We take reasonable measures to protect personal information from unauthorized
        access, disclosure, or loss. However, no method of transmission over the
        internet is completely secure.
      </p>

      <h2>9. Third-party links</h2>
      <p>
        Our website may contain links to third-party sites. We are not responsible
        for the privacy practices or content of those sites.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The updated version will
        be posted on this page with a revised "Last updated" date.
      </p>

      <h2>11. Contact us</h2>
      <p>
        If you have any questions about this Privacy Policy or how we handle your
        data, please contact us at [email address – to be added].
      </p>
    </LegalLayout>
  );
}
