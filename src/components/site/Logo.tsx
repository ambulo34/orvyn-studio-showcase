import navLogo from "@/assets/orvyn-logo-nav.png.asset.json";
import stackedLogo from "@/assets/orvyn-logo-light.png.asset.json";
import { cn } from "@/lib/utils";

/**
 * Official ORVYN logo (light version, for dark surfaces).
 * `sm` = horizontal lockup for the navbar, `lg` = full stacked lockup.
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
      width={stacked ? 784 : 907}
      height={stacked ? 509 : 160}
      decoding="async"
      className={cn(
        "w-auto object-contain",
        stacked ? "h-24 md:h-28" : "h-7 md:h-8",
        className,
      )}
    />
  );
}
