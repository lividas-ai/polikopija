import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Variant = "solid" | "nav" | "outline" | "outlineLight" | "outlineRed" | "solidLg";

const styles: Record<Variant, string> = {
  solid:
    "btn-sink inline-flex items-center justify-center rounded-btn bg-red px-7 py-[15px] font-display text-[15px] font-extrabold uppercase tracking-btn text-bg hover:bg-red-hover",
  nav:
    "btn-sink inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-sm bg-red px-3 py-2 font-display text-[12px] font-extrabold uppercase tracking-btn text-bg hover:bg-red-hover md:px-4 md:py-[12px] md:text-[13px]",
  outline:
    "btn-sink-ink inline-flex items-center justify-center whitespace-nowrap rounded-sm bg-ink px-4 py-3 font-display text-[13px] font-extrabold uppercase tracking-btn text-bg hover:bg-ink-2",
  solidLg:
    "btn-sink inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-[12px] bg-red px-6 py-4 font-display text-[16px] font-normal tracking-normal text-bg hover:bg-red-hover sm:w-auto sm:gap-4 sm:rounded-[16px] sm:px-10 sm:py-6 sm:text-[20px]",
  outlineLight:
    "btn-sink-light inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-[12px] border-2 border-bg bg-transparent px-6 py-4 font-display text-[16px] font-normal tracking-normal text-bg hover:border-blue hover:text-blue sm:w-auto sm:gap-4 sm:rounded-[16px] sm:px-10 sm:py-6 sm:text-[20px]",
  outlineRed:
    "btn-sink-light inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-[12px] border-2 border-red bg-transparent px-6 py-4 font-display text-[16px] font-normal tracking-normal text-red hover:border-red-deep hover:text-red-deep sm:w-auto sm:gap-4 sm:rounded-[16px] sm:px-10 sm:py-6 sm:text-[20px]",
};

export function Cta({
  to,
  href,
  params,
  search,
  variant = "solid",
  className,
  children,
}: {
  to?: string;
  href?: string;
  params?: Record<string, string>;
  search?: Record<string, string>;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  const cls = cn(styles[variant], className);
  if (to) {
    return (
      <Link to={to} params={params} search={search} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}
