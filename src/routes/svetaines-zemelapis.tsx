import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { clientSectors, news } from "@/data/content";
import { allServices, childrenOf, pageSplat, pageTo, services } from "@/data/pages";

export const Route = createFileRoute("/svetaines-zemelapis")({ component: MapPage });

const pages = [
  { to: "/", label: "Pradžia" },
  { to: "/paslaugos", label: "Paslaugos" },
  { to: "/kaip-uzsakyti", label: "Kaip užsakyti" },
  { to: "/projektai", label: "Projektai" },
  { to: "/naujienos", label: "Naujienos" },
  { to: "/apie-mus", label: "Apie mus" },
  { to: "/klientai", label: "Klientai" },
  { to: "/musu-klientai", label: "Mūsų klientai" },
  { to: "/partneriai", label: "Partneriai" },
  { to: "/donoryste", label: "Donorystė" },
  { to: "/kontaktai", label: "Kontaktai" },
  { to: "/privatumas", label: "Privatumo politika" },
] as const;

function MapPage() {
  return (
    <div>
      <PageHero title="Svetainės žemėlapis" />
      <section className="mx-auto max-w-[900px] px-5 pb-[70px]">
        <h2 className="section-title">Puslapiai</h2>
        <ul className="mt-6 grid gap-2">
          {pages.map((p) => (
            <li key={p.to}>
              <Link to={p.to} className="font-display text-[18px] font-semibold hover:text-red">
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="section-title mt-[70px]">Klientai</h2>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {clientSectors.map((s) => (
            <li key={s.slug}>
              <Link
                to="/klientas/$"
                params={{ _splat: s.slug }}
                className="font-display text-[18px] font-semibold hover:text-red"
              >
                {s.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/klientas/$"
              params={{ _splat: "abc" }}
              className="font-display text-[18px] font-semibold hover:text-red"
            >
              Visi klientai
            </Link>
          </li>
        </ul>
        <h2 className="section-title mt-[70px]">Paslaugos</h2>
        <ul className="mt-6 grid gap-3">
          {services.map((s) => (
            <li key={s.path}>
              <Link
                to={pageTo(s.path)}
                params={{ _splat: pageSplat(s.path) }}
                className="font-display text-[18px] font-semibold hover:text-red"
              >
                {s.title}
              </Link>
              <Kids path={s.path} />
            </li>
          ))}
        </ul>
        <h2 className="section-title mt-[70px]">Naujienos</h2>
        <ul className="mt-6 grid gap-2">
          {news.map((n) => (
            <li key={n.slug}>
              <Link
                to="/naujienos/$slug"
                params={{ slug: n.slug }}
                className="font-display text-[18px] font-semibold hover:text-red"
              >
                {n.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Kids({ path }: { path: string }) {
  const kids = childrenOf(path);
  if (!kids.length) return null;
  return (
    <ul className="mt-2 grid gap-1 sm:grid-cols-2">
      {kids.map((c) => (
        <li key={c.path}>
          <Link
            to={pageTo(c.path)}
            params={{ _splat: pageSplat(c.path) }}
            className="text-sm text-muted hover:text-red"
          >
            {c.title}
          </Link>
          {allServices.some((x) => x.parent === c.path) ? <Kids path={c.path} /> : null}
        </li>
      ))}
    </ul>
  );
}
