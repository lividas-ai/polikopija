import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { privacy } from "@/data/content";

export const Route = createFileRoute("/privatumas")({ component: Privatumas });

function Privatumas() {
  return (
    <div>
      <PageHero title="Privatumo ir slapukų politika" />
      <article className="mx-auto max-w-[760px] px-5 pb-[70px]">
        {privacy.map((p) => (
          <p key={p.slice(0, 32)} className="mb-5 leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </article>
    </div>
  );
}
