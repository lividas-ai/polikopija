import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { InquiryForm } from "@/components/inquiry/inquiry-form";
import { Cta } from "@/components/ui/cta";
import { company, directions, people } from "@/data/content";

type Search = { paslauga?: string };

export const Route = createFileRoute("/kontaktai")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    paslauga: typeof raw.paslauga === "string" ? raw.paslauga : undefined,
  }),
  component: Kontaktai,
});

function Kontaktai() {
  const { paslauga } = Route.useSearch();
  return (
    <div>
      <PageHero title="Kontaktai" />
      <section className="wrap pb-8">
        <div className="grid gap-8 border-b border-line pb-8 lg:grid-cols-3">
          <div>
            <h2 className="tile-title">Užsakymų priėmimas</h2>
            <p className="fact mt-3">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-red">
                {company.phone}
              </a>
            </p>
            <p className="fact">
              <a href={`tel:${company.phone2.replace(/\s/g, "")}`} className="hover:text-red">
                {company.phone2}
              </a>
            </p>
            <a href={`mailto:${company.email}`} className="mt-2 block font-display text-lg text-red">
              {company.email}
            </a>
          </div>
          <div>
            <h2 className="tile-title">Cechas</h2>
            <p className="mt-3 text-muted">
              {company.address}
              <br />
              {company.city}
              <br />
              {company.region}
            </p>
            <p className="mt-2 text-muted">{company.hours}</p>
            <p className="hide-mobile mt-1 text-muted">{company.lunch}</p>
            <p className="hide-mobile mt-2 text-sm text-muted">Kaip atvykti: {directions.join(" · ")}</p>
            <Cta
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(company.mapQuery)}`}
              className="mt-4"
            >
              Maršrutas
            </Cta>
          </div>
          <div className="hide-mobile">
            <h2 className="tile-title">Žmonės</h2>
            <div className="mt-3 space-y-4">
              {people.map((p) => (
                <div key={p.email}>
                  <p className="font-display text-[16px] font-semibold text-ink">{p.name}</p>
                  <p className="text-sm text-muted">{p.role}</p>
                  <a href={`tel:${p.phone.replace(/\s/g, "")}`} className="text-sm hover:text-red">
                    {p.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wrap pb-[70px]">
        <InquiryForm preset={paslauga} />
      </section>

      <section className="bg-wash">
        <div className="wrap grid gap-8 py-10 lg:grid-cols-2">
          <div className="text-sm text-muted">
            <h3 className="tile-title text-ink">Rekvizitai</h3>
            <p className="mt-3">
              {company.legal}
              <br />
              Įm. kodas: {company.code}
              <br />
              PVM kodas: {company.vat}
              <br />
              SD draudėjo kodas: {company.sodra}
              <br />
              {company.bank}
              <br />
              a/s {company.iban}
              <br />
              S.W.I.F.T. {company.swift}
            </p>
          </div>
        </div>
      </section>
      <iframe
        title="Žemėlapis"
        className="map-embed h-[380px] w-full border-0 grayscale"
        loading="lazy"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&z=13&output=embed`}
      />
    </div>
  );
}
