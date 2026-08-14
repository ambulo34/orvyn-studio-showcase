import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  aside,
  className,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <Reveal className="max-w-2xl">
        {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
        <h2 className="text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {copy ? (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {copy}
          </p>
        ) : null}
      </Reveal>
      {aside ? <Reveal delay={120}>{aside}</Reveal> : null}
    </div>
  );
}
