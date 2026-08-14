import orvynLogo from "@/assets/orvyn-logo-light.png.asset.json";
import { cn } from "@/lib/utils";

/** Official ORVYN lockup (light version, for dark surfaces). */
export function Logo({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "lg";
}) {
  return (
    <img
      src={orvynLogo.url}
      alt="ORVYN — Building digital excellence"
      width={784}
      height={509}
      decoding="async"
      className={cn(
        "w-auto object-contain",
        size === "sm" ? "h-12 md:h-14" : "h-24 md:h-28",
        className,
      )}
    />
  );
}
