import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { MediaTile } from "@/components/ui/media-tile";
import { isContentPhoto, projects, services, tileImage } from "@/data/pages";

export const Route = createFileRoute("/projektai")({ component: Projektai });

const PROJECT_TO: Record<string, string> = {
  "Metalo apdirbmas": "metalo-apdirbimas",
  "Shop in shop": "prekybine-iranga",
  "Biuro baldai": "baldai/biuro-baldai",
  "Metalo gaminiai": "metalo-gaminiai",
  "Reklamos gamyba": "reklamos-gamyba",
  "Medzio frezavimas": "medziagu-frezavimas",
  "Vakuuminis formavimas reklama": "vakuuminis-formavimas",
  "Pjovimas vandeniu plieno": "pjovimas-vandeniu",
  "Plastiko apdirbimas": "plastiko-apdirbimas",
  Dazymas: "miltelinis-dazymas",
  Projektavimas: "projektavimas",
};

function Projektai() {
  const shots = projects.filter((p) => isContentPhoto(p.image));
  return (
    <div>
      <PageHero title="Projektai" />
      <section className="pb-[70px]">
        <div className="wrap">
          <div className="tile-grid">
            {services.map((s) => (
              <MediaTile key={s.path} path={s.path} src={tileImage(s)} title={s.title} />
            ))}
          </div>
          {shots.length > 0 ? (
            <div className="catalog-grid mt-12">
              {shots.map((p, i) => {
                const path = PROJECT_TO[p.title];
                if (path) {
                  return (
                    <MediaTile
                      key={`${p.image}-${i}`}
                      path={path}
                      src={p.image}
                      title={p.title}
                    />
                  );
                }
                return (
                  <div key={`${p.image}-${i}`} className="tile-lift">
                    <span className="tile-frame">
                      <img src={p.image} alt={p.title} className="tile-img" />
                    </span>
                    <p className="tile-title mt-2">{p.title}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
