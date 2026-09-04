import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { partnerLogos } from "@/data/content";

export const Route = createFileRoute("/partneriai")({ component: Partneriai });

function Partneriai() {
  return (
    <div>
      <PageHero title="Mūsų partneriai" />
      <section className="wrap pb-[70px]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-10 lg:grid-cols-6">
          {partnerLogos.map((c) => (
            <div key={c.src} className="logo-box grid h-32 place-items-center rounded-[16px] bg-wash p-4">
              <img src={c.src} alt={c.alt} className="max-h-16 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
