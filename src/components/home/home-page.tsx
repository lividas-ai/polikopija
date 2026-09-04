import { Cta } from "@/components/ui/cta";
import { MediaTile } from "@/components/ui/media-tile";
import { company, faqs, materialGroups, processSteps } from "@/data/content";
import { services, tileImage } from "@/data/pages";

export function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-header text-bg">
        <img src="/images/hero-still.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-[1400px] flex-col justify-end px-5 pb-16 pt-24 md:min-h-[90vh]">
          <h1 className="hero-title max-w-[16ch]">{company.tagline}</h1>
          <p className="hero-sub mt-4 max-w-[36ch]">{company.description}</p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <Cta to="/kontaktai" variant="solidLg">Gauti pasiūlymą</Cta>
            <Cta to="/paslaugos" variant="outlineLight">Paslaugos</Cta>
          </div>
        </div>
      </section>

      <section className="bg-header py-12 md:py-[70px]">
        <div className="wrap hidden md:block">
          <div className="tile-grid">
            {services.map((s) => (
              <MediaTile key={s.path} path={s.path} src={tileImage(s)} title={s.title} dark />
            ))}
          </div>
        </div>
        <div className="svc-carousel md:hidden">
          {services.map((s) => (
            <a key={s.path} href={`/paslauga/${s.path}`} className="svc-card">
              <img src={tileImage(s)} alt="" />
              <p>{s.title}</p>
            </a>
          ))}
        </div>
        <div className="svc-cta-stack md:hidden">
          <Cta to="/kontaktai" variant="outlineRed">Gauti pasiūlymą</Cta>
          <Cta to="/paslaugos" variant="solidLg">Visos paslaugos</Cta>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <h2 className="section-title">Medžiagos</h2>
          <div className="mat-list mt-8 md:hidden">
            {materialGroups.map((g) => (
              <a key={g.title} href={`/paslauga/${g.to}`} className="mat-row">
                <img src={g.image} alt="" />
                <div>
                  <p className="tile-title">{g.title}</p>
                  <p className="text-sm text-muted">{g.note}</p>
                </div>
                <span className="mat-go" aria-hidden>→</span>
              </a>
            ))}
          </div>
          <div className="tile-grid mt-8 hidden md:grid">
            {materialGroups.map((g) => (
              <MediaTile key={g.title} path={g.to} src={g.image} title={g.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-wash section-pad">
        <div className="wrap">
          <h2 className="section-title">Kaip užsakyti</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {processSteps.map((s) => (
              <div key={s.title}>
                <img src={s.image} alt="" className="wide-img rounded-[16px]" />
                <h3 className="tile-title mt-4">{s.title}</h3>
                <p className="mt-2 text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap max-w-[900px]">
          <h2 className="section-title">Klausimai</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="py-4">
                <summary className="cursor-pointer font-display text-lg font-semibold hover:text-red">{f.q}</summary>
                <p className="mt-2 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10">
            <Cta to="/kontaktai" variant="solidLg">Siųsti užklausą</Cta>
          </div>
        </div>
      </section>
    </div>
  );
}
