import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "flex h-[30px] max-w-[42vw] shrink-0 items-center md:max-w-none",
        className,
      )}
      aria-label="Polikopija pradžia"
    >
      <img
        src="/brand/logo.png"
        alt="Polikopija"
        className={cn(
          "h-[28px] w-auto max-w-[148px] object-contain object-left",
          light && "rounded-sm bg-white px-1.5 py-0.5",
        )}
      />
    </Link>
  );
}
