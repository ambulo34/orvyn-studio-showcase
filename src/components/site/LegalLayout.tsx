import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

type LegalLayoutProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background pt-32 md:pt-40">
      <div className="container-x section-y">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <header className="mt-10 max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
        </header>

        <article className="prose prose-invert mt-14 max-w-3xl">
          {children}
        </article>
      </div>
    </div>
  );
}
