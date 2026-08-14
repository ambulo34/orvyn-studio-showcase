import { cn } from "@/lib/utils";

/**
 * ORVYN wordmark.
 * Placeholder rendering until the official logo file is supplied —
 * swap the inner markup for an <img src={orvynLogo} /> when it is.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-[1.05rem] font-extrabold uppercase leading-none tracking-[0.34em] text-foreground",
        className,
      )}
    >
      Orv
      <span className="text-accent">y</span>n
    </span>
  );
}
