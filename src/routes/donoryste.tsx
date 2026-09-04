import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { donation } from "@/data/content";

export const Route = createFileRoute("/donoryste")({ component: Donoryste });

function Donoryste() {
  return (
    <div>
      <PageHero title={donation.title} />
      <section className="wrap pb-[70px]">
        <p className="max-w-[760px] text-[18px] leading-relaxed text-muted">{donation.status}</p>
        <p className="mt-10 max-w-[760px] font-display text-[22px] font-semibold leading-snug md:text-[28px]">
          {donation.line}
        </p>
        <p className="mt-4">
          <a
            href={donation.href}
            target="_blank"
            rel="noreferrer"
            className="font-display text-lg font-bold text-red hover:text-red-deep"
          >
            {donation.siteLabel}
          </a>
        </p>
      </section>
    </div>
  );
}
