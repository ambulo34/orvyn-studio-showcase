import navLogo from "@/assets/orvyn-logo-nav.webp.asset.json";
import stackedLogo from "@/assets/orvyn-logo-light.webp.asset.json";
import { cn } from "@/lib/utils";

/**
 * Official ORVYN logo (light version, for dark surfaces).
 * `sm` = horizontal lockup for the navbar, `lg` = full stacked lockup.
 * Both are size-appropriate WebP exports of the original artwork.
 */
export function Logo({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "lg";
}) {
  const stacked = size === "lg";
  const asset = stacked ? stackedLogo : navLogo;

  return (
    <img
      src={asset.url}
      alt="ORVYN — Building digital excellence"
      width={stacked ? 420 : 540}
      height={stacked ? 273 : 95}
      decoding="async"
      loading={stacked ? "lazy" : "eager"}
      {...(stacked ? {} : { fetchPriority: "high" as const })}
      className={cn(
        "w-auto object-contain",
        stacked ? "h-24 md:h-28" : "h-7 md:h-8",
        className,
      )}
    />
  );
}
