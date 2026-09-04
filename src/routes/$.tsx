import { createFileRoute, Link } from "@tanstack/react-router";
import { news } from "@/data/content";
import { NewsArticle } from "@/routes/naujienos.$slug";

export const Route = createFileRoute("/$")({
  component: CatchAll,
});

function CatchAll() {
  const { _splat } = Route.useParams();
  const slug = (_splat ?? "").replace(/^\/+|\/+$/g, "");
  if (news.some((n) => n.slug === slug)) {
    return <NewsArticle slug={slug} />;
  }
  return (
    <div className="mx-auto max-w-[800px] px-5 py-24 text-center">
      <h1 className="section-title">Puslapis nerastas</h1>
      <p className="mt-4 text-muted">Tokio adreso svetainėje nėra.</p>
      <p className="mt-8">
        <Link to="/" className="font-display font-bold text-red">
          Pradžia
        </Link>
      </p>
    </div>
  );
}
