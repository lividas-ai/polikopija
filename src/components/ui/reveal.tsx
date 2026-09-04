import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  variant?: "up" | "fade" | "left";
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add("is-in");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    const fallback = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.bottom > 0 && r.top < window.innerHeight + 80) show();
    }, 80);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);
  return (
    <div
      ref={ref}
      className={cn(
        variant === "left" ? "reveal-left" : variant === "fade" ? "reveal-fade" : "reveal-up",
        className,
      )}
    >
      {children}
    </div>
  );
}
