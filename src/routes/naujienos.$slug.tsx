import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { Cta } from "@/components/ui/cta";
import { news } from "@/data/content";

export const Route = createFileRoute("/naujienos/$slug")({
  component: NewsItem,
});

function NewsItem() {
  const { slug } = Route.useParams();
  return <NewsArticle slug={slug} />;
}

export function NewsArticle({ slug }: { slug: string }) {
  const n = news.find((x) => x.slug === slug);
  if (!n) {
    return (
      <div className="px-4 py-24 text-center">
        <h1 className="section-title">Naujiena nerasta</h1>
        <Cta to="/naujienos" className="mt-6">
          Visos naujienos
        </Cta>
      </div>
    );
  }
  return (
    <div>
      <PageHero title={n.title} />
      <article className="mx-auto max-w-[760px] px-5 pb-[70px]">
        <p className="mb-6 text-sm text-muted">{n.date}</p>
        <img src={n.image} alt="" className="content-photo mb-8" />
        {n.body.map((p, i) => (
          <p key={i} className="mb-4 text-[16px] leading-relaxed text-muted">
            {p}
          </p>
        ))}
        {n.gallery?.length ? (
          <div className="doc-grid mt-8">
            {n.gallery.slice(0, 6).map((g, i) => (
              <span key={`${g}-${i}`} className="tile-lift tile-frame">
                <img src={g} alt="" className="tile-img" />
              </span>
            ))}
          </div>
        ) : null}
        <Link to="/naujienos" className="mt-8 inline-block font-display font-bold text-red">
          ← Visos naujienos
        </Link>
      </article>
    </div>
  );
}
