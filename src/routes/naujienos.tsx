import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { news } from "@/data/content";

export const Route = createFileRoute("/naujienos")({ component: Naujienos });

function Naujienos() {
  return (
    <div>
      <PageHero title="Naujienos" />
      <section className="mx-auto max-w-[900px] px-5 pb-[70px]">
        <div className="space-y-6 sm:space-y-10">
          {news.map((n) => (
            <Link
              key={n.slug}
              to="/naujienos/$slug"
              params={{ slug: n.slug }}
              className="news-card tile-lift group grid sm:grid-cols-[160px_1fr] sm:gap-6"
            >
              <span className="tile-frame news-thumb">
                <img src={n.image} alt="" className="h-full max-h-[88px] min-h-[88px] w-full object-cover sm:max-h-[120px] sm:min-h-[100px]" />
              </span>
              <div className="py-1 sm:py-2">
                <p className="text-sm text-muted">{n.date}</p>
                <h2 className="mt-1 font-display text-lg font-semibold group-hover:text-red sm:mt-2 sm:text-xl">
                  {n.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
