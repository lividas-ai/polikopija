import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { Cta } from "@/components/ui/cta";
import { MediaTile } from "@/components/ui/media-tile";
import { metalProcesses, services, tileImage } from "@/data/pages";

export const Route = createFileRoute("/paslaugos")({ component: Paslaugos });

function Paslaugos() {
  return (
    <div>
      <PageHero title="Visa gamyba vienoje vietoje" />
      <section className="pb-[70px]">
        <div className="wrap">
          <div className="tile-grid">
            {services.map((s) => (
              <MediaTile key={s.path} path={s.path} src={tileImage(s)} title={s.title} />
            ))}
          </div>
          <h2 className="section-title mt-[70px]">Metalo apdirbimas</h2>
          <div className="catalog-grid mt-8">
            {metalProcesses.map((s) => (
              <MediaTile key={s.path} path={s.path} src={tileImage(s)} title={s.title} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Cta to="/kontaktai" variant="solidLg">
              Gauti pasiūlymą
            </Cta>
          </div>
        </div>
      </section>
    </div>
  );
}
