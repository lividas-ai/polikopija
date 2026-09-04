import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-2" aria-label="Polikopija">
      <img src="/brand/logo.png" alt="Polikopija" className="h-8 w-auto md:h-9" />
    </Link>
  );
}
