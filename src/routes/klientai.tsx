import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { clientLogos, clientSectors } from "@/data/content";

export const Route = createFileRoute("/klientai")({ component: KlientaiPage });

export function KlientaiPage() {
  return (
    <div>
      <PageHero title="Mūsų klientai" />
      <section className="wrap pb-[70px]">
        <div className="tile-grid">
          {clientSectors.map((s) => (
            <Link
              key={s.slug}
              to="/klientas/$"
              params={{ _splat: s.slug }}
              className="tile-lift group block"
            >
              <span className="tile-frame bg-wash">
                <img src={s.image} alt="" className="logo-box h-28 w-full object-contain p-6" />
              </span>
              <p className="tile-title mt-4 group-hover:text-red">{s.title}</p>
            </Link>
          ))}
        </div>
        <p className="mt-10">
          <Link
            to="/klientas/$"
            params={{ _splat: "abc" }}
            className="font-display text-sm font-bold uppercase tracking-btn text-red"
          >
            Visi klientai
          </Link>
        </p>
        <h2 className="section-title mt-[70px]">Logotipai</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-10 lg:grid-cols-6">
          {clientLogos.map((c, i) => (
            <div key={`${c.src}-${i}`} className="logo-box grid h-28 place-items-center rounded-[16px] bg-wash p-4">
              <img src={c.src} alt={c.alt} className="max-h-16 max-w-full object-contain" />
            </div>
          ))}
        </div>
        <p className="mt-10">
          <Link to="/partneriai" className="font-display font-bold text-red">
            Partneriai
          </Link>
        </p>
      </section>
    </div>
  );
}
