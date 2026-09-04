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
        "flex h-[30px] max-w-[42vw] shrink-0 items-center gap-1.5 md:w-[150px] md:max-w-none md:gap-2",
        className,
      )}
      aria-label="Polikopija pradžia"
    >
      <span className="size-[18px] shrink-0 rounded-[4px] bg-red" aria-hidden />
      <span className={cn("logo-word truncate", light ? "text-bg" : "text-ink")}>
        polikopija
      </span>
    </Link>
  );
}
