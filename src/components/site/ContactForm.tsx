import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ActionButton } from "./Button";

const needs = [
  "Website",
  "Web Application",
  "E-commerce",
  "Branding / Design",
  "Other",
];

const fieldClass =
  "h-12 w-full rounded-md border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent focus:outline-none";

const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  // TODO: connect this handler to the ORVYN inbox / backend once available.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      toast.success("Request captured", {
        description:
          "This form isn't connected to a destination yet — hook it up to send real enquiries.",
      });
      event.currentTarget?.reset?.();
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="name">
          Name
        </label>
        <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" />
      </div>
      <div>
        <label className={labelClass} htmlFor="business">
          Business Name
        </label>
        <input id="business" name="business" autoComplete="organization" className={fieldClass} placeholder="Your business" />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@example.com" />
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">
          Phone / WhatsApp
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="Include country code" />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="need">
          What do you need?
        </label>
        <select id="need" name="need" required defaultValue="" className={`${fieldClass} appearance-none`}>
          <option value="" disabled>
            Select an option
          </option>
          {needs.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${fieldClass} h-auto py-3 leading-relaxed`}
          placeholder="What are you building, and what would success look like?"
        />
      </div>
      <div className="sm:col-span-2">
        <ActionButton type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? "Sending…" : "Send Project Request"}
        </ActionButton>
      </div>
    </form>
  );
}
