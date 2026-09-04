import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { clientGroups, clientLogos, getClientGroup } from "@/data/content";

export const Route = createFileRoute("/klientas/$")({ component: Klientas });

function Klientas() {
  const { _splat } = Route.useParams();
  return <ClientGroupPage slug={_splat ?? ""} />;
}

export function ClientGroupPage({ slug }: { slug: string }) {
  const key = slug.replace(/\/+$/, "");
  const group = getClientGroup(key);
  const isAll = key === "abc" || key === "visiklientai" || !key;
  const title = isAll ? "Visi klientai" : (group?.title ?? "Klientai");
  const logos = isAll
    ? clientLogos
    : (group?.clients ?? []).map((c) => ({ src: c.src, alt: c.name || group?.title || "Klientas" }));

  if (!isAll && !group) {
    return (
      <div>
        <PageHero title="Klientai" />
        <section className="wrap pb-[70px]">
          <p className="text-muted">Tokios klientų grupės nėra.</p>
          <p className="mt-6">
            <Link to="/klientai" className="font-display font-bold text-red">
              Mūsų klientai
            </Link>
          </p>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHero title={title} />
      <section className="wrap pb-[70px]">
        <p className="mb-8">
          <Link to="/klientai" className="font-display text-sm font-bold uppercase tracking-btn text-red">
            ← Atgal
          </Link>
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-10 lg:grid-cols-6">
          {logos.map((c, i) => (
            <div key={`${c.src}-${i}`} className="logo-box grid h-28 place-items-center rounded-[16px] bg-wash p-4">
              <img src={c.src} alt={c.alt} className="max-h-16 max-w-full object-contain" />
            </div>
          ))}
        </div>
        <h2 className="section-title mt-[70px]">Sektoriai</h2>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {clientGroups.map((g) => (
            <li key={g.slug}>
              <Link
                to="/klientas/$"
                params={{ _splat: g.slug }}
                className="font-display text-[18px] font-semibold hover:text-red"
              >
                {g.title}
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
      </section>
    </div>
  );
}
