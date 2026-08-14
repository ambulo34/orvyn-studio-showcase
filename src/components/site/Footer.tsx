import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { contactPlaceholders, navItems } from "@/data/site";

const socials = [
  { label: "Instagram", href: "#instagram-placeholder" },
  { label: "LinkedIn", href: "#linkedin-placeholder" },
  { label: "X", href: "#x-placeholder" },
];

export function Footer() {
  return (
    <footer className="hairline bg-background">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_auto_auto]">
          <div className="min-w-0 max-w-sm">
            <Logo />
            <p className="font-display mt-6 text-2xl font-semibold tracking-tight">
              Digital experiences. Built with purpose.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              {contactPlaceholders.email}
              <br />
              {contactPlaceholders.phone}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="eyebrow mb-1">Navigate</p>
            {[...navItems, { label: "Contact", to: "/contact" }].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="eyebrow mb-1">Social</p>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}{" "}
                <span className="text-[0.7rem] uppercase tracking-widest">(soon)</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hairline mt-14 flex flex-col gap-3 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ORVYN. All rights reserved.</p>
          <p>Designed and built by ORVYN.</p>
        </div>
      </div>
    </footer>
  );
}
