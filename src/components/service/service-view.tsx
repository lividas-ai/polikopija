import { PageHero } from "@/components/layout/page-hero";
import { Cta } from "@/components/ui/cta";
import { MediaTile } from "@/components/ui/media-tile";
import { childrenOf, getService, relatedOf, tileImage } from "@/data/pages";

export function ServiceView({ path }: { path: string }) {
  const page = getService(path);
  if (!page) {
    return (
      <div className="px-4 py-24 text-center">
        <h1 className="section-title">Paslauga nerasta</h1>
        <Cta to="/paslaugos" className="mt-6">Visos paslaugos</Cta>
      </div>
    );
  }
  const kids = childrenOf(page.path);
  const related = relatedOf(page);
  return (
    <div>
      <PageHero title={page.title} />
      <section className="wrap grid items-start gap-8 pb-[70px] lg:grid-cols-[1fr_280px]">
        <div>
          {page.image ? (
            <img src={page.image} alt="" className="content-photo mb-8" />
          ) : null}
          {page.body.map((p, i) => (
            <p key={i} className="mb-4 leading-relaxed text-muted">{p}</p>
          ))}
          {page.specs.length ? (
            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {page.specs.map((s) => (
                <div key={s.label} className="border-b border-line pb-2">
                  <dt className="text-sm text-muted">{s.label}</dt>
                  <dd className="font-display font-semibold text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          {kids.length ? (
            <div className="catalog-grid mt-10">
              {kids.map((c) => (
                <MediaTile key={c.path} path={c.path} src={tileImage(c)} title={c.title} />
              ))}
            </div>
          ) : null}
        </div>
        <aside className="rounded-[16px] bg-wash p-6">
          <p className="fact">Nuo 1 vnt.</p>
          <p className="fact mt-2">Nuo 20 min.</p>
          <Cta to="/kontaktai" search={{ paslauga: page.title }} className="mt-6 w-full">
            Užklausa
          </Cta>
        </aside>
      </section>
      {related.length ? (
        <section className="bg-wash section-pad">
          <div className="wrap">
            <h2 className="section-title">Susiję</h2>
            <div className="catalog-grid mt-8">
              {related.map((c) => (
                <MediaTile key={c.path} path={c.path} src={tileImage(c)} title={c.title} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
