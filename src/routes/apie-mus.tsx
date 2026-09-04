import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { Cta } from "@/components/ui/cta";
import { aboutPoints, company, people } from "@/data/content";

export const Route = createFileRoute("/apie-mus")({ component: Apie });

function Apie() {
  return (
    <div>
      <PageHero title={`Firma Polikopija nuo ${company.since} metų`} />
      <section className="wrap grid items-start gap-6 pb-[70px] lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div>
          <ul className="space-y-3">
            <li className="fact">Tiražas nuo 1 vieneto</li>
            <li className="fact">Terminas nuo 20 min.</li>
            <li className="fact">Pristatymas Lietuvoje ir užsienyje</li>
            <li className="hide-mobile fact">Priežiūra nuo idėjos iki atidavimo</li>
          </ul>
          <p className="mt-8 leading-relaxed text-muted">{company.description}</p>
          <p className="hide-mobile mt-4 leading-relaxed text-muted">
            Pagamintas detales greitai pristatome užsakovo pageidaujamu adresu. Jei Jums
            prisireikė profesionalaus patarimo, galite drąsiai susisiekti su mumis.
          </p>
          <Cta to="/kontaktai" className="mt-8">
            Susisiekti
          </Cta>
        </div>
        <span className="tile-lift tile-frame">
          <img src="/images/about-2.jpg" alt="Polikopija gamyba" className="wide-img" />
        </span>
      </section>
      <section className="bg-wash section-pad">
        <div className="wrap">
          <h2 className="section-title">Pagrindinės teikiamos paslaugos</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {aboutPoints.map((p) => (
              <li key={p} className="font-display text-[18px] font-semibold">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-pad">
        <div className="wrap grid gap-10 sm:grid-cols-3">
          {people.map((p) => (
            <div key={p.email}>
              <h3 className="tile-title">{p.name}</h3>
              <p className="mt-1 text-muted">{p.role}</p>
              <p className="mt-3">
                <a href={`tel:${p.phone.replace(/\s/g, "")}`} className="hover:text-red">
                  {p.phone}
                </a>
              </p>
              <a href={`mailto:${p.email}`} className="text-red">
                {p.email}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
