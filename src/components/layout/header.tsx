import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { Cta } from "@/components/ui/cta";
import { allPages, pageSplat, pageTo, services } from "@/data/pages";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Paslaugos", to: "/paslaugos" },
  { label: "Kaip užsakyti", to: "/kaip-uzsakyti" },
  { label: "Projektai", to: "/projektai" },
  { label: "Naujienos", to: "/naujienos" },
  { label: "Apie mus", to: "/apie-mus" },
  { label: "Kontaktai", to: "/kontaktai" },
] as const;

function fold(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const hits = useMemo(() => {
    const query = fold(q.trim());
    if (!query) return services.slice(0, 8);
    return allPages.filter((p) => fold(p.title).includes(query) || fold(p.path).includes(query)).slice(0, 8);
  }, [q]);

  return (
    <header className="sticky top-0 z-50 bg-header text-bg">
      <div className="mx-auto flex h-[65px] max-w-[1400px] items-center gap-3 px-4 md:h-[70px] md:px-5">
        <Logo light />
        <nav className="ml-8 hidden items-center gap-5 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="nav-link" data-active={pathname === n.to}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className="grid size-10 place-items-center text-bg"
            aria-label="Paieška"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <Search size={18} />
          </button>
          <span className="hidden lg:inline-flex">
            <Cta to="/kontaktai" variant="nav">
              Pasiūlymas
            </Cta>
          </span>
          <button
            type="button"
            className="grid size-10 place-items-center lg:hidden"
            aria-label="Meniu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {searchOpen ? (
        <div className="border-t border-white/10 bg-header-2 px-4 py-4">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ieškoti paslaugų…"
            className="w-full rounded-btn bg-header px-4 py-3 text-bg outline-none ring-1 ring-white/20"
          />
          <ul className="mt-3 space-y-1">
            {hits.map((p) => (
              <li key={p.path}>
                <button
                  type="button"
                  className="w-full py-2 text-left font-display text-sm hover:text-blue"
                  onClick={() => {
                    setSearchOpen(false);
                    navigate({ to: pageTo(p.path), params: { _splat: pageSplat(p.path) } });
                  }}
                >
                  {p.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {open ? (
        <div className="border-t border-white/10 bg-header px-4 py-4 lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn("block py-3 font-display text-sm font-bold uppercase", pathname === n.to && "text-blue")}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
          <Cta to="/kontaktai" variant="solidLg" className="mt-4">
            Gauti pasiūlymą
          </Cta>
        </div>
      ) : null}
    </header>
  );
}
