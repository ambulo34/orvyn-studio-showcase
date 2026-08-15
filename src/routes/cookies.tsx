import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

const title = "Cookie Policy — ORVYN";
const description = "Cookie Policy explaining how ORVYN uses cookies and similar technologies.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cookies" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="15 August 2026">
      <p>
        This Cookie Policy explains how ORVYN uses cookies and similar technologies
        on our website.
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website.
        They help the site remember your preferences, understand how visitors use the
        site, and improve functionality.
      </p>

      <h2>2. How we use cookies</h2>
      <p>ORVYN uses cookies for the following purposes:</p>
      <ul>
        <li>
          <strong>Essential cookies:</strong> required for the website to function
          properly, such as maintaining security and enabling core features.
        </li>
        <li>
          <strong>Analytics cookies:</strong> help us understand how visitors
          interact with the website so we can improve it.
        </li>
        <li>
          <strong>Preference cookies:</strong> remember choices you make, such as
          language or region, to improve your experience.
        </li>
      </ul>

      <h2>3. Cookies we may use</h2>
      <p>
        We may use cookies set by trusted third-party services such as analytics
        providers. These cookies are subject to the privacy policies of those third
        parties.
      </p>

      <h2>4. Managing cookies</h2>
      <p>
        Most web browsers allow you to control cookies through their settings. You
        can choose to block or delete cookies, but this may affect how the website
        functions.
      </p>

      <h2>5. Your consent</h2>
      <p>
        By continuing to use our website, you consent to the use of cookies in
        accordance with this policy. If we implement a cookie consent banner in the
        future, you will be able to manage your preferences there.
      </p>

      <h2>6. Changes to this policy</h2>
      <p>
        We may update this Cookie Policy from time to time. The updated version will
        be posted on this page with a revised "Last updated" date.
      </p>

      <h2>7. Contact us</h2>
      <p>
        If you have any questions about this Cookie Policy, please contact us at{" "}
        [email address – to be added].
      </p>
    </LegalLayout>
  );
}
